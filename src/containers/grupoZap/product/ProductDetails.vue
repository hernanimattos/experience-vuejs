<template>
	<div class="product-details">
		<h1>Product Details</h1>
		<Card
			v-if="productDetails['images']"
			:image="productDetails.images"
		/>
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapActions, mapState } = createNamespacedHelpers('grupoZap');
import Card from '../../../components/ui/Card';
export default {
	name: 'ProductsDetails',
	computed: {
		...mapState(['productDetails'])
	},
	methods: {
		...mapActions(['getProductById'])
	},
	created() {
		const { id } = this.$route.params;
		if (id) {
			this.getProductById(id);
		}
	},
	components: {
		Card
	}
};
</script>

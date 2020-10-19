<template>
	<div class="product-details">
		<Card
			v-if="productDetails && productDetails['images']"
			:image="productDetails.images"
			:businessType="productDetails.pricingInfos.businessType"
			:bethrooms="productDetails.bathrooms"
			:bedrooms="productDetails.bedrooms"
			:parkingSpaces="productDetails.parkingSpaces"
			:monthlyCondoFee="productDetails.pricingInfos.monthlyCondoFee"
			:salePrice="productDetails.pricingInfos.price"
			:iptu="productDetails.pricingInfos.yearlyIptu"
			:usableAreas="productDetails.usableAreas"
			:city="productDetails.address.city"
			:neighborhood="productDetails.address.neighborhood"
		/>
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapActions, mapState, mapGetters } = createNamespacedHelpers(
	'grupoZap'
);
import Card from '../../../../components/ui/Card';
export default {
	name: 'ProductDetails',
	watch: {
		// eslint-disable-next-line
		filterZapGroupProducts: {
			handler() {
				const { id } = this.$route.params;
				if (id) {
					this.getProductById(id).then(() => {});
				}
			},
			deep: true
		}
	},
	computed: {
		...mapState(['productDetails']),
		...mapGetters(['filterZapGroupProducts'])
	},
	methods: {
		...mapActions(['getProductById'])
	},
	created() {
		const { id } = this.$route.params;
		if (id) {
			this.getProductById(id).then(() => {});
		}
	},
	components: {
		Card
	}
};
</script>

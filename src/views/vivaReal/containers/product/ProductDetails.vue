<template>
	<div class="product-details">
		<span>Imovel para alugar</span>
		<Card
			v-if="productDetails && productDetails.id"
			:image="productDetails.images"
			:productId="productDetails.id"
			:businessType="productDetails.pricingInfos.businessType"
			:bethrooms="productDetails.bathrooms"
			:bedrooms="productDetails.bedrooms"
			:parkingSpaces="productDetails.parkingSpaces"
			:rentalPrice="productDetails.pricingInfos.rentalTotalPrice"
			:monthlyCondoFee="productDetails.pricingInfos.monthlyCondoFee"
			:iptu="productDetails.pricingInfos.yearlyIptu"
			:usableAreas="productDetails.usableAreas"
			:city="productDetails.address.city"
			:neighborhood="productDetails.address.neighborhood"
		/>
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapGetters, mapActions, mapState } = createNamespacedHelpers(
	'vivaReal'
);
import Card from '../../../../components/ui/Card';
export default {
	name: 'ProductDetails',
	watch: {
		// eslint-disable-next-line
		filterVivaRealProducts: {
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
		...mapGetters(['filterVivaRealProducts'])
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

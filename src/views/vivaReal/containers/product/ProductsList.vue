<template>
	<div class="products-list">
		<Card
			v-for="prod in paginate[page]"
			:key="prod.id"
			:image="prod.images"
			:productId="prod.id"
			:businessType="prod.pricingInfos.businessType"
			:bethrooms="prod.bathrooms"
			:bedrooms="prod.bedrooms"
			:parkingSpaces="prod.parkingSpaces"
			:rentalPrice="prod.pricingInfos.rentalTotalPrice"
			:monthlyCondoFee="prod.pricingInfos.monthlyCondoFee"
			:iptu="prod.pricingInfos.yearlyIptu"
			:usableAreas="prod.usableAreas"
			:city="prod.address.city"
			:neighborhood="prod.address.neighborhood"
			:redirect="'vivareal:details'"
			:brand="prod['vivaReal']|| prod['grupoZap']"
			show
		/>
		<div class="pagination">
			<button
				class="btn"
				@click="prev"
				:disabled="page == 0"
			>
				ver menos
			</button>
			<button
				class="btn"
				@click="next"
				:disabled="page == paginate.length-1"
			>
				ver mais
			</button>
		</div>
	</div>

</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapGetters } = createNamespacedHelpers('vivaReal');
import Card from '../../../../components/ui/Card';
export default {
	data() {
		return {
			page: 0,
			disabled: false
		};
	},
	computed: {
		...mapGetters(['paginate'])
	},
	methods: {
		prev() {
			this.page--;
		},
		next() {
			if (this.paginate.length - 1 == this.page) {
				return;
			}
			this.page++;
		}
	},
	components: {
		Card
	}
};
</script>



<template>
	<div class="products-list">
		<Card
			v-for="prod in paginate[page]"
			:key="prod.id"
			:title="prod.listingStatus"
			:image="prod.images"
			:productId="prod.id"
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
const { mapGetters } = createNamespacedHelpers('grupoZap');
import Card from '../../../components/ui/Card';
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
				console.log('this.page');
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

<style>
.pagination {
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	min-height: 3rem;
	background-color: blanchedalmond;
}
</style>

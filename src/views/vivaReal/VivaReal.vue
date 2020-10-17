<template>
	<div class="viva-real">
		<router-view></router-view>
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapGetters } = createNamespacedHelpers('vivaReal');
export default {
	name: 'VivaReal',
	computed: {
		...mapGetters(['filterVivaRealProducts'])
	}
};
</script>

<template>
  <div class="viva-real">
    <h1>Viva real</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapGetters } = createNamespacedHelpers('vivaReal');
export default {
  name:'VivaReal',
  computed: {
    ...mapGetters(['filterVivaRealProducts'])
  },
  created(){
    console.log(this.filterVivaRealProducts)
  }
}
</script>

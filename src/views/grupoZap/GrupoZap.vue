<template>
  <div class="grupo-zap">
    <h1>Grupo zap</h1>
    <ProductsList :products="filterZapGroupProducts"/>
    <router-view></router-view>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapGetters } = createNamespacedHelpers('grupoZap');
import ProductsList from "../../components/containers/product/ProductsList";
export default {
  name:'GrupoZap',
  computed: {
    ...mapState(['products']),
    ...mapGetters(['filterZapGroupProducts'])
  },
  created(){
    console.log(this.filterZapGroupProducts)
  },
  components: {
    ProductsList
  }
}
</script>

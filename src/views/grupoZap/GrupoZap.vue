<template>
  <div class="grupo-zap">
    <h1>Grupo zap</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('grupoZap');
export default {
  name:'GrupoZap',
  computed: {
    ...mapState(['products']),
    ...mapGetters(['teste'])
  },
  created(){
    console.log(this.teste)
  }
}
</script>

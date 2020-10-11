<template>
  <div class="home">
  teste
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Home',
  methods: {
		...mapActions(['getAllProducts']),
  },
  created() {
    this.getAllProducts()
  }
}
</script>

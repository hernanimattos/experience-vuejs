<template>
  <div class="products-list">
    <Card
    v-for="(prod, index) in products"
    :key="prod.id"
    :title="prod.listingStatus"
    :image="prod.images"
    :id="index"
    />
  </div>
</template>

<script>
import Card from "../../ui/Card";
export default {
  name:'ProductsList',
  components: {
    Card
  },
  props: {
    products: {
      type: Array
    },
  },
  created(){
    console.log(this.products)
  }

};
</script>

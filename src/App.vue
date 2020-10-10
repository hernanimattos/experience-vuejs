<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/header/Header";
export default {
  name:'App',
  components: {
    Header
  }
}
</script>

<style >
.viva-real {
  background-color: red;
}
.grupo-zap {
  background-color:blue;
}

</style>


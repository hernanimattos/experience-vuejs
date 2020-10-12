<template>
  <article class="card">
    <picture class="card-img">
      <div class="img-wrapper" >
        <img v-for="(img, i) in image" :src="img" :key="i">
      </div>
    </picture>
    <h1>{{title}}</h1>
  </article>
</template>

<script>

export default {
  name:'Card',
  data() {
    return {

    }
  },
  methods: {
  },
  props: {
    image: {
      type: Array,
    },
    title: {
      type: String,
    },
    id: {
      type: [Number, String]
    }
  }
};
</script>

<style>
.card {
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.32);
  -webkit-box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.32);
  margin-top: 1rem;
  overflow: hidden;
  padding: 1rem;
  transition: 0.5s;
}
.card-img {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: row;
}
.img-wrapper > img {
  margin-top: 1rem;
  width: 100%;
  height: 400px;
  object-fit: cover;
}
.control-slide{
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 50%;
}
.left,
.right{
  cursor: pointer;
}
.img-wrapper{
  display: flex
}

</style>

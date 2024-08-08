<template lang="html">
  <div class="card-component" @click="viewProduct">
      <img class="card-img" :src="img" :alt="title">
      <h2> {{title}} </h2>
      <p class="brand">{{ brand }}</p>
      <!-- <button class="gramaj" @click="selectOption('200ml')">200ml</button>
      <button class="gramaj" @click="selectOption('400ml')">400ml</button>  -->
      <h2>{{ price }} Lei</h2>
  </div>
</template>

<script>

export default {
  name: 'ProductCard',
  props: {
  title: String,
  price: Number,
  img: String,
  brand: String ,
  id: Number},

  methods: {
    viewProduct() {
      console.log('Navigating to:', `/product/${this.id}`);
      this.$router.push(`/product/${this.id}`);
    } }

  // data() {
  //   return {
  //     products: []
  //   };
  // },


 
// data() {
//   return {
//     selectedOption: '200ml', 
//   };
// },
// methods: {
//   selectOption(option) {
//     this.selectedOption = option;
//   },
// },
// computed: {
//   computedPrice() {
//     if (this.selectedOption === '200ml') {
//       return this.price;
//     } else if (this.selectedOption === '400ml') {
//       return this.price * 2; 
//     }
//     return this.price; 
//   },
// },
};
</script>

<style lang="css">
.card-component {
  font-family: "Poiret One", sans-serif;
  font-size: 13px;
  line-height: 10px;
  width: 250px;
  height: 300px;
  border: 3px ridge grey;
  border-radius: 4%;
  text-align: center;
  box-sizing: border-box;
  margin-top: 30px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);}
.card-component:hover {
      transform:scale(1.03);}
.card-img {
      width: 130px;
      height: 130px;
      margin-top: 20px; }
.brand {
  color: grey;
 }
</style>
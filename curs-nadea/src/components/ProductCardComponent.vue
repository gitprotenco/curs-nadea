<template lang="html">
  <div class="card-component" @click="viewProduct">
      <img class="card-img" :src="img" :alt="title">
      <h3> {{title}} </h3>
      <p class="brand">{{ brand }}</p>
      <p class="rating">{{ rating }}</p>
      <h2 class="price">{{ price }} MDL</h2>
      
      <button @click="addToCart(product)">Adaugă în coș</button>

  </div>
</template>

<script>

export default {
  name: 'ProductCard',
  props: {
  title: String,
  price: Number,
  img: String,
  rating: String,
  brand: String ,
  category: String,
  id: Number},

  methods: {
    viewProduct() {
      console.log('Navigating to:', `/product/${this.id}`);
      this.$router.push(`/product/${this.id}`);
    },
    addToCart(product) {
      console.log(`Produs adăugat în coș:`, product);
    } },
};
</script>

<style lang="css" scoped>
.card-component {
  font-family: "Poiret One", sans-serif;
  font-size: 13px;
  line-height: 10px;
  width: 250px;
  height: 300px;
  border: 3px ridge rgb(190, 186, 186);
  border-radius: 2%;
  text-align: center;
  box-sizing: border-box;
  margin-top: 30px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 4px 8px rgba(81, 80, 80, 0.2);}

.card-component:hover {
      transform:scale(1.03);
     }
.card-img {
      width: 130px;
      height: 130px;
      margin-top: 20px; }
.brand {
  margin-top: 20px;
  color: grey;
 }
.price{
  margin-top:20px;
 }
</style>
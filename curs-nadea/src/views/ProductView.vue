<template>
  <div>
    <div class="container">
      <div class="column">
          <img class="product-img" :src="product.img">
      </div>
     <div class="column info-column">
      <h1 class="product-title">{{ product.title }}</h1>
      <h2>{{ product.title }}</h2>
      <p>{{ product.brand }}</p>
      <p>{{ product.price }} Lei</p>

     </div>
      <!-- <h2>{{ product.title }}</h2>
      <p>{{ product.brand }}</p>
      <p>{{ product.price }} Lei</p> -->

    </div>
  </div>

</template>
<script>
import axios from 'axios';

export default {
  name: 'ProductView',

  data() {
    return { product: {}, 
    // productid: null 
  }; },

  created() {
    this.idProdus = this.$route.params.id;
    console.log('Product ID:', this.idProdus);
    axios.get(`http://localhost:3000/products/${this.idProdus}`)
      .then(response => {
        this.product = response.data;
        console.log('Product data:', this.product);
      })
      .catch(error => {
        console.error('There was an error fetching the product details:', error);
      });
  }
};
  
</script> 

<style lang="css" scoped>
.product-img {
  height: 250px;
  width: 250px;
}

</style>
<template>
 <div class="carduri-produse">
  <ProductCard
    v-for="product in products"
    :key="product.id"
    :title="product.title"
    :price="product.price"
    :img="product.img"
    :brand="product.brand"
    :id="idProduct"/>
</div>
</template>

<script>
import ProductCard from '../components/ProductCardComponent.vue';
import api from '../api.js';



export default {
  name: 'HomeView',
  components: {ProductCard},

  data () {
    return { products: [] };
  },
  created() {
    api.get('/products')
      .then(response => {
        this.products = response.data;
        console.log('Products fetched:', this.products);
        })
        .catch(error => {
          console.error('There was an error fetching the products:', error);
  })
  }
}
</script>

<style lang="css">
nav {
  display: flex;
  gap: 10px;
}
</style>



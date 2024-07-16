<template>
<div>pag  acasa</div>
</template>


<script>

import ProductCard from "./components/ProductCardComponent.vue"

export default class HomeView extends Vue {



export default {
  components: {
    ProductCard, },

  data() {
    return {
      products: [
        {id: 0, 
        title:'Mască regeneratoare',
        price: '200',
        img: 'https://i.makeup.md/6/6t/6tfyn3bdegkr.jpg' },

        {id: 1, 
        title:'Mască hidratantă', 
        price: '200',
        img: 'https://licilasicdn.s3.amazonaws.com/public/product_images/39496/main/original.jpg'},

        {id: 2, 
        title:'Mască păr uscat',
        price: '300',
        img: 'https://i.makeup.md/c/c5/c5s7jacaezx0.jpg'},

        {id: 3, 
        title:'Mască păr blond', 
        price: '300',
        img: 'https://m.media-amazon.com/images/I/71NDyeo3vBL._AC_UF1000,1000_QL80_.jpg'}
      ]
    }
  },
}
}
</script>

<style lang="css">
.carduri-produse{
  display: flex;
  justify-content: center;
  gap: 20px; }
  
</style>

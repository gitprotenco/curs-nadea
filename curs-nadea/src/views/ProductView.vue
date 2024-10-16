<template>
   <div class="container">
    <div class="column1">
      <h2>{{ product.title }}</h2>
      <p>{{ product.brand }}</p>
      <p>{{ product.rating }}</p>
    </div>
    
    <div class="column2">
      <img :src="product.img" class="product-img" alt="Imagine produs">
    </div>

    <div class="column3">
      <p v-if="product.category === 'păr'">Selectează cantitatea:</p>
       <button v-if="product.category === 'păr'" class="gramaj" @click="selectOption('200ml')">200ml</button>
      <button v-if="product.category === 'păr'" class="gramaj" @click="selectOption('400ml')">400ml</button> 
      <h3>{{ computedPrice }} MDL </h3>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'ProductView',

 data() {
  return {
    product: {},
    selectedOption: '200ml', 
  };
},

methods: {
  selectOption(option) {
    this.selectedOption = option;
  },
},

computed: {
  computedPrice() {
    if (this.product.price) {
       if (this.selectedOption   == '200ml') {
           return this.product.price;
    } else if (this.selectedOption === '400ml') {
           return this.product.price * 2; 
      }
    }
    return 0;
  },
},

  created() {
    this.productid= this.$route.params.id;

    
    console.log('Product ID:', this.productid);
    axios.get(`http://localhost:3000/products/${this.productid}`)
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

.container {
  display: flex;
  justify-content:space-between;
  padding: 10px;
  font-family: "Poiret One", sans-serif;
  align-items: center;
  width: 100%;
}

.product-img{
  max-width: 350px; /* Imaginea are o lățime maximă de 350px */
  max-height: 350px; /* Înălțime maximă de 350px */
  object-fit: contain; 
  /* display: flex;
  align-items: center;
  justify-content: center;
  width:350px;
  height: 350px; */
}
.column1 p,  .column3 p{
  color: grey;
}

.column1 {
  flex-basis: 30%; /* Rezervă 30% din lățime pentru coloană */
  margin-left: 50px;
  /* margin-top: 160px;
  margin-left: 150px; */
}

.column2 {
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-basis: 40%; /* Alocă o proporție pentru imagine */
  text-align: center;
  /* flex: 1; 
  margin-top: 50px; */
}

.column3 {
  flex-basis: 30%; /* Alocă 30% pentru a treia coloană */
  margin-right: 50px; /* Ajustează marginea dreaptă */
  text-align: left;
  /* margin-top: 150px;
  margin-left: 100px;  */
}

.column3 button {
  width: 140px;
  height: 50px;
}
</style>
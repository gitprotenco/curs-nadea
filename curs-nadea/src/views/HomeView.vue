<template>
<div class="categories">
  <button class="sort-button" @click="filterCategory('toate')"><b>Toate</b></button>
  <button class="sort-button" @click="filterCategory('parfumuri')"><b>Parfumuri</b></button>
  <button class="sort-button" @click="filterCategory('față')"><b>Față</b></button>
  <button class="sort-button" @click="filterCategory('păr')"><b>Păr</b></button>
  <button class="sort-button" @click="filterCategory('machiaj')"><b>Machiaj</b></button>
  <button class="sort-button" @click="filterCategory('baie și corp')"><b>Baie și Corp</b></button>
  <button class="sort-button" @click="filterCategory('care')"><b>Health & Care</b></button>
</div>
 
  <div>
    <div class="slider">
      <button class="arrow left-arrow" @click="prevSlide">⟨</button>
         <div v-for="(slide, index) in slides" 
          :key="slide.id"  class="slide" :class="{ active: currentSlide === index }"
          @click="goToSlideView(index)">

         <img :src="slide.img" alt="Slide Image" class="slide-img" />
         <div class="slide-text">
        </div>
      </div>
      <button class="arrow right-arrow" @click="nextSlide">⟩</button>
    </div>

     <div class="carduri-produse">
   <ProductCard
    v-for="product in filteredProducts"
    :key="product.id"
    :title="product.title"
    :price="product.price"
    :img="product.img"
    :rating="product.rating"
    :brand="product.brand"
    :category="product.category"
    :id="product.id"
    @add-to-cart="addToCart"/>   
       </div>
  </div>

  <div class="shopping-cart">
      <!-- <h2>Shopping Cart</h2> -->
      <div v-if="cart.length > 0">
        <div v-for="(item, index) in cart" :key="index" class="cart-item">
          <p>{{ item.title }} - {{ item.price }} MDL x {{ item.quantity }}</p>
          <button @click="increaseQuantity(index)">+</button>
          <button @click="decreaseQuantity(index)">-</button>
        </div>
        <h3>Total: {{ totalPrice }} MDL</h3>
      </div>
      <!-- <p v-else>Your cart is empty</p> -->
    </div>
</template>

<script>
import ProductCard from '../components/ProductCardComponent.vue';
import api from '../api.js';
import { slides } from '../data/SlidesData.js'; 


export default {
  name: 'HomeView',
  components: {ProductCard,
  },

  data () {
    return { 
      products: [] ,
      filteredProducts: [],
      slides: slides,
      currentSlide: 0,
      selectedCategory: 'toate',
      cart:[]
      
    };
  },
  created() {
    api.get('/products')
      .then(response => {
        this.products = response.data;
        this.filteredProducts = this.products;
        console.log('Products fetched:', this.products);
        })
        .catch(error => {
          console.error('There was an error fetching the products:', error);
  });
  this.startSlideShow();
  },

  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },

  methods: {
    startSlideShow() {
      setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }, 3000);
     
    },
    addToCart(product) {
      console.log('Produsul a fost adăugat în coș:', product);
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },

    goToSlideView(index) {
    console.log('Navigating to slide index:', index + 1);
    this.$router.push(`/slide/${index + 1}`); 
    },
    
    filterCategory(category) {
      this.selectedCategory = category;
      if (category === 'toate') {
        this.filteredProducts = this.products;
      } else {
        console.log('Categoria selectată:', category);
        this.filteredProducts = this.products.filter(
          (product) => product.category === category
        );
        console.log('Produsele filtrate:', this.filteredProducts);
      } 
    },
  },
};

</script>

<style lang="css" scoped>
.shopping-cart {
  margin-top: 20px;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.categories {
  justify-content: center;
  flex-grow: 1; 
  align-items: center;
  display: flex;
  gap: 60px;
  margin-right: 25px;
  margin-top: 20px;
  border: none;
}
.sort-button{
  margin-right: 30px;
  background: none;
  border: none;
  color: rgb(63, 61, 61);
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  font-family: "Poiret One", sans-serif;
  
}

.slide.active {
  opacity: 1;
  pointer-events: auto;
}

.slider {
  margin-top: 5px;
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  display: flex; 
  justify-content: center; 
  z-index: 1;
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 2.3s ease-in-out; 
  pointer-events: none;
}

.slide-img {
  width: 80%;
  height: 90%;
  margin-left: 150px;
  margin-top: 30px;
  display: block; 
}

.slide-text {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: rgb(18, 14, 14);
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.7); 
}

.carduri-produse {
  display: flex;
  flex-wrap: wrap; 
  justify-content:center; 
  gap: 10px;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: rgb(61, 61, 61);
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 24px;
  z-index: 10;
}

.left-arrow {
  left: 150px;
}

.right-arrow {
  right: 150px;
}
</style>



  <template lang="html">
    <div class="header">
      <div class="top">
        <p class="info">Livrare gratuita de la 385 MDL ! </p>
          <div class="routes">
             <router-link to="/acasa" class="route-acasa">Acasa</router-link>
             <router-link to="/livrare" class="route-livrare">Livrare</router-link>
             <router-link to="/about" class="route-despre">Despre Magazin</router-link>
             <!-- Optiuni de limba -->
          </div>  
      </div>

      <hr class="linie">
      <router-link to="/acasa" class="logo-container"> </router-link>

      <div class="middle-top">
        
        <div class="search-icon-container">
          <div>
      <img v-if="!showSearchBar"
      src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
      alt="Search Icon"
      class="search-icon"
      @click="toggleSearchBar"/>
        </div>  
    </div>

     <div v-if="showSearchBar" class="search-container">
    <input
      type="text"
      v-model="searchQuery"
      @input="searchProducts"
      @keyup.enter="handleSearchEnter" 
      placeholder="Căutare produse..."
      class="search-bar"
      ref="searchInput" />

    <button @click="toggleSearchBar" class="close-search-btn">✖</button>
    </div>
    <ul v-if="suggestedProducts.length" class="suggestions">
      <li
        v-for="(product, index) in suggestedProducts"
        :key="index"
        @click="selectProduct(product)"
        class="suggestion-item">
        {{ product.title }}
      </li>
    </ul>

        <div class="logo-container">
          <img class="logo-img" :src="require('@/assets/Logo.png')" alt="Logo Image" @click="goToHomePage">
            </div>
        <div class="user-icon-container">
          <img class="user-icon" @click="showLoginModal" src="https://cdn-icons-png.flaticon.com/512/5087/5087592.png" alt="user icon">
        </div>

        <div class="cart-icon-container">
        <div>
        <img class="cart-icon" 
        @click="toggleCart"
        src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/shopping-bag-icon.png"
        alt="Cart Icon">
      </div>
      
  <div v-if="showCart" class="cart-modal">
    <div :class="['cart-modal', { show: showCart }]"></div>
    <ul class="cart-items">
      <li v-if="cart.length === 0">Coșul este gol</li>
      <li v-for="item in cart" :key="item.id">
        <span>{{ item.title }} - {{ item.price }} MDL x {{ item.quantity }}</span>
        <button @click="increaseQuantity(item)">+</button>
        <button @click="decreaseQuantity(item)">-</button>
        <button @click="removeFromCart(item)">Remove</button>
      </li>
    </ul>
    <h3>Total: {{ calculateTotal() }} MDL</h3>
    <button @click="checkout">Checkout</button>
    <button @click="showCart = false">Close</button>
  </div>
</div> 

          <div v-if="showModal" class="modal" @click="closeModal">
          <div ref="modalContent" class="modal-content" @click.stop >
          <h2>Logare</h2>
          <input class="email" type="email" placeholder="Email" v-model="email">
          <input class="password" type="password" placeholder="Password" v-model="password">
          <button @click="login">Autentificare</button>
          <h4>Sau</h4>
          <button @click="loginWithGoogle" class="google-login">Login cu Google</button>
          <button @click="loginWithApple" class="apple-login">Login cu Apple</button>
          <button @click="closeModal">Închide</button>
          </div>
        </div>
      </div>
    </div>
   
    <hr class="linie">
  <router-view></router-view>

  <footer class="footer">
    <h4>MAKEUP™.   BEAUTY WITHOUT LIMITS</h4>
    <h5>2019-2024</h5>
  </footer>

  </template>

  <script>
  import api from './api';

    export default {
    name: 'App',
    data() {
      return {
        products:[],
        showModal: false,
        email: '',
        password: '',
        filteredProducts: [],
        searchQuery: '', 
        suggestedProducts: [],
        showSearchBar: false,
        cart: [], 
        showCart: false,
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
  },
    methods: {
      goToHomePage() {
      this.$router.push('/acasa');
    },
      showLoginModal() {
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
        this.resetForm();
      },
      resetForm() {
        this.email = '';
        this.password = '';
      },
      login() {
        console.log('Login cu email:', this.email, 'și parola:', this.password);
      },
      loginWithGoogle() {
        console.log('Login cu Google');
      },
      loginWithApple() {
        console.log('Login cu Apple');
      },

   toggleSearchBar() {
      this.showSearchBar = !this.showSearchBar; 
      this.$nextTick(() => {
        if (this.showSearchBar) {
          this.$refs.searchInput.focus(); 
        } else {
        this.removeClickOutsideListener();
      }
      });
    },

    toggleCart() {
  this.showCart = !this.showCart;
},

    addToCart(product) {
    const cartItem = this.cart.find(item => item.id === product.id);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 }); 
    }
    console.log("Produs adăugat în coș:", this.cart);  
  },
  increaseQuantity(item) {
    item.quantity += 1;
  },

  
  decreaseQuantity(item) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      this.removeFromCart(item);
    }
  },

 
  removeFromCart(item) {
    this.cart = this.cart.filter(cartItem => cartItem.id !== item.id);
  },

 
  calculateTotal() {
    return this.cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  },
},
checkout() {
    this.$router.push('/checkout'); 
  },

    searchProducts() {
  console.log("Searching for:", this.searchQuery);
  const query = this.searchQuery.toLowerCase();
  if (query === '') {
    this.suggestedProducts = [];
    this.filteredProducts = this.products;
  } else {
    this.suggestedProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(query) || 
      product.category.toLowerCase().includes(query)
    );
    console.log("Filtered products:", this.suggestedProducts);
    this.filteredProducts = this.suggestedProducts;
  }
},
   
    selectProduct(product) {
      this.searchQuery = product.title; 
      this.suggestedProducts = []; 
      this.filteredProducts = [product]; 
      this.$router.push(`/product/${product.id}`);
      this.removeClickOutsideListener();
    },

handleSearchEnter() {
  this.searchProducts();
},
    
    handleClickOutside(event) {
      const searchBar = this.$refs.searchBar;
      if (!searchBar.contains(event.target)) {
        this.showSearchBar = false; 
        this.removeClickOutsideListener();
      }
    },
    attachClickOutsideListener() {
      document.addEventListener('click', this.handleClickOutside);
    },
    removeClickOutsideListener() {
      document.removeEventListener('click', this.handleClickOutside);
    },
  beforeUnmount() {
    this.removeClickOutsideListener(); 
  },}

  </script>

  <style lang="css" scoped>
  .cart-modal {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  padding: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.cart-modal.show {
  transform: translateX(0);
}

.cart-items {
  list-style: none;
  padding: 0;
}

.cart-items li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.cart-items li button {
  margin-left: 5px;
}

h3 {
  margin-top: auto; 
}
  .cart-icon-container {
  position: absolute;
  right: 10px;
  color: rgb(106, 7, 7);

}
  .cart-icon{
  cursor: pointer;
  transition: filter 0.3s ease; 
  color: rgb(106, 7, 7);
  margin-right: 10px;
  width: 33px;
  height: 33px;
  }
  .cart-icon:hover {
  filter: brightness(2.0); 
  transform:scale(1.03);
  }
.header {
  font-family: "Poiret One", sans-serif;
}
.top {
  display: flex;
  top: 2px;
  justify-content: space-between;
}
.info {
  margin-left: 30px;
  font-size: 14px;
  color: #000000;
}
.routes {
  justify-content: center;
  flex-grow: 1; 
  align-items: center;
  display: flex;
  gap: 40px;
  margin-right: 230px;
}
.route-acasa, .route-livrare, .route-despre {
  color: rgb(45, 67, 103);
  text-decoration: none;
  font-size: 15px;
}
.linie {
  margin-top:3px;
  border-top: 0.5px solid rgb(213, 212, 212);
}
.middle-top {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #ffffff;
  padding: 10px 30px; 
}
.logo-img {
  width: 240px;
  height: 100px;
  display: block; 
  margin-top: -5px;
  margin-bottom: px;
  
}
.logo-container {
  flex: 0 0 auto; 
  text-align: center;
}
.user-icon-container {
  position: absolute;
  right: 30px;
}
.user-icon{
  cursor: pointer;
  transition: filter 0.3s ease; 
  color: #000000;
  margin-right: 30px;
  width: 45px;
  height: 45px;
  }
.user-icon:hover {
  filter: brightness(2.0); 
  transform:scale(1.03);
  }
 .search-icon {    
  width: 28px;
  height: 28px;
  cursor: pointer;
 align-items: center;
  margin-right: 10px;
}
.search-container {
  position: absolute;
  left: 30px;
  top: 0; 
  display: flex;
  align-items: center;
}
.search-icon-container {
  position: absolute;
  left: 30px; 
 
}

.search-bar {
  width: 500px;
  height: 30px;
  margin-left: 10px;
  margin-top: 45px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: 0.5s ease;
  padding: 5px;
}


.close-search-btn {
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #888;
  margin-left: 10px;
  margin-top: 40px;
}

.suggestions {
  list-style-type: none;
  padding: 0;
  margin-top: 300px; 
  max-height: 200px;
  overflow-y: auto; 
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white; 
  position: absolute; 
  z-index: 5; 
  width: 100%; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
}

.suggestion-item {
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.suggestion-item:hover {
  background-color: #f0f0f0;
}

.carduri-produse{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px; }

.modal {
    font-family: "Poiret One", sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

.modal-content {
    background: rgb(255, 255, 255);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 300px;
  }

.modal-content input {
    width: 85%;
    padding: 10px;
    margin: 10px;
  }

.modal-content button {
    margin-top: 10px;
    width: 93%;
    padding: 10px;
  }

.google-login {
    background-color: #4285F4;
    color: white;
  }

.apple-login {
    background-color: black;
    color: white;
  }

.footer {
    font-family: "Poiret One", sans-serif;
    margin-top: 50px;
    margin-bottom: none;
    padding-left: 30px;
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(216, 216, 216);
    height: auto;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
    color: rgb(49, 48, 48);
  }  
  </style>
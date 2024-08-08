<template>
    <div id="container">
        <form id="addProduct" @submit.prevent="sendProduct">
            <input type="number" name="id" placeholder="Id Produs" v-model="id">
            <input type="text" name="title" placeholder="Titlu Produs" v-model="title">
            <input type="number" name="price" placeholder="Pret Produs" v-model="price">
            <input type="text" name="brand" placeholder="Brand Produs" v-model="brand">
            <input type="text" name="img" placeholder="Imagine Produs" v-model="img">
            <input type="submit">
        </form>
    </div>
 <div>
    <form id="updateProduct" @submit.prevent="updateProduct">
        <input type="number" name="id" placeholder="Id Produs">
        <input type="submit">
    </form>
 </div>   
</template>

<script>
import axios from 'axios';

export default {
  name: 'AddProductView',

  methods: {
    sendProduct()   {
       axios.post('http://localhost:3000/products', {
        "id": this.id, 
        "title": this.title, 
        "price": this.price,
        "brand": this.brand,
        "img": this.img
      });
      alert('Produs trimis !');
      this.$router.push('/acasa');
     }
    },

  data() {
    return {
        id: null,
        title: null,
        price: null,
        brand: null,
        img: null
         
    }
}

}
</script>

<style lang="css" scoped>
#container {
    justify-content: center;
    display: flex;
    width: 100%;
    margin-top: 50px;;
}
#addProduct{
    width: 300px;
    height: auto;
    padding: 20px;
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 12px;
    border: 2px solid black;
}

#addProduct input {
    width: 100%;
    height: 40px;
    border-radius: 3px;
    border: 1px solid black;
}
#addProduct input::placeholder {
    padding-left: 15px;
}
</style>
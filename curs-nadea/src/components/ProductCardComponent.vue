<template lang="html">
  <div class="card-component">
      <img class="card-img" :src="img" :alt="title">
      <h2> {{title}} </h2>
      <button class="gramaj" @click="selectOption('200ml')">200ml</button>
      <button class="gramaj" @click="selectOption('400ml')">400ml</button> 
      <h2>{{ computedPrice }} Lei</h2>
  </div>
</template>


<script>

export default {
props: {
  title: String,
  price: Number,
  img: String },
 
data() {
  return {
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
    if (this.selectedOption === '200ml') {
      return this.price;
    } else if (this.selectedOption === '400ml') {
      return this.price * 2; 
    }
    return this.price; 
  },
},
};


</script>


<style lang="css">

.card-component {
  width: 300px;
  height: 400px;
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
      width: 150px;
      height: 150px;
      margin-top: 40px; }
  .gramaj {
      width:100px;
      height: 50px;
      margin-left: 10px; }  
</style>
<template lang="html">
  <header class="header">
    <img class="logo-img" src="https://images.vexels.com/media/users/3/211753/isolated/preview/66f8cae1cdeb029a6e93200b5768c38a-bathroom-label-makeup-icon.png">
    <h4 class="info">Livrare gratuita de la 385 MDL ! </h4>

   <router-link to="/home" class="buton-acasa">Acasa</router-link>

   <router-link to="/about" class="buton-despre">Despre Magazin</router-link>

</header>
<router-view></router-view>

</template>

<script>
export default {
  name: 'App'}
</script>

<style lang="css" scoped>
.logo-img{
  width:90px;
  height:90px;
  margin-bottom:15px;
}

.info {
  margin-left: 30px;
}

.header{
  font-family: "Poiret One", sans-serif;
  padding-left: 30px;
  display:flex;
  align-items: center;
  background-color: rgb(216, 216, 216);
  height: 65px;}

  .buton-acasa{
    color:rgb(45, 67, 103);
    margin-left: 750px;}

  .buton-despre{
    color:rgb(45, 67, 103);
    margin-left: 45px; }

    .carduri-produse{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px; }
 


 </style>
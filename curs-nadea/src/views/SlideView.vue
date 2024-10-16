<template>
    <div class="container">
       <img class="img" v-if="slide" :src="slide.imgad" alt="Ad Image" />
         <div class="text-content">
           <h2 class="title">Promoție de la {{ slide.title }}</h2>  
             <p class="descriere" v-if="slide">{{ slide.description }}</p>
             <p class="comentariu">
                **la dublarea sumei în comandă, numărul de cadouri nu se multiplică</p>
      </div>
    </div>   
  </template>
  
  <script>
  import { slides } from '../data/SlidesData.js'; 
  
  export default {
    name: 'SlideView',
    data() {
      return {
        slide: {},
      };
    },
    created() {
      const slideId = Number(this.$route.params.id); 
      this.slide = slides.find(slide => slide.id == slideId);
      console.log(this.slide);
    },
  };
  </script>

  <style lang="css" scoped>
.container {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  padding: 50px;
  font-family: "Poiret One", sans-serif;
}

.img {
  width: 400px;
  margin-top: 40px;
  margin-left: 210px;
  border-radius: 2%;
  box-shadow: 0 4px 8px rgba(81, 80, 80, 0.2);
}

.text-content {
  padding: 130px;
  text-align: center;
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
}

.descriere {
  font-size: 18px;
  line-height: 1.6;
}

.comentariu {
    font-size: 16px;
  color: #9d9d9d;  
  margin-top: 20px;
}

</style>
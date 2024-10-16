<template>
  <div class="livrare">
    <h2>Noi livrăm fericire. Gratuit!</h2>
    <h2>2 metode de livrare</h2>
  </div>
    <br>
    <div class="metode-livrare">
    <div class="fan-courier">
      <img  src="https://images.squarespace-cdn.com/content/v1/5970f00b1b631bdb724b8837/1501282286126-9HSJDXISRPSO07T8X0FP/Fan+Courier+02.png?format=1500w">
      <p>Livrare gratuită, în decurs de 5-7 zile lucrătoare, de la 385 MDL. 
        Pentru comenzile cu o valoare mai mică - costul livrării 38 MDL.
        Atenție! Se efectuează 2 tentative de livrare, în cazul în care ambele eșuează coletul urmează a fi returnat în Polonia!</p>
    </div>
    <div class="nova-poshta">
      <img  src="https://www.drupal.org/files/project-images/2283_nova-poshta-ltd_1426768058_resized.png">     
      <p>19 puncte de ridicare a comenzilor.
        Livrare gratuită, în decurs de 5-7 zile lucrătoare, de la 385 MDL. 
        Pentru comenzile cu o valoare mai mică - costul livrării 35 MDL.</p>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'LivrareView'
}
</script>

<style lang="css" scoped>

   .livrare {
    text-align: center;
    font-family: "Poiret One", sans-serif;
   }
   .metode-livrare {
    font-family: "Poiret One", sans-serif;
    align-items: center;
    display: flex;
    text-align:center;
    gap: 50px;
    justify-content: center;
   }

   .fan-courier img {
    width: 200px;
    height: 200px;
    margin-top: -25px;
   }
  .nova-poshta img {
    width: 150px;
    height: 150px;
    margin-bottom: 21px;
  } 

  .metode-livrare p {
    color: grey;
  }

  .fan-courier{
    width: 300px;
    height: 350px;
    border: 2px solid black;
    border-radius: 10%;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  .nova-poshta {
    width: 300px;
    height: 350px;
    border: 2px solid black;
    border-radius: 10%;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .fan-courier:hover {
    transform:scale(1.03);}

  .nova-poshta:hover {
    transform:scale(1.03);}


</style>
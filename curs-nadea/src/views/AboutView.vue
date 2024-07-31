<template>
  <div  class="despre-container">
    <div class=text-content>
      <h2>Frumusețe fără hotare</h2>
      <p>Bine ai venit în lumea fascinantă MAKEUP! Site-ul care este vizitat anual de peste 340 de milioane de clienți din diferite țări, cu peste 50 de milioane de produse achiziționate.
Credem că frumusețea nu are granițe și nici bariere, motiv pentru care oferim acces la o varietate nesfârșită de produse și servicii pentru toți amatorii de produse beauty.
Scopul nostru este să-ți oferim exact ceea de ce ai nevoie, și poate chiar mai mult.
Unul dintre cele mai mari magazine online de produse de frumusețe din Europa, MAKEUP operează deja cu succes în 36 de țări, printre care Franța, Italia, Germania, Elveția, SUA și Regatul Unit. 
În fiecare zi continuăm să lucrăm pentru tine, extinzând orizonturile frumuseții și creând o lume uimitoare în materie de beauty.
    </p>
 <br>
 <h2>Cea mai variată gamă de produse cosmetice</h2>
 <p>Cu peste 3.000 de branduri și 164.000 de produse, echipa noastră știe exact ce este la modă astăzi și ce mărci vor face furori printre adevărații pasionați de produse cosmetice și parfumuri. 
  Cele mai bine vândute produse la nivel mondial și produse noi, noutăți exclusive, parfumuri rare, branduri din întreaga lume - le găsești pe toate pe MAKEUP! 
  Platforma noastră se extinde în mod constant, oferindu-ți posibilitatea de a experimenta și de a-ți realiza cele mai îndrăznețe idei.
 </p>
 <br>
 <h2>Parteneriate oficiale cu branduri de top</h2>
 <p>MAKEUP este autorizat și lucrează în baza unor contracte directe cu cele mai renumite branduri de lux: YSL, Lancôme, Biotherm, Armani, Prada, Valentino, Estée Lauder, Clinique, etc. 
  Suntem mândri să colaborăm cu furnizorii oficiali și să oferim doar produse originale, colecții unice și beneficii suplimentare din partea mărcilor.</p>
<br>
<h2>Showroom-uri pentru o alegere bună</h2>
<p>Mărci de lux de top, parfumuri unice de nișă, produse cosmetice și profesionale - toate pot fi găsite în showroom-urile MAKEUP, unde poți primi sfaturi de specialitate, poți fi supus unor diagnostice de înaltă tehnologie pentru particularitățile pielii tale,
   poți face o selecție individuală de produse de îngrijire a pielii și poți testa tot ceea ce te interesează.
Două showroom-uri spațioase funcționează la Kiev (centrul comercial Atmosfera) și la Varșovia (Volia Park). Clienții fideli beneficiază de prețuri speciale!</p>
</div>

<div class="card-contact">
  <h4>Contacte</h4>
  <p>SUNTEM MEREU LA DISPOZIȚIA DVS!<br>
Trimiteți mesaj pe adresa, sau apelați: <br>
<a class="adrese"  href="makeup.contact@example.com">✎   makeup.contact@example.com</a><br>
<a class="adrese" href="tel:+37322843630">☎   +373 (22) 843 630</a></p>
</div>
</div>
</template>


<script>
export default {
  name: 'AboutView'
}


</script>

<style lang="css" scoped>

.despre-container {
  font-family: "Poiret One", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
  flex-wrap: wrap;
}
.text-content {
  width: 60%;
  padding-right: 30px;
  
}
.card-contact {
  width: 25%; 
  margin-top: 200px;
  margin-right: 50px;
  padding: 20px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 3px ridge grey;
  border-radius: 2%;
  align-self: flex-start;
}

.card-contact:hover {
    transform:scale(1.03);}

.adrese{
  color:rgb(47, 120, 57);
}
 
  
</style>

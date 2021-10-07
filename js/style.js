/* fonction de la carossell*/
var arrayslide = [
  {
    phrase: "la reflexiologie dans tout ces etat",
    img: "../img/pied-accueil4.jpg",
  },
  {
    phrase: "lorsque on masse les pieds ,on caresse notre âme",
    img: "../img/pieds2.jpg",
  },
  {
    phrase: "les pieds miroir de notre corps",
    img: "../img/piedsaccueil3.jpg",
  },
];
var myImg = document.getElementById("imgCaroussel");
var myTittle = document.getElementById("phrase");
var i = 0;
function slidshownext() {
  if (i < arrayslide.length - 1) {
    i++;
  } else {
    i = 0;
  }
  myImg.src = arrayslide[i].img;
  myTittle.textContent = arrayslide[i].phrase;
}

function slidshowprevious() {
  if (i > 0) {
    i--;
  } else {
    i = arrayslide.length - 1;
  }
  myImg.src = arrayslide[i].img;
  myTittle.textContent = arrayslide.phrase;
}
/*menu burger*/

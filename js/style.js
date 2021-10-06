/* fonction de la carossell*/
var arrayslide =[{ tittle:"la reflexiologie dans tout ces etat", img:"/img/pied-accueil4.jpg"},   { tittle:"lorsque on masse les pieds ,on caresse notre âme",
img:"/img/pieds2.jpg"},{ tittle:"les pieds miroir de notre corps", img:"/img/piedsaccueil3.jpg"},]
var myImg = document.getElementById("img");
var myTittle = document.getElementById("tittle");
var i=0;
function slidshownext(){
    myImg.src=arrayslide[i].img;
    myTittle.textContent=arrayslide[i].tittle;

    if (i<arrayslide.length-1){
        i++;
    }
    else{
        i=0
    }


}

function slidwhowprevious(){
    myImg.src=arrayslide[i].img.;
    myTittle.textContent=arrayslide.tittle;


if(i>0){i--

}
else
{i=arrayslide.length-1;
}

}
/*menu burger*/
/* fonction de la carossell*/
var arrayslide =[{ phrase:"la reflexiologie dans tout ces etat", img:"/img/pied-accueil4.jpg"},   { phrase:"lorsque on masse les pieds ,on caresse notre âme",
img:"/img/pieds2.jpg"},{ phrase:"les pieds miroir de notre corps", img:"/img/piedsaccueil3.jpg"},]
var myImg = document.querySelector("accueil");
var myTittle = document.querySelector("phrase");
var i=0;
function slidshownext(){
    myImg.src=arrayslide[i].img;
    myTittle.textContent=arrayslide[i].phrase;

    if (i<arrayslide.length-1){
        i++;
    }
    else{
        i=0
    }


}

function slidwhowprevious(){
    myImg.src=arrayslide[i].img;
    myTittle.textContent=arrayslide.phrase
    ;


if(i>0){i--

}
else
{i=arrayslide.length-1;
}

}
/*menu burger*/
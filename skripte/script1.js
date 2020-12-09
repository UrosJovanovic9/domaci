
// function vreme(){
//     var datum = new Date();
//     var sat = datum.getHours();
//     var minut = datum.getMinutes();
//     var sekund = datum.getSeconds();
//     minut = podesiVreme(mminut);
//     sekund = podesiVreme(sekund);
//     document.getElementById("time").innerHTML = sat + ':' + minut + ':' + sekund
//     t = setTimeout('vreme()',500);
// }

// function podesiVreme(i){
//     if(i < 10){
//         i="0" + i;
//     }
//     return i;
// }


// window.addEventListener("scroll", showFunction2());

// function showFunction2(){
//     if(document.documentElement.scrollTop > 1005.6){
//         document.getElementById("kosmomi").style.display = "block";
//     }else{
//         document.getElementById("kosmomi").style.display = "none";
//     }
// }




// window.onscroll = function(){scrollFunction()};
window.addEventListener("scroll", function(){scrollFunction()});

function scrollFunction(){
    if(document.documentElement.scrollTop > 800){
        document.getElementById("vrhDugme").style.display = "block";
    }else{
        document.getElementById("vrhDugme").style.display = "none";
    }
}

function topFun(){
    document.documentElement.scrollTop = 0;
}


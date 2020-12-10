


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



function vreme(){

    var datum = new Date();
    var sat = datum.getHours();
    var minut = datum.getMinutes();
    var sekund = datum.getSeconds();
    document.getElementById("trenutnovreme").innerHTML = sat + "h" + ":" + minut + "m" + ":" + sekund + "s"
    setTimeout('vreme()', 1000);
    }
    


    







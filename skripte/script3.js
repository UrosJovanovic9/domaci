

window.addEventListener("scroll", function(){scrollFunction()});

function scrollFunction(){
    if(document.documentElement.scrollTop > 660){
        document.getElementById("vrhDugme3").style.display = "block";
    }else{
        document.getElementById("vrhDugme3").style.display = "none";
    }
}

function topFun(){
    document.documentElement.scrollTop = 0;
}
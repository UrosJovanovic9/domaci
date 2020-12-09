// function handleButtonClikc1(){
//     let p1 = document.getElementById("posebno1");
//     p1.style.display='grid';

//     let p2 = document.getElementById("posebno2");
//     p2.style.display = 'grid';
// }

let brojac = 0;
 handleButtonClick = () => {
     if(brojac %2 == 0){
    document.getElementById("posebno1").style.display ='block';
    document.getElementById("posebno2").style.display ='block';

     } else{
         document.getElementById("posebno1").style.display = 'none';
         document.getElementById("posebno2").style.display = 'none';
     }
     brojac++;
}



function scrollFun(){
    var element1 = document.getElementById("malina");
    element1.scrollIntoView(false);
    element1.scrollIntoView({behavior:'smooth'});

}

function scrollFun2(){
    var element2 = document.getElementById("kupina");
    element2.scrollIntoView(false);
    element2.scrollIntoView({behavior:'smooth'});

}


function scrollFun3(){
    var element3 = document.getElementById("sljiva");
    element3.scrollIntoView(false);
    element3.scrollIntoView({behavior:'smooth'});
}

function scrollFun4(){
    var element4 = document.getElementById("borovnica");
    element4.scrollIntoView(false);
    element4.scrollIntoView({behavior:'smooth'})

}


// D U G M E   V R H 






window.addEventListener("scroll", function(){scrollFun()});

function scrollFun(){
    if(document.documentElement.scrollTop > 650){
        document.getElementById("vrhDugme2").style.display = "block";
    }else{
        document.getElementById("vrhDugme2").style.display = "none";
    }
}

function topFun(){
    document.documentElement.scrollTop = 0;
}

$(function(){

    $("#accordion").accordion({
        collapsible:true
    })

    $("#accordion").css("font-size", "1.5em");

});






window.addEventListener("scroll",function() {showFunction()});

// window.addEventListener("scroll", showFunction());

function showFunction(){
    if(document.documentElement.scrollTop > 50){
        document.getElementById("paragraf1").style.display = "block";
    }else{
        document.getElementById("paragraf1").style.display = "none";
    }
}







$(function(){
    $("#datepicker").datepicker();
    // $("#datepicker").css("background-color", grey);
});





function forma(){
    var ime = document.forms["Forma"]["ime"];
    var prezime = document.forms["Forma"]["prezime"];
    var mesto = document.forms["Forma"]["mesto"];
    var telefon = document.forms["Forma"]["telefon"];
    var email = document.forms["Forma"]["email"];
    if(ime.value == ""){
        alert("Molimo Vas da unesete Vase ime!");
        ime.focus();
        return false;
    }

    

    if(prezime.value == ""){
        alert("Molimo Vas da unesete Vaše prezime!");
       prezime.focus();
        return false;
    }

    if(mesto.value == ""){
        alert("Molimo Vas da uneste mesto odakle dolazite!")
        mesto.focus();
        return false;
    }

    

    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(Forma.email.value))) {
        alert("Uneli ste pogrešnu email adresu!")
        email.focus();
        return false;    
    }

    var brojevi = /^[0-9]+$/;
    if(!(telefon.value.match(brojevi))){
       alert("Unesite ispravan broj telefona!")
       telefon.focus();
       return false;
    }
  
    alert( ime.value + " " + prezime.value + " uspešno ste se prijavili!")
    return true;
}





function obrisi(){
    var o = confirm("Da li zelite da obrisete?");

    if(o == true){
        document.getElementById("forma").reset();
    }else{
        return false;
    }
}





window.addEventListener("scroll", function(){scrollFunction()});

function scrollFunction(){
    if(document.documentElement.scrollTop > 500){
        document.getElementById("vrhDugme4").style.display = "block";
    }else{
        document.getElementById("vrhDugme4").style.display = "none";
    }
}

function topFun(){
    document.documentElement.scrollTop = 0;
}
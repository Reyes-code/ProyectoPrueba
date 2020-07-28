var letras = document.getElementById("letras");
var numeros = document.getElementById("numeros");
var letrasGuardadas = "";
var numerosGuardados = "";
var a1 = document.getElementById("a1");
var b2 = document.getElementById("b2");
var c3 = document.getElementById("c3");
var d4 = document.getElementById("d4");
var e5 = document.getElementById("e5");
var f6 = document.getElementById("f6");
var g7 = document.getElementById("g7");
var h8 = document.getElementById("h8");
var i9 = document.getElementById("i9");


//--------funciones---------
function bta1() {
    if (letrasGuardadas == "A-B-C-D-E-F-G-H-I") {
        numeros.innerHTML = "1";
        numerosGuardados = "1";
    } else {
        if (letrasGuardadas == "") {
            letras.innerHTML = "A";
            letrasGuardadas = "A";
        } else {
            
        }
    }


}
function btb2() {
    if (letrasGuardadas == "A-B-C-D-E-F-G-H-I" && numerosGuardados == "1") {
        numeros.innerHTML ="1-2";
        numerosGuardados = "1-2";
    } else {
        
        if (letrasGuardadas == "A") {
            letras.innerHTML = "A-B";
            letrasGuardadas = "A-B";
            
        } else {
            if (letrasGuardadas =="") {
                alert("Hace falta la letra A");
        
            } else {
                alert("Hace falta el numero 1");
            }
        }    

    }

    
}
function btc3() {
    if (letrasGuardadas == "A-B-C-D-E-F-G-H-I" && numerosGuardados == "1-2") {
        numeros.innerHTML ="1-2-3";
        numerosGuardados = "1-2-3";
    } else {
        if (letras.innerHTML == "A-B") {
            letras.innerHTML = "A-B-C";
            letrasGuardadas = "A-B-C";
            
        } else {
            if (letrasGuardadas == ""||"A"||"A-B-C-D-E-F-G-H-I") {
                alert("Hace falta la letra B");
            } else {
                alert("Hace falta el numero 2");
            }
        }
        
    }

}
function btd4() {
    if  (letrasGuardadas == "A-B-C-D-E-F-G-H-I" && numerosGuardados == "1-2-3") {
        numeros.innerHTML ="1-2-3-4";
        numerosGuardados = "1-2-3-4";
        
    } else {
        if (letras.innerHTML == "A-B-C") {
            letras.innerHTML = "A-B-C-D";
            letrasGuardadas = "A-B-C-D";
            
        } else {
            if (letrasGuardadas == ""||"A"||"A-B") {
                alert("Hace fata la letra C");
            } else {
                alert("Hace falta el numero 3")
            }
        }
    }
   
    
}
function bte5() {
    if (letrasGuardadas == "A-B-C-D-E-F-G-H-I" && numerosGuardados == "1-2-3-4") {
        numeros.innerHTML ="1-2-3-4-5";
        numerosGuardados = "1-2-3-4-5"; 
        
    } else {
        if (letras.innerHTML == "A-B-C-D") {
            letras.innerHTML = "A-B-C-D-E";
            letrasGuardadas = "A-B-C-D-E";
            
        } else {
            if (letrasGuardadas== ""||"A-B-C") {
                alert("Hace falta la letra D");
            } else {
                alert("Hace falta el numero 4");
            }
        }
    }
  
    
}
function btf6() {
    if (letrasGuardadas == "A-B-C-D-E-F-G-H-I" && numerosGuardados == "1-2-3-4-5") {
        numeros.innerHTML ="1-2-3-4-5-6";
        numerosGuardados = "1-2-3-4-5-6"; 
        
    } else {
        if (letras.innerHTML == "A-B-C-D-E") {
            letras.innerHTML = "A-B-C-D-E-F";
            letrasGuardadas = "A-B-C-D-E-F";
            
        } else {
            if (letrasGuardadas == ""||"A-B-C-D") {
                alert("Hace falta la letra E");
            } else {
                alert("Hace falta el numero 5");
            }
        }
    }
  
    
}
function btg7() {
    if (letrasGuardadas == "A-B-C-D-E-F-G-H-I" && numerosGuardados == "1-2-3-4-5-6") {
        numeros.innerHTML ="1-2-3-4-5-6-7";
        numerosGuardados = "1-2-3-4-5-6-7"; 
        
    } else {
        if (letras.innerHTML == "A-B-C-D-E-F") {
            letras.innerHTML = "A-B-C-D-E-F-G";
            letrasGuardadas = "A-B-C-D-E-F-G";
            
        } else {
            if (letrasGuardadas == ""||"A-B-C-D-E") {
                alert("Hace falta la letra F");
            } else {
                alert("Hace falta el numero 6");
            }
        }

    }
  
    
}
function bth8() {
    if (letrasGuardadas == "A-B-C-D-E-F-G-H-I" && numerosGuardados == "1-2-3-4-5-6-7") {
        numeros.innerHTML ="1-2-3-4-5-6-7-8";
        numerosGuardados = "1-2-3-4-5-6-7-8"; 
        
    } else {
        if (letras.innerHTML == "A-B-C-D-E-F-G") {
            letras.innerHTML = "A-B-C-D-E-F-G-H";
            letrasGuardadas = "A-B-C-D-E-F-G-H";
            
        } else {
            if (letrasGuardadas == ""||"A-B-C-D-E-F") {
                alert("Hace falta la letra G");
            } else {
                alert("Hace falta el numero 7")
            }
        }
    }
   
    
}
function bti9() {
    if (letrasGuardadas == "A-B-C-D-E-F-G-H-I" && numerosGuardados == "1-2-3-4-5-6-7-8") {
        numeros.innerHTML ="1-2-3-4-5-6-7-8-9";
        numerosGuardados = "1-2-3-4-5-6-7-8-9"; 
        
    } else {
        if (letras.innerHTML == "A-B-C-D-E-F-G-H") {
            letras.innerHTML = "A-B-C-D-E-F-G-H-I";
            letrasGuardadas = "A-B-C-D-E-F-G-H-I";
            
        } else {
            if (letrasGuardadas == ""||"A-B-C-D-E-F-G") {
                alert("Hace falta la letra H");
            } else {
                alert("Hace falta el numero 8");
            }
        }
    }

    
}




//----onclicks-----
a1.onclick = function() {
    bta1();
}
b2.onclick = function() {
    btb2();
}
c3.onclick = function() {
    btc3();
}
d4.onclick = function() {
    btd4();
}
e5.onclick = function() {
    bte5();
}
f6.onclick = function() {
    btf6();
}
g7.onclick = function() {
    btg7();
}
h8.onclick = function() {
    bth8();
}
i9.onclick = function() {
    bti9();
}
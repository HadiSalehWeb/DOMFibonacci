/*
var result=0;
for (var i = 1; i <= 10; i++) {
    result +=i;
}
alert(result);
*/
"use strict";

function fibonacciRechner(wert){
    if(wert<=2){
        return 1;
    } else {
        return fibonacciRechner(wert-1) + fibonacciRechner(wert-2);
    }
}

function fibonacciBerechnung() {
    document.getElementById("list").innerText="";
    //Start und Endwert auslesen
    var n=parseInt(document.getElementById("fibonacciN").value);

    //Berechnung
    for(var i=1;i<=n;i++){
        let element=document.createElement("li");
        element.innerText="fib("+ i +")= "+fibonacciRechner(i);
        document.getElementById("list").appendChild(element);
    }
    document.getElementById("resultText").classList.remove("hidden");
    document.getElementById("resultText").classList.add("shown");
}

function hideResult(){
    document.getElementById("list").innerText="";
    document.getElementById("resultText").classList.remove("shown");
    document.getElementById("resultText").classList.add("hidden");
}

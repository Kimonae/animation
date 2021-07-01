
var x = document.getElementById("balanceIcon");
function balanceScale() { // Développez la fonction 



setTimeout(function() {x.innerHTML = "&#xf515;" }, 500);
setTimeout(function() {x.innerHTML = "&#xf24e;" }, 700);
setTimeout(function() {x.innerHTML = "&#xf516;" }, 900);

}
balanceScale();

setInterval(balanceScale, 1000);
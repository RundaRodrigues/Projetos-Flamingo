var x = prompt("informe o valor da primera base");
var y = prompt("informe o valor da segunda base");

var maior
var menor
if (x > y) {
    maior = x
    menor = y
} else {
    maior = y
    menor = x
}

var a = (maior * menor)/2

alert("O valor da área é :" + " " + a)

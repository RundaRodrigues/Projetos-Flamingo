var x = prompt("informe o primeiro valor");
var y = prompt("informe o segundo valor");
var z = prompt("informe o terceiro valor");

var maior;
var maior2;
var menor;
var soma = maior + maior2;

    if (x > y && x > z) {
        maior = x;
        alert(maior);
    } 
        else if (y > x && y > z) {
            maior = y;
            alert(maior);
        }
            else if (z > x && z > y) {
                maior = z;
                alert(maior);
            }
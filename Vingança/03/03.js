var x = prompt("informe o primeiro valor");
var y = prompt("informe o segundo valor");
var z = prompt("informe o terceiro valor");

var maior;

    if (x > y && x > z) {
        maior = x;
        alert(maior);
    } 
        else if (y > x && y > z) {
            maior = y;
            alert(maior);
        }
            else {
                (z > x && z > y)
                maior = z;
                alert(maior);
            }
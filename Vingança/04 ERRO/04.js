var x = prompt("informe o primeiro valor");
var y = prompt("informe o segundo valor");
var z = prompt("informe o terceiro valor");

var maior
var maior2
var menor
var soma = maior + menor

    if (x > y && x > z) {
        maior = x
    } 
        else if (x < y && x < z) {
            menor = x
        }
            else if (y > x && y > z) {
                maior = y
            } 
                else if (y < x && y < z) {
                    menor = y
                }
                    else if (z > x && z > y) {
                    maior = z
                    } 
                        else if (z < x && z < y) {
                           menor = z
                        }

alert('A soma de ' + maior + 'com' + menor + 'é igual a :' + soma)
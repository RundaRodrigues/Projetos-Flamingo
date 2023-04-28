var a = prompt("informe o primeiro valor");
var b = prompt("informe o segundo valor");
var c = prompt("informe o terceiro valor");
var d = prompt("informe o quarto valor");

var maior;

alert("O primeiro número inserido foi o " + a)
alert("O último número inserido foi o " + d)

    if (a > b && a > c && a > d) {
        maior = a;
        alert("O maior número inserido foi " + maior);
    } 
        else if (b > a && b > c && b > d) {
            maior = b;
            alert("O maior número inserido foi " + maior);
        }
            else if (c > a && c > b && c > d) {
                maior = c;
                alert("O maior número inserido foi " + maior);
            }    
                else {
                    maior = d;
                    alert("O maior número inserido foi " + maior);
                }




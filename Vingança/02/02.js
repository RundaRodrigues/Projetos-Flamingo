var x = prompt("informe o primeiro valor");

var pos = "O número é positivo";
var neg = "O número é negativo";
var zer = "O número é neutro";

    if (x > 0) {
        alert(pos);
    } 
        else if (x < 0) {
            alert(neg);
        }
            else {
                (x = 0);
                alert(zer);
            }
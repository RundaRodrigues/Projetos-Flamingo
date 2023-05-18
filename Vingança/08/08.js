var a = Number(prompt("informe o primeiro valor"));
var b = Number(prompt("informe o segundo valor"));
var c = Number(prompt("informe o terceiro valor"));
var d = Number(prompt("informe o quarto valor"));

var soma = (a + b + c + d)
var media = soma/ 4

if (a < 0 && a > 10) {
    soma = soma - a
}
    else if (b < 0 && b > 10) {
        soma = soma - b
    }
        else if (c < 0 && c > 10) {
            soma = soma - c
        }
            else if (d < 0 && d > 10) {
                soma = soma - d
            }
            
if (media >= 5) {
    alert('Parabéns, você passou no teste')
} 
    else {
        alert('Sinto muito, você não passou no teste')
    }

        




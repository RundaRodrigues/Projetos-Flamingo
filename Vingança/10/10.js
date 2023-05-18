var o = Number(prompt("Digite | 1 | para MULHER ou | 2 | para HOMEM"));
var h = Number(prompt("Insira sua altura | EXEMPLO (1.71) |"));

var calculaM = (72.7 * h) - 58
var calculaF = (62.1 * h) - 44.7

if (o === 2) {
    alert("Seu peso ideal é : " + calculaM)
}
    else if (o === 1) {
        
        alert("Seu peso ideal é : " + calculaF)
    }


        




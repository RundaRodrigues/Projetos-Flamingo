var o = Number(prompt("Digite | 1 | para MULHER ou | 2 | para HOMEM"));
var h = Number(prompt("Insira sua altura"));

var calculaM = (72.7 * o) - 58
var calculaF = (62.1 * o) - 44.7

if (o == 2) {
    alert("Seu peso ideal é : " + calculaM)
}
    else if (o == 1) {
        
        alert("Seu peso ideal é : " + calculaF)
    }


        




var r = Number(prompt('insira o raio do cone'))
var h = Number(prompt('insira a altura do cone'))

var g = (r*r) + (h*h)

var g1 = Math.sqrt(g)

var a = (3.14 * r) * (r + g1)

alert("O valor da área é :" + " " + a)
let num1 = prompt("Qual o primeiro número?")
let num2 = prompt("Qual o segundo número?")

console.log("O primeiro número é maior que o segundo", num1 > num2)
console.log("O primeiro número é igual ao segundo?", num1 == num2)
console.log("O primeiro número é divisível pelo segundo?", (num1 % num2) === 0)
console.log("O segundo número é divisível pelo primeiro?", (num2 % num1) === 0)
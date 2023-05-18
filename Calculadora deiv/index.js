const txtNum1 = document.getElementById("num1")
const signoDeOperacion = document.getElementById("op")
const txtNum2 = document.getElementById("num2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', calcular);

function calcular(){
    const operador = signoDeOperacion.value;
    const op1 = parseFloat(txtNum1.value);
    const op2 = parseFloat(txtNum2.value);

    if((operador == "+" || operador == "-" || operador == "*" || operador == "/") && !isNaN(op1) && !isNaN(op2)){

        let resultado;
        
        switch(operador){
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1 * op2
                break;
            case "/":
                resultado = op1 / op2
                break;
        }
        pResultado.style = "color:black"
        pResultado.innerHTML = resultado
    } else {
        pResultado.style = "color:red"
        pResultado.innerHTML = 'Calculo imposible'
    }
}
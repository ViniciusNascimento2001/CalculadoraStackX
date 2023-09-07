var historico = [];
var calculo = []

function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        try{
        let result = eval(resultado);
        console.log(typeof result)
        if(typeof result != "number" &&  typeof result != "float" ){
            throw new TypeError("Não foi possivel fazer a operação");
        }
        resultado.innerHTML = result;
        historico.push(resultado+"="+result);
        let tr = document.createElement("tr");
        let time = new Date();
        data = time.toLocaleString("pt-br");
        tr.innerHTML = `<td>${data} ${historico[historico.length - 1]}</td>`;
        document.getElementById("tablehistorico").appendChild(tr);
        document.getElementById('resultado').innerHTML = result;
        }catch(e){            
            resultado.innerHTML = e.message;
        }
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}

﻿
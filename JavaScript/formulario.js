import {formatarData} from "./calendario.js";

const botaoCadastrar = document.querySelector("#form-cadastrar");
export var mapFuncionarios = new Map();

botaoCadastrar.addEventListener("click", function(event) {
    event.preventDefault();
    var formulario = document.querySelector("#form-adicionar");
    var tabela = document.querySelector("#tabela-funcionarios");

    var funcionario = coletarInformacoesDoFormulario(formulario); 
    
    if(mapFuncionarios.has(funcionario.matricula)) {
        alert("Já existe um funcionário com essa matrícula!");
        console.log(mapFuncionarios);
    } else {
        if(verificadorCampos(formulario.matricula.value.length, formulario.nome.value.length, formulario.dataNascimento.value.length)) {

            mapFuncionarios.set(funcionario.matricula, funcionario);
            tabela.appendChild(criarTr(funcionario));
            console.log(mapFuncionarios);
    
            formulario.reset();

        }
    }

});

function coletarInformacoesDoFormulario(formulario) {
    const funcionario = {
        matricula: formulario.matricula.value,
        nome: formulario.nome.value,
        cargo: formulario.cargo.value,
        dataNascimento: formulario.dataNascimento.value
    }
    return funcionario;
}

function criarTd(dado) {
    let td = document.createElement("td");
    td.textContent = dado;

    return td;
}

function criarTr(funcionario) {
    var funcionarioTr = document.createElement("tr");

    funcionarioTr.appendChild(criarTd(funcionario.matricula));
    funcionarioTr.appendChild(criarTd(funcionario.nome));
    funcionarioTr.appendChild(criarTd(funcionario.cargo));
    funcionarioTr.appendChild(criarTd(formatarData(funcionario.dataNascimento)));

    return funcionarioTr;

}

function verificadorCampos(matricula, nome, dataNascimento) {
    if(matricula != 6) {
        alert("A matrícula precisar conter 6 dígitos! Ex.: 000001/ 000002/ 000003...");
        return false;
    } else {
        if(nome == 0) {
            alert("Informe o nome do funcionário");
            return false;
        } else {
            if(dataNascimento == 0) {
                alert("Informe a data de nascimento do funcionário");
            } else {
                return true;
            }
        }
    }
}


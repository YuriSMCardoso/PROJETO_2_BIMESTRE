import { obterMesAtual } from "./calendario.js";
import {mapFuncionarios as mapFuncionariosFormulario} from "./formulario.js"

const botaoAtualizarListaAniversariantes = document.querySelector("#botaoAtualizarListaAniversariantes");
var setFuncionariosAniversariantes = new Set();
var listaAniversariantes = document.querySelector("#lista-aniversariantes");

botaoAtualizarListaAniversariantes.addEventListener("click", function() {
    console.log("ESTE BOTÃO ESTÁ SENDO CLICADO");

    atualizarListaAniversariantes(setFuncionariosAniversariantes);

    //verificarAniversariantes(mapFuncionariosFormulario, setFuncionariosAniversariantes);

});

function criarLi(dado) {
    let li = document.createElement("li");
    li.textContent = dado;

    return li;
}

function verificarAniversariantes(mapFuncionarios, setFuncionariosAniversariantes) {
    for(const matricula of mapFuncionarios.keys()) {
        if(Number(mapFuncionarios.get(matricula).dataNascimento.substring(5,7)) === Number(obterMesAtual())) {

            //DESTRUCTING
            let {nome, dataNascimento} = mapFuncionarios.get(matricula);
            let aniversariante = `${nome} - ${dataNascimento.substring(8,10)}/${dataNascimento.substring(5,7)}`

            setFuncionariosAniversariantes.add(aniversariante);
            
            console.log(setFuncionariosAniversariantes);
        }
    }
}

function atualizarListaAniversariantes(setFuncionariosAniversariantes) {

    verificarAniversariantes(mapFuncionariosFormulario,setFuncionariosAniversariantes);
    listaAniversariantes.innerHTML = "";
    
    for(const funcionarioAniversariante of setFuncionariosAniversariantes.values()) {
        listaAniversariantes.appendChild(criarLi(funcionarioAniversariante));
    }


}
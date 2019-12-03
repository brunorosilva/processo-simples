const no_Process_msg = 'Nenhum processo encontrado!'
const todos_processos = [];
const timeoutCreationHtmlList = 500;

/* 
****Chamada para página de detalhamento****
*/

function goToProcesso(processo) {
    window.location.assign('../html/detalhamento_processo.html?processo=' + processo);
}

/* 
****Método para criação de template HTML com lista de processos do usuario em questão****
*/

function createColumnProcess() {
    var ulTag = 
        `<ul class="list-group" id="coluna_processos">
        </ul>`;
    document.getElementById("lista_processos").innerHTML = ulTag;  
    
}

function createTemplateListaProcessos(processo) {

    var liTag = 
    `<div class="form-group input-group">
        <li class="list-group-item">N° ${processo}</li>
        <button class="btn btn-outline-secondary" onclick="goToProcesso('N° ${processo}')" type="submit"> 
            <i class="fa fa-toggle-right" style="font-size:24px;color:black"></i></button>
    </div>`;

    var divLiTag = document.createElement("div");
    divLiTag.innerHTML = liTag;
    document.getElementById("coluna_processos").appendChild(divLiTag);

}

//================================FIM DO TEMPLATE==============================================//

/* 
****Carregamento de processos a partir da api de processos****
*/

function loadProcessos() {
    getListaProcessos();
}

function getListaProcessos() {
    createColumnProcess();
    fetch('https://app-processa-ai.herokuapp.com/api/Processo/lista_processos/', {
            credentials: "omit"
        })  
        .then(response => response.json())
        .then(data => {
            var dados = data["data"];
            for(i in dados) {
                createTemplateListaProcessos(dados[i].n);
                todos_processos.push(dados[i].n);
            }
        })
        .catch(error => console.error(error));
}

//================================FIM DA PARTE DE CARREGAMENTO DOS PROCESSOS=======================//

/* 
****Busca de processos a partir da ferramenta de busca****
*/

function searchProcessos() {
    createColumnProcess();
    var processoProcurado = document.getElementById("txt_consulta").value;
    var processosEncontrados = [];

    todos_processos.forEach(function(item) {
        if(item.includes(processoProcurado)) {
            processosEncontrados.push(item);
        }
    });

    if(processosEncontrados.length==0) {
        var h3Tag = document.createElement("h3");
        h3Tag.innerHTML = no_Process_msg;
        document.getElementById("lista_processos").innerHTML = '';
        document.getElementById("lista_processos").append(h3Tag);
    } else {
        processosEncontrados.forEach(function(item) {
            createTemplateListaProcessos(item);
        })
    }
}

//================================FIM DA PARTE DE BUSCA DOS PROCESSOS=======================//


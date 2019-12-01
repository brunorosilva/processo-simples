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

function createTemplateListaProcessos(lista_processos) {
    var ulTag = 
        `<ul class="list-group" id="coluna_processos">
        </ul>`;

    setTimeout(function() {
        document.getElementById("lista_processos").innerHTML = ulTag;  
    }, timeoutCreationHtmlList);

    setTimeout(function() {
        lista_processos.forEach(function(item) {
    
            var liTag = 
            `<div class="form-group input-group">
                <li class="list-group-item">N° ${item}</li>
                <button class="btn btn-outline-danger" onclick="goToProcesso('N° ${item}')" type="submit"> <i
                    class="fa fa-remove" style="font-size:24px;color:red"></i></button>
            </div>`;
    
            var divLiTag = document.createElement("div");
            divLiTag.innerHTML = liTag;
            document.getElementById("coluna_processos").appendChild(divLiTag);
        });
    }, timeoutCreationHtmlList)
}

//================================FIM DO TEMPLATE==============================================//

/* 
****Carregamento de processos a partir da api de processos****
*/

function loadProcessos() {
    getListaProcessos();
    createTemplateListaProcessos(todos_processos);
}

function getListaProcessos() {
    fetch('https://app-processa-ai.herokuapp.com/api/Processo/lista_processos/', {
            credentials: "omit"
        })  
        .then(response => response.json())
        .then(data => {
            var dados = data["data"];
            for(i in dados) {
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
        createTemplateListaProcessos(processosEncontrados);
    }
}

//================================FIM DA PARTE DE BUSCA DOS PROCESSOS=======================//


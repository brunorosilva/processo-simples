const timeoutCreationHtmlListHistoric = 500;

/* 
****Chamada para página de detalhamento****
*/
function goToProcesso() {
    window.location.assign('../html/detalhamento_processo.html?processo=' + getProcesso());
}

/* 
****Método de auxílio para pegar número do processo pela URL****
*/
function getProcesso() {
    var url = new URL(window.location.href);
    return url.searchParams.get("processo");
}

function sortArrayDate(a,b) {
    var dateA = a["data"].split("/");
    var dateB = b["data"].split("/");
    
    return new Date(dateB[2] + "-" + dateB[1] + "-" + dateB[0]).getTime() -
        new Date(dateA[2] + "-" + dateA[1] + "-" + dateA[0]).getTime();
}

//================================FIM DA PARTE DE MÉTODOS AUXILIARES=======================//

/* 
****Construção da página com dados de histórico****
*/
function buildSubTitleOnHistoricPage() {
    var h3 = document.createElement("h3");
    var url = new URL(window.location.href);
    h3.innerHTML = "Processo: " + url.searchParams.get("processo");
    document.getElementById("processo").appendChild(h3);

    getJsonHistoricoProcesso(getProcesso().trim().replace("N° ", ""));
}

function buildErrorMessage() {
    var h3 = document.createElement("h3");
    var url = new URL(window.location.href);
    h3.innerHTML = "Não há histórico para este processo!";
    document.getElementById("linha_tempo").appendChild(h3); 
}

/* 
****Construção da lista de dados histórico****
*/
function buildListHtml(dados) {
    setTimeout(function() {

        var templateLiTag = 
        `<li>
            <a target="_blank" href="#">Publicação extraída JusBrasil</a>
            <a href="#" class="float-right">${dados["data"]}</a>
            <p></p>
            <p style="font-weight: bold;">ANDAMENTO: </p>
            <p>${dados["andamento"]}</p>
        </li>`;

        var liTag = document.createElement("li");
        liTag.innerHTML = templateLiTag;
        document.getElementById("linha_tempo").appendChild(liTag);

    }, timeoutCreationHtmlListHistoric)
}

//================================FIM DA PARTE DE CONSTRUÇÃO DA PÁGINA=======================//

/* 
****Consulta na api de histórico****
*/
function getJsonHistoricoProcesso(processo) {
    fetch('https://app-processa-ai.herokuapp.com/api/Processo/historico/numero_processo/' + processo, {
            credentials: "omit"
        })  
        .then(response => response.json())
        .then(data => {
            var dados = data["data"];
            dados.sort(function(a,b) {
                return sortArrayDate(a,b);
            });
            for(i in dados) {
                buildListHtml(dados[i]);
            }
        })
        .catch(error => {
            buildErrorMessage();
            console.error(error)
        });
}

//================================FIM DA PARTE DE CONSULTA NA API=======================//
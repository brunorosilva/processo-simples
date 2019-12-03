const timeoutCreationHtmlListHistoric = 500;

function goToProcesso() {
    window.location.assign('../html/detalhamento_processo.html?processo=' + getProcesso());
}

function getProcesso() {
    var url = new URL(window.location.href);
    return url.searchParams.get("processo");
}

function buildSubTitleOnHistoricPage() {
    var h3 = document.createElement("h3");
    var url = new URL(window.location.href);
    h3.innerHTML = "Processo: " + url.searchParams.get("processo");
    document.getElementById("processo").appendChild(h3);

    getJsonHistoricoProcesso();
}

function buildListHtml(dados); {
    setTimeout(function() {

        var liTag = 
        `<li>
            <a target="_blank" href="#">Publicação extraída JusBrasil</a>
            <a href="#" class="float-right">${dados["data"]}</a>
            <p>Dados essenciais do processo na data apontada</p>
            <p>ANDAMENTO:${dados["andamento"]}</p>
        </li>`;

        var divLiTag = document.createElement("div");
        divLiTag.innerHTML = liTag;
        document.getElementsByClassName("timeline").appendChild(divLiTag);

    }, timeoutCreationHtmlListHistoric)
}

function getJsonHistoricoProcesso() {
    fetch('https://app-processa-ai.herokuapp.com/api/Processo/historico/numero_processo/' + getProcesso(), {
            credentials: "omit"
        })  
        .then(response => response.json())
        .then(data => {
            var dados = data["data"];
            for(i in dados) {
                buildListHtml(dados[i]);
            }
        })
        .catch(error => console.error(error));
}
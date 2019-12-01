const keys = [];
const values = [];
const assunto = [];
const timeoutCreationHtmlDetails = 1000;

/* 
****Chamada para página de histórico****
*/
function goToHistorico() {
    var url = new URL(window.location.href);
    var processo = url.searchParams.get("processo");
    window.location.assign('../html/historico_processo.html?processo=' + processo);
}

/* 
****Métodos do fluxo de construção da página html****
*/

function createTemplateHtmlDetails() {

    setTimeout(function() {
        keys.forEach(function(item, index) {

            var divPropriedade = 
                `<div class="row">
                    <div class="col">
                        <h4 style="font-weight: bold">${item}</h4>
                    </div>
                    <div class="col">
                        <h4>${values[index]}</h4>
                    </div>
                </div>`;
    
            var divRowTag = document.createElement("div");
            divRowTag.innerHTML = divPropriedade;
            document.getElementById("info_basicas").appendChild(divRowTag);
        });
    }, timeoutCreationHtmlDetails);

    setTimeout(function() {
        var divAssunto = 
            `<div>
                <h4 style="font-weight: bold">
                    ${assunto[0]}
                </h4>
                <h4>
                    ${assunto[1]}
                </h4>
            </div>`;

        var divAssuntoTag = document.createElement("div");
        divAssuntoTag.innerHTML = divAssunto;
        document.getElementById("assunto").appendChild(divAssuntoTag);

    }, timeoutCreationHtmlDetails);
}

function buildSubTitleOnDetailPage() {
    var h3 = document.createElement("h3");
    var url = new URL(window.location.href);
    h3.innerHTML = "Processo: " + url.searchParams.get("processo");
    document.getElementById("processo").appendChild(h3);

    getJsonObject(url.searchParams.get("processo").trim().replace("N° ", ""));
    createTemplateHtmlDetails();
}

//================================FIM DA PARTE DE CONSTRUÇÂO DA PÁGINA=======================//

/* 
****Carregamento de processos a partir da api de processos****
*/

function getJsonObject(processo) {
    fetch('https://app-processa-ai.herokuapp.com/api/Processo/numero_processo/' + processo + '/', {
            credentials: "omit"
        })
        .then(response => response.json())
        .then(data => {
            var dados = data["data"];
            for(var prop in dados) {
                if(prop!="Assunto" && prop!="n") {
                    values.push(dados[prop]);
                    keys.push(prop.replace("_", " "))
                } else if(prop=="Assunto") {
                    assunto.push(prop);
                    assunto.push(dados[prop]);
                }
            }
        })
        .catch(error => console.error(error));
}

//================================FIM DA PARTE DE CARREGAMENTO DOS PROCESSOS=======================//

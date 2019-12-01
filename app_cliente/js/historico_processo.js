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
}
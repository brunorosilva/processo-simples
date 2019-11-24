function goToHistorico(processo) {
    window.location.assign('../html/historico_processo.html?processo=' + getProcesso());
}

function getProcesso() {
    var url = new URL(window.location.href);
    return url.searchParams.get("processo");
}

function buildSubTitleOnDetailPage() {
    var h3 = document.createElement("h3");
    var url = new URL(window.location.href);
    h3.innerHTML = "Processo: " + url.searchParams.get("processo");
    document.getElementById("processo").appendChild(h3);
}
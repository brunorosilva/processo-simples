function goToProcesso(processo) {
    window.location.assign('../html/detalhamento_processo.html?processo=' + processo);
}

function buildSubTitleOnDetailPage() {
    var h3 = document.createElement("h3");
    var url = new URL(window.location.href);
    h3.innerHTML = "Processo: " + url.searchParams.get("processo");
    document.getElementById("processo").appendChild(h3);
}

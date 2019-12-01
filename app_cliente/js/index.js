const wrongValidation = "Usuário ou senha incorreto!"

function validationWithApi() {
    fetch('https://app-processa-ai-cliente.herokuapp.com/api/Cliente/Busca/admin', {
            credentials: "omit"
        })
        .then(response => response.json())
        .then(data => {
            var dados = data["data"];
            var login = document.getElementById("login").value;
            var password = document.getElementById("password").value;
            if(dados["usuario"]!=login || dados["senha"]!=password) {
                alert(wrongValidation);
            } else {
                window.location.href='./html/busca_processos.html';
            }
        })
        .catch(error => console.error(error));
}
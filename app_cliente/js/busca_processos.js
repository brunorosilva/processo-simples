const todos_processos = ['1186643.98.876', '1178643.98.876', '1098543.98.876', '1097653.98.876', '1076443.98.876', '1097643.98.876'];

const no_Process_msg = 'Nenhum processo encontrado!'

function createTemplateListaProcessos(lista_processos) {
    var ulTag = 
        `<ul class="list-group" id="coluna_processos">
        </ul>`;

    document.getElementById("lista_processos").innerHTML = ulTag;

    var liTag='';

    lista_processos.forEach(function(item) {

        liTag += 
        `<div class="form-group input-group">
            <li class="list-group-item">N° ${item}</li>
            <button class="btn btn-outline-danger" onclick="goToProcesso('N° ${item}')" type="submit"> <i
                class="fa fa-remove" style="font-size:24px;color:red"></i></button>
        </div>`;

    });

    document.getElementById("coluna_processos").innerHTML = liTag;
}

function loadProcessos() {
    createTemplateListaProcessos(todos_processos);
}

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


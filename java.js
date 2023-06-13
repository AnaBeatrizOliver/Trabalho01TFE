

function adiciona1(){
    var item = document.createElement("li");
    var els = document.getElementsByTagName("ul");
    var novoElement = document.getElementById("campoTarefa").value;
    els[0]
    els[0].appendChild(item)
    item.innerHTML = novoElement
    
    campoTarefa.value = ""
}

function adiciona2(){
    var item = document.createElement("li");
    var els = document.getElementById("listaTarefa2");
    var novoElement = document.getElementById("campoTarefa2").value;

    els.appendChild(item)
    item.innerHTML = novoElement
    campoTarefa2.value = ""
    
}
function adiciona3(){
    var item = document.createElement("li");
    var els = document.getElementById("listaTarefa3");
    var novoElement = document.getElementById("campoTarefa3").value;

    els.appendChild(item)
    item.innerHTML = novoElement
    
    campoTarefa3.value = ""
}

function adiciona4(){
    var item = document.createElement("li");
    var els = document.getElementById("listaTarefa4");
    var novoElement = document.getElementById("campoTArefa4").value;

    els.appendChild(item)
    item.innerHTML = novoElement
    
    campoTArefa4.value = ""
}




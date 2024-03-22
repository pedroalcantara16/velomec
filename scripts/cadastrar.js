function removerLinha(){
    document.getElementById("tabela").removeChild(document.getElementById("tabela").lastChild);
}

function novaLinha() {
    var tabela = document.getElementById("tabela");
    tabela.setAttribute("class", "table table-bordered table-dark");

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var inputPlaca = document.createElement("input");
    inputPlaca.setAttribute("type","text");
    inputPlaca.setAttribute("class", "form-control");
    inputPlaca.setAttribute("name", "placa[]");
    td1.appendChild(inputPlaca);
    tr.appendChild(td1);
    
    var td2 = document.createElement("td");
    var inputFabricante = document.createElement("input");
    inputFabricante.setAttribute("type","number");
    inputFabricante.setAttribute("class", "form-control");
    inputFabricante.setAttribute("name", "fabricante[]")
    td2.appendChild(inputFabricante);
    tr.appendChild(td2);

    var td3 = document.createElement("td");
    var inputModelo = document.createElement("input");
    inputModelo.setAttribute("type","number");
    inputModelo.setAttribute("class", "form-control");
    inputModelo.setAttribute("name", "modelo[]")
    td3.appendChild(inputModelo);
    tr.appendChild(td3);

    var td4 = document.createElement("td");
    var inputAno = document.createElement("input");
    inputAno.setAttribute("type","text");
    inputAno.setAttribute("class", "form-control");
    inputAno.setAttribute("name", "ano[]")
    td4.appendChild(inputAno);
    tr.appendChild(td4);

    tabela.appendChild(tr);
  }
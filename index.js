function adcElemento(){
    var h1Titulo = document.createElement("h1");
    var conteudoH1Titulo = document.createTextNode("Titulo criado com JS");
    h1Titulo.appendChild(conteudoH1Titulo);
    var h1Atualtitulo = document.getElementById("tituloP");
    document.body.insertBefore(h1Titulo, h1Atualtitulo);
}

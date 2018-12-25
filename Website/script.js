var trabalhosRealizados = [
    "beware-of-the-darkness-splashart.png", 
    "beware-of-the-darkness-telamenu.png",
    "beware-of-the-darkness-personagem.png",
    "elementary-dynasty-splashart.png",
    "elementary-dynasty-telamenu.png",
    
    "blob-b-612-splashart.png",
    "blob-b-612-telamenu.png",
    "blob-b-612-personagem.png",
    "blob-b-612-arvore.png",
    "blob-b-612-floresta.png",
    "ablon-personagem.png"  
];
var indexTrabalho = 0;


function changeSource(){
   

    var destino = document.getElementById("trabalho-realizado");
    
    if(indexTrabalho == trabalhosRealizados.length - 1){
        indexTrabalho = 0;
    }else{
        indexTrabalho += 1;
    }
   
    destino.src = "imagens/trabalhos-realizados/" + trabalhosRealizados[indexTrabalho];


}
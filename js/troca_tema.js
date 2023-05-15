var tema_escuro = false;
function troca_tema(){

    let troca_img = document.getElementById("botao");

    if(tema_escuro == false){
        tema_escuro = true;
        document.body.className = "modo-escuro";
        troca_img.src = "imagens/moon.png";
    }
    else{
        tema_escuro = false;
        document.body.className = "";
        troca_img.src = "imagens/sun.png";
    }
}
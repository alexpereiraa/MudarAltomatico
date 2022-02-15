function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var hora = new Date();
    var atual = hora.getHours();
    msg.innerHTML = `São ${atual} horas`;
    if(atual > 0 && atual <= 12){
        msg.innerHTML = `São ${atual} horas da manhã: BOM DIA!`;
        img.src = "dia.jpeg"
        document.body.style.background = "#e2cd9f"
    }else if(atual <= 18){
        msg.innerHTML = `São ${atual} horas: BOA TARDE!`;
        img.src = 'tarde.jpeg'
        document.body.style.background = "#b9846f"
    }else{
        msg.innerHTML = `São ${atual} horas: BOA NOITE!`;
        img.src = 'noite.jpeg'
        document.body.style.background = "#515154"
    }
}
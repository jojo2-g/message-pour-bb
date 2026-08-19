let reponses=[]; //on stock toutes les réponses ici
let monNumerowhatsapp="2250586247064";

function etapeSuivante(num){
    document.querySelectorAll('.container')
    .forEach(c => c.style.display='none')
    document.getElementById('etape' + num).style.display='block';

    if(num===4){
        lancerConfettis();
    }
}

function repondre(reponse,etapeSuiv){
    reponses.push(reponse);
    etapeSuivante(etapeSuiv);
}
function relancer(){
    reponses=[];
    etapeSuivante(1)
}
function envoyerWhatsApp(){
    let message ="❤️ Nouvelle réponse au message d'amour ❤️%0A%0A";
    message +=" 1.: " + reponses[0] + "\n\n";
    message+= " 2.: " +reponses[1] + "\n\n";
    message+="3."+ reponses[2] + "\n\n";
    message+= "Elle a vu le message d'amour ❤️";
    let url="https://wa.me" + monNumerowhatsapp + "?text=" + encodeURIComponent(message);
    window.open(url,'_blank');
}

function lancerConfettis() {
    const canvas =
    document.getElementById('confettis');
    const ctx =
    canvas.getContext('2d');
    canvas.Width=window.innerWidth;
    canvas.Height=window.innerHeight;

    let confettis =[];
    for(let i =0;i < 100;i++){
        confettis.push({x: Math.random()*
            canvas.Width,
            y: Math.random()*
            canvas.Height - canvas.Height,
            r:Math.random() * 6+4,
            color:'hsl(${Math.random()*360},100%,50%)'
        });
    }
    function draw(){
        ctx.clearRect(0,0,canvas.Width,canvas.Height);
        confettis.forEach(c => {ctx.beginpath();
            ctx.arc(c.x,c.y, c.r,0, Math.PI*2);
            ctx.fillstyle = c.color;
            ctx.fill();
            c.y +=3;
            if(c.y> canvas.Height) c.y=-10;
        });
        requestAnimationFrame(draw)
    }
    draw()

}
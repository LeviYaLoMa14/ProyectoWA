const https = require("https");
function EnviarMensajeWhatsApp(texto, numero){
    const data = JSON.stringify({
        
            "messaging_product": "whatsapp",    
            "recipient_type": "individual",
            "to": "522371083638",
            "type": "text",
            "text": {
                "preview_url": false,
                "body": "Hola Ly"
            }
    });
    
    const options = {
        host : "graph.facebook.com",
        path : "/v21.0/428428697029903/messages",
        method : "POST",
        body : data,
        headers : {
            "Content-Type" : "aplication/json",
            Authorization : "Bearer EAASDD0WFtPoBO6fg7w3NB091WGh6dmgGGVE0ZAkxkZC9kyPgZCXcTz61XZBZAl5asfdl85cGVmsndP0q0JaqoZBknkAn3ZBHZAuaTUOwC1NAaiOwepqgg7ws9JeGXx5d1EqFJcziOf0Q53TRqS6FGjqszafyCRw28Cgg537TKcUG1MmtKKZBkZAivdHizEr5bTxXnDRwDu4S5S0hwHou54uxBew8h1VPQZD"
        }
    };
    const req = https.request(options,res => {
        res.on("data",d=>{
            process.stdout.write(d);
        });
    });
    req.write(data);
    req.end();
}

module.exports = {
    EnviarMensajeWhatsApp
}
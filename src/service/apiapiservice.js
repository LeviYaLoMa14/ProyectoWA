const https = require("https");

function EnviarMensajeWhatsApp(texto, numero) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": "522371083638", // Usar número en formato internacional
        "type": "text",
        "text": {
            "preview_url": false,
            "body": texto // Mensaje dinámico
        }
    });

    const options = {
        host: "graph.facebook.com",
        path: "/v21.0/428428697029903/messages", // Reemplaza con tu ID correcto
        method: "POST",
        headers: {
            "Content-Type": "application/json", // Corrección en el tipo de contenido
            "Authorization": "Bearer EAASDD0WFtPoBO6fg7w3NB091WGh6dmgGGVE0ZAkxkZC9kyPgZCXcTz61XZBZAl5asfdl85cGVmsndP0q0JaqoZBknkAn3ZBHZAuaTUOwC1NAaiOwepqgg7ws9JeGXx5d1EqFJcziOf0Q53TRqS6FGjqszafyCRw28Cgg537TKcUG1MmtKKZBkZAivdHizEr5bTxXnDRwDu4S5S0hwHou54uxBew8h1VPQZD"
        }
    };

    const req = https.request(options, (res) => {
        let response = "";

        res.on("data", (chunk) => {
            response += chunk;
        });

        res.on("end", () => {
            console.log("Respuesta de la API:", response);
        });
    });

    req.on("error", (error) => {
        console.error("Error al enviar el mensaje:", error);
    });

    req.write(data);
    req.end();
}

module.exports = {
    EnviarMensajeWhatsApp
};
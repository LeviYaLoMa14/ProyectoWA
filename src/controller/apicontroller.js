const EnviarMensaje = require("../service/apiapiservice");
const verificar = (req, res) => {
    try {
        var tokenleviapp = "leviapp";
        var toke = req.query["hub.verify_token"];
        var chalenge = req.query["hub.challenge"];

        if (toke === tokenleviapp) {
            res.send(chalenge); // Responde al challenge de verificación
            console.log("Verificación exitosa");
        } else {
            res.status(403).send('Forbidden'); // Si el token no coincide, respondemos con 403
            console.log("Token incorrecto");
        }
    } catch (e) {
        res.status(400).send(); // En caso de error, respondemos con un 400
        console.log("Error en verificación:", e);
    }
}

const recibir = (req, res) => {
    try {
        var entry = (req.body["entry"])[0];
        var changes = (entry["changes"])[0];
        var value = (changes["value"]);
        var ObjetoMensaje = (value["messages"]);
        var message = ObjetoMensaje[0];
        var texto = message["text"]["body"];
        var numero = message["from"];
        console.log("Enviade desde: " + numero + " El texto es: " + texto);
        EnviarMensaje.EnviarMensajeWhatsApp(texto, numero);

        //console.log(ObjetoMensaje); 
        res.send("EVENT_RECEIVED");
    } catch (e) {
        console.log(e); // Si hay un error, lo mostramos
       res.status(500).send("Error procesando el evento"); // Respondemos con un error
       //res.send("EVENT_RECEIVED");
    }
}

module.exports = {
    verificar, recibir
}

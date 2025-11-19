const { default: mqtt } = require("mqtt");

class Suscriber {
  init(
   { host,
    port,
    username,
    password,
    topic,
    nombreCliente,
    fnOnMessage = (topic, message) => {}}
  ) {
    const client = mqtt.connect(`mqtts://${host}:${port}`, {
      clientId: nombreCliente,
      username,
      password,
      keepalive: 60,
      reconnectPeriod: 1000,
    });

    client.on("connect", () => {
      console.log("✅ Suscriptor " + nombreCliente + " conectado");
      client.subscribe(topic, (err) => {
        if (err) console.error("Error al suscribirse", err);
        else console.log(nombreCliente + " suscripto al topic:", topic);
      });

      client.on("message", (topic, message) => {
        fnOnMessage(topic, message);
      });
    });
  }
}


module.exports = { Suscriber };
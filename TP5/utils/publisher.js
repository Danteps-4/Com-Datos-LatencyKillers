const mqtt = require("mqtt");

class Publisher {
  static client;
  interval;
  fnDatoSimulado = () => Math.random();
  topic;
  nombreCliente;

  init({
    host,
    port,
    username,
    password,
    topic,
    interval = 500,
    nombreCliente,
    fnDatoSimulado = () => Math.random(),
  }) {
    this.client = mqtt.connect(`mqtts://${host}:${port}`, {
      clientId: nombreCliente,
      username,
      password,
      keepalive: 60,
      reconnectPeriod: 1000,
    });
    if (!topic || topic.length === 0) {
      throw new Error("El topic no puede estar vacio");
    }
    this.fnDatoSimulado = fnDatoSimulado;
    this.topic = topic ?? '';
    this.nombreCliente = nombreCliente ?? '';
    this.client.on("connect", () => {
      console.log("✅ Publisher " + nombreCliente + " conectado!");
    });
  }

  startPublishing() {
    let dato = this.fnDatoSimulado() ?? "0";
    let i = 1;
    this.interval = setInterval(() => {
      const msg = this.client.publish(
        this.topic,
        dato.toString(),
        { qos: 1 },
        (err) => {
          if (err) console.error("❌ Error al publicar", err);
          else console.log(`${this.nombreCliente} envia: ${dato.toString()}`);
        }
      );
      i++;
    }, 1000);
  }
  stopPublishing() {
    clearInterval(this.interval);
  }
}

module.exports = { Publisher };

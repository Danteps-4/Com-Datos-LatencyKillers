const mqtt = require("mqtt");
const { Publisher } = require("../utils/publisher");
const { Suscriber } = require("../utils/suscriber");
const { saveData } = require("../utils/data");

const host = "8c73411f8fe14bb2968b57754537a966.s1.eu.hivemq.cloud";
const port = 8883;

// Estos son los que creaste vos en HiveMQ (CONFIG → Access Management)
const username = "latency";
const password = "Dgf_6YB8aSNCALG";

const S1_SensorH = new Publisher();
S1_SensorH.init({
  host,
  port,
  username,
  password,
  topic: "lan/sala1/sensor/hum",
  nombreCliente: "S1_SensorH",
  fnDatoSimulado: () => Math.floor(Math.random() * 100),
});
S1_SensorH.client.on("connect", () => {
  S1_SensorH.client.subscribe("lan/comando/#", (err) => {
    if (err) console.error("Error al suscribirse", err);
    else console.log("S1_SensorH suscripto al topic:", "lan/comando/#");
  });
  S1_SensorH.client.on("message", (topic, message) => {
    if (topic === "lan/comando/all") {
      if (message.toString().toUpperCase() === "START")
        S1_SensorH.startPublishing();
      else if (message.toString().toUpperCase() === "STOP")
        S1_SensorH.stopPublishing();
      else console.log("Comando desconocido: " + message.toString());
    }
  });
});

const S1_SensorT = new Publisher();
S1_SensorT.init({
  host,
  port,
  username,
  password,
  topic: "lan/sala1/sensor/temp",
  nombreCliente: "S1_SensorT",
  fnDatoSimulado: () => Math.floor(Math.random() * 100),
});
S1_SensorT.client.on("connect", () => {
  S1_SensorT.client.subscribe("lan/comando/#", (err) => {
    if (err) console.error("Error al suscribirse", err);
    else console.log("S1_SensorT suscripto al topic:", "lan/comando/#");
  });
  S1_SensorT.client.on("message", (topic, message) => {
    if (topic === "lan/comando/all") {
      if (message.toString().toUpperCase() === "START")
        S1_SensorT.startPublishing();
      else if (message.toString().toUpperCase() === "STOP")
        S1_SensorT.stopPublishing();
      else console.log("Comando desconocido: " + message.toString());
    }
  });
});
const S2_SensorT = new Publisher();
S2_SensorT.init({
  host,
  port,
  username,
  password,
  topic: "lan/sala2/sensor/temp",
  nombreCliente: "S2_SensorT",
  fnDatoSimulado: () => Math.floor(Math.random() * 100),
});
S2_SensorT.client.on("connect", () => {
  S2_SensorT.client.subscribe("lan/comando/#", (err) => {
    if (err) console.error("Error al suscribirse", err);
    else console.log("S2_SensorT suscripto al topic:", "lan/comando/#");
  });
  S2_SensorT.client.on("message", (topic, message) => {
    if (topic === "lan/comando/all") {
      if (message.toString().toUpperCase() === "START")
        S2_SensorT.startPublishing();
      else if (message.toString().toUpperCase() === "STOP")
        S2_SensorT.stopPublishing();
      else console.log("Comando desconocido: " + message.toString());
    }
  });
});
const S2_SensorH = new Publisher();
S2_SensorH.init({
  host,
  port,
  username,
  password,
  topic: "lan/sala2/sensor/hum",
  nombreCliente: "S2_SensorH",
  fnDatoSimulado: () => Math.floor(Math.random() * 100),
});
S2_SensorH.client.on("connect", () => {
  S2_SensorH.client.subscribe("lan/comando/#", (err) => {
    if (err) console.error("Error al suscribirse", err);
    else console.log("S2_SensorH suscripto al topic:", "lan/comando/#");
  });
  S2_SensorH.client.on("message", (topic, message) => {
    if (topic === "lan/comando/all") {
      if (message.toString().toUpperCase() === "START")
        S2_SensorH.startPublishing();
      else if (message.toString().toUpperCase() === "STOP")
        S2_SensorH.stopPublishing();
      else console.log("Comando desconocido: " + message.toString());
    }
  });
});

const S1_Cliente_H = new Suscriber();
S1_Cliente_H.init({
  host,
  port,
  username,
  password,
  topic: "lan/sala1/sensor/hum",
  nombreCliente: "Cliente S1 Hum",
  fnOnMessage: (topic, message) => {
    console.log(
      `--> Cliente S1 Hum recibió mensaje en ${topic}: ${message.toString()}`
    );
    const dato = {
      tipoSensor: "humedad",
      sala: "sala1",
      valor: parseFloat(message.toString()),
      timestamp: new Date().toISOString(),
      topic,
    };
    saveData(dato);
  },
});

const S1_Cliente_T = new Suscriber();
S1_Cliente_T.init({
  host,
  port,
  username,
  password,
  topic: "lan/sala1/sensor/temp",
  nombreCliente: "Cliente S1 Temp",
  fnOnMessage: (topic, message) => {
    console.log(
      `--> Cliente S1 Temp recibió mensaje en ${topic}: ${message.toString()}`
    );
    const dato = {
      tipoSensor: "temperatura",
      sala: "sala1",
      valor: parseFloat(message.toString()),
      timestamp: new Date().toISOString(),
      topic,
    };
    saveData(dato);
  },
});
const S2_Cliente_H = new Suscriber();
S2_Cliente_H.init({
  host,
  port,
  username,
  password,
  topic: "lan/sala2/sensor/hum",
  nombreCliente: "Cliente S2 Hum",
  fnOnMessage: (topic, message) => {
    console.log(
      `--> Cliente S2 Hum recibió mensaje en ${topic}: ${message.toString()}`
    );
    const dato = {
      tipoSensor: "humedad",
      sala: "sala2",
      valor: parseFloat(message.toString()),
      timestamp: new Date().toISOString(),
      topic,
    };
    saveData(dato);
  },
});
const S2_Cliente_T = new Suscriber();
S2_Cliente_T.init({
  host,
  port,
  username,
  password,
  topic: "lan/sala2/sensor/temp",
  nombreCliente: "Cliente S2 Temp",
  fnOnMessage: (topic, message) => {
    console.log(
      `--> Cliente S2 Temp recibió mensaje en ${topic}: ${message.toString()}`
    );
    const dato = {
      tipoSensor: "temperatura",
      sala: "sala2",
      valor: parseFloat(message.toString()),
      timestamp: new Date().toISOString(),
      topic,
    };
    saveData(dato);
  },
});

const comandoCentral = new Publisher();
comandoCentral.init({
  host,
  port,
  username,
  password,
  topic: "lan/sala1/sensor/temp",
  nombreCliente: "Comando Central",
});
comandoCentral.client.on("connect", () => {
  // Enviar comando START después de 5 segundos
  setTimeout(() => {
    console.log("Comando Central enviando START");
    comandoCentral.client.publish("lan/comando/all", "START");
    console.log("En 15 segundos dejo de tomar datos.");

    setTimeout(() => {
      comandoCentral.client.publish("lan/comando/all", "STOP");
    }, 15000);
  }, 5000);
});

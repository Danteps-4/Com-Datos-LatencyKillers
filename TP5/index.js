const mqtt = require('mqtt');
const { Publisher } = require('./utils/publisher');
const { Suscriber } = require('./utils/suscriber');

const host = '8c73411f8fe14bb2968b57754537a966.s1.eu.hivemq.cloud';
const port = 8883;


// Estos son los que creaste vos en HiveMQ (CONFIG → Access Management)
const username = 'latency';
const password = 'Dgf_6YB8aSNCALG';

const deviceA = new Publisher();
deviceA.init({
    host,
    port,
    username,
    password,
    topic: 'lan/deviceA/status',
    nombreCliente: 'Dispositivo A',
    interval: 500,
    fnDatoSimulado: () => 'ON',
})

const deviceB = new Suscriber();
deviceB.init({
    host,
    port,
    username,
    password,
    topic: 'lan/deviceA/status',
    nombreCliente: 'Dispositivo B',
    fnOnMessage: (topic, message) => {
        console.log(`--> Dispositivo B recibió mensaje en ${topic}: ${message.toString()}`);
    }
})

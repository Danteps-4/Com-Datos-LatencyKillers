const mqtt = require('mqtt');
const { Publisher } = require('./utils/publisher');
const { Suscriber } = require('./utils/suscriber');

const host = '8c73411f8fe14bb2968b57754537a966.s1.eu.hivemq.cloud';
const port = 8883;


// Estos son los que creaste vos en HiveMQ (CONFIG → Access Management)
const username = 'latency';
const password = 'Dgf_6YB8aSNCALG';

const central = new Publisher();
central.init({
    host,
    port,
    username,
    password,
    topic: 'lan/broadcast/all',
    nombreCliente: 'Central',
    interval: 500,
    fnDatoSimulado: () => 'ON',
})

const cliente1 = new Suscriber();
cliente1.init({
    host,
    port,
    username,
    password,
    topic: 'lan/broadcast/#',
    nombreCliente: 'Cliente 1',
    fnOnMessage: (topic, message) => {
        console.log(`--> Cliente 1 recibió mensaje en ${topic}: ${message.toString()}`);
    }
})

const cliente2 = new Suscriber();
cliente2.init({
    host,
    port,
    username,
    password,
    topic: 'lan/broadcast/#',
    nombreCliente: 'Cliente 2',
    fnOnMessage: (topic, message) => {
        console.log(`--> Cliente 2 recibió mensaje en ${topic}: ${message.toString()}`);
    }
})

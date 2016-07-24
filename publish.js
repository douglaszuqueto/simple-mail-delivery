const amqp = require('amqplib/callback_api');
const config = require('./config/rabbitmq');

module.exports = (message) => {
    amqp.connect(config.url, (err, conn) => {
        conn.createChannel((err, ch) => {
            let q = 'mensagem';

//            ch.assertQueue(q, {durable: false});
            ch.sendToQueue(q, new Buffer(JSON.stringify(message)));
            console.log(" [x] Sent ", message);
        });
    });


};

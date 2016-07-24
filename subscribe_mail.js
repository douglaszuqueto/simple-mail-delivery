const amqp = require('amqplib/callback_api');
const sendMail = require('./sendMail');
const config = require('./config/rabbitmq');

amqp.connect(config.url, (err, conn) => {
    conn.createChannel((err, ch) => {
        let q = 'mensagem';

//        ch.assertQueue(q, {durable: false});

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
        ch.assertQueue(q);
        ch.consume(q, (msg) => {

            let mensagem = JSON.parse(msg.content.toString());
            console.log(mensagem);

            sendMail(mensagem, (err, res) => {
                if (!err) {
                    console.log(res);
                    ch.ack(msg);
                }
            });
            //ch.ack(msg);

            // }, {noAck: true});
        });
    });
});


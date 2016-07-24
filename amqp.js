const amqp = require('amqp');
const sendMail = require('./sendMail');
const config = require('./config/rabbitmq');

let conn = amqp.createConnection({host: '192.168.33.80'});

conn.on('error', (e) => {
    console.log('Erro: ', e)
});

conn.on('ready', () => {

    conn.queue('mensagem', {durable: true, autoDelete: false}, (q) => {

        q.bind('*');
        q.subscribe((message) => {

            let mensagem = JSON.parse(message.data.toString());

            // Send Mail
            sendMail(mensagem, (err, res) => {
                if (!err) {
                    console.log(res);
                }
            });

        });
    });

});

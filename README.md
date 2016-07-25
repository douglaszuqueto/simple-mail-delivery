# Aplicação simples para envio de email.

 * Envio utilizando o SMTP do Google
 * NodeJS
   * API
   * Pacote NodeMailer
   * Pacote amqp.node
 * RabbitMQ para gerenciamento de filas

## Instalação
 * git clone https://github.com/douglaszuqueto/simple-mail-delivery.git
 * cd simple-mail-delivery
 * npm install

## Configuração
 * Crie uma senha do Aplicativo aqui -> [Link](https://security.google.com/settings/security/apppasswords).
 * Exporte sua key gerada pelo Google em seu terminal -> **export MAIL_KEY=SUA_KEY_GERADA**.
 * No arquivo **config/email.js**, altere o email para o seu.
 
## Rodando o Projeto Localmente
 * É Necessário ter o RabbitMQ instalado em seu computador, segue o [link](https://www.rabbitmq.com/download.html) de referência
 * No arquivo **config/rabbitmq.js**, altere a url amqp://**SEU_IP** de acordo com seu IP.
 * Execute o app principal: **npm start**
 * Em outro terminal, execute o arquivo amqp.js, **node amqp.js** - o qual é responsável por ficar escutando os eventos, e assim que receber uma nova mensagem, enviará o email.

## Rodando o projeto em Containers Docker
 * Somente rode o comando **docker-compose up**

## Testando o Exemplo
 * Para o teste, recomendo o uso do [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)
 
 * Escolha o Método **POST** e escolha a opção **x-www-form-urlencoded**
 * Recurso SEND: **http://SEU_IP/mail/send**
  * Entrada dos Dados
     
      ```json
          from: SEU_EMAIL,
          to: DESTINATÁRIO,
          subject: ASSUNTO,
          text: TEXTO,
          html: HTML
      ```

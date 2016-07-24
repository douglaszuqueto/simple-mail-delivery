const express = require('express');
const router = express.Router();
const queue = require('../publish');


router.post('/send', (req, res) => {

    const data = req.body;
    let message = {

        from: data.from,
        to: data.to,
        subject: data.subject,
        text: data.text,
        html: data.html

    };

    queue(message);

    return res.json(message);

});

module.exports = router;
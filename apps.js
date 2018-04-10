const express = require('express');
const app = express()
const port = 3000;

// allows us to process submitted form data
app.use(express.urlencoded({extended: true}));

app.post('/', function(req, res) {
  var name = req.body.user_name;
  var message = req.body.user_message;
  var email = req.body.user_mail;
  var {cell, homepage, preferred_communication_method, devices, message_subject} = req.body;

  console.log("Name: " + name);
  console.log("Message: " + message);
  console.log("E-Mail: " + email);

  res.send(`
    <h1>Thanks ${name}!</h1>
    <p>We received your message below, and will get back to you at <strong>${email}</strong>.</p>
    <blockquote>${message}</blockquote>
    `);
});

app.listen(port);
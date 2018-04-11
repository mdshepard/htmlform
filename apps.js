const express = require('express');
const app = express()
const port = 3000;

// allows us to process submitted form data
app.use(express.urlencoded({extended: true}));

//I left the name, message and email vars the way they are so I could go back, reread it and be reminded of a simpler syntax.
app.post('/', function(req, res) {
  var name = req.body.user_name;
  var message = req.body.user_message;
  var email = req.body.user_mail;
  var {cell, homepage, preferred_communication_method, devices, message_subject, date} = req.body;

  console.log("Name: " + name);
  console.log("Message: " + message);
  console.log("E-Mail: " + email);
  console.log("Preferred Communication Method: " + preferred_communication_method);

  res.send(`
    <h1>Thanks ${name}!</h1>
    <p>We received your message below on <strong>${date}</strong>, and will get back to you via <strong>${preferred_communication_method}</strong>.</p>
    <blockquote>${message}</blockquote>
    `);
});

app.listen(port);
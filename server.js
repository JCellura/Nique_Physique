const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });

}

app.post("/api/form", (req,res) => {
    console.log(req.body);

    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
        `
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            // port: 465,
            // secure: true, // true for 465, false for other ports
            auth: {
                user: "cellura.joseph@gmail.com", // generated ethereal user
                pass: "Blind123" // generated ethereal password
            }
        });

        let mailOptions = {
            from: '"Nique Physique" <Nique@gmail.com>',
            // from: req.body.email,
            to: "cellura.joseph@gmail.com",
            replyTo: req.body.email,
            subject: "New Message From Website",
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err);
            }
            console.log(`Message Sent: %s`, info.messageId);
            console.log(`Message URL: %s`, nodemailer.getTestMessageUrl(info));
        })

    })

})


app.listen(PORT, () => {
    console.log(`Server Listening on Port ${PORT}`)
});
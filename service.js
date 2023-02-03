//import modules installed at the previous step. We need them to run Node.js server and send emails
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
// create a new Express application instance
const app = express();
//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors({origin: "*" }));
app.use(bodyParser.json());
//start application server on port 3000
app.listen(3000, () => {
  console.log("The server started on port 3000");
});
// define a sendmail endpoint, which will send emails and response with the corresponding status
// app.post("/sendmail", (req, res) => {
//   console.log("request came");
//   let user = req.body;
//   sendMail(user, (err, info) => {
//     if (err) {
//       console.log(err);
//       res.status(400);
//       res.send({ error: "Failed to send clearemail" });
//     } else {
//       console.log("Email has been sent");
//       res.send(info);
//     }
//   });
// });
// const sendMail = (user, callback) => {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: "dheeraj.19bcn7030@vitap.ac.in",
//         pass: "19bcn7030@D"
//       }
//     });
//   }
//   const mailOptions = {
//     from: `"P Krishna Dheeraj", "dheeraj.19bcn7030@vitap.ac.in"`,
//     to: `saisuryadheeru@gmail.com`,
//     subject: "<Message subject>",
//     html: "<h1>And here is the place for HTML</h1>"
//   };
//   transporter.sendMail(mailOptions, callback);
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
      port: 465,
      // secure: true,
      auth: {
        user: "admiresecret71@gmail.com",
        pass: "pijgmkjbemfhcxrj"
      }
    // service: "google",
    // // host:"smtp.office365.com",
    // // port:587,
    // // secureConnection: false,
    // auth: {
    //   user: "admiresecret71@gmail.com",
    //   pass: "mobile123456",
    // },
  });
  
  function send_mail(to, subject, body, callback) {
    // send email
    let send_to = {
      from: "admiresecret71@gmail.com",
      to: to,
      subject: subject,
      html: body,
    };
    // console.log(send_to);
    transporter.sendMail(send_to, function (error, info) {
      // console.log(info);
      if (error) {
        console.log(error);
        return;
      }
      console.log("Sent: ");
    });
  }

  app.post("/sendmail", (req, res) => {
  console.log("request came");
//   let user = req.body;
  let to = "saisuryadheeru@gmail.com";
  let subject = "something";
  let bod = "<h1>Hello</h1>"
  send_mail(to, subject, bod, (err, data) => {
    console.log(data);
  });
  res.status(200).send({
    status: 200,
    success: true,
    message: "User created.",
    data: "Success",
  });
});
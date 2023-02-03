var express = require('express');
var router = express.Router();
const { Client } = require('pg');
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const fs = require("fs");
const saltRounds = 10;
const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Finserv@2023",
    database: "news-app"
});
client.connect();

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
    attachments: [
      {
        filename: "64951510234941531.png",
        path: __dirname + "/../images/64951510234941531.png",
        cid: "64951510234941531",
      },
      {
        filename: "facebook-logo-black.png",
        path: __dirname + "/../images/facebook-logo-black.png",
        cid: "facebook-logo-black",
      },
      {
        filename: "following_2.gif",
        path: __dirname + "/../images/following_2.gif",
        cid: "following_2",
      },
      {
        filename: "group_10_DPF.png",
        path: __dirname + "/../images/group_10_DPF.png",
        cid: "group_10_DPF",
      },
      {
        filename: "instagram-logo-black.png",
        path: __dirname + "/../images/instagram-logo-black.png",
        cid: "instagram-logo-black",
      },
      {
        filename: "pinterest-logo-black.png",
        path: __dirname + "/../images/pinterest-logo-black.png",
        cid: "pinterest-logo-black",
      },
      {
        filename: "telegram-logo-black.png",
        path: __dirname + "/../images/telegram-logo-black.png",
        cid: "telegram-logo-black",
      },
      {
        filename: "tiktok-logo-black.png",
        path: __dirname + "/../images/tiktok-logo-black.png",
        cid: "tiktok-logo-black",
      },
      {
        filename: "twitter-logo-black.png",
        path: __dirname + "/../images/twitter-logo-black.png",
        cid: "twitter-logo-black",
      },
      {
        filename: "youtube-logo-black.png",
        path: __dirname + "/../images/youtube-logo-black.png",
        cid: "youtube-logo-black",
      },
    ],
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

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getUser',(req,res)=>{
  client.query("select * from users", (err, data) => {
      if(!err) {
          res.send(data.rows);
      }
      else{
        console.log(err);
      }
  })
})

router.post('/newUser',(req,res)=>{
  // console.log(req.body);
  // console.log(`insert into users values('${req.body.name}','${req.body.password}','${req.body.email}',${eval(req.body.phone)},'${req.body.preferences}')`);
  client.query(`select * from users where email = '${req.body.email}'`,async (err,data)=>{
    if(!err){
      if(data.rows[0]==null){
        console.log(req.body);
        let hashPass = await bcrypt.hash(req.body.password, saltRounds);
        req.body.password = hashPass;
        var token = jwt.sign({ data: req.body.email }, "D23s2vsj6BRyFUKomxWW", {
          expiresIn: 15552000, // in seconds
        });
        client.query(`insert into users values('${req.body.name}','${req.body.password}','${req.body.email}','${req.body.phone}','${req.body.preferences}');`,(err,data)=>{
          if(!err){
            // res.send("User created successfully");
            fs.readFile(
              "./index.html",
              "utf8",
              function (err, bod) {
                let subject="You have subscribed to News-App";
                let to=req.body.email;
                bod = bod.replace("{{user_name}}", req.body.name);
                send_mail(to, subject, bod, (err, data) => {
                  console.log(data);
                });
                res.status(200).send({
                  status: 200,
                  success: true,
                  message: "User created.",
                  data: "Success",
                });
              }
            );
            // send_mail(to, subject, bod, (err, data) => {
            //   console.log(data);
            // });
          }
          else{
            res.send(err)
          }
        })
        // console.log("here");
      }
      else{
        console.log("user already exists")
      }
    }
    else{
      console.log(err);
    }
  })
})

router.post('/deleteUser',(req,res)=>{
  client.query(`select * from users where email = '${req.body.email}'`,(err,data)=>{
    if(!err){
      if(data.rows[0]!=null){
        client.query(`delete from users where email = '${req.body.email}';`,(err,data)=>{
          if(!err){
            res.send("User deleted successfully");
          }
          else{
            res.send(err)
          }
        })
        // console.log("here");
      }
      else{
        console.log("user doesn't exists")
      }
    }
    else{
      console.log(err);
    }
  })
})

router.post('/adminMail',(req,res)=>{
  let subject=req.body.subject;
  let bod=req.body.bod;
  let to="hardikgarg01@gmail.com";
  send_mail(to, subject, bod, (err, data) => {
    console.log(data);
  });
})

module.exports = router;

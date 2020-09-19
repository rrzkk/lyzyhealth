const express = require('express');
const path = require('path');
//const cluster = require('cluster');
//const numCPUs = require('os').cpus().length;

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;

const bodyParser = require("body-parser");
const { createDecipher } = require('crypto');

  
  const app = express();
  app.use(bodyParser.json());


  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  // Answer API requests.


  const mysql = require('mysql');
  const connection = mysql.createConnection('mysql://bdc826fff72f21:63713686@us-cdbr-east-02.cleardb.com/heroku_4cf6028dd328a70?reconnect=true');

  // const connection = mysql.createConnection({
  // host     : 'localhost',
  // user     : 'bbf1b2354da5c3',
  // password : 'a06d34c7',
  // database : 'mysql://bbf1b2354da5c3:a06d34c7@us-cdbr-east-02.cleardb.com/heroku_4b9b2690911366b?reconnect=true'
  // });


  app.get(
    '/api/allchallenge', function (req, res) {

      connection.query(
        "select * from challenge",
        function (err, result, fields) {
          res.send(result);

        });
    });


  app.get(
    '/api/information', function (req, res) {

      connection.query(
        "SELECT * FROM information limit 6",
        function (err, result, fields) {
          res.send(result);

        });
    });

  app.get(
    '/api/newchallenges', function (req, res) {

      connection.query(
        "SELECT * FROM challenge2",
        function (err, result, fields) {
          res.send(result);

        });
    }
  );

  app.get(
    '/api/verifyuser',function(req,res){
      connection.query(
        "SELECT * FROM USERS WHERE username = ? limit 1",[req.query.username],
        function(err,result,fields){
          res.send(result)
        }
      );

    }
  );

  app.post(
    '/api/createuser',function(req,res){
      const username=req.body.username;
      const password=req.body.password;
     
      connection.query(
        "INSERT INTO USERS VALUES (?,?)",[username,password],
        function(err,result,fields){
          res.send('created');
        }
      );
    }
  );

  app.post(
    '/api/userchallenge',function(req,res){
      const username=req.body.username;
      const datetime=req.body.datetime;
     
      connection.query(
        "INSERT INTO USERCHALLENGE VALUES (?,?)",[username,datetime],
        function(err,result,fields){
          res.send('posted');
        }
      );
    }
  );

  app.get(
    '/api/getuserchallenge',function(req,res){
      connection.query(
        "SELECT * FROM USERCHALLENGE WHERE username = ?",[req.query.username],
        function(err,result,fields){
          res.send(result)
        }
      );

    }
  );
  app.get(
    '/api/getalluc',function(req,res){
      connection.query(
        "SELECT username,count(*) AS count FROM USERCHALLENGE GROUP BY username ORDER BY count desc",
        function(err,result,fields){
          res.send(result)
        }
      );

    }
  );




  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node ${isDev ? 'dev server' : 'cluster worker ' + process.pid}: listening on port ${PORT}`);
  });

//getuserchallenge

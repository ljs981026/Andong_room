const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const port = 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();


app.get('/', (req,res) => {
  res.send('hello');
});

app.get('/api/sol_room', (req, res) => {
  connection.query(
    "SELECT * FROM ANDONG_ROOM1",
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});

app.get('/api/non_room', (req, res) => {
  connection.query(
    "SELECT * FROM ANDONG_ROOM2",
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});

app.get('/api/and_food', (req, res) => {
  connection.query(
    "SELECT * FROM FOOD",
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});

app.get('/api/and_alchole', (req, res) => {
  connection.query(
    "SELECT * FROM ALCHOL",
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});

app.get('/api/and_play', (req, res) => {
  connection.query(
    "SELECT * FROM PLAY",
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});

app.get('/api/and_convinience', (req, res) => {
  connection.query(
    "SELECT * FROM CONVINIENCE",
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});

app.listen(port, () => console.log(`${port}번에 연결`));


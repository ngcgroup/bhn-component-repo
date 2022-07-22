const express = require('express')
const https = require('https')
const fs = require('fs')

var cookies = require("cookie-parser");
const path = require('path');
const dotenv = require('dotenv');
const session = require('express-session');
const bodyParser = require('body-parser');
const Keycloak = require('keycloak-connect');



const cors = require('cors');
const DataDome = require('@datadome/node-module');

const environment = process.env.NODE_ENV;
dotenv.config({
    path: path.join(__dirname, `.env-${environment}`)
});

const datadomeClient = new DataDome(process.env.DATADOME_SERVER_KEY, process.env.DATADOME_SERVER_HOST);




const app = express()
const port = 8443
const httpport = 8080

app.use(cookies());
app.use(cors({
  credentials: true,
  origin: [ 'http://localhost:6005', 'http://localhost:6006', 'https://designsystem.internal.bhn.technology'] 
}));



const memoryStore = new session.MemoryStore();
var keycloak = new Keycloak({ store: memoryStore });


app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}));

app.use(express.urlencoded({extended: true}));
app.use(keycloak.middleware());


// View Engine
app.use(express.static(__dirname + '/../storybook-static'));

app.use(function(req, resp, next) {
  var captcha=req.headers['captcha'];
  if ( captcha == 'true' ) {
    req.headers['user-agent'] = 'BLOCKUA';
  }
  datadomeClient.authCallback(req, resp, function() {
      // apiserver passed request, move forward
      next();
  }, function() {
      // nothing to do when blocked
  });
});

var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  var captcha=req.headers['captcha'];
  if ( captcha == 'true' ) {
    req.headers['user-agent'] = 'NOUA';
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}
app.get('/config', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ client_key: process.env.DATADOME_CLIENT_KEY }));
});

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api', (req, res) => {

  var captcha=req.headers['captcha'];
  //if ( captcha == 'true' ) {
    //res.status(403).render();
  //  res.status(403).send({message: "You do not have rights to visit this page"});
  //}else {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: req.query.foo }));
  //}
  
})

/*app.listen(httpport, () => {
  console.log(`Example app listening on port ${httpport}`)
})
*/

https.createServer({key: fs.readFileSync('certs/tls.key'),
cert: fs.readFileSync('certs/tls.crt')}, app).listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//route protected with Keycloak 
app.get('/test', keycloak.protect(), function(req, res){
  res.json({message: 'secured'});

});
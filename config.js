const mongoose = require('mongoose');
//const usuario = "artemiohernandezcastillo01"
//const password ="7Y8bSCwg5Fy83xzq"
const dbName = "apis_palabra"
var username = encodeURIComponent("artemiohernandezcastillo01");
var password = encodeURIComponent("7Y8bSCwg5Fy83xzq");

const uri = `mongodb+srv://${username}:${password}@cluster0.swes5.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))
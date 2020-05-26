
const http = require('http');
const port = process.env.port || 9992;
const app = require('./app');
const mongodb = require('mongoose');

const serverUri = 'http://localhost:' + port;
const mongoUri = 'mongodb+srv://Anton:Ae920120@cluster1-m2btb.mongodb.net/productdb?authSource=admin&replicaSet=Cluster1-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';


// webserver
http.createServer(app).listen(port, () => console.log('WEBSERVER: ' + serverUri))

// mongodb
mongodb.set('useCreateIndex', true).connect(mongoUri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MONGODB: Running'))



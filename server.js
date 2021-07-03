const express = require('express');
const path = require('path');
const json = require("json-server")
const server=json.create()
const route=json.router("db.json")
const middleware=json.defaults();

server.use(middleware)
server.use(route)
server.listen(process.env.PORT || 3000)

const app = express();

// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/dist/shopbridge'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

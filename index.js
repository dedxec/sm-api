const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser=require('body-parser');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
//db setup

mongoose.connect('mongodb://santbhindranwale:waheguru@ds161410.mlab.com:61410/salesmanager')

//app setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type : '*/*' }));
router(app);

//server setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log("server running at",port);
console.log(process.env.PORT);

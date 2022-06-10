const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8700

// log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))
app.use(express.urlencoded());
// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

//app.use(express.static("asset"));
//app.use(express.static("views"));

// load assets
app.use('/css', express.static(path.resolve(__dirname, "asset/css")))
app.use('/img', express.static(path.resolve(__dirname, "asset/img")))
app.use('/js', express.static(path.resolve(__dirname, "asset/js")))
app.use(express.static("views"));
// load routers
app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});
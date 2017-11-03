var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

//database initialization
require("./db");
const mongoose = require("mongoose");
const Item = mongoose.model("Item");
const Request = mongoose.model("Request");
const User = mongoose.model("User");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
	res.redirect("/home");
});

app.get("/home", (req, res) => {
	res.send("Home page");
});

app.get("/calendar", (req, res) => {
	res.send("calendar");
});

app.get("/reserve", (req, res) => {
	res.send("reserve");
});

app.get("/reserve/past", (req, res) => {
	res.send("past reservations");
});

app.get("/login", (req, res) => {
	res.send("login / registration");
});

app.get("/admin", (req, res) => {
	res.send("admin controls");
});

app.listen(3000);
















"use strict";

// 모듈
const express = require("express");
const app = express();

const PORT = 3000;

// 라우팅
const home = require("./src/routes/home");

// 앱 뷰 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs"); // ejs ; html과 비슷

app.use("/", home); // use -> 미들웨어를 등록하는 메서드

module.exports = app; // app을 내보낼 것이다!


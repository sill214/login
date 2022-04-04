"use strict";

function hello(req, res) {
    // 브라우저로 root 경로로 들어오면 기능을 해주겠다
    res.render("home/index");
};

// 위의 함수와 동일
// const hello = (req, res) => {
//     res.render("home/index");
// };

function login(req, res) {
        res.render("home/login");
};


module.exports = {
    hello, // key : value 로 설정하는게 일반적이지만 key=value 일 경우, key만 써줘도 무방!(EC6)
    login,
};
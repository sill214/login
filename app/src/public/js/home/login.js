"use strict";

// DOM -> Document Object Model; html에 존재하는 데이터를 가져와서 제어 가능함

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener('click', login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };
};
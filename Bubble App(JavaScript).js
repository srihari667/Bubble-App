let circle1El = document.getElementById("circle1");
let circle2El = document.getElementById("circle2");
let circle3El = document.getElementById("circle3");
let circle4El = document.getElementById("circle4");
let container1El = document.getElementById("c1");
let container2El = document.getElementById("c2");
let container3El = document.getElementById("c3");
let container4El = document.getElementById("c4");
let resetBtnEl = document.getElementById("resetButton");

circle1El.onclick = function() {
    circle1El.style.backgroundColor = "gray";
    container1El.style.justifyContent = "start";
};
circle2El.onclick = function() {
    circle2El.style.backgroundColor = "gray";
    container2El.style.justifyContent = "start";
};
circle3El.onclick = function() {
    circle3El.style.backgroundColor = "gray";
    container3El.style.justifyContent = "start";
};
circle4El.onclick = function() {
    circle4El.style.backgroundColor = "gray";
    container4El.style.justifyContent = "start";
};


resetBtnEl.onclick = function() {
    circle1El.style.backgroundColor = "#e6d75c";
    container1El.style.justifyContent = "space-between";

    circle2El.style.backgroundColor = "#396cf7";
    container2El.style.justifyContent = "space-between";

    circle3El.style.backgroundColor = "#bd152b";
    container3El.style.justifyContent = "space-between";

    circle4El.style.backgroundColor = "#1e8746";
    container4El.style.justifyContent = "space-between";
};
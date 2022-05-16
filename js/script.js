

let counter = 0;
let upgradeOne = 1;
let upgradeTwo = 0;
let counterHTML = document.getElementById('theCounter');

let clicker = document.getElementById('clickImage').addEventListener('click',() => {
    counter += 1;
    counterHTML.innerHTML = counter;
});
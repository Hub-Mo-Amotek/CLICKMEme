

let counter = 0;
let upgradeOne = 1;
let upgradeTwo = 0;
let counterHTML = document.getElementById('theCounter');
let clickPower = document.getElementById('clickPower');


// the first upgrade button
let upgraderOne = document.getElementById('click-plus').addEventListener('click', () => {
    upgradeOne += 1;
    clickPower.innerHTML = upgradeOne;

});

// the incrementor
let clicker = document.getElementById('clickImage').addEventListener('click',() => {
    counter += upgradeOne;
    counterHTML.innerHTML = counter;
});




let counter = 0;
let upgradeOne = 1;
let upgradeTwo = 0
let counterHTML = document.getElementById('theCounter');
let clickPower = document.getElementById('clickPower');
let autoClickCounter = document.getElementById('auto-click-counter');



// the first upgrade button
let upgraderOne = document.getElementById('click-plus').addEventListener('click', () => {
    upgradeOne += 1;
    clickPower.innerHTML = upgradeOne;
});

// the second upgrade button
let upgraderTwo =  document.getElementById('auto-clicker').addEventListener('click', () => {
    setInterval(() => {
        counterHTML.innerHTML = counter += 1;
    },1000);
    upgradeTwo += 1
    autoClickCounter.innerHTML = upgradeTwo;
});




// the incrementor
let clicker = document.getElementById('clickImage').addEventListener('click',() => {
    counter += upgradeOne;
    counterHTML.innerHTML = counter;
});


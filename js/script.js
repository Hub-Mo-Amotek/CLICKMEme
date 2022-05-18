
//variables
let counter = Math.round(0);
let upgradeOne = 1;
let upgradeTwo = 0
let counterHTML = document.getElementById('theCounter');
let clickPower = document.getElementById('clickPower');
let autoClickCounter = document.getElementById('auto-click-counter');
let memeHolder = document.getElementById('the-meme-holder');
let pickleImageHolder = document.getElementById('clickImage');
let priceOne = 50;
let priceTwo = 100;
let priceThree = 500;
let priceFour = 300;





// meme pic array
let theMemes = ["memeImages/DogVsCat.png", "memeImages/CuteKitty.png","memeImages/ClarkKentProblems.png","memeImages/ChildHoodGoku.png","memeImages/ConfusedOprah.png","memeImages/scottBitch.png","memeImages/ChipmunksVersion.png","memeImages/SaminaMinaEhEH.png","memeImages/YeetWaiter.png","memeImages/Dreams.png","memeImages/ShittyToShitty.png","memeImages/RealityChecker.png","memeImages/FastBanana.png","memeImages/NoNotificationForMe.png","memeImages/GrowingUpForGamers.png","memeImages/GrowingUpForGamers.png","memeImages/ThingsIDo.png","memeImages/CountryAndMe.png","memeImages/EmbraceTradition.png","memeImages/ShowerProblems.png","memeImages/SatanWorkingAtYT.png","memeImages/WhatSchoolTeachesYou.png"]



// the first upgrade button
let upgraderOne = document.getElementById('click-plus').addEventListener('click', () => {
    if (counter > priceOne){ 
        counter -= priceOne;
        counterHTML.innerHTML = Math.round(counter);
        if (priceOne > 1000) {
            priceOne *= 1.1
        }
        else if (priceOne > 500){
            priceOne *= 1.2;
        }
        else {
            priceOne *= 1.4;
        }
        document.getElementById('price-one').innerHTML = Math.round(priceOne) + ' SMH';
        upgradeOne += 1;
        clickPower.innerHTML = upgradeOne;
    }
    else {
        alert("you are poor, go get them Schmeckles!!")
    }
});

// the second upgrade button
let upgraderTwo =  document.getElementById('auto-clicker').addEventListener('click', () => {

    if(counter > priceTwo) {
        counter -= priceTwo;
        if (priceTwo > 1000) {
            priceTwo *= 1.1;
        }
        else if (priceTwo > 500) {
            priceTwo *= 1.2;
        }
        else {
            priceTwo *= 1.4;
        }
        document.getElementById('price-two').innerHTML = Math.round(priceTwo) +' SMH'
        setInterval(() => {
            counterHTML.innerHTML = Math.round(counter += 1);
        },1000);
        upgradeTwo += 1
        autoClickCounter.innerHTML = upgradeTwo;
    }
    else {
        alert("you are poor, go get them Schmeckles!!")
    }

});
// the third upgrade button
let upgraderThree = document.getElementById('meme-clicker').addEventListener('click', () => {

    if (counter > priceThree) {
        counter -= priceThree;
        counterHTML.innerHTML = Math.round(counter);
        if (priceThree > 1000) {
            priceThree *= 1.1;
        }
        else if (priceThree > 500) {
            priceThree *= 1.2
        }
        else {
            priceThree *= 1.4;
        }
        document.getElementById('price-three').innerHTML = Math.round(priceThree) + ' SMH'
        let randomNum = Math.floor(Math.random()*theMemes.length);
        let randomMeme = theMemes[randomNum];
        memeHolder.setAttribute('src', randomMeme);
        let imgOne = document.createElement('img');
        imgOne.setAttribute('src', randomMeme);
        let memeCollection = document.getElementById('collected-memes');
        memeCollection.append(imgOne);    
    }
    else {
        alert("you are poor, go get them Schmeckles!!")
    }
})



// the incrementor
let clicker = document.getElementById('clickImage').addEventListener('click',() => {
    counter += upgradeOne;
    counterHTML.innerHTML = Math.round(counter);
});

/* the portal --> make this change background and fontcolor( like entering another dimension) with a timer on top that counts 30s and all clicks are current schmeckle power * 10 and meeseeks produce 10x more schmeckles */

let bonusPortal = document.getElementById('portal-entrance').addEventListener('click', () => {
    if (counter > priceFour) {
        counter -= priceFour;
        priceFour *= 2;
        
        let timeLeft = 30;
        let timerPlace = document.getElementById('timer');
        let timerTextPlace = document.getElementById('timerDiv');
    
        let timerId = setInterval(countdown, 1000);
        function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            timerTextPlace.setAttribute('hidden', '')
            pickleImageHolder.setAttribute('src', 'images/pickle-rick-from-rick-and-morty-clipart-rick-and-morty-pickle-rick-plant-food-produce-green-transparent-png-1450754.png')
            pickleImageHolder.setAttribute('width', '150rem');
            upgradeOne = 1;

        }
        else {
            timerTextPlace.removeAttribute('hidden');
            timerPlace.innerHTML = timeLeft;
            timeLeft--;
            pickleImageHolder.setAttribute('src', 'images/SuperSayanPickleRick.png.png');
            pickleImageHolder.setAttribute('width', '320rem');
            upgradeOne = 100;

        }

        }
    }
    else {
        alert("you are poor, go get them Schmeckles!!")
    }
})



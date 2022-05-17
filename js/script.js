
//variables
let counter = 0;
let upgradeOne = 1;
let upgradeTwo = 0
let counterHTML = document.getElementById('theCounter');
let clickPower = document.getElementById('clickPower');
let autoClickCounter = document.getElementById('auto-click-counter');
let memeHolder = document.getElementById('the-meme-holder');
let priceOne = 100;
let priceTwo = 1000;
let priceThree = 2000;



// meme pic array
let theMemes = ["../memeImages/DogVsCat.png", "../memeImages/CuteKitty.png","../memeImages/ClarkKentProblems.png","../memeImages/ChildHoodGoku.png","../memeImages/ConfusedOprah.png","../memeImages/scottBitch.png","../memeImages/ChipmunksVersion.png","../memeImages/SaminaMinaEhEH.png","../memeImages/YeetWaiter.png","../memeImages/Dreams.png","../memeImages/ShittyToShitty.png","../memeImages/RealityChecker.png","../memeImages/FastBanana.png","../memeImages/NoNotificationForMe.png","../memeImages/GrowingUpForGamers.png","../memeImages/GrowingUpForGamers.png","../memeImages/ThingsIDo.png","../memeImages/CountryAndMe.png","../memeImages/EmbraceTradition.png","../memeImages/ShowerProblems.png","../memeImages/SatanWorkingAtYT.png","../memeImages/WhatSchoolTeachesYou.png"]



// the first upgrade button
let upgraderOne = document.getElementById('click-plus').addEventListener('click', () => {
    console.log(counter);
    console.log(priceOne);

    if (counter > priceOne){ 
        counter -= priceOne;
        priceOne *= 2;
        document.getElementById('price-one').innerHTML = priceOne + ' SMH';
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
        priceTwo *= 2;
        document.getElementById('price-two').innerHTML = priceTwo +' SMH'
        setInterval(() => {
            counterHTML.innerHTML = counter += 1;
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
        priceThree *= 2;
        document.getElementById('price-three').innerHTML = priceThree + ' SMH'
        let randomNum = Math.floor(Math.random()*theMemes.length);
        let randomMeme = theMemes[randomNum];
        memeHolder.setAttribute('src', randomMeme);
    }
    else {
        alert("you are poor, go get them Schmeckles!!")
    }
})




// the incrementor
let clicker = document.getElementById('clickImage').addEventListener('click',() => {
    counter += upgradeOne;
    counterHTML.innerHTML = counter;
});


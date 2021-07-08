var randomNumber = Math.floor(Math.random()*6);
var randomNumber2= Math.floor(Math.random()*6);
var dice = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"];


function pickUpDiceFace(randomNumber, dice){
    
    var  choosenDiceFace = dice[randomNumber];
    var stringDice =document.querySelector('.img1').src="images/"+choosenDiceFace+".png";

    return stringDice;
}

function pickUpDiceFace2(randomNumber2, dice){
    
    var  choosenDiceFace = dice[randomNumber2];
    var stringDice2 =document.querySelector('.img2').src="images/"+choosenDiceFace+".png";

    return stringDice2;
}

pickUpDiceFace(randomNumber,dice);
pickUpDiceFace2(randomNumber2,dice);

if(randomNumber<randomNumber2){
    document.querySelector("h1").textContent="Player 2 win !";
}
else if(randomNumber>randomNumber2){
    document.querySelector("h1").textContent="Player 1 win !";
}else{
    document.querySelector("h1").textContent="Draw !";
}

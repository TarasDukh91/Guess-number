"strict mode"

const button = document.getElementById("button").addEventListener("click", startGame);


let endGame = 4;
function startGame(){
    const fromNumber = parseInt(prompt("Enter First Number"));
    const secondNumber = parseInt(prompt("Enter Second number"));
    console.log(fromNumber);
    console.log(secondNumber);
    let secondResult = secondNumber + 10;
    if(!fromNumber){
        alert("First number wrong");
    } else if (!secondNumber) {
        alert("Second number wrong");
    }
    if(fromNumber < secondResult) {
        const randomNumber = Math.floor(Math.random() * (secondNumber - fromNumber + 1)) + fromNumber;
        let numberToGuess = parseInt(prompt(`Guess a number from ${fromNumber} to  ${secondNumber}`));
        console.log(randomNumber);
        console.log(numberToGuess);
        if(numberToGuess === randomNumber) {
            alert ("You win!!!");
            confirm("Wnt to play again?")
            if(confirm){
                startGame();
            }
        } else if(numberToGuess !== randomNumber) {
            endGame -= 1
            alert (`${endGame} tries left`);
        }
        if(endGame === 0) {
            alert ("You loose")
            confirm("Wnt to play again?")
            if(confirm){
                startGame();
            }
        
        }  
    }
}

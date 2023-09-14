let money = 1000;
let headOrTailEnabled = false;
let correctNumber;
let historyTable = document.getElementById("historyTable");

function updateMoney() {
    document.getElementById("moneyText").innerHTML = "Money: $" + money;
}

function generateNewCorrectNumber() {
    correctNumber = Math.floor(Math.random() * 100) + 1;
}

function updateHistory(guess) {
    const newRow = historyTable.insertRow(1);
    const guessCell = newRow.insertCell(0);
    
    guessCell.innerHTML = guess;
}

function resetHistory() {
    while (historyTable.rows.length > 1) {
        historyTable.deleteRow(1);
    }
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById("guessInput").value);

    if (!correctNumber) {
        generateNewCorrectNumber();
    }

    if (userGuess === correctNumber) {
        money += 1000;
        document.getElementById("resultText").innerHTML = "Congratulations! You won $1000!";
        correctNumber = null;
        resetHistory();
    } else {
        money -= 100;
        if (userGuess < correctNumber) {
            document.getElementById("resultText").innerHTML = "Sorry, your guess is too low. Try again.";
        } else {
            document.getElementById("resultText").innerHTML = "Sorry, your guess is too high. Try again.";
        }
    }

    updateMoney();
    updateHistory(userGuess);
    
    if (money <= 0 && !headOrTailEnabled) {
        headOrTailEnabled = true;
        document.getElementById("resultText").innerHTML = "You've run out of money! Guess the head or tail to continue.";
    }
    
    if (headOrTailEnabled && money <= 0) {
        playHeadOrTail();
    }
}

function playHeadOrTail() {
    while (headOrTailEnabled) {
        const headOrTail = Math.random() < 0.5 ? "Head" : "Tail";
        const userChoice = prompt("Guess the head or tail (type 'Head' or 'Tail'):").toLowerCase();

        if (userChoice === headOrTail.toLowerCase()) {
            money += 100;
            headOrTailEnabled = false;
            alert("Congratulations! You guessed the " + headOrTail + ". You've won $100.");
        } else if (userChoice === null) {
            alert("You must make a choice. Guess the head or tail to continue.");
        } else {
            alert("Sorry, you didn't guess correctly. You get $0.");
        }

        updateMoney();
    }
}

updateMoney();

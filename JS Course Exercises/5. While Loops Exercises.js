//WHILE LOOPS

let a = 5;
while(true){
    if(a>10){
        break;
    }
    console.log("a = " + a);
    a++;
}


//Ex 1 Read Text
function readText(input) {
    let index = 0;
    let word = input[index];

    while (word !== "Stop") {
        console.log(word);
        index++;
        word = input[index];
    }
}
readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);


//Ex 2 Password
function password(input) {
    let username = input[0];
    let password = input[1];
    let data = input[2];
    let index = 3;

    while (data !== password) {
        data = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`);
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);


//Ex 3 Sum Numbers
function sumNumbers(input) {

    let targetNumber = Number(input[0]);
    let sum = 0;
    let index = 1;
    let currentNumber = Number(input[index]);

    while (sum < targetNumber) {
        sum = sum + Number(currentNumber);
        index++;
        currentNumber = input[index];
    }
    console.log(sum);

}
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);


//Ex 4 Sequence 2k + 1;
function sequence(input) {

    let n = Number(input[0]);
    let counter = 1;

    while (counter <= n) {
        console.log(counter);
        counter = counter * 2 + 1;
        n++;
    }

}
sequence(["17"]);


//Ex 5 Account Balance
function accountBalance(input) {

    let sumTtl = 0;
    let index = 0;

    let currentInput = input[index];
    while (currentInput !== "NoMoreMoney") {
        let inputAsNumber = Number(currentInput);

        if (inputAsNumber < 0) {
            console.log("Invalid operation!");
            break;
        }

        sumTtl += inputAsNumber;
        console.log(`Increase: ${inputAsNumber.toFixed(2)}`);
        index++;
        currentInput = input[index];
    }
    console.log(`Total: ${sumTtl.toFixed(2)}`);
}
accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);


function forLoop(input) {
    let sumT = 0;

    for (let index = 0; index < input.length; index++) {
        let currentIn = input[index];

        if (currentIn === "NoMoreMoney") {
            break;
        }
        let numberIn = Number(currentIn);
        if (numberIn < 0) {
            console.log("Invalid operation!");
            break;
        }

        sumT += numberIn;
        console.log(`Increase: ${numberIn.toFixed(2)}`);

    }
    console.log(`Total: ${sumT.toFixed(2)}`);
}


accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);


//Ex 6 Max Number
function maxNumber(input) {

    let inputElement = input[0];
    let index = 1;
    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (inputElement !== "Stop") {
        let numInput = Number(inputElement);
        if (numInput > maxNumber) {
            maxNumber = numInput;
        }
        inputElement = input[index];
        index++;
    }
    console.log(maxNumber);

}
maxNumber(["-10", "20", "-30", "Stop"]);


//Ex 7 Min Number
function minNumber(input) {
    let a = input[0];
    let index = 1;
    let minNumber = Number.MAX_SAFE_INTEGER;

    while (a !== "Stop") {
        let currentNum = Number(a);
        if (currentNum < minNumber) {
            minNumber = currentNum;
        }
        a = input[index];
        index++;
    }

    console.log(minNumber);

}
minNumber(["100", "99", "80", "70", "Stop"]);


//Ex 8 Graduation
function graduation(input) {

    let name = input[0];
    let grades = 1;
    let index = 0;

    let marksSum = 0;
    let excluded = 0;

    while (grades <= 12) {
        index++;
        let grade = Number(input[index]);

        if (grade >= 4) {
            marksSum += grade;
            grades++;
        }
        else {
            excluded++;
            break;
        }
    }
    let averageGrade = marksSum / 12;

    if (excluded >= 1) {
        console.log(`${name} has been excluded at ${grades} grade`);
    }
    else {
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }

}
graduation(["Gosho", "5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43", "5"]);



//Ex 1 Old Books
function oldBooks(input) {

    let favBook = input[0];
    let index = 1;
    let bookIsFound = false;
    let numBooks = 0;
    let nextBook = input[index];
    index++;

    while (nextBook !== "No More Books") {

        if (nextBook === favBook) {
            bookIsFound = true;
            break;
        }

        numBooks++;
        nextBook = input[index];
        index++;
    }

    if (bookIsFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${numBooks} books.`);
    }
    else {
        console.log(`You checked ${numBooks} books and found it.`);

    }
}
oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);


//Ex 2 Exam Preparation
function examPreparation(input) {
    let index = 0;
    let negativeGradesNum = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let negativeGradeCounter = 0;
    let problemsCount = 0;
    let sumOfGrades = 0;
    let taskName = "";
    let needBreak = false;

    while (command !== "Enough") {
        taskName = command;
        let grade = Number(input[index]);
        index++;
        problemsCount++;
        sumOfGrades += grade;

        if (grade <= 4.00) {
            negativeGradeCounter++
            if (negativeGradeCounter === negativeGradesNum) {
                needBreak = true;
                break;
            }
        }
        command = input[index];
        index++;

    }

    let averageScore = sumOfGrades / problemsCount;
    if (needBreak) {
        console.log(`You need a break, ${negativeGradeCounter} poor grades.`);
    }
    else {
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${problemsCount}`);
        console.log(`Last problem: ${taskName}`);
    }

}
examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);



//Ex 3 Vacation
function vacation(input) {

    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;
    let moneyJessy = Number(input[index]);
    index++;

    let daysSpendCounter = 0;
    let daysCounter = 0;

    while (moneyJessy < moneyNeeded) {
        let action = input[index];
        index++;
        let amount = Number(input[index]);
        index++;
        daysCounter++;

        switch (action) {
            case "spend": moneyJessy -= amount;
                daysSpendCounter++;
                if (moneyJessy < 0) {
                    moneyJessy = 0;
                }
                break;
            case "save": moneyJessy += amount;
                daysSpendCounter = 0;
                break;
        }

        if (daysSpendCounter === 5) {
            break;
        }

    }
    if (daysSpendCounter === 5) {
        console.log("You can't save the money.");
        console.log(daysCounter);
    }
    else {
        console.log(`You saved the money for ${daysCounter} days.`);
    }
}
vacation(["2000", "1000", "spend", "1200", "save", "2000"]);


//Ex 4 Walking
function walking(input) {

    let aim = 10000;
    let index = 0;
    let command = input[index];
    index++;
    let steps = 0;
    while (command !== "Going home") {
        let currentSteps = Number(command);
        steps += currentSteps;
        if (steps >= aim) {
            break;
        }
        command = input[index];
        index++;
    }

    if (command === "Going home") {
        currentSteps = Number(input[index]);
        index++;
        steps += currentSteps;
    }
    let diff = Math.abs(aim - steps);

    if (steps >= aim) {
        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`);
    }
    else {
        console.log(`${diff} more steps to reach goal.`);
    }

}
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);


//Ex 5 Coins
function coins(input) {
    let moneyInLv = Number(input[0]);
    let money = Math.floor(moneyInLv * 100);
    let coinsCounter = 0;

    while (money > 0) {
        coinsCounter++;
        if (money >= 200) {
            money -= 200;
        }
        else if (money >= 100) {
            money -= 100;
        }
        else if (money >= 50) {
            money -= 50;
        }
        else if (money >= 20) {
            money -= 20;
        }
        else if (money >= 10) {
            money -= 10;
        }
        else if (money >= 5) {
            money -= 5;
        }
        else if (money >= 2) {
            money -= 2;
        }
        else if (money >= 1) {
            money -= 1;
        }
    }
    console.log(coinsCounter);
}
coins(["2.73"]);



//Ex 6 Cake
function cake(input) {
    let index = 0;
    let lengthCake = Number(input[index]);
    index++;
    let wigthCake = Number(input[index]);
    index++;
    let input2 = input[index];
    index++;
    let pieces = 0;
    let cakePieces = lengthCake * wigthCake;

    while (input2 !== "STOP") {
        let piecesCounter = Number(input2);
        pieces += piecesCounter;
        if (pieces >= cakePieces) {
            break;
        }
        input2 = input[index];
        index++;

    }
    let diff = Math.abs(cakePieces - pieces);

    if (input2 === "STOP" && cakePieces > pieces) {
        console.log(`${diff} pieces are left.`);
    }

    else if (pieces >= cakePieces) {
        console.log(`No more cake left! You need ${diff} pieces more.`);
    }

}
cake(["10", "10", "20", "20", "20", "20", "21"]);


//Ex 7 Moving
function moving(input) {

    let index = 0;
    let wigthFree = Number(input[index]);
    index++;
    let lengthFree = Number(input[index]);
    index++;
    let heightFree = Number(input[index]);
    index++;
    let command2 = input[index];
    index++;

    let sumBox = 0;
    let freeSpace = wigthFree * lengthFree * heightFree;

    while (command2 !== "Done") {
        let currentBox = Number(command2);
        sumBox += currentBox;
        if (sumBox >= freeSpace) {
            break;
        }
        command2 = input[index];
        index++;
    }

    let diff = Math.abs(freeSpace - sumBox);

    if (freeSpace <= sumBox) {
        console.log(`No more free space! You need ${diff} Cubic meters more.`);
    }
    else if (command2 === "Done" && freeSpace > sumBox) {
        console.log(`${diff} Cubic meters left.`);
    }
}
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);


function moving(input) {

    let index = 0;
    let wigthFree = Number(input[index]);
    index++;
    let lengthFree = Number(input[index]);
    index++;
    let heightFree = Number(input[index]);
    index++;
    let command2 = input[index];
    index++;

    let freeSpace = wigthFree * lengthFree * heightFree;

    while (command2 !== "Done") {
        let currentBox = Number(command2);
        freeSpace -= currentBox;
        if (freeSpace < 0) {
            break;
        }
        command2 = input[index];
        index++;
    }

    if (freeSpace >=0) {
        console.log(`${freeSpace} Cubic meters left.`);
    }
    else {
        console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
    }
}
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);

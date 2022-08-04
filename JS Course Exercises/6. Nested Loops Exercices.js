// NESTED LOOPS

// Ex 1 Clock
function clock() {
    for (let hours = 0; hours < 24; hours++) {
        for (let min = 0; min < 60; min++) {
            console.log(`${hours}:${min}`);
        }
    }
}
clock();


// Ex 2 Multiplication Table
function multiplication() {
    for (let a = 1; a <= 10; a++) {
        for (let b = 1; b <= 10; b++) {
            let result = a * b;
            console.log(`${a} * ${b} = ${result}`);
        }
    }
}
multiplication();


// Ex 3 Combinations
function combinations(input) {
    let n = Number(input[0]);
    let combinations = 0;

    for (let x1 = 0; x1 <= n; x1++) {
        for (let x2 = 0; x2 <= n; x2++) {
            for (let x3 = 0; x3 <= n; x3++) {
                if (x1 + x2 + x3 === n) {
                    combinations++;
                }
            }
        }
    }
    console.log(combinations);
}

combinations(["25"]);



// Ex 4 Sum of Two Numbers
function sumOfTwo(input) {
    let start = Number(input[0]);
    let finish = Number(input[1]);
    let magicNum = Number(input[2]);


    let combinationCount = 0;
    let isFinished = false;

    for (let i1 = start; i1 <= finish; i1++) {
        for (let i2 = start; i2 <= finish; i2++) {
            let resultF = i1 + i2;
            combinationCount++;

            if (resultF === magicNum) {
                console.log(`Combination N:${combinationCount} (${i1} + ${i2} = ${magicNum})`);
                isFinished = true;
                break;

            }
        }
        if (isFinished) {
            break;
        }
    }
    if (!isFinished) {
        console.log(`${combinationCount} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwo(["1", "10", "5"]);


// Ex 5 Traveling
function traveling(input) {
    let index = 0;
    let coment = input[index];
    index++;

    while (coment !== "End") {
        let destination = coment;
        let cost = Number(coment);

        if (destination != cost) {
            console.log(`Going to ${destination}!`);
        }

        coment = input[index];
        index++;
    }
}
traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);


// Ex 6 Building = MATRIX
function building(input) {
    let floorCount = Number(input[0]);
    let roomCount = Number(input[1]);


    for (let floor = floorCount; floor > 0; floor--) {
        let res = "";
        for (let room = 0; room < roomCount; room++) {
            if (floor === floorCount) {
                res += `L${floor}${room} `;
            }
            else if (floor % 2 !== 0) {
                res += `A${floor}${room} `;
            }
            else {
                res += `O${floor}${room} `;
            }
        }
        console.log(res);

    }
}

building(["6", "4"]);



// Ex Number Pyramid
function numberPyramid(input) {
    let n = Number(input[0]);
    let isOut = false;
    let current = 1;
    let printCurrentLine = "";

    for (let rows = 1; rows <= n; rows++) {
        for (let colums = 1; colums <= rows; colums++) {
            if (current > n) {
                isOut = true;
                break;
            }
            printCurrentLine += current + " ";
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isOut) {
            break;
        }
    }
}
numberPyramid(["7"]);


// Ex 2 Equal Sums Even Odd Position
function equalSums(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let printLine = '';
    for (let i = firstNum; i <= secondNum; i++) {
        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;

        for (let z = 0; z <= currentNum.length; z++) {
            let currentDigit = Number(currentNum.charAt(z));
            if (z % 2 === 0) {
                evenSum += currentDigit;
            } else { oddSum += currentDigit; }
        }
        if (oddSum === evenSum) {
            printLine += `${i} `;
        }
    }
    console.log(printLine);
}
equalSums(["100000", "100050"]);


// Ex 3 Sum Prime Non Prime
function sumPrime(input) {
    let index = 0;
    let command = input[index];
    index++;
    let sumPrimeNum = 0;
    let sumNonprimeNum = 0;

    while (command !== "stop") {
        let num = Number(command);
        if (num < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }
        if (num === 1) {
            sumPrimeNum += 1;
            command = input[index];
            index++;
            continue;
        }

        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                sumNonprimeNum += num;
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            sumPrimeNum += num;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNum}`);
    console.log(`Sum of all non prime numbers is: ${sumNonprimeNum}`);
}
sumPrime(["0", "-9", "0", "stop"]);



// Ex 4 Train the Trainers
function trainers(input) {

    let index = 0;
    let juryNum = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let sumGrades = 0;
    let taskCounter = 0;

    while (command !== "Finish") {
        let name = command;
        taskCounter++;
        let scoreSum = 0;
        for (i = 0; i < juryNum; i++) {
            let score = Number(input[index]);
            index++;
            scoreSum += score;
        }
        let averageScore = scoreSum / juryNum;
        sumGrades += averageScore;
        console.log(`${name} - ${averageScore.toFixed(2)}.`);

        command = input[index];
        index++;
    }
    let averageTtl = sumGrades / taskCounter;
    console.log(`Student's final assessment is ${averageTtl.toFixed(2)}.`);
}
trainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);



// Ex 5 Special Numbers
function specialNumbers(input) {
    let n = Number(input[0]);
    let printResult = "";

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if (n % a === 0 && n % b === 0 && n % c === 0 && n % d === 0) {
                        printResult += `${a}${b}${c}${d} `;
                    }
                }
            }
        }
    }
    console.log(printResult);

}
specialNumbers(["3"]);



// Ex 6 Cinema Tickets
function cinemaTickets(input) {
    let index = 0;
    let commandSomething = input[index];
    index++;

    let studentCounter = 0;
    let standardCount = 0;
    let kidCount = 0;
    let ttlTickets = 0;

    while (commandSomething !== "Finish") {

        let movieName = commandSomething;
        let freeSeats = Number(input[index]);
        index++;
        let soldTickets = 0;
        let tempCommand = input[index];
        index++;

        while (tempCommand !== "End") {
            let ticketType = tempCommand;
            soldTickets++;
            switch (ticketType) {
                case "student": studentCounter++; break;
                case "standard": standardCount++; break;
                case "kid": kidCount++; break;
            }
            if (freeSeats === soldTickets) {
                break;
            }

            tempCommand = input[index];
            index++;
        }
        ttlTickets += soldTickets;
        let percentSold = soldTickets / freeSeats * 100;
        console.log(`${movieName} - ${percentSold.toFixed(2)}% full. `);

        commandSomething = input[index];
        index++;
    }
    console.log(`Total tickets: ${ttlTickets}`);
    console.log(`${(studentCounter / ttlTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardCount / ttlTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidCount / ttlTickets * 100).toFixed(2)}% kids tickets.`);

}
cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6","student", "student","student","student","student","student","Finish"]);

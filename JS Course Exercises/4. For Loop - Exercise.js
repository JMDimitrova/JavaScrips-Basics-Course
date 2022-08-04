// Ex 1 Numbers Ending in 7

function numbersEnding7() {

  for (let i = 7; i <= 997; i++) {
    if (i % 10 === 7) {
      console.log(i);
    }
  }

}
numbersEnding7();



// Ex 2 Multiplication Table
function multiplicationTable(input) {

  let num = Number(input[0]);

  let sum = 0;

  for (let i = 1; i <= 10; i++) {
    sum = num * i;
    console.log(`${i} * ${num} = ${sum}`);
  }
}
multiplicationTable(["5"]);



// Ex 3 Histogram
function histogram(input) {

  let n = Number(input[0]);

  let p1Counter = 0;
  let p2Counter = 0;
  let p3Counter = 0;
  let p4Counter = 0;
  let p5Counter = 0;

  for (let i = 1; i <= n; i++) {
    let currentNumber = Number(input[i]);
    if (currentNumber < 200) {
      p1Counter++;
    }
    else if (currentNumber >= 200 && currentNumber <= 399) {
      p2Counter++;
    }
    else if (currentNumber >= 400 && currentNumber <= 599) {
      p3Counter++;
    }
    else if (currentNumber >= 600 && currentNumber <= 799) {
      p4Counter++;
    }
    else if (currentNumber >= 800) {
      p5Counter++;
    }
  }

  let p1 = p1Counter / n * 100;
  let p2 = p2Counter / n * 100;
  let p3 = p3Counter / n * 100;
  let p4 = p4Counter / n * 100;
  let p5 = p5Counter / n * 100;

  console.log(`${p1.toFixed(2)}%`);
  console.log(`${p2.toFixed(2)}%`);
  console.log(`${p3.toFixed(2)}%`);
  console.log(`${p4.toFixed(2)}%`);
  console.log(`${p5.toFixed(2)}%`);


}
histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);



// Ex 4 Clever Lily
function cleverLily(input) {

  let ageLily = Number(input[0]);
  let priceWashingMachine = Number(input[1]);
  let toyPricePer1 = Number(input[2]);
  let money = 0;
  let currentMoney = 10;
  let toy = 0;

  for (let i = 2; i <= ageLily; i += 2) {
    money += currentMoney;
    currentMoney += 10;
    money--;
  }

  for (let i = 1; i <= ageLily; i += 2) {
    toy++;
  }

  let toysTtl = toy * toyPricePer1;
  let moneyTtl = toysTtl + money;
  let diff = Math.abs(priceWashingMachine - moneyTtl).toFixed(2);

  if (moneyTtl >= priceWashingMachine) {
    console.log(`Yes! ${diff}`);
  }
  else {
    console.log(`No! ${diff}`);
  }

}
cleverLily(["10", "170.00", "6"]);



// Ex 5 Salary
function salary(input) {
  let tabsOpen = Number(input[0]);
  let salaryT = Number(input[1]);

  for (i = 2; i <= tabsOpen + 1; i++) {
    let tabsName = input[i];
    switch (tabsName) {
      case "Facebook": salaryT -= 150; break;
      case "Instagram": salaryT -= 100; break;
      case "Reddit": salaryT -= 50; break;
    }
  }

  if (salaryT <= 0) {
    console.log(`You have lost your salary.`);
  }
  else if (salaryT > 0) {
    console.log(Math.round(salaryT));
  }

}

salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);



// Ex 6 Oscars
function oscars(input) {
  let index = 0;
  let nameActor = input[index];
  index++;
  let pointsAcademy = Number(input[index]);
  index++;
  let n = Number(input[index]);
  index++;
  let hasNominee = false;

  for (let i = 0; i < n; i++) {
    let currentName = input[index];
    index++;
    let currentPoints = Number(input[index]);
    index++;

    let totalPoints = currentName.length * currentPoints / 2;
    pointsAcademy += totalPoints;

    if (pointsAcademy > 1250.5) {
      hasNominee = true;
      console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${pointsAcademy.toFixed(1)}!`);
      break;
    }

  }
  if (!hasNominee) {
    let diff = Math.abs(1250.5 - pointsAcademy);
    console.log(`Sorry, ${nameActor} you need ${diff.toFixed(1)} more!`)
  }

}

oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);



// Ex 7 Trekking Mania

function trekkingMania(input) {

  let index = 0;
  let groupsInTtl = Number(input[index]);
  index++;
  let sum = 0;
  let counter5 = 0;
  let counter12 = 0;
  let counter25 = 0;
  let counter40 = 0;
  let counterMore = 0;

  for (let i = 0; i < groupsInTtl; i++) {
    let pplInGroup = Number(input[index]);
    index++;
    sum += pplInGroup;


    if (pplInGroup <= 5) {
      counter5 += pplInGroup;
    }
    else if (pplInGroup >= 6 && pplInGroup <= 12) {
      counter12 += pplInGroup;
    }
    else if (pplInGroup >= 13 && pplInGroup <= 25) {
      counter25 += pplInGroup;
    }
    else if (pplInGroup >= 26 && pplInGroup <= 40) {
      counter40 += pplInGroup;
    }
    else if (pplInGroup >= 41) {
      counterMore += pplInGroup;
    }
  }

  let c1 = counter5 / sum * 100;
  let c2 = counter12 / sum * 100;
  let c3 = counter25 / sum * 100;
  let c4 = counter40 / sum * 100;
  let c5 = counterMore / sum * 100;

  console.log(`${c1.toFixed(2)}%`);
  console.log(`${c2.toFixed(2)}%`);
  console.log(`${c3.toFixed(2)}%`);
  console.log(`${c4.toFixed(2)}%`);
  console.log(`${c5.toFixed(2)}%`);


}
trekkingMania(["5", "25", "41", "31", "250", "6"]);



// Ex 8 Tennis Ranglist
function tennisRanglist(input) {
  index = 0;
  let tournamentsAll = Number(input[index]);
  index++;
  let startingPonts = Number(input[index]);
  index++;
  let currentPoints = 0;
  let winCounter = 0;

  for (let i = 0; i < tournamentsAll; i++) {
    let resultTournament = input[index];
    index++;

    switch (resultTournament) {
      case "W": winCounter++;
        currentPoints += 2000; break;
      case "F": currentPoints += 1200; break;
      case "SF": currentPoints += 720; break;
    }

  }

  let finalSumPoints = startingPonts + currentPoints;
  let averagePoints = currentPoints / tournamentsAll;

  let percentWin = winCounter / tournamentsAll * 100;

  console.log(`Final points: ${Math.floor(finalSumPoints)}`);
  console.log(`Average points: ${Math.floor(averagePoints)}`);
  console.log(`${percentWin.toFixed(2)}%`);

}

tennisRanglist(["5", "1400", "F", "SF", "W", "W", "SF"]);



// ------- Lecture 4 FOR LOOPS -------

// Ex 1 Numbers From 1 To 100

function numbersTo100() {

  for (let a = 1; a <= 100; a++) {
    console.log(a);
  }
}

numbersTo100();



// Ex 2 Numbers From N To 1 Reversed Way

function numbersReversed(input) {

  let n = Number(input[0]);

  for (let i = n; i > 0; i--) {
    console.log(i);
  }

}
numbersReversed(["2"]);



// Ex 3 Numbers From 1 To N With Step 3

function nStep3(input) {

  let a = Number(input[0]);
  for (i = 1; i <= a; i += 3) {
    console.log(i);
  }

}
nStep3(["10"]);



// Ex 4 Even Powers of 2
function evenP2(input) {

  let b = Number(input[0]);
  let sum = 1;

  for (let i = 0; i <= b; i += 2) {
    console.log(sum);
    sum = sum * 2 * 2;
  }
}

evenP2(["3"]);


// Ex 5 Character Sequence
function characterSequence(input) {

  let word = input[0];

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    console.log(letter);
  }
}

characterSequence(["softuni"]);



// Ex 6 Vowels Sum
function vowelsSum(input) {

  let text = input[0];
  let sum = 0;

  for (i = 0; i < text.length; i++) {
    let letter1 = text[i];
    switch (letter1) {
      case "a": sum += 1; break;
      case "e": sum += 2; break;
      case "i": sum += 3; break;
      case "o": sum += 4; break;
      case "u": sum += 5; break;
    }
  }

  console.log(sum);

}

vowelsSum(["hello"]);



// Ex 7 Sum of Numbers
function sumOfNumbers(input) {

  let numberAdded = input[0];
  let sumc = 0;

  for (let i = 0; i < numberAdded.length; i++) {
    let numberSum = Number(numberAdded[i]);
    sumc += numberSum
  }
  console.log(`The sum of the digits is:${sumc}`);

}

sumOfNumbers(["564891"]);



// Ex 8 Numbers Divisible by 9
function numbersBy9(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let sum9 = 0;


  for (let i = n1; i <= n2; i++) {
    if (i % 9 === 0) {
      sum9 += i;
    }

  }

  console.log(`The sum: ${sum9}`);

  for (let i = n1; i <= n2; i++) {
    if (i % 9 === 0) {
      sum9 += i;
      console.log(i);
    }

  }

}


numbersBy9(["100", "200"]);
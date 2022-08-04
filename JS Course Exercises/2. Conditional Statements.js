//Ex 1 Trapezoid Area

function trapezoidArea(input) {
  let b1 = Number(input[0]);
  let b2 = Number(input[1]);
  let h = Number(input[2]);
  let area = (b1 + b2) * h / 2;
  console.log(area.toFixed(2));
}
trapezoidArea(["8", "13", "7"]);


//Ex 2 Triangle Area

function tiangleArea(input) {
  let a = Number(input[0]);
  let h = Number(input[1]);
  let area = a * h / 2;
  console.log(area.toFixed(2));
}
tiangleArea(["20", "30"]);


//Ex 3 Celsius to Fahrenheit 

function celsiusToF(input) {
  let c = Number(input[0]);
  let convert = c * (9 / 5) + 32;
  console.log(convert.toFixed(2));
}
celsiusToF(["25"]);



//Ex 4 Vegetable Market

function vegetableMarket(input) {
  let vegetablePerKg = Number(input[0]);
  let fruitPerKg = Number(input[1]);
  let vegetableTtlKg = Number(input[2]);
  let fruitTtlKg = Number(input[3]);
  let veggie = vegetablePerKg * vegetableTtlKg;
  let fruits = fruitPerKg * fruitTtlKg;
  let profit = (veggie + fruits) / 1.94;
  console.log(profit.toFixed(2));
}
vegetableMarket(["0.194", "19.4", "10", "10"]);


//Ex 5 Training Lab
function trainingLab(input) {
  let vegetablePerKg = Number(input[0]);
  let fruitPerKg = Number(input[1]);
  let vegetableTtlKg = Number(input[2]);
  let fruitTtlKg = Number(input[3]);
  let veggie = vegetablePerKg * vegetableTtlKg;
  let fruits = fruitPerKg * fruitTtlKg;
  let profit = (veggie + fruits) / 1.94;
  console.log(profit.toFixed(2));
}
trainingLab([])



//Ex 6 Fishland
function fishland(input) {
  let skumriaPrice = Number(input[0]);
  let cacaPrice = Number(input[1]);
  let palamudKg = Number(input[2]);
  let safridKg = Number(input[3]);
  let midiKg = Number(input[4]);
  let midiPrice = 7.50;
  let palamudPrice = skumriaPrice + (0.6 * skumriaPrice);
  let safridPrice = cacaPrice + (0.8 * cacaPrice);
  let dinner = (palamudKg * palamudPrice) + (safridKg * safridPrice) + (midiKg * midiPrice);
  console.log(dinner.toFixed(2));
}
fishland(["6.90", "4.20", "1.5", "2.5", "1"]);



//-------Part Two-------


// Ex 1 Excellent Result

function resultExcellent(input) {
  let result = Number(input[0]);

  if (result >= 5.50) {
    console.log("Excellent!");
  }
}
resultExcellent(["6"]);



// Ex 2 Greater Number

function greaterNumber(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);

  if (a > b) {
    console.log(a);
  }
  else {
    console.log(b);

  }

}
greaterNumber(["5", "3"]);



// Ex 3 Even or Odd
function evenOrOdd(input) {
  let a = Number(input[0]);

  if (a % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }

}
evenOrOdd(["2"]);



// Ex 4 Password Guess
function password(input) {
  let pass = input[0];

  if (pass === "s3cr3t!P@ssw0rd") {
    console.log("Welcome");
  } else {
    console.log("Wrong password!");
  }

}
password(["qwerty"]);



// Ex 5 Numbers 100 to 200
function numbers100To200(input) {
  let num = input[0];

  if (num < 100) {
    console.log("Less than 100");
  }
  if (num >= 100 & num <= 200) {
    console.log("Between 100 and 200");
  }
  if (num > 200) {
    console.log("Greater than 200");
  }

}
numbers100To200(["95"]);



// Ex 6 Speed Info
function speedInfo(input) {
  let num = input[0];

  if (num <= 10) {
    console.log("slow");
  }
  if (num > 10 & num <= 50) {
    console.log("average");
  }
  if (num > 50 & num <= 150) {
    console.log("fast");
  }
  if (num > 150 & num <= 1000) {
    console.log("ultra fast");
  }
  if (num > 1000) {
    console.log("extremely fast");
  }
}
speedInfo(["8"]);



// Ex 7 Area of Figures
function areaOfFigures(input) {
  let figure = input[0];
  let a = Number(input[1]);
  let bOptional = Number(input[2]);

  if (figure === "square") {
    let area = a * a;
    console.log(area.toFixed(3));
  }

  if (figure === "rectangle") {
    let areaRectangle = a * bOptional;
    console.log(areaRectangle.toFixed(3));

  }

  if (figure === "circle") {
    let areaCircle = a * a * Math.PI;
    console.log(areaCircle.toFixed(3));
  }

  if (figure === "triangle") {
    let areaTriangle = a * bOptional / 2;
    console.log(areaTriangle.toFixed(3));

  }
}
areaOfFigures(["rectangle", "7", "2.5"]);



// -------EXCERSISES 2-------

// Ex 1 Sum Seconds
function sumSeconds(input) {
  let result1 = Number(input[0]);
  let result2 = Number(input[1]);
  let result3 = Number(input[2]);
  let timeInMin = Math.floor((result1 + result2 + result3) / 60);
  let seconds = (result1 + result2 + result3) % 60;
  if (seconds < 10) {
    console.log(`${timeInMin}:0${seconds}`);
  }
  else {
    console.log(`${time}:${seconds}`);
  }
}
sumSeconds(["35", "45", "44"]);



// Ex 2 Bonus Scores
function bonusScores(input) {
  let bonus = 0.0;
  let numberIn = Number(input[0]);

  if (numberIn <= 100) {
    bonus = 5;
  }

  else if (numberIn > 100 & numberIn <= 1000) {
    bonus = 0.2 * numberIn;
  }

  else if (numberIn > 1000) {
    bonus = 0.1 * numberIn;
  }

  if (numberIn % 2 === 0) {
    bonus += 1;
  }
  else if (numberIn % 5 === 0) {
    bonus += 2;
  }

  console.log(bonus);
  console.log(numberIn + bonus);
}
bonusScores(["2703"]);



// Ex 3 Time + 15 Minutes
function time(input) {

  let hours = Number(input[0]);
  let minutes = Number(input[1]);

  let hoursFinal;
  let minutesFinal = minutes + 15;

  if (minutesFinal >= 60) {
    hoursFinal = hours + 1;
    minutesFinal = minutesFinal - 60;
  } else (hoursFinal = hours);

  if (hoursFinal >= 24) {
    hoursFinal = hoursFinal - 24;
  }

  if (minutesFinal <= 9) {
    console.log(`${hoursFinal}:0${minutesFinal}`);
  }
  else console.log(`${hoursFinal}:${minutesFinal}`);

}
time(["11", "08"]);


// Work only in min
function time(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);

  let timeInMin = hours * 60 + minutes;
  timeInMin = timeInMin + 15;

  let h = Math.floor(timeInMin / 60);
  let m = timeInMin % 60;
  if (h === 24) {
    h = 0;
  }
}



// Ex 4 Toy Shop
function shop(input) {

  let tripPrice = Number(input[0]);
  let puzzleCount = Number(input[1]);
  let dollsCount = Number(input[2]);
  let teddybearsCount = Number(input[3]);
  let minionsCount = Number(input[4]);
  let trucksCount = Number(input[5]);

  let toyCount = puzzleCount + dollsCount + teddybearsCount + minionsCount + trucksCount;
  let order = (puzzleCount * 2.60) + (dollsCount * 3) + (teddybearsCount * 4.10) + (minionsCount * 8.20) + (trucksCount * 2);
  let discount;

  if (toyCount >= 50) {
    discount = 0.25 * order;
  }
  else { discount = 0 }

  let profit = order - discount;
  let rent = 0.1 * profit;
  let finalProfit = profit - rent;
  let diff = Math.abs(finalProfit - tripPrice);

  if (tripPrice <= finalProfit) {

    console.log(`Yes! ${diff.toFixed(2)} lv left.`);
  }
  else {
    console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
  }
}
shop(["40.8", "20", "25", "30", "50", "10"]);




// Ex 5 Godzilla vs. Kong
function godzillaVsKong(input) {
  let movieBudget = Number(input[0]);
  let actorsNum = Number(input[1]);
  let outfitPrice = Number(input[2]);
  let decor = 0.1 * movieBudget;
  let finalDressCost = actorsNum * outfitPrice;
  let dressExpense;

  if (actorsNum > 150) {
    dressExpense = finalDressCost - 0.1 * finalDressCost;
  }
  else {
    dressExpense = finalDressCost;
  }

  let money = Math.abs(movieBudget - (decor + dressExpense));

  if ((decor + dressExpense) > movieBudget) {
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${money.toFixed(2)} leva more.`);
  }
  else if ((decor + dressExpense) <= movieBudget) {
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${money.toFixed(2)} leva left.`);
  }
}

godzillaVsKong(["20000", "120", "55.5"]);



// Ex 6 World Swimming Record
function swimmingRecord(input) {
  let recordInSec = Number(input[0]);
  let distanceM = Number(input[1]);
  let timeSec = Number(input[2]);
  let delayWater = Math.floor(distanceM / 15) * 12.5;
  let ivanResult = (distanceM * timeSec + delayWater).toFixed(2);
  let diff = (ivanResult - recordInSec).toFixed(2);

  if (ivanResult < recordInSec) {
    console.log(`Yes, he succeeded! The new world record is ${ivanResult} seconds.`);
  }

  else if (ivanResult >= recordInSec) {
    console.log(`No, he failed! He was ${diff} seconds slower.`);
  }
}
swimmingRecord(["10464", "1500", "20"]);




// Ex 7 Shopping
function shopping(input) {
  let budgetPeter = Number(input[0]);
  let videocardsCount = Number(input[1]);
  let processorsCount = Number(input[2]);
  let ramMemoryCount = Number(input[3]);

  let videocardsPrice = 250;
  let videocards = videocardsCount * videocardsPrice;
  let processor = (0.35 * videocards) * processorsCount;
  let ramMemory = (0.1 * videocards) * ramMemoryCount;

  let expence = videocards + processor + ramMemory;
  let discount;

  if (videocardsCount > processorsCount) {
    discount = 0.15 * expence;
  }

  else (discount = 0);

  let final = expence - discount;
  let money = Math.abs(final - budgetPeter);

  if (final <= budgetPeter) {
    console.log(`You have ${money.toFixed(2)} leva left!`);

  } else if (final > budgetPeter) {
    console.log(`Not enough money! You need ${money.toFixed(2)} leva more!`);
  }
}
shopping(["900", "2", "1", "3"]);




// Ex 8 Lunch Break
function lunchBreak(input) {
  let seriesName = input[0];
  let epizodeTime = Number(input[1]);
  let breakTime = Number(input[2]);

  let lunchTime = breakTime / 8;
  let chillTime = breakTime / 4;

  let timeNeeded = epizodeTime + lunchTime + chillTime;
  let time = Math.abs(timeNeeded - breakTime);

  if (timeNeeded <= breakTime) {
    console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(time)} minutes free time.`);
  }
  else if (timeNeeded > breakTime) {
    console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(time)} more minutes.`);
  }
}
lunchBreak(["Game of Thrones", "60", "96"]);



// Ex 5 Godzilla vs. Kong

function godzillaVsKong(input) {
  let movieBudget = Number(input[0]);
  let actorsNum = Number(input[1]);
  let outfitPrice = Number(input[2]);
  let decor = 0.1 * movieBudget;
  let finalDressCost = actorsNum * outfitPrice;
  let dressExpense;

  if (actorsNum > 150) {
    dressExpense = finalDressCost - 0.1 * finalDressCost;
  }
  else {
    dressExpense = finalDressCost;
  }

  let moneyNeeded = ((decor + dressExpense) - movieBudget).toFixed(2);
  let moneyLeft = (movieBudget - (decor + dressExpense)).toFixed(2);

  if ((decor + dressExpense) > movieBudget) {
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${moneyNeeded} leva more.`);
  }
  else if ((decor + dressExpense) <= movieBudget) {
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${moneyLeft} leva left.`);
  }
}
godzillaVsKong(["20000", "120", "55,5"])
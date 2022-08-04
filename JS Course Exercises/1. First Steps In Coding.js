//Ex 1

function hello() {
  console.log('hello jess');
  let iva = 1;
  let iva2 = 3;
  console.log(iva - iva2);
}

hello();



//Ex 2

function numbersFrom1To10() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
  console.log(6);
  console.log(7);
  console.log(8);
  console.log(9);
  console.log(10);
}

numbersFrom1To10();


function hello(input) {
  let firstName = input[0];
  console.log(firstName);
}
hello(["desi", "jessy"]);



function math() {
  let firstNumber = 20;
  let secondNumber = 6;
  let result = firstNumber % secondNumber;
  console.log(result);
}
math();


// Ex 3 Square m2

function squareArea(input) {
  let a = Number(input[0]);
  let area = a * a;
  console.log(area);
}
squareArea([5]);

// Ex 4 Inch to Cm

function inchToCm(input) {
  let b = Number(input[0]);
  let convert = b * 2.54;
  console.log(convert);
}

inchToCm([5, 7]);


// Ex 5 Greeting By Name

function greetings(input) {
  let name = input[0];
  console.log(`Hello, ${name}!`);
}
greetings(["iva", "Jessy"]);


// Ex 6 Concatenate Data Text and Numbers

function concatenateData(input) {
  let firstName = input[0];
  let lastName = input[1];
  let age = Number(input[2]);
  let town = input[3];
  console.log(`You are ${firstName} ${lastName} , a ${age}-years old person from ${town}.`);
}
concatenateData(["Jasmina", "Dimitrova", 28, "Varna"])



// Ex 7 Projects Creation

function project(input) {
  let name = input[0];
  let number = Number(input[1]);
  let time = number * 3
  console.log(`The architect ${name} will need ${time} hours to complete ${number} project/s.`);
}
project(["George", 4])



// Ex 8 Pet Shop

function food(input) {
  let dogFood = Number(input[0]) * 2.5;
  let catFood = Number(input[1]) * 4;
  let totalSum = dogFood + catFood;

  console.log(`${totalSum} lv.`);
}
food([5, 4])



// Ex 9 Yard Greening

function yardGreening(input) {
  let price = Number(input[0]) * 7.61;
  let discount = 0.18 * price;
  let finalPrice = price - discount;
  console.log(`The final price is: ${finalPrice} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}
yardGreening([550])



//-------EXCERSISES 1-------

// Ex 1 USD to BGN

function converter(input) {
  let usd = Number(input[0]);
  let bgn = usd * 1.79549;
  console.log(bgn);
}
converter(["22"]);



// Ex 2 RADIAN to DEGREE

function radiansToDegrees(input) {
  let radians = Number(input[0]);
  let degrees = radians * 180 / Math.PI;
  console.log(degrees);
}
radiansToDegrees(["3.1416"]);


// Ex 3 Deposit Calculator

function depositCalculator(input) {
  let depositSum = Number(input[0]);
  let depositTime = Number(input[1]);
  let annualPercent = Number(input[2]) / 100;
  let totalSum = depositSum + depositTime * ((depositSum * annualPercent) / 12);
  console.log("The total sum is " + totalSum);
}
depositCalculator(["200", "3", "5.7"]);


// Ex 4 Vacation Books List
function vacationBooks(input) {
  let pageNumber = Number(input[0]);
  let pagePerHour = Number(input[1]);
  let days = Number(input[2]);
  let hoursPerDay = (pageNumber / pagePerHour) / days;
  console.log(hoursPerDay);
}
vacationBooks(["432", "15", "4"]);


// Ex 5 School Supplies
function schoolSupplies(input) {
  let numPenPacks = Number(input[0]) * 5.80;
  let numMarkersPack = Number(input[1]) * 7.20;
  let litersGel = Number(input[2]) * 1.20;
  let discountPercent = Number(input[3]) / 100;
  let totalExpence = numPenPacks + numMarkersPack + litersGel - discountPercent * (numPenPacks + numMarkersPack + litersGel);
  console.log(totalExpence);
}
schoolSupplies(["2", "3", "4", "25"]);


// Ex 6 Repainting
function repainting(input) {
  let plastic = (Number(input[0]) + 2) * 1.50;
  let paint = (0.1 * (Number(input[1])) + Number(input[1])) * 14.50;
  let paintThinner = Number(input[2]) * 5;
  let materialExpence = 0.4 + plastic + paint + paintThinner;
  let workExpence = (0.3 * materialExpence) * Number(input[3]);
  let overallExpence = materialExpence + workExpence;
  console.log(overallExpence);
}

repainting(["10", "11", "4", "8"]);



// Ex 7 Food Delivery
function foodDelivery(input) {
  let delivery = 2.5;
  let chickenMenu = Number(input[0]) * 10.35;
  let fishMenu = Number(input[1]) * 12.40;
  let veggieMenu = Number(input[2]) * 8.15;
  let foodExpence = chickenMenu + fishMenu + veggieMenu;
  let dessert = 0.2 * foodExpence;
  let orderExpence = foodExpence + dessert + delivery;
  console.log(orderExpence);
}
foodDelivery(["2", "4", "3"]);



// Ex 8 Basketball Equipment 
function basketballEquipment(input) {
  let basketballSnikers = Number(input[0]) - 0.4 * Number(input[0]);
  let uni = basketballSnikers - 0.2 * basketballSnikers;
  let ball = uni / 4;
  let accessories = ball / 5;
  let ttlExpences = Number(input[0]) + basketballSnikers + uni + ball + accessories;
  console.log(ttlExpences);
}
basketballEquipment(["365"]);



// Ex 9 Fish Tank
function fishTank(input) {
  let tankVolume = (Number(input[0]) * Number(input[1]) * Number(input[2])) * 0.001;
  let sandPlant = (Number(input[3]) / 100) * tankVolume;
  let litersInTtl = tankVolume - sandPlant;
  console.log(litersInTtl);
}
fishTank(["85", "75", "47", "17"]);



//-------More Exercises-------

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



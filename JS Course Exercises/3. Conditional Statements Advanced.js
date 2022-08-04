// Ex 1 Day of Week
function dayOfWeek(input) {
  let dayNum = Number(input[0]);

  switch (dayNum) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sundddday"); break;
    default: console.log("Error"); break;

  }
}
dayOfWeek(["1", "2", "3", "4", "5", "6", "7", "0"]);


// Ex 2 Weekend or Working Day
function weekendOrWorkday(input) {

  let day = input[0];

  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday": console.log("Working day"); break;

    case "Saturday":
    case "Sunday": console.log("Weekend"); break;

    default: console.log("Error"); break;
  }
}
weekendOrWorkday(["Sunday", "Monday"]);



// Ex 3 Animal Type
function animalType(input) {
  let animal = input[0];

  switch (animal) {
    case "dog": console.log("mammal"); break;
    case "tortoise":
    case "crocodile":
    case "snake": console.log("reptile"); break;
    default: console.log("unknown"); break;
  }
}
animalType(["dog", "snake", "cat"]);



// Ex 4 Personal Titles
function personalTitles(input) {
  let age = Number(input[0]);
  let gender = input[1];

  if (gender === 'f') {
    if (age < 16) { console.log("Miss"); }

    else if (age >= 16) { console.log("Ms."); }
  }

  else if (gender === 'm') {
    if (age < 16) { console.log("Master"); }
    else if (age >= 16) { console.log("Mr."); }

  }

}
personalTitles(["12", "f"]);




// Ex 5 Small Shop
function smallShop(input) {
  let product = input[0];
  let city = input[1];
  let quantity = Number(input[2]);

  if (city === "Sofia") {
    switch (product) {
      case "coffee": console.log(quantity * 0.50); break;
      case "water": console.log(quantity * 0.80); break;
      case "beer": console.log(quantity * 1.20); break;
      case "sweets": console.log(quantity * 1.45); break;
      case "peanuts": console.log(quantity * 1.60); break;
    }
  }

  else if (city === "Plovdiv") {
    switch (product) {
      case "coffee": console.log(quantity * 0.40); break;
      case "water": console.log(quantity * 0.70); break;
      case "beer": console.log(quantity * 1.15); break;
      case "sweets": console.log(quantity * 1.30); break;
      case "peanuts": console.log(quantity * 1.50); break;
    }
  }

  else if (city === "Varna") {
    switch (product) {
      case "coffee": console.log(quantity * 0.45); break;
      case "water": console.log(quantity * 0.70); break;
      case "beer": console.log(quantity * 1.10); break;
      case "sweets": console.log(quantity * 1.35); break;
      case "peanuts": console.log(quantity * 1.55); break;
    }
  }
}


smallShop(["coffee", "Varna", "2"]);



// Ex 6 Number in Range
function numberInRange(input) {
  let number = Number(input[0]);

  if (number >= -100 && number <= 100 && number != 0) {
    console.log("Yes");
  }

  else { console.log("No"); }

}

numberInRange(["25"]);


// Ex 7 Working Hours
function workingHours(input) {

  let hour = Number(input[0]);
  let day = input[1];

  if (hour >= 10 && hour <= 18) {
    switch (day) {
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
      case "Saturday": console.log("open"); break;
      default: console.log("closed"); break;
    }
  }

  else { console.log("closed"); }
}

workingHours(["9", "Sunday"]);



// Ex 8 Cinema Ticket
function cinemaTicket(input) {

  let dayOfWeek = input[0];

  switch (dayOfWeek) {
    case "Monday":
    case "Tuesday":
    case "Friday": console.log(12); break;
    case "Wednesday":
    case "Thursday": console.log(14); break
    case "Saturday":
    case "Sunday": console.log(16); break;

  }
}

cinemaTicket(["Monday"]);



// Ex 9 Fruit or Vegetable
function fruitOrVeggie(input) {
  let product = input[0];

  switch (product) {
    case "banana":
    case "apple":
    case "kiwi":
    case "cherry":
    case "lemon":
    case "grapes": console.log("fruit"); break;
    case "tomato":
    case "cucumber":
    case "pepper":
    case "carrot": console.log("vegetable"); break;
    default: console.log("unknown"); break;
  }
}
fruitOrVeggie(["banana"]);



// Ex 10 Invalid Number
function invalidNumber(input) {
  let numA = Number(input[0]);

  if ((numA >= 100 && numA <= 200) || numA === 0) {

  } else { console.log("invalid"); }

}

invalidNumber(["75"]);



// Ex 11 Fruit Shop
function fruitShop(input) {
  let fruit = input[0];
  let dayW = input[1];
  let quantityF = Number(input[2]);

  if (dayW === "Monday" || dayW === "Tuesday" || dayW === "Wednesday" || dayW === "Thursday" || dayW === "Friday") {
    switch (fruit) {

      case "banana": console.log((quantityF * 2.50).toFixed(2)); break;
      case "apple": console.log((quantityF * 1.20).toFixed(2)); break;
      case "orange": console.log((quantityF * 0.85).toFixed(2)); break;
      case "grapefruit": console.log((quantityF * 1.45).toFixed(2)); break;
      case "kiwi": console.log((quantityF * 2.70).toFixed(2)); break;
      case "pineapple": console.log((quantityF * 5.50).toFixed(2)); break;
      case "grapes": console.log((quantityF * 3.85).toFixed(2)); break;
      default: console.log("error"); break;
    }
  }

  else if (dayW === "Saturday" || dayW === "Sunday") {
    switch (fruit) {
      case "banana": console.log((quantityF * 2.70).toFixed(2)); break;
      case "apple": console.log((quantityF * 1.25).toFixed(2)); break;
      case "orange": console.log((quantityF * 0.90).toFixed(2)); break;
      case "grapefruit": console.log((quantityF * 1.60).toFixed(2)); break;
      case "kiwi": console.log((quantityF * 3.00).toFixed(2)); break;
      case "pineapple": console.log((quantityF * 5.60).toFixed(2)); break;
      case "grapes": console.log((quantityF * 4.20).toFixed(2)); break;
      default: console.log("error"); break;
    }
  }
  else {
    console.log("error");
  }

}
fruitShop(["apple", "Tuesday", "2"]);



// Ex 12 Trade Commissions
function tradeCommissions(input) {
  let city = input[0];
  let sales = Number(input[1]);


  if (sales >= 0 && sales <= 500) {
    switch (city) {
      case "Sofia": console.log((0.05 * sales).toFixed(2)); break;
      case "Varna": console.log((0.045 * sales).toFixed(2)); break;
      case "Plovdiv": console.log((0.055 * sales).toFixed(2)); break;
      default: console.log("error"); break;
    }
  }

  else if (sales > 500 && sales <= 1000) {
    switch (city) {
      case "Sofia": console.log((0.07 * sales).toFixed(2)); break;
      case "Varna": console.log((0.075 * sales).toFixed(2)); break;
      case "Plovdiv": console.log((0.08 * sales).toFixed(2)); break;
      default: console.log("error"); break;
    }
  }

  else if (sales > 1000 && sales <= 10000) {
    switch (city) {
      case "Sofia": console.log((0.08 * sales).toFixed(2)); break;
      case "Varna": console.log((0.1 * sales).toFixed(2)); break;
      case "Plovdiv": console.log((0.12 * sales).toFixed(2)); break;
      default: console.log("error"); break;
    }
  }
  else if (sales > 10000) {
    switch (city) {
      case "Sofia": console.log((0.12 * sales).toFixed(2)); break;
      case "Varna": console.log((0.13 * sales).toFixed(2)); break;
      case "Plovdiv": console.log((0.145 * sales).toFixed(2)); break;
      default: console.log("error"); break;
    }
  }
  else { console.log("error"); }

}
tradeCommissions(["Varna", "3874.50"]);



// ------- EXERCISES 3 -------

// Ex 1 Cinema
function cinema(input) {
  let movieType = input[0];
  let rowsNumR = Number(input[1]);
  let columsNumC = Number(input[2]);

  let seatsNum = rowsNumR * columsNumC;
  let income = 0;
  /*switch(movieType){
    case "Premiere": console.log(`${(seatsNum * 12).toFixed(2)} leva`);break;
    case "Normal": console.log(`${(seatsNum * 7.50).toFixed(2)} leva`);break;
    case "Discount": console.log(`${(seatsNum * 5).toFixed(2)} leva`);break;
    default: break;
  }*/

  if (movieType === "Premiere") {
    income = seatsNum * 12;
  }
  else if (movieType === "Normal") {
    income = seatsNum * 7.50;
  }
  else if (movieType === "Discount") {
    income = seatsNum * 5;
  }

  console.log((income).toFixed(2));
}
cinema(["Premiere", "10", "12"]);



// Ex 2 Summer Outfit
function summerOutfit(input) {
  let degrees = Number(input[0]);
  let timeDayNight = input[1];

  let outfit;
  let shoes;

  if (degrees >= 10 && degrees <= 18) {
    if (timeDayNight === "Morning") {
      outfit = "Sweatshirt";
      shoes = "Sneakers";
    }
    else if (timeDayNight === "Afternoon" || timeDayNight === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  }
  else if (degrees > 18 && degrees <= 24) {
    if (timeDayNight === "Morning" || timeDayNight === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
    else if (timeDayNight === "Afternoon") {
      outfit = "T-Shirt";
      shoes = "Sandals";
    }
  }
  else if (degrees >= 25) {
    if (timeDayNight === "Morning") {
      outfit = "T-Shirt";
      shoes = "Sandals";
    }
    else if (timeDayNight === "Afternoon") {
      outfit = "Swim Suit";
      shoes = "Barefoot";
    }
    else if (timeDayNight === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  }
  else { };
  console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["16", "Morning"]);



// Ex 3 New Home
function newHome(input) {

  let flowersType = input[0];
  let countFlowers = Number(input[1]);
  let budgetF = Number(input[2]);

  let discount;
  let finalPrice;


  if (countFlowers >= 10 && countFlowers <= 1000) {
    switch (flowersType) {
      case "Roses": finalPrice = countFlowers * 5;
        if (countFlowers > 80) {
          discount = 0.1 * finalPrice;
          finalPrice = finalPrice - discount;
        }
        break;
      case "Dahlias": finalPrice = countFlowers * 3.80;
        if (countFlowers > 90) {
          discount = 0.15 * finalPrice;
          finalPrice = finalPrice - discount;
        } break;
      case "Tulips": finalPrice = countFlowers * 2.80;
        if (countFlowers > 80) {
          discount = 0.15 * finalPrice;
          finalPrice = finalPrice - discount;
        } break;
      case "Narcissus": finalPrice = countFlowers * 3;
        if (countFlowers < 120) {
          discount = 0.15 * finalPrice;
          finalPrice = finalPrice + discount;
        } break;
      case "Gladiolus": finalPrice = countFlowers * 2.50;
        if (countFlowers < 80) {
          discount = 0.2 * finalPrice;
          finalPrice = finalPrice + discount;
        } break;
      default: break;
    }
  }

  /*if (countFlowers > 80 && flowersType === "Roses") {
    discount = 0.1 * finalPrice;
    finalPrice = finalPrice - discount;
  }
  else if (countFlowers > 90 && flowersType === "Dahlias") {
    discount = 0.15 * finalPrice;
    finalPrice = finalPrice - discount;
  }
  else if (countFlowers > 80 && flowersType === "Tulips") {
    discount = 0.15 * finalPrice;
    finalPrice = finalPrice - discount;
  }
  else if (countFlowers <  120 && flowersType === "Narcissus") {
    discount = 0.15 * finalPrice;
    finalPrice = finalPrice + discount;
  }
  else if (countFlowers < 80 && flowersType === "Gladiolus") {
    discount = 0.2 * finalPrice;
    finalPrice = finalPrice + discount;
  }
*/
  let moneyPlusMinus = Math.abs(budgetF - finalPrice);
  if (budgetF >= finalPrice) {
    console.log(`Hey, you have a great garden with ${countFlowers} ${flowersType} and ${moneyPlusMinus.toFixed(2)} leva left.`);
  }
  else if (budgetF < finalPrice) {
    console.log(`Not enough money, you need ${moneyPlusMinus.toFixed(2)} leva more.`);
  }
}

newHome(["Roses", "55", "250"]);



// Ex 4 Fishing Boat
function fishingBoat(input) {
  let budgetGroup = Number(input[0]);
  let season = input[1];
  let fishermanS = Number(input[2]);

  let shipPrice = 0;
  let diff;


  switch (season) {
    case "Spring": shipPrice = 3000; break;
    case "Summer":
    case "Autumn": shipPrice = 4200; break;
    case "Winter": shipPrice = 2600; break;
  }

  if (fishermanS <= 6) {
    shipPrice = 0.9 * shipPrice;
  }
  else if (fishermanS >= 7 && fishermanS <= 11) {
    shipPrice = 0.85 * shipPrice;
  }
  else if (fishermanS >= 12) {
    shipPrice = 0.75 * shipPrice;
  }


  if (fishermanS % 2 === 0 && season !== "Autumn") {
    shipPrice = 0.95 * shipPrice;
  }


  diff = Math.abs(budgetGroup - shipPrice);

  if (budgetGroup >= shipPrice) {
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  }

  else if (budgetGroup < shipPrice) {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
  }
}
fishingBoat(["3600", "Summer", "6"]);



// Ex 6 Operations Between Numbers
function numberOperations(input) {

  let N1 = Number(input[0]);
  let N2 = Number(input[1]);
  let operator = input[2];
  let resultR;
  let resultType;

  switch (operator) {
    case "+": resultR = N1 + N2; break;
    case "-": resultR = N1 - N2; break
    case "*": resultR = N1 * N2; break;
    case "/": resultR = N1 / N2; break;
    case "%": resultR = N1 % N2; break;
  }

  if (operator === "+" || operator === "-" || operator === "*") {
    if (resultR % 2 === 0) {
      resultType = "even";
    }
    else { resultType = "odd" }
    console.log(`${N1} ${operator} ${N2} = ${resultR} - ${resultType}`);
  }

  else if (operator === "/" && N1 !== 0) {
    console.log(`${N1} / ${N2} = ${resultR.toFixed(2)}`);
  }

  else if (operator === "/" || operator === "%" && N2 === 0) {
    console.log(`Cannot divide ${N1} by zero`);
  }

  else if (operator === "%") {
    console.log(`${N1} % ${N2} = ${resultR}`);
  }
}

numberOperations(["10", "0", "%"]);



// Ex 5 Journey
function journey(input) {

  let budget = Number(input[0]);
  let season = input[1];

  let destination;
  let price = 0;
  let place;

  if (budget <= 100) {
    destination = "Bulgaria";

    switch (season) {
      case "summer": price = 0.3 * budget;
        place = "Camp";
        break;
      case "winter": price = 0.7 * budget;
        place = "Hotel";
        break;
    }
  }

  else if (budget > 100 && budget <= 1000) {
    destination = "Balkans";

    switch (season) {
      case "summer": price = 0.4 * budget;
        place = "Camp";
        break;
      case "winter": price = 0.8 * budget;
        place = "Hotel";
        break;
    }
  }

  else if (budget > 1000) {
    destination = "Europe";
    price = 0.9 * budget;
    place = "Hotel";
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${place} - ${price.toFixed(2)}`);

}

journey(["50", "summer"]);



//Ex 7 Hotel Room
function hotelRoom(input) {

  let month = input[0];
  let nightsCount = Number(input[1]);

  let priceS = 0;
  let priceA = 0;

  let studioTtl = 0;
  let apartmentTtl = 0;

  switch (month) {
    case "May":
    case "October":
      priceS = 50;
      priceA = 65;
      if (nightsCount >= 7 && nightsCount < 14) {
        priceS = 0.95 * priceS;
      }
      else if (nightsCount >= 14) {
        priceS = 0.7 * priceS;
        priceA = 0.9 * priceA;
      }

      break;
    case "June":
    case "September":
      priceS = 75.20;
      priceA = 68.70;
      if (nightsCount > 14) {
        priceS = 0.8 * priceS;
        priceA = 0.9 * priceA;
      }

      break;
    case "July":
    case "August":
      priceS = 76;
      priceA = 77;
      if (nightsCount >= 14) {
        priceA = 0.9 * priceA;
      }

      break;

  }

  studioTtl = priceS * nightsCount;
  apartmentTtl = priceA * nightsCount;

  console.log(`Apartment: ${apartmentTtl.toFixed(2)} lv.`);
  console.log(`Studio: ${studioTtl.toFixed(2)} lv.`);


}

hotelRoom(["June", "14"]);



// Ex 8 On Time For Exam
function onTimeForExam(input) {
  let examHour = Number(input[0]);
  let examMin = Number(input[1]);
  let arrivalHour = Number(input[2]);
  let arrivalMin = Number(input[3]);

  let examTime = examHour * 60 + examMin;
  let arrivalTime = arrivalHour * 60 + arrivalMin;

  if (arrivalTime > examTime) {
    console.log("Late");
    let diff = Math.abs(arrivalTime - examTime);
    if (diff < 60) {
      let min = diff % 60;
      console.log(`${min} minutes after the start`);
    }
    else {
      let h = Math.floor(diff / 60);
      let min = diff % 60;
      if (min < 10) {
        console.log(`${h}:0${min} hours after the start`);
      }
      else {
        console.log(`${h}:${min} hours after the start`);
      }
    }
  }
  else if (arrivalTime <= examTime && examTime - arrivalTime <= 30) {
    console.log("On time");
    let diff = Math.abs(arrivalTime - examTime);
    if (diff > 0) {
      let min = diff % 60;
      console.log(`${min} minutes before the start`);
    }
  }
  else {
    console.log("Early");
    let diff = Math.abs(arrivalTime - examTime);
    if (diff < 60) {
      let min = diff % 60;
      console.log(`${min} minutes before the start`);
    }
    else {
      let h = Math.floor(diff / 60);
      let min = diff % 60;
      if (min < 10) {
        console.log(`${h}:0${min} hours before the start`);
      }
      else {
        console.log(`${h}:${min} hours before the start`);
      }
    }
  }


}
onTimeForExam(["9", "00", "10", "30"]);



// Ex 9 Ski Trip
function skiTrip(input) {

  let daysStay = Number(input[0]);
  let accomodationType = input[1];
  let mark = input[2];
  let price = 0;
  let priceTtl = 0;

  switch (accomodationType) {
    case "room for one person": price = 18;
      if (daysStay < 10 || daysStay >= 10 && daysStay <= 15 || daysStay > 15) {
        priceTtl = price * (daysStay - 1);
      } break;

    case "apartment": price = 25;
      if (daysStay < 10) {
        priceTtl = 0.7 * (price * (daysStay - 1));
      }
      else if (daysStay >= 10 && daysStay <= 15) {
        priceTtl = 0.65 * (price * (daysStay - 1));
      }
      else if (daysStay > 15) {
        priceTtl = 0.5 * (price * (daysStay - 1));
      } break;

    case "president apartment": price = 35;
      if (daysStay < 10) {
        priceTtl = 0.9 * (price * (daysStay - 1));
      }
      else if (daysStay >= 10 && daysStay <= 15) {
        priceTtl = 0.85 * (price * (daysStay - 1));
      }
      else if (daysStay > 15) {
        priceTtl = 0.8 * (price * (daysStay - 1));
      } break;
  }

  if (mark === "positive") {
    priceTtl = priceTtl + 0.25 * priceTtl;
  }
  else if (mark === "negative") {
    priceTtl = priceTtl - 0.1 * priceTtl;
  }


  console.log(priceTtl.toFixed(2));
}

skiTrip(["14", "apartment", "positive"]);


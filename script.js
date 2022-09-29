"use strict";
/*
Codewars over the road
function overTheRoad(address, n) {
  //address array to an even number
  //does work but is not effiecient
  let evenHouse = [];
  let oddHouse = [];

  for (let i = 1; i <= n * 2; i++) {
    if (i % 2 === 0) {
      evenHouse.push(i);
    } else oddHouse.push(i);
    evenHouse.reverse();
  }
  if (address % 2 !== 0) {
    return evenHouse[oddHouse.indexOf(address)];
  } else {
    return oddHouse[evenHouse.indexOf(address)];
  }
}

console.log(overTheRoad(1, 3));

**********************************************************
**********************************************************
-----------------Over the road solved---------------------
**********************************************************
**********************************************************

function overTheRoad(address, n) {
  return n * 2 - address + 1;
}
console.log(overTheRoad(1, 3));
*/

/*
**********************************************************
**********************************************************
------------Reversing words in a string solved------------
**********************************************************
**********************************************************
Reversing Words in a string:


function reverse(string) {
  return string.split(" ").reverse().join(" ");
}

console.log(reverse("I am an expert at this"));
//('I am an expert at this'), 'this at expert an am I');
*/

/*
**********************************************************
**********************************************************
-----------Beginner Series #3 Sum of Numbers--------------
**********************************************************
**********************************************************


function getSum(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  return ((max - min + 1) * (min + max)) / 2;
}

console.log(getSum(0, -1));
*/

/*
**********************************************************
**********************************************************
-------------------Reverse every word---------------------
**********************************************************
**********************************************************

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(reverseWords("Virke dette då?"));
*/

/*
**********************************************************
**********************************************************
-----------------Remove string spaces---------------------
**********************************************************
**********************************************************


function noSpace(x) {
  return x.split(" ").join("");
}

console.log(noSpace("j k l jklj jklj"));
*/

/*
**********************************************************
**********************************************************
---------------------Who likes it?------------------------
**********************************************************
**********************************************************
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. 
It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/
/*
function likes(names) {
  if (names.length < 1) {
    return "no one likes this";
  }
  if (names.length === 1) {
    return `${names} likes this`;
  }
  if (names.length === 2) {
    return `${names[0]} and ${names[1]} likes this`;
  }
  if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
  if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} other like this`;
  }
}

console.log(likes([]));
console.log(likes(["Alex"]));
console.log(likes(["Alex", "Jacob"]));
console.log(likes(["Alex", "Jacob", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
*/
/*
**********************************************************
**********************************************************
------------------Square Every Digit----------------------
**********************************************************
**********************************************************

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/
/*
function squareDigits(num) {
  const splitNum = num.toString().split("");
  let output = [];
  splitNum.forEach((element) => {
    output.push(element * element);
  });
  return parseInt(output.join(""));
}

console.log(squareDigits(2112));
// squareDigits(3212) should equal 9414
*/
/*
**********************************************************
**********************************************************
--------------------Descending Order----------------------
**********************************************************
**********************************************************

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.
Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
*/

/*
function descendingOrder(n) {
  return parseInt(n.toString().split("").sort().reverse().join(""));
}

console.log(descendingOrder(42145));
*/
/*
**********************************************************
**********************************************************
--------------------Quarter of the year-------------------
**********************************************************
**********************************************************

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), 
is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/
/*
const quarterOf = (month) => {
  if (month <= 3) {
    return 1;
  }
  if (month <= 6) {
    return 2;
  }
  if (month <= 9) {
    return 3;
  }
  if (month <= 12) {
    return 4;
  }
};

console.log(quarterOf());
*/
/*
**********************************************************
**********************************************************
<<<<<<< Updated upstream
-----------------------Sum Mixed Array--------------------
**********************************************************
**********************************************************
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.
*/
/*
function sumMix(x) {
  let output = 0;
  for (let i = 0; i < x.length; i++) {
    output += parseInt(x[i]);
  }
  return parseInt(output);
}

console.log(sumMix([9, 3, "7", "3"]));
=======
-----------------------isPangram--------------------------
**********************************************************
**********************************************************
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
The quick brown fox jumps over the lazy dog.
>>>>>>> Stashed changes
*/
/*
function isPangram(str) {
  const value = str.toLowerCase().replace(/[^a-z]/g, "");
  const valueSet = new Set(value);
  if (valueSet.size == 26) {
    return true;
  } else {
    return false;
  }
}
*/
// console.log(isPangram("The quick brown fox jumps over the lazy dog"));

/*********************************************************
**********************************************************
------------------Two fighters, one winner----------------
**********************************************************
*********************************************************/
// Create a function that returns the name of the winner in a fight between two fighters.
// Each fighter takes turns attacking the other and whoever kills the other first is victorious.
// Death is defined as having health <= 0.
// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0.
// You can mutate the Fighter objects.
/*
function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  let firstAttack = firstAttacker;
  while (fighter1.health > 0 || fighter2.health > 0) {
    if (firstAttack == fighter1.name) {
      fighter2.health -= fighter1.damagePerAttack;
      firstAttack = fighter2.name;
    }
    if (firstAttack == fighter2.name) {
      fighter1.health -= fighter2.damagePerAttack;
      firstAttack = fighter1.name;
    }
    if (fighter1.health <= 0 && fighter2.health <= 0) {
      return firstAttack;
    }
    if (fighter1.health <= 0) {
      return fighter2.name;
    }
    if (fighter2.health <= 0) {
      return fighter1.name;
    }
  }
}
// console.log(
//   declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")
// );

console.log(
  declareWinner(
    new Fighter("JanO", 400, 25),
    new Fighter("Petter", 400, 20),
    "Petter"
  )
);
*/

/*********************************************************
**********************************************************
------------Parse nice int from char problem--------------
**********************************************************
*********************************************************/
// You ask a small girl,"How old are you?" She always says, "x years old",
// where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example,
// he test input may be "1 year old" or "5 years old". The first character in the string is always a number.
/*
const getAge = function (inputString) {
  let split = inputString.split(" ").shift();
  return parseInt(split);
};
console.log(getAge("5 years old"));
*/

/*********************************************************
**********************************************************
------------Parse nice int from char problem--------------
**********************************************************
*********************************************************/
// Write a function that takes a single string (word) as argument.
// The function must return an ordered list containing the indexes of all capital letters in the string.
/*
var capitals = function (word) {
  const split = word.split("");
  let output = [];
  for (let i = 0; i < split.length; i++) {
    if (split[i] == split[i].toUpperCase()) {
      output.push(i);
    }
  }
  return output;
};
*/
// console.log(capitals("CodEWaRs"));

/*********************************************************
**********************************************************
------------Parse nice int from char problem--------------
**********************************************************
*********************************************************/

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples
//    "foefet" is an anagram of "toffee"

//     Buckethead" is an anagram of "DeathCubeK"
// write the function isAnagram
/*
var isAnagram = function (test, original) {
  const testSorted = test.toLowerCase().split("").sort().join("");
  const originalSorted = original.toLowerCase().split("").sort().join("");

  if (testSorted == originalSorted) {
    return true;
  } else return false;
};

console.log(isAnagram("foefet", "toffee"));
*/

/*********************************************************
**********************************************************
-------------------Is it a palindrome?--------------------
**********************************************************
*********************************************************/
// Write a function that checks if a given string (case insensitive) is a palindrome.
/*
function isPalindrome(x) {
  let splitted = x.toLowerCase().split("").join("");
  let reversed = x.toLowerCase().split("").reverse().join("");
  console.log(splitted);
  console.log(reversed);
  if (splitted.length <= 1) {
    return true;
  } else {
    if (splitted == reversed) {
      return true;
    } else return false;
  }
}
console.log(isPalindrome("aba"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("hello"));
*/

/*********************************************************
**********************************************************
-------------------------Isograms-------------------------
**********************************************************
*********************************************************/
// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
/*
function isIsogram(str) {
  const lowerC = str.toLowerCase();
  const strSet = new Set(lowerC);
  if (lowerC == !String) {
    return true;
  }
  if (str.length == strSet.size) {
    return true;
  } else {
    return false;
  }
}

console.log(isIsogram("")); //true
console.log(isIsogram("Dermatoglyphics")); //true
console.log(isIsogram("moOse")); //true
*/

/*********************************************************
**********************************************************
Correct the mistakes of the character recognition software
**********************************************************
*********************************************************/
// Character recognition software is widely used to digitise printed texts.
// Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter),
//  are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

//     S is misinterpreted as 5
//     O is misinterpreted as 0
//     I is misinterpreted as 1

// The test cases contain numbers only by mistake.
//TODO: Need to get this working
function correct(string) {
  return string.replaceAll("0", "O").replaceAll("5", "S").replaceAll("1", "I");
}

// console.log(correct("L0ND0N"));
// console.log(correct("DUBL1N"));
// console.log(correct("PAR15"));

/*********************************************************
**********************************************************
--------------------Is a number prime?--------------------
**********************************************************
*********************************************************/

// Define a function that takes an integer argument and returns a logical value true or false depending
// on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no
//  positive divisors other than 1 and itself.
// Requirements

//     You can assume you will be given an integer input.
//     You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
//     NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

function isPrime(num) {
  let numArray = [];
  let result = [];
  for (let i = 1; i <= num; i++) {
    numArray.push(i);
  }
  console.log(numArray);
  for (let i = 0; i <= numArray.length; i++) {
    if (numArray[i] % num === 1 || numArray[i] % num === 1) {
      console.log(numArray[i]);
      result.push(numArray[i]);
    }
  }
}

// console.log(isPrime(0)); //false
// console.log(isPrime(1)); //false
// console.log(isPrime(45)); //false
console.log(isPrime(73)); //true
console.log(isPrime(75)); //false

'use strict';
/*
1. Counting Sheep
*/

const countingSheep = function (num) {
  if(num < 0) {
    return 'num must be positive';
  } else if(num === 0) {
    return 'All sheep jumped over the fence';
  } else {
    return `${num}: Another sheep jumps over the fence ` + countingSheep(num - 1);
  }
};

//let sheep = 3;
//console.log(countingSheep(sheep));

/*
2. Power Calculator
*/
const powerCalculator = function(integer, exponent) {
  if(exponent < 0) {
    return 'exponent should be >= 0';
  } if(exponent === 1) {
    return integer;
  } else {
    return integer * powerCalculator(integer, (exponent - 1));
  }
};

//let int = 3;
//let exp = 5;
//console.log(powerCalculator(int, exp))

/*
3. Reverse String
*/
const reverseString = function(str) {
  let length = str.length;
  let newStr = str.slice(0, length - 1);
  
  if(length === 1) {
    return str;
  }
  return str.slice(length - 1) + reverseString(newStr);
};

//let word = 'hammer';
//console.log(reverseString(word));

/*
4. nth Triangular Number
*/
const nthTriangular = function(num) {
  if(num === 1) {
    return num;
  }
  return num + nthTriangular(num-1);
};

//let triangular = 7;
//console.log(nthTriangular(triangular));

/*
5. String Splitter
Write a recursive function that splits a string based on a separator (similar to String.prototype.split). 
Don't use JS array's split function to solve this problem.

Input: 02/20/2020
Output: ["02", "20", "2020"]
*/
const stringSplitter = function (str, seperator) {
  let arry = [];
  let breaker = str.indexOf(seperator);
  let newStr = str.slice(breaker + 1);
  if(!str.includes(seperator)) {
    arry.push(str);
    return arry;
  } arry.push(str.slice(0, breaker));
  return arry.concat(stringSplitter(newStr, seperator));
};

let input = '02/20/2020';
let seperate = '/';
console.log(stringSplitter(input, seperate));

/*
6. Fibonacci
Write a recursive function that prints the Fibonacci sequence of a given number. 
The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. 
For example, the 7th Fibonacci number in a Fibonacci sequence is 13. 
The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.
*/

/*
7. Factorial
Write a recursive function that finds the factorial of a given number. 
The factorial of a number can be found by multiplying that number by each number between itself and 1. 
For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
*/

/*
8. Find a way out of the maze
You have entered a Maze and need to find your way out of it. 
There are more than one possible paths through the Maze to the single exit point. 
Write a recursive function that will help you find a possible path though the maze.

You can use the following mazes to test your program.

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array). 
The starting point is the top left corner and the exit is indicated by e. 
For simplicity purpose, use the bottom right corner of the maze as the exit. 
You can't go outside the boundaries of the maze. 
The maze has passages that are blocked and you can't go through them. 
These blocked passages are indicated by *. 
Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

For the above maze, a possible exit path can be RRDDLLDDRRRRRR
*/

/*
9. Find ALL the ways out of the maze
Use the above maze and modify your solution so it finds All the possible exit paths through the Maze. 
To find all possible exit paths through the maze, think about how many places you can move at each turn.
Possibly up, down, left or right?

Notice that this maze has 3 exits paths. 
Your recursive function should print all three of the paths with the proper directions. 
For example, given the maze above, the program should output the following:

Path to the exit: RRDDLLDDRRRRRR
Path to the exit: RRDDRRUURRDDDD
Path to the exit: RRDDRRRRDD
*/

/*
10. Anagrams
An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order. 
Write a function that creates an anagram list, listing all the rearrangements of a given word. 
For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. For example, given "east", use "e" as a prefix and place it in front of all 6 permutations of "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". This will give you the words "east", "eats", "esat", "esta", "etas", and "etsa". Continue this way until you find all the anagrams for "east". Then you can use "a" as a prefix and permute the remaining words "est". For "east", there should be 24 words.
*/

/*
11. Organization Chart
Write a recursive function that prints the following organization chart. 
Your output should be as shown below with proper indentation to show the hierarchy. 
You may store the org chart in an object and send that as an input to your program.

Zuckerberg
    Schroepfer
        Bosworth
            Steve
            Kyle
            Andra
        Zhao
            Richie
            Sofia
            Jen
    Schrage
        VanDyck
            Sabrina
            Michelle
            Josh
        Swain
            Blanch
            Tom
            Joe
    Sandberg
        Goler
            Eddie
            Julie
            Annie
       Hernandez
            Rowi
            Inga
            Morgan
       Moissinac
            Amy
            Chuck
            Vinni
       Kelley
            Eric
            Ana
            Wes
*/

/*
12. Binary Representation
Write a recursive function that prints out the binary representation of a given number. 
For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. 
Note that the binary representation of 0 should be 0.
*/
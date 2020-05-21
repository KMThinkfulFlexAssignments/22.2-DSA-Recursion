'use strict';
/*1. Counting Sheep*/
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

/*2. Power Calculator*/
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

/*3. Reverse String*/
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

/*4. nth Triangular Number
*/
const nthTriangular = function(num) {
  if(num === 1) {
    return num;
  }
  return num + nthTriangular(num-1);
};

//let triangular = 7;
//console.log(nthTriangular(triangular));

/*5. String Splitter*/
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

//let input = '02/20/2020';
//let seperate = '/';
//console.log(stringSplitter(input, seperate));

/*6. Fibonacci*/
const fibonacci = function(num) {
  if(num === 1) {
    return [0, 1];
  } else {
    let newFib = fibonacci(num - 1);
    newFib.push(newFib[newFib.length - 1] + newFib[newFib.length - 2]);
    return newFib;
  }
};

//let testNum = 7;
//console.log(fibonacci(testNum));

/*7. Factorial*/
const factorial = function(num) {
  if(num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

//let testNum = 5;
//console.log(factorial(testNum));

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
const navigator = function(maze) {
  let route = '';
  const path = function(column, row) {
    if(maze[column][row] === 'e') {
      return route;
    } else if(maze[column][row] === ' ') {
      maze[column][row] = '*';
      if(column < maze.length - 1) {
        route.concat('D');
        path(column + 1, row);
      }
      if(row < maze[column].length - 1) {
        route.concat('R');
        path(column, row + 1);
      }
      if(column === '*') {
        route.concat('U');
        path(column - 1, row);
      }
      if(row === '*') {
        route.concat('L');
        path(column, row -1);
      }
    }
  };
  return path(maze[0], maze[0][0]);
};

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];
let myMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

//console.log(navigator(mySmallMaze));

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

/*10. Anagrams*/
const makeAnagrams = function(subject) {
  let anagramList = [];
  if(subject.length <= 1) {
    return [subject];
  }
  const splitSubject = subject.split('');
  splitSubject.forEach((letter, index) => {
    let charLeft = [...splitSubject.slice(0, index), ...splitSubject.slice(index + 1)].join('');
    const permutations = makeAnagrams(charLeft);
    permutations.forEach(permutation => {
      anagramList.push(letter + permutation);
    });
  });
  return anagramList;
};

//let testSubject = 'abc';
//console.log(makeAnagrams(testSubject));

/*11. Organization Chart*/
const org = {
  'Zuckerberg': {
    'Schroepher': {
      'Bosworth': {
        'Steve':{},
        'Kyle':{},
        'Andra':{}
      },
      'Zhao':{
        'Richie':{},
        'Sofia':{},
        'Jen':{}
      },
      'Badros': {
        'John':{},
        'Mike':{},
        'Pat':{}
      },
      'Parikh': {
        'Zach':{},
        'Ryan':{},
        'Tes':{}
      }
    },
    'Schrage': {
      'VanDyck': {
        'Sabrina':{},
        'Michelle':{},
        'Josh':{}
      },
      'Swain': {
        'Blanch':{},
        'Tom':{},
        'Joe':{}
      },
      'Frankovsky': {
        'Jasee':{},
        'Brian':{},
        'Margaret':{}
      }
    },
    'Sandberg': {
      'Goler': {
        'Eddie':{},
        'Julie':{},
        'Annie':{}
      },
      'Hernandez': {
        'Rowi':{},
        'Inga':{},
        'Morgan':{}
      },
      'Moissinac': {
        'Amy':{},
        'Chuck':{},
        'Vinni':{}
      },
      'Kelley': {
        'Eric':{},
        'Ana':{},
        'Wes':{}
      }
    }}};

const organizeChart = function(chart, depth = 0) {
  let indent = ' '.repeat(depth * 4);
  Object.keys(chart).forEach(key => {
    console.log(indent + key);
    organizeChart(chart[key], depth + 1);
  });
};

//console.log(organizeChart(org));

/*12. Binary Representation*/

const binaryRepresentation = function(num) {
  if(num < 1) {
    return '';
  }
  return binaryRepresentation(num / 2) + Math.floor(num % 2);
};

//let binaryTest = 25;
//console.log(binaryRepresentation(binaryTest));
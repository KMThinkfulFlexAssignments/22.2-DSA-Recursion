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

/*8. Find a way out of the maze & 9. Find ALL ways out of the maze*/

function escape(maze, str = '') {
  const rs = str.split('').filter(c => c === 'R').length;
  const ls = str.split('').filter(c => c === 'L').length;
  const us = str.split('').filter(c => c === 'U').length;
  const ds = str.split('').filter(c => c === 'D').length;
  const x = rs - ls;
  const y = ds - us;

  let up;
  let right;
  let down;
  let left;
  if (maze[y - 1]) up = maze[y - 1][x];
  right = maze[y][x + 1];
  if (maze[y + 1]) down = maze[y + 1][x];
  left = maze[y][x - 1];

  //base
  if ( // if no possible moves
    (up === undefined || up === '*') &&
    (right === undefined || right === '*') &&
    (down === undefined || down === '*') &&
    (left === undefined || left === '*')
  ) { return; }
  // if exit is found;
  if (up === 'e') console.log(str + 'U');
  if (right === 'e') console.log(str + 'R');
  if (down === 'e') console.log(str + 'D');
  if (left === 'e') console.log(str + 'L');

  //recursive
  if (up && up !== '*') {
    const newMaze = [...maze].map(line => [...line]);
    newMaze[y][x] = '*';
    escape(newMaze, str + 'U');
  }
  if (right && right !== '*') {
    const newMaze = [...maze].map(line => [...line]);
    newMaze[y][x] = '*';
    escape(newMaze, str + 'R');
  }
  if (down && down !== '*') {
    const newMaze = [...maze].map(line => [...line]);
    newMaze[y][x] = '*';
    escape(newMaze, str + 'D');
  }
  if (left && left !== '*') {
    const newMaze = [...maze].map(line => [...line]);
    newMaze[y][x] = '*';
    escape(newMaze, str + 'L');
  }
}

let myVerySmallMaze = [
  []
];
let enterIsExit = [
  ['e']
];
let justWalkRight = [ 
  [' ', 'e'] 
];
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

//console.log(navigator(myVerySmallMaze));
//console.log(navigator(enterIsExit));
console.log(escape(myMaze));


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
'use strict';

const sumOf = function(arry) {
  if (arry.length === 1) {
    return arry[0];
  }

  return arry[0] + sumOf(arry.slice(1));
};

let list = [2,4,6,8,10];
console.log(sumOf(list));
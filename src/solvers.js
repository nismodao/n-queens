/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {

window.countNRooksSolutions = function(n,result) {

  var solutionCount = [];
  var pieces = _.range(n);

  function makeBoard (n,result) {

    if (n === 0) {
      solutionCount.push(result);
      return;
    }

    for (var i = 0; i < pieces.length; i++) {

    if (result.indexOf(pieces[i]) === -1) makeBoard(n-1, result.concat(pieces[i]));
    
    }
  

    }

    makeBoard(n,[]);
    //console.log('Number of solutions for ' + n + ' rooks:', solutionCount.length);
    return [solutionCount,solutionCount.length];  
};

  var test = countNRooksSolutions(n)[0][0];
  var testBoard = [];

  var buildChessBoard = function(test) {
  if(test.length === 0) {
    return;
  }
  var result = [];
  for(var i = 0; i < test.length; i++) {
    if(result.length === 0) { 
      result[test[i]] = 1;
    }
  }
  for(var i = 0; i < test.length; i++) {
    if(result[i] === undefined) {
      result[i] = 0;
    }
    if(test >= 1) {
      result.push(0);
    }
  }
  testBoard.push(result);
  buildChessBoard(test.slice(1))
  
};
buildChessBoard(test);
console.log("testboard is", testBoard);
console.log('Single solution for ' + n + ' rooks:', JSON.stringify(testBoard));
  return testBoard;
};


 

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n,result) {

  var solutionCount = [];
  var pieces = _.range(n);

  function makeBoard (n,result) {

    if (n === 0) {
      solutionCount.push(result);
      return;
    }

    for (var i = 0; i < pieces.length; i++) {

      if (result.indexOf(pieces[i]) === -1) makeBoard(n-1, result.concat(pieces[i]));
    
    }
  

  }

    makeBoard(n,[]);
    console.log('Number of solutions for ' + n + ' rooks:', solutionCount.length);
    return solutionCount.length;  
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  //var solution = undefined; //fixme

window.countNQueensSolutions = function(n,result) {
  var solutionCount = [];
  var pieces = _.range(n);

  function makeBoard (n,result) {

    if (n === 0) {
      solutionCount.push(result);
      return;
    }

    for (var i = 0; i < pieces.length; i++) {

      if (result.indexOf(pieces[i]) === -1) makeBoard(n-1, result.concat(pieces[i]));
    
    }
  
  }

    makeBoard(n,[]);
    //Slope test

    for (var i =0; i<solutionCount.length; i++) {
      for (var j = 0; j<solutionCount[i].length-1; j++) {
        x1 = solutionCount[i][j];
        y1 = j;
        for(var k = 1; k < solutionCount[i].length; k++) {
        x2 = solutionCount[i][k];
        y2 = k;
        if (Math.abs((y2-y1)/(x2-x1)) === 1) {
          solutionCount[i][j] = null; 
        }
      }
    }
  }
    //filter null values
    var solutionCount = solutionCount.filter(function(value) {
      return (value.indexOf(null) === -1); 
    });
  // console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return [solutionCount,solutionCount.length];
};

var test = countNQueensSolutions(n)[0][0];

console.log('test is',typeof countNQueensSolutions(n)[0][0]);
  var testBoard = [];

  var buildChessBoard = function(test) {
  if(test === undefined || test.length === 0) {
    return testBoard;
  }
  var result = [];
  for(var i = 0; i < test.length; i++) {
    if(result.length === 0) { 
      result[test[i]] = 1;
    }
  }
  for(var i = 0; i < test.length; i++) {
    if(result[i] === undefined) {
      result[i] = 0;
    }
    if(test >= 1) {
      result.push(0);
    }
  }

  testBoard.push(result);
  buildChessBoard(test.slice(1))
  
};
  buildChessBoard(test);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(testBoard));
  return testBoard;

};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n,result) {
  var solutionCount = [];
  var pieces = _.range(n);

  function makeBoard (n,result) {

    if (n === 0) {
      solutionCount.push(result);
      return;
    }

    for (var i = 0; i < pieces.length; i++) {

      if (result.indexOf(pieces[i]) === -1) makeBoard(n-1, result.concat(pieces[i]));
    
    }
  
  }

    makeBoard(n,[]);
    //Slope test

    for (var i =0; i<solutionCount.length; i++) {
      for (var j = 0; j<solutionCount[i].length-1; j++) {
        x1 = solutionCount[i][j];
        y1 = j;
        for(var k = 1; k < solutionCount[i].length; k++) {
        x2 = solutionCount[i][k];
        y2 = k;
        if (Math.abs((y2-y1)/(x2-x1)) === 1) {
          solutionCount[i][j] = null; 
        }
      }
    }
  }
    //filter null values
    var solutionCount = solutionCount.filter(function(value) {
      return (value.indexOf(null) === -1); 
    });
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return [solutionCount,solutionCount.length];

};

const brain = require('./brain');
const net = new brain.NeuralNetwork();

function character(string) {
    if(string.length !== 7 * 7){
        console.log('error');
    }
    return string.split('').map(integer);
  }
  
  function integer(character) {
    return character === '#' ? 1 : 0;
  }

const zero = character(
    '#######' +
    '#     #' +
    '#     #' +
    '#     #' +
    '#     #' +
    '#     #' +
    '#######'
  );
  const one = character(
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   ' 
  );
  const two = character(
    '#######' +
    '      #' +
    '      #' +
    '#######' +
    '#      ' +
    '#      ' +
    '#######'
  );
  

  net.train([
    { input: zero, output: { zero: 1 } },
    { input: one, output: { one: 1 } },
    { input: two, output: { two: 1 } },
  ]);
  

  const result = brain.likely(character(
    '#######' +
    '      #' +
    '      #' +
    '#######' +
    '#      ' +
    '#      ' +
    '#######'
  ), net);

  const stats = net.run(character(
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   ' 
  ));
  
  
console.log(result);
console.log(stats);
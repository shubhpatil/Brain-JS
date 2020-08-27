const brain = require('./brain');

// provide optional config object (or undefined). Defaults shown.
const config = {
    binaryThresh: 0.5, // ¯\_(ツ)_/¯
    hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid' // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh']
  };
  
  // create a simple feed forward neural network with backpropagation
  const net = new brain.NeuralNetwork(config);
  
  net.train([
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] },
  ]);
  
  const result = net.run([1, 0]);
  console.log(result);
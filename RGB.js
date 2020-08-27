const brain = require('./brain');
const net = new brain.NeuralNetwork();

net.train([
    { input: { red: 0.03, green: 0.7, blue: 0.5 }, output: { dark: 1 } },
    { input: { red: 0.33, green: 0.24, blue: 0.29 }, output: { dark: 1 } },
    { input: { red: 0.31, green: 0.35, blue: 0.41 }, output: { dark: 1 } },
    { input: { red: 0.16, green: 0.09, blue: 0.2 }, output: { light: 1 } },
    { input: { red: 0.5, green: 0.5, blue: 1.0 }, output: { light: 1 } },
    { input: { red: 0.1, green: 0.84, blue: 0.72 }, output: { light: 1 } },
]);

var result = net.run({ red: 1, green: 0.4, blue: 0 });
console.log(result);
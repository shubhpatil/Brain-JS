const brain = require('./brain');
const net = new brain.recurrent.LSTM();

let trainingData = [{
        input: 'I am super happy!',
        output: 'happy'
    },
    {
        input: 'I am super unhappy',
        output: 'sad'
    },
    {
        input: 'Are we there yet ?',
        output: 'excited'
    },
    {
        input: 'What a pill!',
        output: 'sarcastic'
    },
];

net.train(trainingData, {
    iterations: 100,
    errorThresh: 0.011,
    log: (stats) => console.log(stats)
});

var result = net.run('I am sad');
console.log(result);
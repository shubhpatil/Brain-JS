const brain = require('./brain');
const net = new brain.recurrent.LSTM({ hiddenLayers: [20] });

let trainingData = [
    '0+0=0',
    '0+1=1',
    '0+2=2',
    '0+3=3',
    '0+4=4',
    '0+5=5',

    '1+0=1',
    '1+1=2',
    '1+2=3',
    '1+3=4',
    '1+4=5',
    '1+5=6',

    '2+0=2',
    '2+1=3',
    '2+2=4',
    '2+3=5',
    '2+4=6',
    '2+5=7',
];

net.train(trainingData, {
    errorThresh: 0.025,
    log: (stats) => console.log(stats)
});

var result = net.run('2+3=');
console.log(result);
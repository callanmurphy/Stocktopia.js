const stockLibrary = './stocks';
let x = ['10:00','11:00','12:00','1:00','2:00'];
let y = [339.54, 342.33, 356.93, 324.21,298.25];

// not working
// var i;
// for (i = 0; i < x.length; i++){
//     data += { x: x[i], y: y[i]};
// }
// console.log(data[0]);

let data = [
    { x: x[0], y: y[0]},
    { x: x[1], y: y[1]},
    { x: x[2], y: y[2]},
    { x: x[3], y: y[3]},
    { x: x[4], y: y[4]}
]

aapl = new Stock('AAPL', data);
newChart(aapl);
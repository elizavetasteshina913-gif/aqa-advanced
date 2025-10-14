
// function handleEven(num) {
//     console.log(`${num} — even number`);
// }
//
//
// function handleOdd(num) {
//     console.log(`${num} — odd number`);
// }
//
//
// function handleNum(number, onEven, onOdd) {
//     if (number % 2 === 0) {
//         onEven(number);
//     } else {
//         onOdd(number);
//     }
// }
//
//
// handleNum(8, handleEven, handleOdd);
// handleNum(5, handleEven, handleOdd);




function handleEven() {
    console.log("number is even");
}

function handleOdd() {
    console.log("number is odd");
}

function handleNum(number, handleEven, handleOdd) {
    if (number % 2 === 0) {
        handleEven();
    } else {
        handleOdd();
    }
}


handleNum(10, handleEven, handleOdd);
handleNum(7, handleEven, handleOdd);




// callback functions

// function processPayment(amount, balance){
//     if (balance < amount){
//         console.log("Balance should be equal or bigger than amount");
//         return
//
//     }
//     console.log ("operation successful");
// }
//
// processPayment(111,11);

function onPaymentFailure() {
  console.log("payment failed");
}

function onPaymentSuccess() {
  console.log("payment was successful");
}

function processPayment(amount, balance, onFailure, onSuccess) {
  if (balance < amount) {
    onFailure();
    return;
  }
  onSuccess();
}

processPayment(111, 11, onPaymentFailure, onPaymentSuccess);

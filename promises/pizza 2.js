async function prepareCoffee() {
  console.log("preparing coffee");
}

function notifyWhenReady() {
  console.log("Please take your coffee");
}

function makeOrder() {
  console.log("Making order");
}

function callMom() {
  console.log("Calling Mom");
}

makeOrder();
prepareCoffee()
  .then(() => "Machine made a coffee")
  .then(notifyWhenReady);
// .catch(() => console.log("something went wrong"))

callMom();

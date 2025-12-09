const personAge = 9;
//
// if (personAge < 10) {
//     console.log("it is a kid")
// }
// else if (personAge <=14 && personAge >= 10) {
//     console.log("it is a minor")
// } else if (personAge >14 && personAge < 18) {
//     console.log("it is a teenager")
// } else {
//     console.log("it is an adult")
// }

switch (true) {
  case personAge < 10:
    console.log("it is a kid");
    break;
  case personAge <= 14 && personAge >= 10:
    console.log("it is a minor");
    break;
  case personAge > 14 && personAge < 18:
    console.log("it is a teenager");
    break;
  default:
    console.log("it is an adult");
}

// const personAge = 7
// let giftCount = 0
//
// switch (true) {
//     case personAge < 10:
//         giftCount = giftCount + 1
//     case personAge < 14:
//         giftCount = giftCount + 1
//     case personAge < 18:
//         giftCount = giftCount + 1
//         break;
//     default:
//         console.log("no gift")
// }
//
// console.log("Total gifts:", giftCount);

// switch (personAge) {
//     case 1:
//     case 2:
//         console.log("it is a kid")
//         break
//
//     case 18:
//     case 19:
//         console.log("it is a adult")
//         break
//     default:
//         console.log("default")
//
// }

// switch (personAge) {
//     case 10:
//         console.log("it is a kid")
//         break
//     case 18:
//         console.log("it is a adult")
//         break
//     default:
//         console.log("default")
//
// }

// const userSubcriptionPlan = "undefined"
//
// switch (userSubcriptionPlan) {
//     case "free":
//         console.log("limited access")
//         break
//     case "pro":
//         console.log("pro access")
//         break
//     case "business":
//         console.log("super access")
//         break
//     default:
//         console.log("limited access")
//
// }

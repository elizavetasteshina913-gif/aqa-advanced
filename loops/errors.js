const userAge = 13;

// if (userAge >= 18) {
//     console.log("user is adult")
// } else {
//     throw new Error("go home, child!")
// }

try {
  if (userAge >= 18) {
    console.log("user is adult");
  } else {
    throw new Error("go home, child!");
  }
} catch (error) {
  console.log("Error handled : ", error.message);
} finally {
  console.log("finally always works");
}

console.log("end of program");

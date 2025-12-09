// class MyMath {
//     static PI = 3.14
//     constructor() {}
//
//     static sum(...numbers) {
//         return numbers.reduce((sum, number) => sum + number, 0);
//     }
// }
//
//
// const myMath = new MyMath();
// // console.log(myMath.PI);
// // console.log(MyMath.PI);
// console.log(MyMath.sum(1,2,3));
//

class PhoneHelper {
  static generatePhone() {
    return `+38097${Date.now()}`;
  }

  static formatPhone(phone) {
    return phone.replace(/\+/g, " ");
  }
}

const randNumber = PhoneHelper.generatePhone();
console.log(randNumber);

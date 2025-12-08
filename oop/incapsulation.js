// class ATM {
//   #atmBalance;
//   #id;
//   constructor(id) {
//     this.#atmBalance = 1_000_000;
//     this.#id = id;
//   }
//
//   #checkCardExpired() {
//     //
//   }
//
//   #checkBalance() {}
//
//   #updateBalance() {}
//
//   #openCashWindow() {}
//
//   #checkAtmBalance(amount) {
//     if (amount > this.#atmBalance) {
//       throw new Error("Not enough atm balance");
//     }
//   }
//
//   withdraw(amount) {
//     this.#checkCardExpired();
//     this.#checkBalance(amount);
//     this.#updateBalance(amount);
//     this.#checkAtmBalance(amount);
//     this.#openCashWindow();
//   }
// }
//
// const atm = new ATM("123");
//
// atm.withdraw();
//
// // инкапсуляция скрывает данные(например сколько денег в банкомате)
// // абстракция скрывает сложность реализации

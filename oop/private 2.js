class ATM {
  #id;
  #address;
  constructor(id, address) {
    this.#id = id;
    this.#address = address;
  }

  #printAddress() {
    console.log(`[${this.#address}]`);
  }

  sendReport() {
    // send data too data center
    this.#printAddress();
    console.log(`Sending Report: ${this.#id}`);
  }

  get address() {
    return this.#address;
  }
}

const atm1 = new ATM("123", "London");
atm1.sendReport();
// atm1.address = "berlin" // мы может только получить значение, а изменить не можем
// console.log(atm1.address);
// atm1.printAddress()

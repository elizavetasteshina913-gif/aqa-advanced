const user = {
  name: "Peter",
  age: 30,
  greet: function (name) {
    console.log(`Hello ${name}, i am ${this.name} !`);
  },
  printFriendList: function () {
    console.log(
      `my ${this.friends.length > 1 ? "friends are" : "friend is"} ${this.friends.join(", ")}.`,
    );
  },
  friends: [],
  addFriend: function (friendName) {
    this.friends.push(friendName);
  },
};

user.greet("Anton");
user.addFriend("Alice");
user.addFriend("Anton");
user.printFriendList();

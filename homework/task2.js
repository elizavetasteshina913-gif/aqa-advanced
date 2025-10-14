function doSomething(num) {
    console.log(num);

    if (num <= 0) {
        return;
    }

    doSomething(num - 1);
}

doSomething(5);



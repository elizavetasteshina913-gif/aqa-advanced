function printTextAfterDelay(text, delay) {
    return setTimeout(
        () => console.log(text), delay);
}

printTextAfterDelay("Hello after 2 seconds", 2000);
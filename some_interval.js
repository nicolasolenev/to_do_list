function printNumbers(from, to) {
  function someFunction() {
    if (from <= to) {
      console.log(from);
    }
    from++;
  }
  setInterval(someFunction, 1000);
}

printNumbers(1, 5);
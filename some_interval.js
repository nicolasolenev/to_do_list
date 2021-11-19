function printNumbers(from, to) {
  function someFunction() {
    console.log(from);
    from++;
    if (from > to) {
      clearInterval(sdf);
    }
  }
  let sdf = setInterval(someFunction, 1000);

}

printNumbers(1, 5);

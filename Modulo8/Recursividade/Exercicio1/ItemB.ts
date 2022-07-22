const printNumbersB = (n: number) => {
    if (n >= 0) {
      console.log(n);
      printNumbersB(n - 1);
    }
  };
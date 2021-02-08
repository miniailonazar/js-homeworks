function elevate(num, pow) {
    if (pow === 0) {
        return 0;
    }else if (pow === 1) {
        return num;
      } else {
        return num * elevate(num, pow - 1);
      }
}
console.log(elevate(3, 3));
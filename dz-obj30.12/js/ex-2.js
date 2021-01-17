let fraction = {
    numerator: 1,
    denominator: 2,
    sum(obj) {
        let amongDenominator = this.denominator * obj.denominator;
        let amongNumerator = (this.numerator * obj.denominator) + (obj.numerator * this.denominator);
        let smaller = (Math.abs(amongDenominator) <= Math.abs(amongNumerator)) ? Math.abs(amongDenominator) : Math.abs(amongNumerator);
         for (i = smaller; i > 0; i--){
         if(amongDenominator % i === 0 && amongNumerator % i === 0){
            amongDenominator/=i;
            amongNumerator/=i;
         } else {
             continue;
        }
     }
       return `${amongNumerator} ${"/"} ${amongDenominator}`;
    },
    subtract(obj) {
        let amongDenominator = this.denominator * obj.denominator;
        let amongNumerator = (this.numerator * obj.denominator) - (obj.numerator * this.denominator);
        let smaller = (Math.abs(amongDenominator) <= Math.abs(amongNumerator)) ? Math.abs(amongDenominator) : Math.abs(amongNumerator);
        for (i = smaller; i > 0; i--){
            if(amongDenominator % i === 0 && amongNumerator % i === 0){
               amongDenominator/=i;
               amongNumerator/=i;
            } else {
                continue;
           }
        }
          return `${amongNumerator} ${"/"} ${amongDenominator}`;
    },
    multiply(obj) {
        let amongDenominator = this.denominator * obj.denominator;
        let amongNumerator = this.numerator * obj.numerator;
        let smaller = (Math.abs(amongDenominator) <= Math.abs(amongNumerator)) ? Math.abs(amongDenominator) : Math.abs(amongNumerator);
        for (i = smaller; i > 0; i--){
            if(amongDenominator % i === 0 && amongNumerator % i === 0){
               amongDenominator/=i;
               amongNumerator/=i;
            } else {
                continue;
           }
        }
          return `${amongNumerator} ${"/"} ${amongDenominator}`;
    },
    divide(obj) {
        let amongDenominator = this.denominator * obj.numerator;
        let amongNumerator = this.numerator * obj.denominator;
        let smaller = (Math.abs(amongDenominator) <= Math.abs(amongNumerator)) ? Math.abs(amongDenominator) : Math.abs(amongNumerator);
        for (i = smaller; i > 0; i--){
            if(amongDenominator % i === 0 && amongNumerator % i === 0){
               amongDenominator/=i;
               amongNumerator/=i;
            } else {
                continue;
           }
        }
          return `${amongNumerator} ${"/"} ${amongDenominator}`;
    },
    
}
let fraction2 = {
    numerator: -6,
    denominator: 4,
}
console.log(fraction.sum(fraction2));
console.log(fraction.subtract(fraction2));
console.log(fraction.multiply(fraction2));
console.log(fraction.divide(fraction2));
console.log("Сокращение вы вроде бы сказали иожно в самих функциях написать и все");
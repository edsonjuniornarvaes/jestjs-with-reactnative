module.exports = class Division {
  static getDivision(dividend: number, divider: number) {
    if(divider === 0) throw new Error(`Invalid dividend ${divider}`);

    return dividend / divider
  }
} 
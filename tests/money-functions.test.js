const { formatCurrency, getCoins } = require("../src/js/money-functions");

describe("formatCurrency", () => {
  test("formats the number with 2 decimals and $ sign", () => {
    expect(formatCurrency(0)).toBe("$0.00");
    expect(formatCurrency(1)).toBe("$1.00");
    expect(formatCurrency(1.5)).toBe("$1.50");
    expect(formatCurrency(0.01)).toBe("$0.01");
    expect(formatCurrency(527.6789)).toBe("$527.68");
    expect(formatCurrency(-1)).toBe("-$1");
  });
});

describe("getCoins", () => {
  test("returns the combination of coins for given cents", () => {
    expect(getCoins(32)).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2,
    });
    expect(getCoins(10)).toEqual({
      quarters: 0,
      dimes: 1,
      nickels: 0,
      pennies: 0,
    });
    expect(getCoins(27)).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 0,
      pennies: 2,
    });
    expect(getCoins(68)).toEqual({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3,
    });
  });
});

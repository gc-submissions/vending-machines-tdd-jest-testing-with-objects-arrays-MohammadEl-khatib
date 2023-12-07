const {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
} = require("../src/js/cart-functions");

describe("calculateChange", () => {
  test("returns the difference between payment and total", () => {
    expect(calculateChange(5, 6)).toBe(1);
    expect(calculateChange(12.3, 13.03)).toBeCloseTo(0.73); // Adjusted using toBeCloseTo
  });
});

describe("isSufficientPayment", () => {
  test("returns true if payment is greater than or equal to total", () => {
    expect(isSufficientPayment(5, 6)).toBe(true);
    expect(isSufficientPayment(10, 7)).toBe(false);
    expect(isSufficientPayment(3, 3)).toBe(true);
  });
});

describe("calculateTotal", () => {
  test("returns the sum of prices in itemsArray", () => {
    expect(calculateTotal([{ name: "Item", price: 4.99 }])).toBe(4.99);
    expect(
      calculateTotal([
        { name: "Item1", price: 3.5 },
        { name: "Item2", price: 12.99 },
        { name: "Item3", price: 0.03 },
      ])
    ).toBeCloseTo(16.52); // Adjusted using toBeCloseTo
  });

  test("returns 0 for an empty itemsArray", () => {
    expect(calculateTotal([])).toBe(0);
  });
});

describe("addItem", () => {
  test("adds an item to an empty array", () => {
    const itemsArray = [];
    addItem(itemsArray, "Beans", 3);
    expect(itemsArray).toEqual([{ name: "Beans", price: 3 }]);
  });

  test("adds an item to a non-empty array", () => {
    const itemsArray = [{ name: "Beans", price: 3 }];
    addItem(itemsArray, "Sugar", 2);
    expect(itemsArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
    ]);
  });

  test("adds an item to an array with one item", () => {
    const itemsArray = [{ name: "Beans", price: 3 }];
    addItem(itemsArray, "Bread", 1.5);
    expect(itemsArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Bread", price: 1.5 },
    ]);
  });
});

describe("removeItem", () => {
  test("removes the first item from an array of three items", () => {
    const itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Rice", price: 5 },
    ];
    removeItem(itemsArray, 0);
    expect(itemsArray).toEqual([
      { name: "Sugar", price: 2 },
      { name: "Rice", price: 5 },
    ]);
  });

  test("removes the last item from an array of three items", () => {
    const itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Rice", price: 5 },
    ];
    removeItem(itemsArray, 2);
    expect(itemsArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
    ]);
  });

  test("removes a middle item from an array of three items", () => {
    const itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Rice", price: 5 },
    ];
    removeItem(itemsArray, 1);
    expect(itemsArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Rice", price: 5 },
    ]);
  });

  test("removes the only item from an array of one item", () => {
    const itemsArray = [{ name: "Beans", price: 3 }];
    removeItem(itemsArray, 0);
    expect(itemsArray).toEqual([]);
  });
});
//test commentt

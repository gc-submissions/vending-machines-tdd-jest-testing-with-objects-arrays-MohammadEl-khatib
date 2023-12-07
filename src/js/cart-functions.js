function calculateChange(total, payment) {
  return payment - total;
}

function isSufficientPayment(total, payment) {
  return payment >= total;
}

function calculateTotal(itemsArray) {
  return itemsArray.reduce((acc, item) => acc + item.price, 0);
}

function addItem(itemsArray, name, price) {
  itemsArray.push({ name, price });
}

function removeItem(itemsArray, index) {
  itemsArray.splice(index, 1);
}

module.exports = {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
};

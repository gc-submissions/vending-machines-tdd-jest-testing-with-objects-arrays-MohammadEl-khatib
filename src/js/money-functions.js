// formatCurrency function
function formatCurrency(amount) {
  const formattedAmount = amount.toFixed(2);
  return amount >= 0 ? `$${formattedAmount}` : `-$${Math.abs(formattedAmount)}`;
}

function getCoins(cents) {
  const quarters = Math.floor(cents / 25);
  cents %= 25;
  const dimes = Math.floor(cents / 10);
  cents %= 10;
  const nickels = Math.floor(cents / 5);
  const pennies = cents % 5;

  return {
    quarters,
    dimes,
    nickels,
    pennies,
  };
}

module.exports = {
  formatCurrency,
  getCoins,
};

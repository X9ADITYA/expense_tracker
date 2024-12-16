const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const addExpenseBtn = document.getElementById("add-expense-btn");
const expenseList = document.getElementById("expense-list");
const totalExpenseElement = document.getElementById("total-expense");

let totalExpense = 0;

function addExpense() {
  const name = expenseNameInput.value.trim();
  const amount = parseFloat(expenseAmountInput.value);

  if (name === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid expense name and amount.");
    return;
  }

  totalExpense += amount;
  totalExpenseElement.textContent = totalExpense.toFixed(2);

  const expenseItem = document.createElement("li");
  expenseItem.classList.add("expense-item");
  expenseItem.innerHTML = `
    <span>${name}</span>
    <span>₹${amount.toFixed(2)}</span>
  `;

  expenseList.appendChild(expenseItem);

  expenseNameInput.value = "";
  expenseAmountInput.value = "";
}

addExpenseBtn.addEventListener("click", addExpense);

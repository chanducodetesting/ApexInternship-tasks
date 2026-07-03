let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function updateUI() {
    let balance = 0;
    let income = 0;
    let expense = 0;

    const list = document.getElementById("transactionList");
    list.innerHTML = "";

    transactions.forEach((transaction, index) => {
        if (transaction.type === "income") {
            income += transaction.amount;
            balance += transaction.amount;
        } else {
            expense += transaction.amount;
            balance -= transaction.amount;
        }

        let li = document.createElement("li");
        li.innerHTML = `
            ${transaction.text} - ₹${transaction.amount} (${transaction.type})
            <button class="delete-btn" onclick="deleteTransaction(${index})">Delete</button>
        `;
        list.appendChild(li);
    });

    document.getElementById("balance").innerText = `₹${balance}`;
    document.getElementById("income").innerText = `₹${income}`;
    document.getElementById("expense").innerText = `₹${expense}`;

    localStorage.setItem("transactions", JSON.stringify(transactions));
}

function addTransaction() {
    const text = document.getElementById("text").value;
    const amount = Number(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if (text === "" || amount === 0) {
        alert("Please enter valid details");
        return;
    }

    transactions.push({ text, amount, type });

    document.getElementById("text").value = "";
    document.getElementById("amount").value = "";

    updateUI();
}

function deleteTransaction(index) {
    transactions.splice(index, 1);
    updateUI();
}

updateUI();
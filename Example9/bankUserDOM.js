document.addEventListener("DOMContentLoaded", function() {
    const accountNumberElement = document.getElementById("accountNumber");
    const firstNameElement = document.getElementById("firstName");
    const lastNameElement = document.getElementById("lastName");
    const accountTypeElement = document.getElementById("accountType");
    const balanceElement = document.getElementById("balance");
    const amountInput = document.getElementById("amount");
    const depositBtn = document.getElementById("depositBtn");
    const withdrawBtn = document.getElementById("withdrawBtn");
    const transactionsList = document.getElementById("transactions");

    accountNumberElement.textContent = bankUser.accountNumber;
    firstNameElement.textContent = bankUser.firstName;
    lastNameElement.textContent = bankUser.lastName;
    accountTypeElement.textContent = bankUser.accountType;
    balanceElement.textContent = bankUser.getBalance();

    depositBtn.addEventListener("click", function() {
        const amount = parseFloat(amountInput.value);
        if (!isNaN(amount) && amount > 0) {
            const depositMessage = bankUser.deposit(amount);
            balanceElement.textContent = bankUser.getBalance();
            transactionsList.innerHTML += `<li>${depositMessage}</li>`;
            amountInput.value = "";
        } else {
            alert("Please enter a valid amount");
        }
    });

    withdrawBtn.addEventListener("click", function() {
        const amount = parseFloat(amountInput.value);
        if (!isNaN(amount) && amount > 0) {
            const withdrawMessage = bankUser.withdraw(amount);
            if (withdrawMessage === 'Insufficient funds') {
                alert(withdrawMessage);
            } else {
                balanceElement.textContent = bankUser.getBalance();
                transactionsList.innerHTML += `<li>${withdrawMessage}</li>`;
                amountInput.value = "";
            }
        } else {
            alert("Please enter a valid amount");
        }
    });
});

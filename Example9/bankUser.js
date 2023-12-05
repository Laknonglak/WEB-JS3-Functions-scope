function BankUser(accountNumber, firstName, lastName, balance, accountType) {
    this.accountNumber = accountNumber;
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
    this.accountType = accountType;
    this.transactions = [];

    this.deposit = function(amount) {
        this.balance += amount;
        this.transactions.push(`Deposit: +${amount}`);
        return `Deposited ${amount} into account. New balance: ${this.balance}`;
    };

    this.withdraw = function(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            this.transactions.push(`Withdrawal: -${amount}`);
            return `Withdrawn ${amount} from account. New balance: ${this.balance}`;
        } else {
            return 'Insufficient funds';
        }
    };

    this.getBalance = function() {
        return `Current balance: ${this.balance}`;
    };

    this.getTransactions = function() {
        return this.transactions;
    };
}

const bankUser = new BankUser('1234567890', 'Jack', 'Jones', 5000, 'Savings');

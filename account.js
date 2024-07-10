        // Task 1: Create a Constructor Function for the Account Object
        function Account(accountNumber, owner, balance = 0) {
            this.accountNumber = accountNumber;
            this.owner = owner;
            this.balance = balance;
        }

        // Task 2: Implement Methods for Deposit and Withdraw
        Account.prototype.deposit = function(amount) {
            if (amount > 0) {
                this.balance += amount;
                logToOutput(`Deposited $${amount}. New Balance: $${this.balance}`);
            } else {
                logToOutput("Deposit amount must be greater than zero.");
            }
        };

        Account.prototype.withdraw = function(amount) {
            if (amount > 0 && amount <= this.balance) {
                this.balance -= amount;
                logToOutput(`Withdrew $${amount}. New Balance: $${this.balance}`);
            } else if (amount > this.balance) {
                logToOutput("Insufficient funds.");
            } else {
                logToOutput("Withdrawal amount must be greater than zero.");
            }
        };

        // Task 3: Create a Method to Calculate Compound Interest
        Account.prototype.calculateInterest = function(rate, timesCompounded, years) {
            const compoundInterest = this.balance * Math.pow((1 + rate / timesCompounded), (timesCompounded * years)) - this.balance;
            logToOutput(`Compound Interest for ${years} years at an annual rate of ${rate * 100}% compounded ${timesCompounded} times per year is: $${compoundInterest.toFixed(2)}`);
            return compoundInterest;
        };

        // Function to Log Messages to the <pre> Element
        function logToOutput(message) {
            const outputElement = document.getElementById('output');
            outputElement.textContent += message + '\n';
        }

        // Example Usage
        const account1 = new Account('1234567890', 'Alice', 1000);
        const account2 = new Account('0987654321', 'Bob', 500);

        logToOutput(`Account created for ${account1.owner} with initial balance of $${account1.balance}`);
        logToOutput(`Account created for ${account2.owner} with initial balance of $${account2.balance}`);

        // Perform Transactions
        account1.deposit(200);
        account1.withdraw(150);

        // Calculate Interest
        account1.calculateInterest(0.05, 12, 1); // 5% annual interest compounded monthly for 1 year
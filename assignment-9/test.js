describe("Account tests", () => {
    it("Account tests()", () => {
        let acc = new Account(80);
        acc.deposit(10);
        acc.deposit(21);
        acc.withdraw(10);
        acc.deposit(5);

        assert.strictEqual(80, acc.getNumber());
        assert.strictEqual(26, acc.getBalance());
    });
})

describe("SavingsAccount", () => {
    it("SavingsAccount()", () => {
        let acc = new SavingsAccount(200, 2);

        acc.deposit(200);
        acc.addInterest();

        assert.strictEqual(2, acc.getInterest());
        assert.strictEqual(204, acc.getBalance());

        assert.strictEqual(
            "interest added: 4.1616",
            acc.endOfMonth()
        );
    });
});

describe("CheckingAccount", () => {
    it("Checking getter and setter methods of over draft limit", () => {
        let acc = new CheckingAccount(100, 240);
        acc.setOverdraftLimit(123);
        assert.strictEqual(123, acc.getOverdraftLimit());

        acc.withdraw(3);
        acc.deposit(10);

        assert.strictEqual(7, acc.getBalance());
    });
});

describe("Bank", () => {
    it("Bank()", () => {
        var bank = new Bank();          
        bank.addAccount();
        bank.addCheckingAccount(1000);
        bank.addSavingsAccount(2);
        bank.closeAccount(2);

        bank._accounts[1].deposit(200);
        bank._accounts[0].deposit(300);
        bank._accounts[0].deposit(300);
        bank._accounts[0].withdraw(200);
        assert.deepEqual("Account 1: balance 400", bank.accountReport().split('\n')[0]);
        assert.deepEqual("Savings Account 3: balance 200", bank.accountReport().split('\n')[1]);
        assert.deepEqual("\ninterest added: 4.08", bank.endOfMonth());  
    });
});
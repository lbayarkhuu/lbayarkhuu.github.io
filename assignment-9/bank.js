"use strict";

class Bank {
    constructor() {
        this._accounts = [];
        this._nextNumber = 1;
    }    

    addAccount() {
        let acc = new Account(this._nextNumber);
        this._accounts.push(acc);
        this._nextNumber++;
        return acc.getNumber();
    }

    addSavingsAccount(interest) {
        let sacc = new SavingsAccount(this._nextNumber, interest);
        this._accounts.push(sacc);
        this._nextNumber++;
        return sacc.getNumber();
    }

    addCheckingAccount(overdraft) {
        let cacc = new CheckingAccount(this._nextNumber, overdraft)
        this._accounts.push(cacc);
        this._nextNumber++;
        return cacc.getNumber();
    }

    closeAccount(number){
        this._accounts = this._accounts.filter((e)=>e.getNumber() !== number)
    }

    accountReport(){
        return this._accounts.map((account) => account.toString()).join("\n");
    }

    endOfMonth(){
        return this._accounts.map((account) => account.endOfMonth()).join("\n");
    }
}
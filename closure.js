/* const bank = (owner) => {
  
    balance = 0;
    return amount => {
        balance += amount;
        return balance;
    }
} */
const bank = (owner) => {
    balance = 0;
    return {
        Deposit: amount => {
            balance += amount;
            return balance;
        },
        withdraw: amount => {
            balance -= amount;
            return balance;
        }

    }


}
const JhankarBank = bank('Jhankar')

console.log(JhankarBank.Deposit(100));
console.log(JhankarBank.withdraw(100));
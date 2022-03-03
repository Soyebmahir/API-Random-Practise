const bank = () => {
    balance = 0;
    return amount => {
        balance += amount;
    }
}
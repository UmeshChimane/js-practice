//Given an array of transactions { amount, type: "credit" | "debit" }, compute the running balance.

const transactions = [
    { amount: 1000, type: "credit" },
    { amount: 200, type: "debit" },
    { amount: 500, type: "credit" },
    { amount: 100, type: "debit" }
];

const total_balance=transactions.reduce((balance,transaction)=>{
    if(transaction.type==="credit")
    {
        balance+=transaction.amount;
    }
    else{
        balance-=transaction.amount;
    }
    return balance;
},0)

console.log(total_balance);

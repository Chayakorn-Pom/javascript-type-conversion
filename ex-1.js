let accountBalance = 400;
let depositAmountFromUser = "10";

let accountBalanceMessage = "Your account balance is " + accountBalance;

console.log(accountBalanceMessage);

depositAmountFromUser = Number(depositAmountFromUser)
typeof depositAmountFromUser
console.log(typeof depositAmountFromUser)

typeof accountBalance
console.log(typeof accountBalance)

accountBalance = Number(accountBalance)
typeof accountBalance
console.log(typeof accountBalance)

accountBalance = accountBalance + depositAmountFromUser
console.log(accountBalance)

accountBalanceMessage = 'Your account balance is' + " " + accountBalance;
console.log(accountBalanceMessage)



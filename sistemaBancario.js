// 1. Database & Struttura Dati

const accounts = [
    {
        username: "mario",
        pin: 1234,
        balance: 1500,
        movements: []
    },
    {
        username: "anna",
        pin: 4321,
        balance: 3000,
        movements: []
    },
    {
        username: "luca",
        pin: 1111,
        balance: 800,
        movements: []
    }
];


//2. Sistema di Autenticazione (Login)

let currentAccount = null;
let isAuthenticated = false;

while (!isAuthenticated) {

    const inputUsername = prompt("Insert your username:").toLowerCase();

    let foundAccount = null;

    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].username === inputUsername) {
            foundAccount = accounts[i];
            break;
        }
    }


    if (!foundAccount) {
        alert("Username not found. Try again.");
        continue; 
    }


    while (true) {
        const inputPIN = Number(prompt("Insert your PIN:"));

        if (foundAccount.pin === inputPIN) {
            currentAccount = foundAccount;
            isAuthenticated = true;
            break; 
        } else {
            alert("Wrong PIN. Try again.");
        }
    }
}


//3. Operazioni Bancarie Base

let exitDashboard = false;

while (!exitDashboard) {
    const choice = prompt(`Welcome ${currentAccount.username}!\n What do you want to do?\n 1. View Balance\n 2. Withdraw\n 3. Deposit\n 4. Show Movements\n 5. Logout`);

    if (choice === "1") {
        alert("Your Balance: €" + currentAccount.balance.toFixed(2));
    } else if (choice === "2") {
        const amount = Number(prompt("Enter amount to withdraw:"));
        if (amount > 0 && amount <= currentAccount.balance) {
            currentAccount.balance -= amount;
            currentAccount.movements.push({ date: new Date().toLocaleString, type: "withdraw", amount: amount });
            alert(`You withdrew €${amount}. New balance: €${currentAccount.balance.toFixed(2)}`);
        } else {
            alert("Invalid amount or insufficient funds.")
        }
    } else if (condition) {
        
    }
}

const accounts = [
    {
        username: "mario",
        pin: 1234,
        balance: 1500,
        movements: [
            { type: "deposit", amount: 500 },
            { type: "withdraw", amount: 200 }
        ]
    },
    {
        username: "anna",
        pin: 4321,
        balance: 3000,
        movements: [
            { type: "deposit", amount: 3000 }
        ]
    },
    {
        username: "luca",
        pin: 1111,
        balance: 800,
        movements: []
    }
];

let currentAccount = null;
let isAuthenticated = false;

while (!isAuthenticated) {

    // 1️⃣ chiedi username
    const inputUsername = prompt("Insert your username:").toLowerCase();

    // 2️⃣ cerca l'utente
    let foundAccount = null;

    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].username === inputUsername) {
            foundAccount = accounts[i];
            break;
        }
    }

    // 3️⃣ username NON trovato
    if (!foundAccount) {
        alert("Username not found. Try again.");
        continue; // torna a chiedere lo username
    }

    // 4️⃣ PIN loop: chiedi finché non è corretto
    while (true) {
        const inputPIN = Number(prompt("Insert your PIN:"));

        if (foundAccount.pin === inputPIN) {
            currentAccount = foundAccount;
            isAuthenticated = true;
            break; // esce dal loop del PIN
        } else {
            alert("Wrong PIN. Try again.");
        }
    }
}

console.log("Login successful");
console.log("Welcome:",currentAccount.username,"!" ,"What do you want to do?");



// while (currentAccount) {
//     choice = prompt("1. Saldo\n2. Prelievo\n3. Versamento\n4. Storico Movimenti\n")
// }
//Assignment question
//Using JS alert, prompt and confirm and by applying algorithm, build a simple app to transfer money from one bank to another, using the possible steps in atms.

// Steps
//Write down your card information
//Write down the receivers details
//Write down the functions for inputing "insert card", "enter pin", "withdraw or transfer money", "get transfer", confirm transfer, and "handle money transfer"
//Prompt and alert to receiver and display details


//Solution
// My card Info
let myInfo = {
  name: "Isaac Jacob",
  accountNumber: 1111222233,
  balance: 100000,
  pin: 5555,
  bank: "Zenith"
};

// Receivers details
let receiversDetails = [
  {
    name: "Sarah Jacob",
    accountNumber: 1111222233,
    bank: "Access"
  },
  {
    name: "Ezra Jacob",
    accountNumber: 4444555566,
    bank: "UBA"
  },
  {
    name: "Emma Jacob",
    accountNumber: 7777888899,
    bank: "Sterling"
  }
];

// Function to insert Card
function insertCard() {
  let insert = prompt("Please insert your card by typing 'Yes'");
  return insert;  
}

// Function to enter Pin
function enterPin() {
  let pin = prompt("Please enter your PIN:");
  return pin;
}

// Function to withdraw money or transfer
function withdrawOrTransfer() {
  let action = prompt("Type '1' to withdraw or '2' to transfer:");
  if (action === '1') {
    alert("Withdrawal service is not available.");
  } else if (action === '2') {
    let receiver = prompt(" Please enter receiver's account number:");
  } else {
    alert("Invalid choice. Please try again.");
  }
}

// Function to get transfer amount
function getTransferAmount() {
  let amount = prompt("Enter the amount to transfer:");
  return parseFloat(amount);
}

// Function to confirm transfer
function confirmTransfer(amount) {
  return confirm(`Are you sure you want to transfer ${amount} naira, only?`);
}

// Main function to handle money transfer
function transferMoney() {
  insertCard();
  let pin = enterPin();
  if (pin !== myInfo.pin.toString()) {
    alert("Incorrect PIN. Please try again.");
    return;
  }

  withdrawOrTransfer();

  let transferAmount = getTransferAmount();
  if (isNaN(transferAmount) || transferAmount <= 0) {
    alert("Invalid amount. Please enter a valid amount.");
    return;
  }

  let confirmed = confirmTransfer(transferAmount);
  if (confirmed) {
    alert("Transfer successful!");
  } else {
    alert("Transfer cancelled.");
  }
}

transferMoney();


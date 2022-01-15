const billAmount = document.querySelector("#bill-amount")
const chechButton = document.querySelector("#check")
const cashGiven = document.querySelector("#cash-given")
const message = document.querySelector(".error-message")
const availableNotes = [2000, 500, 100, 20, 10, 5, 1]
const NotesReturn = document.querySelectorAll(".no-of-notes")

const validateamount=()=> {
    message.style.display = "none"
    let bill = parseInt(billAmount.value);
    let cash = parseInt(cashGiven.value)
    if (bill > 0) {
        if (cash >= bill) {
            console.log("success")
            const amountTobeReturned = cashGiven.value - billAmount.value
            calculateChange(amountTobeReturned)
        } else {

            message.style.display = "block"
            message.innerHTML = "The bill amount is greater than cash given"
        }

    } else {
        message.style.display = "block"
        message.innerHTML = "The bill amount should be positive"
    }
}

const calculateChange=(amountTobeReturned) =>{
    for (let i = 0; i < availableNotes.length; i++) {
        const numberofNotes = Math.trunc(amountTobeReturned / availableNotes[i])
        amountTobeReturned = amountTobeReturned % availableNotes[i]
        NotesReturn[i].innerText = numberofNotes
    }


}
chechButton.addEventListener("click", validateamount, false)

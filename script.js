//Change Input Value
function handleTicketChange( ticket,isIncrease){
     const ticketInput = document.getElementById(ticket + "-count");
    const tikcetCount = getInputValue(ticket);
    let newTicketCount =tikcetCount;
    if(isIncrease == true){
        newTicketCount =tikcetCount + 1;  
        }
    if(isIncrease == false && tikcetCount >0){
        newTicketCount =tikcetCount - 1;
    }
    ticketInput.value = newTicketCount;
    calculateTotal ();       
}
// Calculate overall function
function calculateTotal() {
    const ticketCount = getInputValue('ticket');
    const economyCount = getInputValue('economy');
    //calculate Sub Total
    const subTotal = ticketCount * 150 + economyCount * 100;
    document.getElementById('subTotal').innerText =subTotal;

    //added 10% vat
    const vat = Math.round(subTotal * 0.1);
    document.getElementById('vat-amount').innerText =  vat;

    //Calculate Grand total
    const grandTotal = subTotal + vat;
    document.getElementById('grand-total').innerText =  grandTotal;
}
function getInputValue(ticket){
    const ticketInput = document.getElementById(ticket + "-count");
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}
//ticket confirm pop-up
let bookNow = document.getElementById("bookNow").addEventListener("click", function(){
    alert( "Ticket Checkout | Click ok to confirm")
});
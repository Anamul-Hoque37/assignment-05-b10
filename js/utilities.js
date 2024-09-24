
function inputDonationAmountById (id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}

function inputRemainingAmountById (id){
    const inputText = parseFloat(document.getElementById(id).innerText);
    return inputText;
}



const modalContainer = document.getElementById('my_modal_1');



document.getElementById('donate-for-noakhali').addEventListener('click', function(){

    const myCash = parseFloat(document.getElementById('my-cash').innerText);
    const inputAmount = parseFloat(document.getElementById('input-amount-noakhali').value);
    const amountNoakhali = parseFloat(document.getElementById('amount-noakhali').innerText);

    const newAmountNoakhali = amountNoakhali + inputAmount;
    const remainingMyCash = myCash - inputAmount;

     if (inputAmount > 0 && myCash > inputAmount && typeof(inputAmount) === 'number'){
        document.getElementById('amount-noakhali').innerText = newAmountNoakhali ;
        document.getElementById('my-cash').innerText = remainingMyCash ;


     }else{
        alert('Invalid Amount');
        document.getElementById('my_modal_1').close();
     }
})





document.getElementById('donate-for-feni').addEventListener('click', function(){

    const myCash = parseFloat(document.getElementById('my-cash').innerText);
    const inputAmount = parseFloat(document.getElementById('input-amount-feni').value);
    const amountFeni = parseFloat(document.getElementById('amount-feni').innerText);

    const newAmountFeni = amountFeni + inputAmount;
    const remainingMyCash = myCash - inputAmount;

     if (inputAmount > 0 && myCash > inputAmount){
        document.getElementById('amount-feni').innerText = newAmountFeni ;
        document.getElementById('my-cash').innerText = remainingMyCash ;

     }else{
        alert('Invalid Amount');
        document.getElementById('my_modal_1').close();
     }
})



document.getElementById('donate-for-quota').addEventListener('click', function(){

    const myCash = parseFloat(document.getElementById('my-cash').innerText);
    const inputAmount = parseFloat(document.getElementById('input-amount-quota').value);
    const amountQuota = parseFloat(document.getElementById('amount-quota').innerText);

    const newAmountQuota = amountQuota + inputAmount;
    const remainingMyCash = myCash - inputAmount;

     if (inputAmount > 0 && myCash > inputAmount){
        document.getElementById('amount-quota').innerText = newAmountQuota ;
        document.getElementById('my-cash').innerText = remainingMyCash ;

     }else{
        alert('Invalid Amount');
        document.getElementById('my_modal_1').close();
     }
})


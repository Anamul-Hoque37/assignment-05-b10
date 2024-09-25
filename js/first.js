


const modalContainer = document.getElementById('my_modal_1');



document.getElementById('donate-for-noakhali').addEventListener('click', function () {

   const myCash = inputRemainingAmountById('my-cash');
   const inputAmount = inputDonationAmountById('input-amount-noakhali');
   const amountNoakhali = inputRemainingAmountById('amount-noakhali');

   const newAmountNoakhali = amountNoakhali + inputAmount;
   const remainingMyCash = myCash - inputAmount;

   if (inputAmount > 0 && myCash >= inputAmount && typeof(inputAmount) === 'number') {
      document.getElementById('amount-noakhali').innerText = newAmountNoakhali;
      document.getElementById('my-cash').innerText = remainingMyCash;


      const div = document.createElement("div");
      div.className = "bg-white p-4 rounded-md my-2 border-2 space-y-4";
      div.innerHTML = `
      <p class=text-2xl font-bold text-slate-400>${inputAmount}  Taka is Donated for flood relief in Noakhali,Bangladesh.</p>
      <p class=text-base text-slate-400> Date: ${new Date().toString()}</p>
      `;
      historyContainer.insertBefore(div, historyContainer.firstChild);

   } else {
      alert('Invalid Donation Amount');
      modalContainer.close();
   }
})





document.getElementById('donate-for-feni').addEventListener('click', function () {

   const myCash = inputRemainingAmountById('my-cash');
   const inputAmount = inputDonationAmountById('input-amount-feni');
   const amountFeni = inputRemainingAmountById('amount-feni');

   const newAmountFeni = amountFeni + inputAmount;
   const remainingMyCash = myCash - inputAmount;

   if (inputAmount > 0 && myCash >= inputAmount && typeof(inputAmount) === 'number') {
      document.getElementById('amount-feni').innerText = newAmountFeni;
      document.getElementById('my-cash').innerText = remainingMyCash;

      const div = document.createElement("div");
      div.className = "bg-white p-4 rounded-md my-2 border-2 space-y-4";
      div.innerHTML = `
      <p class=text-2xl font-bold text-slate-400>${inputAmount}  Taka is Donated for flood relief in Feni,Bangladesh.</p>
      <p class=text-base text-slate-400> Date: ${new Date().toString()}</p>
      `;
      historyContainer.insertBefore(div, historyContainer.firstChild);
   } else {
      alert('Invalid Donation Amount');
      modalContainer.close();
   }
})



document.getElementById('donate-for-quota').addEventListener('click', function () {

   const myCash = inputRemainingAmountById('my-cash');
   const inputAmount = inputDonationAmountById('input-amount-quota');
   const amountQuota = inputRemainingAmountById('amount-quota');

   const newAmountQuota = amountQuota + inputAmount;
   const remainingMyCash = myCash - inputAmount;

   if (inputAmount > 0 && myCash >= inputAmount && typeof(inputAmount) === 'number') {
      document.getElementById('amount-quota').innerText = newAmountQuota;
      document.getElementById('my-cash').innerText = remainingMyCash;

      const div = document.createElement("div");
      div.className = "bg-white p-4 rounded-md my-2 border-2 space-y-4";
      div.innerHTML = `
      <p class=text-2xl font-bold text-slate-400>${inputAmount}  Taka is Donated for Aid for Injured in the Quota Movement,Bangladesh.</p>
      <p class=text-base text-slate-400> Date: ${new Date().toString()}</p>
      `;
      historyContainer.insertBefore(div, historyContainer.firstChild);
   } else {
      alert('Invalid Donation Amount');
      modalContainer.close();
   }
})




const showDonation = document.getElementById('show-donation');
const showHistory = document.getElementById('show-history');
const historyContainer = document.getElementById('history');


showDonation.addEventListener('click', function(){
    document.getElementById('show-donation').classList.add(
        "bg-[#B4F461]",
    );
    showHistory.classList.remove(
        "bg-[#B4F461]"
    );
    document.getElementById('card-form').classList.remove("hidden")
    document.getElementById('history-form').classList.add("hidden")
})

showHistory.addEventListener('click', function(){
    showHistory.classList.add(
        "bg-[#B4F461]"
    );
    showDonation.classList.remove(
        "bg-[#B4F461]"
    );
    document.getElementById('card-form').classList.add("hidden")
    document.getElementById('history-form').classList.remove("hidden")
})
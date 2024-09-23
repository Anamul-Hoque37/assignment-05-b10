

const showDonation = document.getElementById('show-donation')
const showHistory = document.getElementById('show-history')

showDonation.addEventListener('click', function(){
    document.getElementById('show-donation').classList.add(
        "bg-[#B4F461]",
    );
    showHistory.classList.remove(
        "bg-[#B4F461]"
    );
    document.getElementById('main').classList.remove("hidden")
    document.getElementById('footer').classList.add("hidden")
})

showHistory.addEventListener('click', function(){
    showHistory.classList.add(
        "bg-[#B4F461]"
    );
    showDonation.classList.remove(
        "bg-[#B4F461]"
    );
    document.getElementById('main').classList.add("hidden")
    document.getElementById('footer').classList.remove("hidden")
})
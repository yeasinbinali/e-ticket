let clickedSeat = [];

function handleSeatSelection(event) {
    const selectedSeat = event.target;

    selectedSeat.classList.add('bg-green-600');
    selectedSeat.classList.add('text-white');

    clickedSeat.push(selectedSeat);

    const totalSeat = document.getElementById('total-seat');
    totalSeat.innerText = clickedSeat.length;

    const remainingSeat = document.getElementById('remaining-seat');
    remainingSeat.innerText = remainingSeat.innerText - 1;

    const priceContainer = document.getElementById('price-container');

    const seat = document.createElement('p');
    seat = selectedSeat.innerText;
    priceContainer.appendChild(seat);

    const economy = document.createElement('p');
    economy = 'Economy';
    priceContainer.appendChild(economy);

    const price = document.createElement('p');
    price = 500;
    priceContainer.appendChild(price);
}


const seatElements = document.querySelectorAll('.seat');
// seatElements.forEach(seat => {
//     seat.addEventListener('click', handleSeatSelection);
// });
for (const seatElement of seatElements) {
    seatElement.addEventListener('click', handleSeatSelection);
}
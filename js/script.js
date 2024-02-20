let clickedSeat = [];

function handleSeatSelection(event) {
    const selectedSeat = event.target;

    selectedSeat.classList.add('bg-green-600');
    selectedSeat.classList.add('text-white');

    const selectedSeatNumber = selectedSeat.innerText;


    clickedSeat.push(selectedSeat);

    const totalSeat = document.getElementById('total-seat');
    totalSeat.innerText = clickedSeat.length;

    const remainingSeat = document.getElementById('remaining-seat');
    remainingSeat.innerText = remainingSeat.innerText - 1;

    const priceContainer = document.getElementById('price-container');

    const seat = document.getElementById('seat');
    const seatClass = document.getElementById('class');
    const seatPrice = document.getElementById('price');

    seat.innerText = selectedSeatNumber;
    priceContainer.appendChild(seat);

    seatClass.innerText = 'Economy';
    priceContainer.appendChild(seatClass);

    seatPrice.innerText = 500;
    priceContainer.appendChild(seatPrice);

}


const seatElements = document.querySelectorAll('.seat');
// seatElements.forEach(seat => {
//     seat.addEventListener('click', handleSeatSelection);
// });
for (const seatElement of seatElements) {
    seatElement.addEventListener('click', handleSeatSelection);
}
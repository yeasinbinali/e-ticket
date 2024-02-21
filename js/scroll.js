const buyTicketsBtn = document.getElementById("buy-tickets-btn");
const busLogo = document.getElementById("bus");
const modalContinue = document.getElementById("modal-continue");

const ticketSection = document.getElementById("ticket-section");

buyTicketsBtn.addEventListener("click", scrollToTicketSection);
busLogo.addEventListener("click", scrollToTicketSection);
modalContinue.addEventListener("click", scrollToTicketSection);

function scrollToTicketSection() {
    ticketSection.scrollIntoView({ behavior: "smooth", block: "start" });
}
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const guestsInput = document.getElementById('guests');
const commentsInput = document.getElementById('comments');

form.addEventListener('submit', e => {
  e.preventDefault();
  const reservation = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    date: dateInput.value,
    time: timeInput.value,
    guests: guestsInput.value,
    comments: commentsInput.value
  };
  // Send reservation data to server using fetch or XMLHttpRequest
  console.log(reservation);
});

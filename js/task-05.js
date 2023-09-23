const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input',(event) => !event.target.value  ? output.textContent =  "Anonymous" :output.textContent = event.target.value
);
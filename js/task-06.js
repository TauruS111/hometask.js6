const validationInput = document.querySelector('#validation-input');
const numberVelueLength = Number(validationInput.dataset.length);
console.log(numberVelueLength)
validationInput.addEventListener('blur', (event) => {
  console.log(event.target.value.length)
  
    if (event.target.value.length === numberVelueLength) {
        validationInput.classList.remove('invalid'); 
       validationInput.classList.add('valid'); 
    } else {
       validationInput.classList.remove('valid');
       validationInput.classList.add('invalid');
    } 
});
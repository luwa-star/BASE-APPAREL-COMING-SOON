const form = document.getElementById('form');
const email = document.getElementById('email');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});


function checkInputs() {
    const emailValue = email.value.trim();
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank!');
    } else if (!emailValue.match(pattern)) {
        setErrorFor(email, 'email is not valid');
    } else {
        setSuccessFor(email, 'Email has successfully sent!');
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control success';

}
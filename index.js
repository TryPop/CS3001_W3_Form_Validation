const form = document.getElementById('reg');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formSubmit = document.getElementById('form-submit');
    if (validateInput()) {
        formSubmit.innerHTML = "Your response has been recorded";
        formSubmit.classList.add('success');
    } else {
        formSubmit.innerHTML = "There are issues in your form";
        formSubmit.classList.add('error');
    }
})

function validateInput() {
    const nameRe = /^\w+$/;
    const emailRe = /^\w+@\w+.com$/;
    const phoneRe = /^\d{10}$/;
    const ageRe = /^\d+$/;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const age = document.getElementById('age');

    let isValid = true;
    if (name.value.match(nameRe)) {
        name.classList.remove('incorrect')
    } else {
        name.classList.add('incorrect')
        isValid = false;
    }

    if (email.value.match(emailRe)) {
        email.classList.remove('incorrect')
    } else {
        email.classList.add('incorrect')
        isValid = false;
    }

    if (phone.value.match(phoneRe)) {
        phone.classList.remove('incorrect')
    } else {
        phone.classList.add('incorrect')
        isValid = false;
    }

    if (age.value.match(ageRe) && Number(age.value) >= 18) {
        age.classList.remove('incorrect')
    } else {
        age.classList.add('incorrect')
        isValid = false;
    }

    return isValid;
}

document.getElementById('name').addEventListener('change', (e) => {
    console.log(e.target.classList.remove('incorrect'));
})
document.getElementById('email').addEventListener('change', (e) => {
    console.log(e.target.classList.remove('incorrect'));
})

document.getElementById('phone').addEventListener('change', (e) => {
    console.log(e.target.classList.remove('incorrect'));
})

document.getElementById('age').addEventListener('change', (e) => {
    console.log(e.target.classList.remove('incorrect'));
})
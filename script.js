'use strict'

const form = document.getElementById('form');
const displayError = document.querySelector('.error-text');
const firstName = document.getElementById('first-name');
const lasttName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Errors
const error1El = document.querySelector('.error-1');
const error2El = document.querySelector('.error-2');
const error3El = document.querySelector('.error-3');
const error4El = document.querySelector('.error-4');



form.addEventListener('submit', function(e){
    e.preventDefault();

    validateInputs();
})


const setError = function(element, message){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-text');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = function(element){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-text');

    errorDisplay.innerText = '';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}

const isEmailValid = function(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
}



const validateInputs = function(){
    const firstNameValue = firstName.value.trim();
    const lasttNameValue = lasttName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstNameValue === ''){
        setError(firstName, 'First Name cannot be empty');
        error1El.style.opacity = 1;
        // error1El.style.top = '5.8rem';
       
    }else{
        setSuccess(firstName)
        error1El.style.opacity = 0;
    }

    if(lasttNameValue === ''){
        setError(lasttName, 'Last Name cannot be empty')
        error2El.style.opacity = 1;
        // error2El.style.top = '15rem';
    }else{
        setSuccess(lasttName);
        error2El.style.opacity = 0;
    }

    if(emailValue === ''){
        setError(email, 'Email cannot be empty')
        error3El.style.opacity = 1;
        // error3El.style.top = '23.8rem';
    }else if(!isEmailValid(emailValue)){
        setError(email, 'Looks like this is not an email');
        error3El.style.opacity = 1;
        // error3El.style.top = '23.8rem';
    }else{
        setSuccess(email)
        error3El.style.opacity = 0;
    }

    if(passwordValue === ''){
        setError(password, 'Password cannot be empty');
        error4El.style.opacity = 1;
        // error4El.style.top = '32.8rem'
   
    }else if(passwordValue.length < 8){
        setError(password, 'Password must be atleast 8 character')
        error4El.style.opacity = 1;
        // error3El.style.top = '32.8rem';
        
    }else{
        setSuccess(password);
        error4El.style.opacity = 0;
    }


}


const primNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', function(){
    const visibility = primNav.getAttribute('data-visible');

    if(visibility === 'false'){
        primNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }else{
        primNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
})
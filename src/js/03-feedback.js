const form = document.querySelector('form');
const throttle = require('lodash.throttle');
const parsedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (parsedFormData) {
  form.elements.email.value = parsedFormData.email;
  form.elements.message.value = parsedFormData.message;
}

const onInput = function (event) {
  const formData = {};
  formData.email = form.email.value;
  formData.message = form.message.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onSubmit = function (event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
};

form.addEventListener('input', throttle(onInput, 500));

form.addEventListener('submit', throttle(onSubmit, 500));

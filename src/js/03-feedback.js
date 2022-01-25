import _ from 'lodash';
const inputEmailEl = document.querySelector('input');
const inputMesageEl = document.querySelector('textarea');
const formEl = document.querySelector('form');

const currentData = { email: '', message: '' };

if (localStorage.getItem('feedback-form-state')) {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  formEl.elements.email.value = savedData.email;
  formEl.elements.message.value = savedData.message;
  currentData.email = savedData.email;
  currentData.message = savedData.message;
}

formEl.addEventListener('input', evt => onChengeInput(evt));
formEl.addEventListener('submit', evt => onSubmit(evt));

function onChengeInput(evt) {
  currentData[evt.target.name] = evt.target.value;
  throtSaveData(currentData);
}

const throtSaveData = _.throttle(function (currentData) {
  localStorage.setItem('feedback-form-state', JSON.stringify(currentData));
}, 500);

function onSubmit(evt) {
  evt.preventDefault();

  console.log(currentData);
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

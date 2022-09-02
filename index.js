const inputName = document.querySelector('.form__input_name');
const email = document.querySelector('.form__input_email');
const text = document.querySelector('.form__input_text');
const imgFace = document.querySelector('.phones__image_face');
const imgKind = document.querySelector('.phones__image_kindface');
const imgAngry = document.querySelector('.phones__image_angryface');
const buttonFirst = document.querySelector('.phones__button_previous');
const buttonSecond = document.querySelector('.phones__button_middle');
const buttonThird = document.querySelector('.phones__button_next');


email.addEventListener('click', function() {
  email.placeholder = '';
});

inputName.addEventListener('click', function() {
  inputName.placeholder = '';
});

text.addEventListener('click', function() {
  text.placeholder = '';
});

function clickCard() {
  document.querySelectorAll('.card__previous').forEach(item => {
    item.classList.toggle('card_active');})
  document.querySelectorAll('.card__next').forEach(item => {
    item.classList.toggle('card_active');})
  document.querySelectorAll('.cards__button_left').forEach(item => {
    item.classList.toggle('cards__button_active');})
  document.querySelectorAll('.cards__button_right').forEach(item => {
    item.classList.toggle('cards__button_active');})
};

document.querySelectorAll('.card').forEach(item => {
  item.addEventListener('click', event => {
    clickCard()
  })
  });



imgFace.addEventListener('click', function () {
  imgFace.classList.remove('phones__image_active');
  imgKind.classList.add('phones__image_active');
  buttonFirst.classList.remove('phones__button_active');
  buttonSecond.classList.add('phones__button_active');
});

imgKind.addEventListener('click', function () {
  imgKind.classList.remove('phones__image_active');
  imgAngry.classList.add('phones__image_active');
  buttonSecond.classList.remove('phones__button_active');
  buttonThird.classList.add('phones__button_active');
});

imgAngry.addEventListener('click', function () {
  imgAngry.classList.remove('phones__image_active');
  imgFace.classList.add('phones__image_active');
  buttonThird.classList.remove('phones__button_active');
  buttonFirst.classList.add('phones__button_active');
});




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


function clickCard(item) {
  item.querySelector('.card__previous').classList.toggle('card_active');
  item.querySelector('.card__next').classList.toggle('card_active');
  item.querySelector('.cards__button_left').classList.toggle('cards__button_active');
  item.querySelector('.cards__button_right').classList.toggle('cards__button_active');
};

document.querySelectorAll('.cards').forEach((item) =>
  item.addEventListener('click', function() {
  clickCard(item);
  }
));

document.querySelectorAll('.cards__button_left').forEach((item) =>
  item.addEventListener('click', function() {
  clickCard(item);
  }
));

document.querySelectorAll('.cards__button_right').forEach((item) =>
  item.addEventListener('click', function() {
  clickCard(item);
  }
));

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




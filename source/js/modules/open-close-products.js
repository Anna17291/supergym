export const openCloseProducts = () => {
  let firstList = document.querySelector('.terms-list--1');
  let secondList = document.querySelector('.terms-list--2');
  let thirdList = document.querySelector('.terms-list--3');
  let buttonOne = document.querySelector('.length-item__button--1');
  let buttonTwo = document.querySelector('.length-item__button--2');
  let buttonThree = document.querySelector('.length-item__button--3');

  buttonTwo.addEventListener('click', function () {
    secondList.classList.remove('visually-hidden');
    thirdList.classList.add('visually-hidden');
    firstList.classList.add('visually-hidden');
    buttonTwo.classList.add('length-item__button--current');
    buttonOne.classList.remove('length-item__button--current');
    buttonThree.classList.remove('length-item__button--current');
  });

  buttonThree.addEventListener('click', function () {
    secondList.classList.add('visually-hidden');
    thirdList.classList.remove('visually-hidden');
    firstList.classList.add('visually-hidden');
    buttonThree.classList.add('length-item__button--current');
    buttonTwo.classList.remove('length-item__button--current');
    buttonOne.classList.remove('length-item__button--current');
  });

  buttonOne.addEventListener('click', function () {
    secondList.classList.add('visually-hidden');
    thirdList.classList.add('visually-hidden');
    firstList.classList.remove('visually-hidden');
    buttonOne.classList.add('length-item__button--current');
    buttonTwo.classList.remove('length-item__button--current');
    buttonThree.classList.remove('length-item__button--current');
  });
};

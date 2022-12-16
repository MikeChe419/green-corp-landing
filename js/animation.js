const INCREASE_NUMBER_ANIMATION_SPEED = 50;
let animationInited = false;

function increaseNumberAnimationStep(i, element, endNumber) {
    if (i <= endNumber) {
      if (i === endNumber) {
        element.innerText = i + '+';
      } else {
        element.innerText = i;
      }
      i+=100;
    }
     setTimeout (()=> {
        increaseNumberAnimationStep(i, element, endNumber)
     }, INCREASE_NUMBER_ANIMATION_SPEED)
  }

function initIncreaseNumberAnimation() {
   let element = document.querySelector('.features__clients-count');
   increaseNumberAnimationStep(0, element, 5000)
  }

document.querySelector('#budget').addEventListener('change', function
handleSelectChange(e) {
  console.log(e)
  const formContainer = document.createElement('div');
  formContainer.classList.add('form__group', 'form__other-input')
  const input = document.createElement('input');
  if (e.target.value === 'other') {
    input.placeholder = "введите ваш вариант"
    input.type = 'text';
    formContainer.appendChild(input)
    document.querySelector('#form').insertBefore(formContainer, document.querySelector('.form__submit'))
  }

  const otherInput = document.querySelector('.form__other-input');
  if (e.target.value !== 'other' && otherInput) {
    document.querySelector('#form').removeChild(otherInput);
  }
})

function updateScroll() {
  let windowBottomPosition = window.scrollY + window.innerHeight;
  let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
  if (window.scrollY > 0) {
    document.querySelector('header').classList.add('header__scrolled')
  } else {
    document.querySelector('header').classList.remove('header__scrolled')
  }
  if(windowBottomPosition >= countElementPosition && !animationInited) {
    animationInited = true;
    initIncreaseNumberAnimation();
  }
}
window.addEventListener('scroll', ()=> {
  updateScroll()
})

 function addSmoothScroll(anchor) {
   anchor.addEventListener('click', function (e) {
     e.preventDefault();
   console.log(document.querySelector(e.target.getAttribute('href')))
     document.querySelector(e.target.getAttribute('href')).scrollIntoView({
       behavior: 'smooth'
     });
   });
 }
 
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   addSmoothScroll(anchor);
 });

 addSmoothScroll(document.querySelector('.more-button'));
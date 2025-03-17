// FUNCTIONS
const animate = (el) => {
  const maxLength = textArr.length;
  const minLength = 0;
  const currLength = output.length;

  if (direction === FORWARD) {
    if (currLength < maxLength) {
      output.push(textArr[currLength]);
    }
    else {
      direction = BACKWARD;
    }
  }
  else if (direction === BACKWARD) {
    if (currLength > minLength) {
      output.pop(currLength);
    }
    else {
      direction = FORWARD;
    }
  }

  console.log(output);
  el.innerHTML = output.join('');
}

// MAIN BODY
console.log('typewriter script loaded');
const FORWARD = 1;
const BACKWARD = 0;

const el = document.querySelector('#tw-text');

const pauseAnimations = false;

const textArr = el.innerHTML.split('');
console.log(textArr.join(''));

const output = [];
let direction = FORWARD;


setInterval(() => {
  if (!pauseAnimations) {
    animate(el);
  }
}, 500);



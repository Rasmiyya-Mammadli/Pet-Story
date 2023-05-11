let inputField = document.querySelector('.input-field');
inputField.innerHTML = 100;

let radios = document.querySelectorAll('.inside-scale div');
let radArr = [...radios];
let isClicked = false;
let isMatches = false;
let dflt = document.querySelector('.dflt');

radArr.forEach(rad => {
 
  rad.addEventListener('click', (e) => {
    
    radArr.forEach(rad => rad.classList.remove('clicked'));
    
    e.target.classList.add('clicked');
    radArr.forEach(rad => {
      rad.classList.remove('click-inside');
    });
    if (e.target.classList.contains('dflt')) {
     
    } else {
      dflt.classList.remove('dflt');
    }
   
    inputField.value = e.target.getAttribute('data-value');
    isClicked = !isClicked;
    isClicked ? e.target.classList.add('click-inside') : e.target.classList.remove('click-inside');
  });
});

// Keyup event listener for the input field
inputField.addEventListener('keyup', (e) => {
  radArr.forEach(rad => {
    if (rad.getAttribute('data-value') == e.target.value) {
      rad.classList.add('click-inside');
      rad.classList.add('clicked');
    } else {
      rad.classList.remove('click-inside');
      rad.classList.remove('clicked');
    }
  });
});
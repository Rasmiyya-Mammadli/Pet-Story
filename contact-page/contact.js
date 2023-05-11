const firstName = document.querySelector('#name')
const surname = document.querySelector('#last-name')
const submitBtn = document.querySelector('#submit-button')
const confirmation = document.querySelector('#order-confirmation')
const nameError = document.querySelector('#name-error')
const surnameError = document.querySelector('#surname-error')
const emailError = document.querySelector('#email-error')
const submitError = document.querySelector('#submit-error')

function buttonDisabled() {
	if (
		!nameValidation() ||
		!surnameValidation() ||
		!emailValidation() 
	) {
		submitBtn.classList.add('btn')
		submitBtn.classList.remove('btn-purchase')
	} else {
		submitBtn.classList.remove('btn')
		submitBtn.classList.add('btn-purchase')
	}
}

firstName.addEventListener('focusout', buttonDisabled)
firstName.addEventListener('blur', nameValidation)
function nameValidation() {
	let name = firstName.value
	if (name.length === 0) {
		firstName.style.border = '2px solid #a4161a'
		nameError.innerHTML = 'Name is required.'
		return false
	}
	if (!name.match(/^[a-zA-Z]{4,30}$/)) {
		nameError.innerHTML = 'Write full name'
		firstName.style.border = '2px solid #a4161a'
		return false
	} else {
		firstName.style.border = '1px solid green'
		nameError.innerHTML = ''
		return true
	}
}

surname.addEventListener('focusout', buttonDisabled)
surname.addEventListener('blur', surnameValidation)
function surnameValidation() {
	let surnameValid = surname.value
	if (surnameValid.length === 0) {
		surname.style.border = '2px solid #a4161a'
		surnameError.innerHTML = 'Surname is required.'
		return false
	}
	if (!surnameValid.match(/^[a-zA-Z]{5,30}$/)) {
		surnameError.innerHTML = 'Write valid surname'
		surname.style.border = '2px solid #a4161a'
		return false
	} else {
		surname.style.border = '1px solid green'
		surnameError.innerHTML = ''
		return true
	}
}

function emailValidation() {
  let emailValid = email.value
	if (emailValid.length === 0) {
		emailValid.style.border = '2px solid #a4161a'
		emailError.innerHTML = 'email is required.'
		return false
	}
	if (!emailValid.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
		emailError.innerHTML = 'Write full email'
		emailValid.style.border = '2px solid #a4161a'
		return false
	} else {
		emailValid.style.border = '1px solid green'
		emailError.innerHTML = ''
		return true
	}
}

function validateForm() {
	submitBtn.addEventListener('click', e => {
		if (
			!nameValidation() ||
			!surnameValidation() ||
			!emailValidation() 
		) {
			submitError.style.display = 'block'
			submitError.innerHTML = 'Please fill all required fields!'
			setTimeout(function () {
				submitError.style.display = 'none'
			}, 3000)
			return false
		} else {
			confirmation.classList.remove("hidden");
			e.preventDefault()
     
			}
	})
}
validateForm()
function submitForm() {
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.action);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // show the success message and hide the form
        const confirmationMessage = document.getElementById('order-confirmation');
        form.style.display = 'none';
        confirmationMessage.style.display = 'block';
      } else {
        // show the error message
        const errorMessage = document.getElementById('submit-error');
        errorMessage.textContent = 'There was an error submitting the form.';
      }
    }
  };
  xhr.send(formData);
}




        


  // function validateForm() {
  //   let name = document.getElementById("name").value.trim();
  //   let lastname = document.getElementById("lastlname").value.trim();
  //   let email = document.getElementById("email").value.trim();
  //   let message = document.getElementById("message-text").value.trim();
  //   let errorMessage = document.getElementById("error-message");
  
  //   // Check if name, email, and message fields are filled
  //   if (name === "" || email === "" || message === "") {
  //     errorMessage.innerText = "Please fill in all fields.";
  //     errorMessage.classList.remove("hidden");
  //     return false;
  //   }
  
  //   // Check if email is valid
  //   let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(email)) {
  //     errorMessage.innerText = "Please enter a valid email address.";
  //     errorMessage.classList.remove("hidden");
  //     return false;
  //   }
  
  //   // If all fields are valid, send message and show confirmation message
  //   showMessage();
  //   return true;
  // }
  
  // function showMessage() {
  //   let messageDiv = document.getElementById("message");
  //   messageDiv.classList.remove("hidden");
  // }
  
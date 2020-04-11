const form = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const emailSubmitBtn = document.getElementById('emailSubmit');
const invalidIcon = document.getElementById('invalid-icon');
const invalidInfo = document.getElementById('invalid-info');
let flag = true;

emailSubmitBtn.onclick = function (e) {
  e.preventDefault();
  const isEmail = validateEmail(emailInput.value);

  if(isEmail) {
    invalidIcon.classList.remove('main--form-invalid-icon__displayed');
    invalidInfo.classList.remove('main--form-invalid-info__displayed');
    emailInput.classList.remove('main--form-input__invalid');
    flag = true;
    form.submit();
  } else if (flag) {
    invalidIcon.classList.add('main--form-invalid-icon__displayed');
    invalidInfo.classList.add('main--form-invalid-info__displayed');
    emailInput.classList.add('main--form-input__invalid');
    flag = false;
  }
};

emailInput.onblur = () => {
  const isEmail = validateEmail(emailInput.value);

  if(isEmail || emailInput.value === '') {
    invalidIcon.classList.remove('main--form-invalid-icon__displayed');
    invalidInfo.classList.remove('main--form-invalid-info__displayed');
    emailInput.classList.remove('main--form-input__invalid');
    flag = true;
  } else if (flag) {
    invalidIcon.classList.add('main--form-invalid-icon__displayed');
    invalidInfo.classList.add('main--form-invalid-info__displayed');
    emailInput.classList.add('main--form-input__invalid');
    flag = false;
  }
};

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
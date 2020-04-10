const btn = document.getElementById('submit-btn');
const form = document.getElementById('emailForm');
const input = document.getElementById('input-email');
const invalidIcon = document.getElementById('invalid-icon');
const invalidInfo = document.getElementById('invalid-info');

btn.onclick = function (e) {
  e.preventDefault();
  const email = input.value;
  const isEmail = validateEmail(email);

  // TODO create classes and toggle them for each element

  if(isEmail) {
    invalidIcon.style.display = 'none';
    invalidInfo.style.display = 'none';
    input.style.border = "1px solid blue";
    form.submit();
  } else {
    invalidIcon.style.display = 'inline';
    invalidInfo.style.display = 'block';
    input.style.border = "2px solid red"
  }
};

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
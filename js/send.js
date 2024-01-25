const userName = document.getElementById('name');
const email = document.getElementById('email');
const text = document.getElementById('text');
const form = document.getElementById('full-data-send');

const form_modal = document.getElementById('data-send');
const name_modal = document.getElementById('name-modal');
const email_modal = document.getElementById('email-modal');

const modal_ok = document.getElementById('data-ok');

const inputName = document.getElementById('name-modal');
const inputEmail = document.getElementById('email-modal');
const button_mod = document.getElementById('button-modal');
const button = document.getElementById('submit');

const joinButton = document.querySelector('[ modal_join="#modalJoin"]');

const sendForm = () => {
  let ebody = `
    <h1>Username: </h1>
    <p>${userName.value}</p>
    <h1>Email: </h1>${email.value}</p>
    <h1>Message: </h1>
    <p>${text.value}</p>
    `;
  Email.send({
    SecureToken: 'd00c5bdc-91ed-4f47-b9ba-adbb0cb2bfc8', // token from https://smtpjs.com/
    To: 'open@polibet.io', // email that need to registration in https://smtpjs.com/
    From: 'open@polibet.io', // identical email
    Subject: 'User data',
    Body: ebody,
  }).then((message) => {
    form.reset();
    console.log(message);
    joinButton.click();
    form_modal.style.display = 'none';
    modal_ok.style.display = 'block';
  });
};

const sendModalForm = () => {
  let ebody = `
      <h1>Username: </h1>
      <p>${name_modal.value}</p>
      <h1>Email: </h1>${email_modal.value}</p>
      `;

  Email.send({
    SecureToken: 'd00c5bdc-91ed-4f47-b9ba-adbb0cb2bfc8',
    To: 'open@polibet.io',
    From: 'open@polibet.io',
    Subject: 'User data from modal',
    Body: ebody,
  }).then((message) => {
    console.log(message);
    form_modal.style.display = 'none';
    modal_ok.style.display = 'block';
  });
};

// validation style
inputName.nextElementSibling.style.display = 'none';
inputEmail.nextElementSibling.style.display = 'none';
userName.nextElementSibling.style.display = 'none';
email.nextElementSibling.style.display = 'none';

const eventListener = (input, validity) => {
  input.addEventListener('input', function (event) {
    if (validity) {
      input.nextElementSibling.style.display = 'none';
      input.parentNode.style.marginBottom = '15px';
      input.parentNode.style.border = 'none';
      input.style.color = 'white';
    } else {
      showError(input);
    }
  });
};

eventListener(inputName, !ValidEmpty(inputName.value));
eventListener(
  inputEmail,
  !ValidPhone(inputEmail.value) && !ValidTelegram(email.value)
);
eventListener(userName, !ValidEmpty(userName.value));
eventListener(email, !ValidPhone(email.value) && !ValidTelegram(email.value));

button_mod.addEventListener('click', function (event) {
  event.preventDefault();
  if (!inputName.value) {
    inputName.setCustomValidity('Please fill the required fields');

    showError(inputName);
  } else if (!inputEmail.value) {
    inputEmail.setCustomValidity('Please fill the required fields');
    inputEmail.nextElementSibling.textContent =
      'Please fill the required fields';
    showError(inputEmail);
  } else if (!ValidPhone(inputEmail.value) && !ValidTelegram(inputEmail.value)) {
    inputEmail.setCustomValidity('Incorrect format');
    inputEmail.nextElementSibling.textContent = 'Incorrect format';
    showError(inputEmail);
  } else {
    sendModalForm();
  }
});

button.addEventListener('click', function (event) {
  event.preventDefault();
  if (!userName.value) {
    userName.setCustomValidity('Please fill the required fields');
    showError(userName);
  } else if (!email.value) {
    email.nextElementSibling.textContent = 'Please fill the required fields';
    email.setCustomValidity('Please fill the required fields');
    showError(email);
  } else if (!ValidPhone(email.value) && !ValidTelegram(email.value)) {
    email.nextElementSibling.textContent = 'Incorrect format';
    email.setCustomValidity('Incorrect format');
    showError(email);
  } else {
    sendForm();
  }
});

function showError(input) {
  input.nextElementSibling.style.display = 'block';
  input.parentNode.style.marginBottom = '30px';
  input.parentNode.style.border = '1px solid rgba(255, 115, 123, 1)';
  input.style.color = 'rgba(255, 115, 123, 1)';
}

function ValidMail(text) {
  var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  var valid = re.test(text);
  return valid;
}

function ValidPhone(text) {
  var re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
  var valid = re.test(text);
  return valid;
}

function ValidEmpty(text) {
  var re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
  var valid = re.test(text);
  return valid;
}

// function ValidTelegram(text) {
//   var re = /^[A-Za-z\d_]{2,32}$/;
//   console.log(re.test(text), `${text}`)
//   console.log(re.test('icfd'))
//   var valid = re.test(text);
//   return valid;
// }

function ValidTelegram(text) {
  var re = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,32}$/;
  var valid = re.test(text);
  return valid;
}

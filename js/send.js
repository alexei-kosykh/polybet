const userName = document.getElementById('name');
const email = document.getElementById('email');
const text = document.getElementById('text');
const form = document.getElementById('full-data-send');

const form_modal = document.getElementById('data-send');
const name_modal = document.getElementById('name-modal');
const email_modal = document.getElementById('email-modal');

const modal_ok = document.getElementById('data-ok');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  form.setAttribute('modal_join', '#modalJoin');

  let ebody = `
    <h1>Username: </h1>
    <p>${userName.value}</p>
    <h1>Email: </h1>${email.value}</p>
    <h1>Message: </h1>
    <p>${text.value}</p>
    `;

  Email.send({
    SecureToken: ' ', // token from https://smtpjs.com/
    To: 'open@polybet.io', // email that need to registration in https://smtpjs.com/
    From: 'open@polybet.io', // identical email
    Subject: 'User data',
    Body: ebody,
  }).then((message) => {
    console.log(message);
    form.removeAttribute('modal_join');
    form_modal.style.display = 'none';
    modal_ok.style.display = 'block';
  });
});

form_modal.addEventListener('submit', (e) => {
  e.preventDefault();
  let ebody = `
    <h1>Username: </h1>
    <p>${name_modal.value}</p>
    <h1>Email: </h1>${email_modal.value}</p>
    `;

  Email.send({
    SecureToken: '',
    To: 'open@polybet.io',
    From: 'open@polybet.io',
    Subject: 'User data from modal',
    Body: ebody,
  }).then((message) => {
    console.log(message);
    form_modal.style.display = 'none';
    modal_ok.style.display = 'block';
  });
});

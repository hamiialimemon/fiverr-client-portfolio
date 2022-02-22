const formContact = document.querySelector('#formContact');

formContact.addEventListener('submit', function (event) {
  event.preventDefault();
  const toMail = 'mailto:210151558@aston.ac.uk';
  const email = document.forms[0]['email'].value;
  const confirmEmail = document.forms[0]['confirm-email'].value;
  const firstname = document.forms[0]['firstname'].value;
  const message = document.forms[0]['message'].value;

  // console.log({
  //   email, confirmEmail
  // });

  if (firstname.length < 0) {
    alert("firstname can't be empty");
    return;
  }

  if (message.length < 0) {
    alert("message can't be empty");
    return;
  }

  if (email === confirmEmail) {
    alert(`

      To: ${toMail}
      firstname : ${firstname}
      email : ${email}
      confirm-confirm : ${confirmEmail}
      message : ${message}
      
    
    
    `);
  }
});

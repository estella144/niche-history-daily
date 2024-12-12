document.getElementById('submit-button').addEventListener('click', function() {

  console.log('clicked');

  const name = document.getElementById('contact-form-name');
  const subject = document.getElementById('contact-form-subject');
  const text = document.getElementById('contact-form-text');

  const alertDisplay = document.getElementById('contact-form-alert');
  const alertDisplay2 = document.getElementById('contact-form-alert2');

  console.log('values obtained');

  if (!name.value.trim()) {
    name.style.border = '1px solid red';
    alertDisplay.innerHTML = 'Name is required';
    return;
  } else {
    name.style.border = '';
    console.log('name passed');
  }

  if (!subject.value.trim()) {
    subject.style.border = '1px solid red';
    alertDisplay.innerHTML = 'Subject is required';
    return;
  } else {
    subject.style.border = '';
    console.log('subject passed');
  }

  if (!text.value.trim()) {
    text.style.border = '1px solid red';
    alertDisplay.innerHTML = 'Text is required';
    return;
  } else {
    text.style.border = '';
  }

  alertDisplay.innerHTML = '';
  alertDisplay2.innerHTML = '<b>Success!</b> Please wait. It may take a while to open your email client.';

  const emailBody = `Name: ${encodeURIComponent(name.value)}%0D%0A` +
                    `${encodeURIComponent(text.value)}%0D%0A`;

  const emailSubject = `${encodeURIComponent(subject.value)}`;

  const mailtoLink = `mailto:olivern0@proton.me?subject=${emailSubject}&body=${emailBody}`;

  console.log('done');

  window.location.href = mailtoLink;

});

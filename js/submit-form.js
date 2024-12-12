document.getElementById('submit-button').addEventListener('click', function() {

  console.log('clicked');

  const name = document.getElementById('submit-form-name');
  const title = document.getElementById('submit-form-title');
  const date = document.getElementById('submit-form-date');
  const summary = document.getElementById('submit-form-summary');
  const entry = document.getElementById('submit-form-text');

  const alertDisplay = document.getElementById('submit-form-alert');
  const alertDisplay2 = document.getElementById('submit-form-alert2');

  console.log('values obtained');

  if (!name.value.trim()) {
    name.style.border = '1px solid red';
    alertDisplay.innerHTML = 'Name is required';
    return;
  } else {
    name.style.border = '';
    console.log('name passed');
  }

  if (!title.value.trim()) {
    title.style.border = '1px solid red';
    alertDisplay.innerHTML = 'Title is required';
    return;
  } else {
    title.style.border = '';
    console.log('title passed');
  }

  if (!date.value.trim()) {
    date.style.border = '1px solid red';
    alertDisplay.innerHTML = 'Intended date is required';
    return;
  } else {
    date.style.border = '';
  }

  if (!summary.value.trim()) {
    summary.style.border = '1px solid red';
    alertDisplay.innerHTML = 'Summary is required';
    return;
  } else {
    summary.style.border = '';
  }

  if (!entry.value.trim()) {
    entry.style.border = '1px solid red';
    alertDisplay.innerHTML = 'Text is required';
    return;
  } else {
    entry.style.border = '';
  }

  alertDisplay.innerHTML = '';
  alertDisplay2.innerHTML = '<b>Success!</b> Please wait. It may take a while to open your email client.';

  const emailBody = `Name: ${encodeURIComponent(name.value)}%0D%0A` +
                    `Title: ${encodeURIComponent(title.value)}%0D%0A` +
                    `Intended date: ${encodeURIComponent(date.value)}%0D%0A` +
                    `Summary: ${encodeURIComponent(summary.value)}%0D%0A` +
                    `Text: ${encodeURIComponent(entry.value)}%0D%0A`;

  const emailSubject = `Submission: ${encodeURIComponent(title.value)}`;

  const mailtoLink = `mailto:olivern0@proton.me?subject=${emailSubject}&body=${emailBody}`;

  console.log('done')

  window.location.href = mailtoLink;

});

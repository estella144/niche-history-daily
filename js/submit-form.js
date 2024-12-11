document.getElementById('submit-button').addEventListener('click', function() {

  console.log('clicked')

  const name = document.getElementById('submit-form-name');
  const title = document.getElementById('submit-form-title');
  const date = document.getElementById('submit-form-date');
  const summary = document.getElementById('submit-form-summary');
  const entry = document.getElementById('submit-form-text');

  const alertDisplay = document.getElementById('submit-form-alert');

  console.log('values obtained')

  if (!name.value.trim()) {
    name.style.border = '1px solid red';
    alertDisplay.innerHTML = 'Name is required';
    return;
  } else {
    name.style.border = '';
    console.log('name passed')
  }

  if (!title.value.trim()) {
    title.style.border = '1px solid red';
    alertDisplay.innerHTML = 'Title is required';
    return;
  } else {
    title.style.border = '';
    console.log('title passed')
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

  const emailBody = `Name: ${name}%0D%0A` +
                    `Title: ${title}%0D%0A` +
                    `Intended date: ${date}%0D%0A` +
                    `Summary: ${summary}%0D%0A` +
                    `Text: ${entry}%0D%0A`;

  const emailSubject = `Submission: ${title}`;

  const mailtoLink = `mailto:olivern0@proton.me`;

  console.log('done')

  window.location.href = mailtoLink;

});

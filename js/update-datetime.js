function updateDateTime() {
  console.log('called');
  const now = new Date();
  console.log('now: ' + now);
  // const formattedDate = now.toLocaleString();
  const formattedDate = new Intl.DateTimeFormat(undefined, { year: 'numeric', month: 'long', day: 'numeric' }).format(now);
  const formattedTime = new Intl.DateTimeFormat(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(now);
  document.getElementById('current-date-time').innerHTML = `<b>${formattedDate}</b>, ${formattedTime}`;
  console.log('updated');
}

setInterval(updateDateTime, 100);
updateDateTime();

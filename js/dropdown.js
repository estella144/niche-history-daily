document.querySelector('.dropdown-button').addEventListener('click', function() {
  console.log('clicked');
  const content = document.querySelector('.dropdown-content');
  const computedStyle = window.getComputedStyle(content).display;
  console.log('content: ' + content);
  console.log('display1: ' + computedStyle);
  if (computedStyle === 'none') {
    content.style.display = 'block';
  } else {
    content.style.display = 'none';
  }
  console.log('display2: ' + computedStyle);
})

const singUpButton = document.getElementById('signup');
const singInButton = document.getElementById('signin');
const container = document.getElementById('container');

singUpButton.addEventListener('click', () => 
container.classList.add('right-panel-active'));

singInButton.addEventListener('click', () => 
container.classList.remove('right-panel-active'));

console.log('enab')
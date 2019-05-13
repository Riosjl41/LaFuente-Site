import '../../scss/styles.scss';

const btn = document.querySelector('.nav__btn');
btn.addEventListener('click', toggleNav);
const lines = document.querySelectorAll('.line');

function toggleNav (x) {
	lines.forEach((line) => line.classList.toggle('change'));
}

import '../../scss/styles.scss';

const btn = document.querySelector('.nav__btn');
btn.addEventListener('click', toggleNav);
const lines = document.querySelectorAll('.line');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('.link');
links.forEach((link) =>
	link.addEventListener('click', function () {
		nav.classList = 'show';
	})
);

function toggleNav (x) {
	lines.forEach((line) => line.classList.toggle('change'));
	nav.classList.toggle('show');
}

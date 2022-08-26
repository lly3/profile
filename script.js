document.querySelector('.nav .change-mode').addEventListener('click', () => {
	const html = document.querySelector('html');
	if(html.getAttribute('data-theme') == 'light') {
		html.setAttribute('data-theme', 'dark');
	}
	else {
		html.setAttribute('data-theme', 'light');
	}
})

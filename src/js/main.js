document.addEventListener("DOMContentLoaded", () => {
	// Includes
	// @include('components/_variables.js');
	// @include('components/_foo.js');
	// @include('resources/_burger.js');
	// -- //

	overlayCloseBtn.addEventListener('click', () => {
		myBurger.close();
	})

	document.addEventListener('scroll', fixHeader)
})
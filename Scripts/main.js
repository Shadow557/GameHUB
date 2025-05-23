window.addEventListener("DOMContentLoaded", () => {
	// console.log("La pagina ha finito di caricare");

	init();
});

function getCookie(name) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(";").shift();
	return null;
}

// Esempio di utilizzo:
// const user = getCookie('username');
// console.log(user);

(function init() {});

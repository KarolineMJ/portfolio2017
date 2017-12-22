let navButton = document.querySelector("#nav-icon");

navButton.addEventListener('click', navBarReact);

function navBarReact(){
	console.log("my navbar works");
	navButton.classList.toggle('open');
};




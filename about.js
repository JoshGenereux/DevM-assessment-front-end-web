console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Your form has been submitted")
}

const mouseOverPic = (event) => {
	alert("Hey handsome, you just hovered over the pic...")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let mouse = document.querySelector(`#pic`)
mouse.addEventListener('mouseover', mouseOverPic)

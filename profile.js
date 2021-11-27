let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')

const colorClick = (event) => {
    alert("Green")
}
colorBtn.addEventListener('click', colorClick)

const placeClick = (event) => {
    alert("The mountains")
}
placeBtn.addEventListener('click', placeClick);

const ritualClick = (event) => {
    alert("Getting up early and going to the gym")
}
ritualBtn.addEventListener('click', ritualClick)
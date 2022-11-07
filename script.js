const toggleButton = document.getElementByClassName('toggle-button')[0]
const navList = document.getElementByClassName('nav-list')[0]

toggleButton.addEventListener('click',()=>{
navList.classList.toggle('active')
})
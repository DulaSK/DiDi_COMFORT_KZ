const name = document.getElementById('name')
const phoneNumber = document.getElementById('phone_number')
const city = document.getElementById('city')
const whatsApp = document.getElementById('whatsApp')
const whatsAppBtn = document.getElementById('whatsAppBtn')
const burgerBtn = document.querySelector('.burger')
const burgerNavLinks = document.querySelectorAll('.burger-menu .nav-link')

const messageBody = {
    name: '',
    phoneNumber: '',
    city: ''
}

const onChange = (inputType) => (e) => {
    messageBody[inputType] = e.target.value
}

const onClick = (e) => {
    e.stopPropagation()
    const text = `Имя: ${messageBody.name}. Номер телефона: ${messageBody.phoneNumber}. Город:  ${messageBody.city}`
    e.target.href = `https://wa.me/77075496661?text=${text} `
    name.value = ''
    phoneNumber.value = ''
    city.value = ''
}

const openBurgerMenu = () => {
    const burgerMenu = document.querySelector('.burger-menu')
    burgerMenu.classList.toggle('active')
    burgerBtn.classList.toggle('close')
        
    const body = document.body;
    
    if (body.style.overflow !== 'hidden') {
        body.style.height = '100vw'
        body.style.overflow = 'hidden'
    } else {
        body.style.height = ''
        body.style.overflow = ''
    }
}

const hideBurgerMenu = () => {
    const burgerMenu = document.querySelector('.burger-menu')
    burgerMenu.classList.remove('active')
    burgerBtn.classList.remove('close')

    const body = document.body;
    
    body.style.height = ''
        
    body.style.overflow = ''
}

console.log(burgerNavLinks)

name.addEventListener('change', onChange('name'))
phoneNumber.addEventListener('change', onChange('phoneNumber'))
city.addEventListener('change', onChange('city'))
whatsApp.addEventListener('click', onClick)
whatsAppBtn.addEventListener('click', (e) => e.preventDefault())

burgerBtn.addEventListener('click', openBurgerMenu)
burgerNavLinks.forEach((link) => link.addEventListener('click', hideBurgerMenu))
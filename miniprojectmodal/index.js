const openBtn = document.querySelector('.openBtn')
const closeBtn = document.querySelector('.closeBtn')
const modalContent = document.querySelector('.modalContent')

document.addEventListener('DOMContentLoaded',()=>{
    modalContent.style.transform='translate(-200%)'
})
    

openBtn.addEventListener('click',()=>{
    // modalContent.style.display=''
    modalContent.style.transform='translate(0)'

})

closeBtn.addEventListener('click',()=>{
    // modalContent.style.display='none'
    modalContent.style.transform='translate(-200%)'


})
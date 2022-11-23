const closeButton= document.querySelector('.btn')
const menuButton=document.querySelector('i')
const sidebar= document.querySelector('.sidebar')


menuButton.addEventListener('click',()=>{
    sidebar.style.transform='translate(0)'
    sidebar.style.transition='all 0.4s'
    menuButton.style.display='none'
})


closeButton.addEventListener('click',()=>{
    sidebar.style.transform='translate(-100%)'
    sidebar.style.transition='all 0.4s'
    menuButton.style.display=''
    


})


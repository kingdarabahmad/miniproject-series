const btnArrayPlus=document.querySelectorAll('.btn-plus')
const btnArrayMinus=document.querySelectorAll('.btn-minus')

for(let btn of btnArrayPlus){
    btn.addEventListener('click',()=>{
        btn.parentElement.parentElement.lastElementChild.classList.remove('ans-text')
    })

}

for(let btn of btnArrayMinus){
    btn.addEventListener('click',()=>{
        btn.parentElement.parentElement.lastElementChild.classList.add('ans-text')
    })
}
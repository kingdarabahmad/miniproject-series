const heading2= document.querySelector('.heading2')
const container= document.querySelector('.container')
// const btn2= document.querySelector('.btn2')
// const btn3= document.querySelector('.btn3')

let counter =0

container.addEventListener('click',(e)=>{
    if(e.target.className==='btn-1'){
        counter += 1
        heading2.textContent=counter;
        if(counter>0){
            heading2.style.color="green"

        }
    }
    if(e.target.className==='btn-2'){
        counter=0
        heading2.textContent=counter;
        if(counter===0){
            heading2.style.color="black"

        }

    }
    if(e.target.className==='btn-3'){
        counter-=1;
        heading2.textContent=counter;
        if(counter<0){
            heading2.style.color="red"

        }

    }
})





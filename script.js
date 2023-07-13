const menu = document.querySelectorAll('.btn');
const cards = document.querySelectorAll('.card1');
 const bur= document.querySelector('.burger');
const s_menu=document.querySelector('.side')
const c_menu=document.querySelector('.close');
const form=document.querySelector('.frm');
const form_close=document.querySelector('.frm_close');

 bur.addEventListener("click", ()=>{
    s_menu.style.display ='block'
 })
 c_menu.addEventListener("click",()=>{
    s_menu.style.display ='none'
 })

 window.onload=function load(){
    setTimeout(function(){
        form.style.display ='flex'
    },5000)
 }
 form_close.addEventListener("click",()=>{
    form.style.display ='none'

 })

menu.forEach((button,i)=>{
    button.addEventListener("click",(e)=>{
        e.preventDefault()
        if(i==0){
           // cards.style.display = 'block'
            cards.forEach((card)=>{
                card.style.display = 'block'
            })
        }
        else if(i==1){
            cards.forEach((card)=>{
                if(card.classList.contains('indian')){
                card.style.display = 'block'
                }
                else{
                    card.style.display = 'none'
                }
            })


        }
        else if(i==2){
            cards.forEach((card)=>{
                if(card.classList.contains('chinease')){
                card.style.display = 'block'
                }
                else{
                    card.style.display = 'none'
                }
            })


        }
        else{
            cards.forEach((card)=>{
                if(card.classList.contains('drinks')){
                card.style.display = 'block'
                }
                else{
                    card.style.display = 'none'
                }
            })

        }

        
    })
})

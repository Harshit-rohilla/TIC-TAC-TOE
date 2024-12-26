let box1=document.querySelector('.box-1')
let box2=document.querySelector('.box-2')
let box3=document.querySelector('.box-3')
let box4=document.querySelector('.box-4')
let box5=document.querySelector('.box-5')
let box6=document.querySelector('.box-6')
let box7=document.querySelector('.box-7')
let box8=document.querySelector('.box-8')
let box9=document.querySelector('.box-9')
const btn=document.querySelector('.btn')
let chance ='X'
let allBoxes=document.querySelectorAll('.boxes')

btn.addEventListener('click',()=>{
    chance='X'
    allBoxes.forEach((box)=>{box.innerHTML=''})
})

allBoxes.forEach((box)=>{box.addEventListener('click',(e)=>{
    if(chance==='X'&& e.target.innerHTML===''){
        e.target.innerHTML='X';
        chance='0'
        checkWinner();
    }
    else if(chance==='0'&& e.target.innerHTML===''){
        e.target.innerHTML='0'
        chance='X'
        checkWinner();
    }
})})

function checkWinner(){
    if((box1.innerHTML==='X' && box2.innerHTML==='X' && box3.innerHTML==='X') || (box1.innerHTML==='X' && box4.innerHTML==='X' && box7.innerHTML==='X') || (box3.innerHTML==='X' && box6.innerHTML==='X' && box9.innerHTML==='X') || (box7.innerHTML==='X' && box8.innerHTML==='X' && box9.innerHTML==='X') || (box1.innerHTML==='X' && box5.innerHTML==='X' && box9.innerHTML==='X') || (box7.innerHTML==='X' && box5.innerHTML==='X' && box3.innerHTML==='X')){
        alert('X WON')
    }
    else if((box1.innerHTML==='0' && box2.innerHTML==='0' && box3.innerHTML==='0') || (box1.innerHTML==='0' && box4.innerHTML==='0' && box7.innerHTML==='0') || (box3.innerHTML==='0' && box6.innerHTML==='0' && box9.innerHTML==='0') || (box7.innerHTML==='0' && box8.innerHTML==='0' && box9.innerHTML==='0') || (box1.innerHTML==='0' && box5.innerHTML==='0' && box9.innerHTML==='0') || (box7.innerHTML==='0' && box5.innerHTML==='0' && box3.innerHTML==='0')){
        alert('0 WON')
    }
}



// box1.addEventListener('click',(e)=>{
//     if(chance='x'&& e.target.innerHTML===''){

//     }
// })
// box2.addEventListener('click',()=>{})
// box3.addEventListener('click',()=>{})
// box4.addEventListener('click',()=>{})
// box5.addEventListener('click',()=>{})
// box6.addEventListener('click',()=>{})
// box7.addEventListener('click',()=>{})
// box8.addEventListener('click',()=>{})
// box9.addEventListener('click',()=>{})
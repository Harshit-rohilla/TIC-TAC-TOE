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
const result=document.querySelector('.result')
let chance ='X'
let allBoxes=document.querySelectorAll('.boxes')

btn.addEventListener('click',()=>{
    chance='X'
    allBoxes.forEach((box)=>{box.innerHTML=''})
    result.innerHTML=''
})

allBoxes.forEach((box)=>{box.addEventListener('click',(e)=>{
    if(chance==='X'&& e.target.innerHTML===''){
        e.target.innerHTML='X';
        e.target.style.color='rgb(84, 84, 84)';
        chance='O'
        checkWinner();
    }
    else if(chance==='O'&& e.target.innerHTML===''){
        e.target.innerHTML='O'
        e.target.style.color='rgb(242, 235, 211)';
        chance='X'
        checkWinner();
    }
})})

function checkWinner(){
    if((box1.innerHTML==='X' && box2.innerHTML==='X' && box3.innerHTML==='X') || (box1.innerHTML==='X' && box4.innerHTML==='X' && box7.innerHTML==='X') || (box3.innerHTML==='X' && box6.innerHTML==='X' && box9.innerHTML==='X') || (box7.innerHTML==='X' && box8.innerHTML==='X' && box9.innerHTML==='X') || (box1.innerHTML==='X' && box5.innerHTML==='X' && box9.innerHTML==='X') || (box7.innerHTML==='X' && box5.innerHTML==='X' && box3.innerHTML==='X')){
        result.innerHTML='X WON'
    }
    else if((box1.innerHTML==='O' && box2.innerHTML==='O' && box3.innerHTML==='O') || (box1.innerHTML==='O' && box4.innerHTML==='O' && box7.innerHTML==='O') || (box3.innerHTML==='O' && box6.innerHTML==='O' && box9.innerHTML==='O') || (box7.innerHTML==='O' && box8.innerHTML==='O' && box9.innerHTML==='O') || (box1.innerHTML==='O' && box5.innerHTML==='O' && box9.innerHTML==='O') || (box7.innerHTML==='O' && box5.innerHTML==='O' && box3.innerHTML==='O')){
        result.innerHTML='O WON'
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
let choices=document.querySelectorAll(".choice");
let comp_choice=document.querySelector("#computer")
let your_choice=document.querySelector("#your")
let you=document.querySelector("#you");
let comp=document.querySelector("#comp");
let mess=document.querySelector('h2')
let randomChoice,choice;
let score_you=0;
let score_comp=0;
let com_sign=['paper.jpeg','rock.png','sisor.jpeg']
function loss(){
    score_comp++;
    comp.innerText=score_comp;
    mess.innerText="CHOOSE AGAIN"
}
function win(){
    score_you++;
    you.innerText=score_you;
    mess.innerText="🥳 YOU WIN .CHOOSE AGAIN"
}
choices.forEach((choose)=>{
    choose.addEventListener('click',()=>{
        randomChoice = Math.floor(Math.random() * 3);
        comp_choice.setAttribute('src',com_sign[randomChoice]);
        let a=choose.getAttribute('src')
        your_choice.setAttribute('src',a);
        choice=choose.id;
        if(choose.id=='rock'){winner(randomChoice==0?0:randomChoice==2?1:2);        }
        if(choose.id=='paper'){winner(randomChoice==2?0:randomChoice==1?1:2);}
        if(choose.id=='sisor'){winner(randomChoice==1?0:randomChoice==0?1:2);}
    })  
})
function winner(a){
    switch (a) {
        case 0:
            loss();            
            break;
        case 1:
            win();            
            break;    
        default:
            mess.innerText="DRAW,CHOOSE AGAIN"; 
            break;
    }}
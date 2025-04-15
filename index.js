"use strict"


// dropdown
const xishtiInput = document.querySelector('.dropdown-content');
let pressed = false;
const premiaInput = document.querySelector('#btn-premia');


let is_Premia_active = true;

const mainHead = document.querySelector(".main-head")



let wantRandom = document.querySelector(".wantRandom")


function onClick(a){


    if(a == 1 && pressed == false){
        pressed = true;
        xishtiInput.style.display = "block";
    } else if(a==1 && pressed == true){
        xishtiInput.style.display = "none";
        pressed = false;
    } else if (a==0 && is_Premia_active == true){
        is_Premia_active = false;
        premiaInput.style.backgroundColor = 'red';
        premiaInput.innerHTML = 'პრემია<i class="fa-solid fa-x"></i>';
    } else if (a==0 && is_Premia_active == false){
        is_Premia_active = true;
        premiaInput.style.backgroundColor = 'green';
        premiaInput.innerHTML = 'პრემია<i class="fa-solid fa-check"></i>'
    }
}

function closeHead(){
    const xishtiValue = document.forms['myForm']['xishtiValue'].value;

    let first = document.forms['myForm']["first"].value;
    let second = document.forms['myForm']["second"].value;
    let third = document.forms['myForm']["third"].value;
    let forth = document.forms['myForm']["forth"].value;



    if(first =='' || second == ''||third==''||forth==''){
        alert('შეავსეთ სახელები')
        
    }else{
        //if want random
    let players = [first,second,third,forth]


    let randomizedPlayers = [1,2,3,4];

    if(wantRandom.checked) {
        let randNumbers = [];
        
        // Generate unique random numbers
        while(randNumbers.length < 4) {
            let rand = Math.floor(Math.random() * 4);
            if(!randNumbers.includes(rand)) {
                randNumbers.push(rand);
            }
        }
        
        // Create randomized players array using random indices
        randNumbers.forEach((randomIndex, i) => {
            randomizedPlayers[i] = players[randomIndex];
        });

        console.log('Random order:', randomizedPlayers);
    } else {
        randomizedPlayers = [...players];
    }



    mainHead.style.display = "none";

    
    randomizedPlayers.forEach(data => {
        console.log(data)
    })
    }

    console.log(xishtiValue, " = xishti")
    console.log(is_Premia_active, ' = premia')

}

document.querySelector('.future-btn').addEventListener('click', function() {
    const header = document.querySelector('.main-head');
    const button = this;
    header.classList.add('slide-in');
    button.classList.add('button-hide');
    setTimeout(() => {
        button.style.display = 'none';
    }, 500);
});     document.querySelector('.future-btn').addEventListener('click', () => {
    document.querySelector('.main-head').classList.toggle('slide-out')});
    let btn = document.querySelector(".future-btn");
    let hiddenSection = document.querySelector(".hidden")
    function show(){
        hiddenSection.style.display = "block"
    }
    btn.addEventListener('click', show())

    const btn_xishti = document.getElementById('btn-xishti');

    btn_xishti.addEventListener('click', () => {
        btn_xishti.classList.toggle('pressed');
    });






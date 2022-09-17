
let modal = document.querySelector('#my-modal')
let btn = document.querySelector('#buttonOpemModal')
let btnc = document.querySelector('#close')

btn.onclick = function(){
    modal.style.display = "block";
}

btnc.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";

    }
}

let proximo = document.querySelector('#order1')
let sumir = document.querySelector('#order2')
let anterior = document.querySelector('#order3')

function next(){
    proximo.style.display = "none";
    sumir.style.display = "flex";
}

function desappear(){
    sumir.style.display = "none";
    anterior.style.display = "flex";
}

function previus(){
    anterior.style.display = "none";
    proximo.style.display = "flex";
}

window.onscroll = function() {
    myrolar()
}
function myrolar() {
    let hed = document.querySelector('#header')

    if(document.documentElement.scrollTop > 50){
        hed.style.backgroundColor = "#424242";
        hed.style.transitionPropert = "backgroundColor";
        hed.style.transitionDuration = "0.5s";
    }else{
        hed.style.backgroundColor = "";
    }
}

function openNav(){
    document.querySelector('#nav').style.width = "100%"
}

function closeNav(){
    document.querySelector('#nav').style.width = "0"
}
function feedback(){
    window.alert("Enviado com sucesso!")
    
}
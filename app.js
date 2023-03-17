/*******************menu*********************/
let btn = document.querySelector('button')
let list = document.querySelector('#menu-item')
let inputType = document.querySelector('#ipt')
let btnpwd = document.querySelector('#btnpwd')
btn.addEventListener(('click'),()=>{
    list.classList.toggle('d-none')
})
/*******************watch*********************/
second.innerText = setInterval(() => {
    let d = new Date();
    let hour = document.querySelector('#heur')
    let minute = document.querySelector('#minute')
    let second = document.querySelector('#second')
    hour.innerText = d.getHours() + ":";
    minute.innerText = d.getMinutes() + ":";
    second.innerHTML = d.getSeconds()
}, 1000);
/*******************password*********************/
btnpwd.addEventListener(('click'),()=>{
    (inputType.getAttribute('type')==="password") ? inputType.setAttribute('type', "text") :  inputType.setAttribute('type', "password")
})

/*******************quiz*********************/

let prev = document.querySelector('#pre')
let next = document.querySelector('#next')
let questionNumber = document.querySelector('#nb-quest')
let quizQuestions = document.querySelector('#quest');
let progress = document.querySelector('#prog')


function changerProgress(move, NbQuest) {
    progress.style = `animation: ${move} .2s linear forwards`;
    questionNumber.innerText = NbQuest
    quizQuestions.classList.remove("animate__animated", "animate__bounceInRight"); 
    void quizQuestions.offsetWidth; // Forcer le recalcul de la mise en page
    quizQuestions.classList.add("animate__animated", "animate__bounceInRight"); 
}
next.addEventListener(('click'), ()=>{
    switch (questionNumber.innerText) {
        case "0/4":
            changerProgress("move-25", "1/4")
            break;
        case "1/4":
            changerProgress("move-50", "2/4")
            break;
        case "2/4":
            changerProgress("move-75", "3/4")
            break;
        case "3/4":
            changerProgress("move-100", "4/4")
            break;
        case "4/4":            
            break;
        default:
            break;
    }
})
prev.addEventListener(('click'), ()=>{
    switch (questionNumber.innerText) {
        case "0/4":
            break;
        case "1/4":
            changerProgress("move-0", "0/4")
            break;
        case "2/4":
            changerProgress("move-25", "1/4")
            break;
        case "3/4":
            changerProgress("move-50", "2/4")
            break;
        case "4/4":
            changerProgress("move-75", "3/4")
            break;
        default:
            break;
    }
})
let secendCounter = document.querySelector('#sec')
let sec = 10; 
secendCounter.innerText = setInterval(() => {
    if (sec>=0) {
        let newCount = sec--
        secendCounter.innerHTML = newCount
    }
}, 1000);
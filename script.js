// console.log("JS Running...");

let button = document.querySelector('button');
let percent = document.querySelector('h5');
let line = document.querySelector('#line')

let grow = 0;
let flag = 0;
button.addEventListener("click", function(){
if(flag == 0){
    let progressInterval =   setInterval(()=>{
        grow++;
        percent.textContent = grow+'%'
        line.style.width = grow+'%'
    },50)
    setTimeout(()=>{
        clearInterval(progressInterval)
        button.textContent = 'Downloaded'
        button.style.opacity = '0.5'
    },5000)
    flag = 1;
}else{
    alert ("Download already completed.");
}
});
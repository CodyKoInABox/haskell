function run(element){
    let input1
    let input2
    let input3
    let id
    try{
        id = element.id;
        input1 = parseInt(document.getElementById(id + 'Input1').textContent)
        input2 = parseInt(document.getElementById(id + 'Input2').textContent)
        input3 = parseInt(document.getElementById(id + 'Input3').textContent)
    }
    catch{}
    document.getElementById(id + 'Output').innerHTML = "&nbsp&nbsp > " + window[id](input1, input2, input3)
}

//event listener to prevent user from inputing strings instead of numbers and stuff like that
function addEventListeners(){
    let inputElements = document.getElementsByClassName("input")

    let eventListenerFunction = function(e){if (isNaN(String.fromCharCode(e.which))) e.preventDefault();}
    
    for(let i = 0; i < inputElements.length; i++){
        inputElements[i].addEventListener("keypress", eventListenerFunction);
    }
}

//run this when page is loaded
addEventListeners()



function helloWorld(){
    return "Hello, World!"
}

function leapYear(year){
    return year % 4 == 0 && year % 100 != 0 || year % 4 == 0 && year % 400 == 0
}

function factorial(x){
    if(x <= 1){
        return 1
    }
    else{
        return x * factorial(x - 1)
    }
}

function inRange(min, max, x){
    return x >= min && x <= max
}
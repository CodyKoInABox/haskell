function helloWorld(input){
    return input
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
    document.getElementById(id + 'Output').innerHTML = "&nbsp&nbsp > " + window[id](input1, input2, input3);
}
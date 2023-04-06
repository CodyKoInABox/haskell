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


function run(element, input1, input2, input3){
    document.getElementById(element.id + 'Output').innerHTML = "&nbsp&nbsp > " + window[element.id](input1, input2, input3); 
    //console.log(window[element.id](input1, input2, input3));
}
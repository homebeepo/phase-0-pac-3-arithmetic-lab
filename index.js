function add(x,y){
    return (x+y)
}

function subtract(x,y){
    return (x-y)
}

function multiply(x,y){
    return (x*y)
}
function divide(x,y){
    return (x/y)
}

function increment(x){
    x++
    return (x)
}

function decrement(x){
    x--
    return(x)
}

function makeInt(x){
    return(parseInt(x, 10))
}

function preserveDecimal(x){
    return(parseFloat(x))
}
console.log(preserveDecimal(1.123))
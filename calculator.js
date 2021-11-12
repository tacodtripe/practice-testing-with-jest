class Calculator {
    add(num1, num2) {
        return num1 + num2
    }

    substract(num1, num2) {
        return num1 - num2
    }

    divide(num1,num2) {
        if(num2 === 0){
            throw new Error('Sorry but I ain\'t crashing')
        }
        return num1 / num2
    }

    multiply(num1,num2)  {
        return num1*num2
    }
}

let calc = new Calculator
module.exports = calc
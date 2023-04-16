var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1)
    }
    else {
        console.log(num3)
    }
}
else {
    if (num2 > num3) {
        console.log(num2)
    }
    else {
        console.log(num3)
    }
}

//second option--------------------
var number1 = 600;
var number2 = 800;
var number3 = 500;

if (number1 > number2 && number1 > number3) {
    console.log("Number 1 boro hobe")
}
else if (number2 > number3) {
    console.log("Number 2 boro hobe")
}
else {
    console.log("Number 3 boto hobe")
}

// result problem-------------------
// 0-32=F
// 33-49=D
// 50-59=C
// 60-69=B 
// 70-79=A 
// 80-100=A+

var result = 90;

if (result > 100) {
    console.log('100 er beshi ki vabe?')
} else if (result <= 100 && result > 0) {
    if (result == 0 && result < 33) {
        console.log('F')
    }
    else if (result > 32 && result < 50) {
        console.log('D')
    }
    else if (result > 50 && result < 59) {
        console.log('C')
    }
    else if (result > 60 && result < 69) {
        console.log('B')
    }
    else if (result > 70 && result < 79) {
        console.log('A')
    }
    else {
        console.log('A+')
    }
} else {
    console.log('100 er kom paichen??')
}
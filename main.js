//This code is co-authored by: Tony Cain and Josh Koster
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472]
const documentMain = document.getElementById('button-main')
const documentSect = document.querySelector('section')
const breaker = document.createElement('br')

function headerAppend(alpha) {
    if (documentSect.childElementCount > 0){
        documentSect.innerHTML = ""
    }
    let KataHeader = document.createElement("h1")
    KataHeader.append("Kata " + alpha)
    documentSect.append(KataHeader)
}

function coolMath(beta, gamma){
    let coolText = document.createElement('p')
    coolText.append(beta)
    coolText.className = "Kata " + gamma
    documentSect.append(coolText)
}

for(let i = 1; i <= 23; i++){
    let buttons = document.createElement('button')
    buttons.innerHTML = i
    buttons.id = "button" + i
    documentMain.append(buttons)
}

const buttons1 = document.querySelector('#button1')
buttons1.addEventListener("click", function() {
    headerAppend(1)
    for(let index = 1; index <= 20; index++){
        coolMath(index, 1)
    }
})

const buttons2 = document.getElementById('button2')
buttons2.addEventListener("click", function(){
    headerAppend(2)
    for(let index2 = 2; index2 <= 20; index2 += 2){
        coolMath(index2, 2)
    }
})

const buttons3 = document.getElementById('button3')
buttons3.addEventListener("click", function() {
    headerAppend(3)
    for(let index3 = 1; index3 < 20; index3 += 2){
        coolMath(index3, 3)
    }
})

const buttons4 = document.getElementById('button4')
buttons4.addEventListener("click", function(){
    headerAppend(4)
    for(let index4 = 5; index4 <= 100; index4 += 5){
        coolMath(index4, 4)
    }
})

const buttons5 = document.getElementById('button5')
buttons5.addEventListener("click", function(){
    headerAppend(5)
    for(let index5 = 1; index5 <= 10; index5++){
        coolMath(index5 ** 2, 5)
    }
})

const buttons6 = document.getElementById('button6')
buttons6.addEventListener("click", function(){
    headerAppend(6)
    for(let index6 = 20; index6 > 0; index6--){
        coolMath(index6, 6)
    }
})

const buttons7 = document.getElementById('button7')
buttons7.addEventListener("click", function(){
    headerAppend(7)
    for(let index7 = 20; index7 > 0; index7 -= 2){
        coolMath(index7, 7)
    }
})

const buttons8 = document.getElementById('button8')
buttons8.addEventListener("click", function(){
    headerAppend(8)
    for(let index8 = 19; index8 > 0; index8 -= 2){
        coolMath(index8, 8)
    }
})
const buttons9 = document.getElementById('button9')
buttons9.addEventListener("click", function(){
    headerAppend(9)
    for(let index9 = 100; index9 > 0; index9 -= 5){
        coolMath(index9, 9)
    }
})

const buttons10 = document.getElementById('button10')
buttons10.addEventListener("click", function(){
    headerAppend(10)
    for(let index10 = 10; index10 > 0; index10--){
        coolMath(index10 ** 2, 10)
    }
})

const buttons11 = document.getElementById('button11')
buttons11.addEventListener("click", function(){
    headerAppend(11)
    for(let index11 = 0; index11 < sampleArray.length; index11++){
        coolMath(sampleArray[index11], 11)
    }
})

const buttons12 = document.getElementById('button12')
buttons12.addEventListener("click", function(){
    headerAppend(12)
    for(let index12 = 0; index12 < sampleArray.length; index12++){
        if(sampleArray[index12] % 2 === 0){
            coolMath(sampleArray[index12], 12)
        }
    }
})

const buttons13 = document.getElementById('button13')
buttons13.addEventListener("click", function(){
    headerAppend(13)
    for(let index13 = 0; index13 < sampleArray.length; index13++){
        if(sampleArray[index13] % 2 === 1){
        coolMath(sampleArray[index13], 13)
        }
    }
})

const buttons14 = document.getElementById('button14')
buttons14.addEventListener("click", function(){
    headerAppend(14)
    for(let index14 = 0; index14 < sampleArray.length; index14++){
        coolMath(sampleArray[index14] ** 2, 14)
        
    }
})

const buttons15 = document.getElementById('button15')
buttons15.addEventListener("click", function(){
    headerAppend(15)
    let sum = 0
    for(let index15 = 1; index15 <= 20; index15++){
        sum += index15
        coolMath(sum, 15)
    }
})

const buttons16 = document.getElementById('button16')
buttons16.addEventListener("click", function(){
    headerAppend(16)
    coolMath(sampleArray.reduce((a, b) => a + b), 16)   
})

const buttons17 = document.getElementById('button17')
buttons17.addEventListener("click", function(){
    headerAppend(17)
    sampleArray.sort((a, b) => a - b)
    // coolText.append("[", sampleArray, "]", breaker)
    coolMath(sampleArray[0], 17)
})

const buttons18 = document.getElementById('button18')
buttons18.addEventListener("click", function(){
    headerAppend(18)
    sampleArray.sort((a, b) => b - a)
    coolMath(sampleArray[0], 18)
})


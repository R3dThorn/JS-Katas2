//This code is co-authored by: Tony Cain and Josh Koster
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472]
const documentMain = document.getElementById('button-main')
const documentSect = document.querySelector('section')
const breaker = document.createElement('br')
//duplicating sampleArray so when it is sorted by buttons
//17 and 18, these values remain static and usable for
//buttons 21 - 23
let sortOrder = new Array()
for (let i = 0; i < sampleArray.length; i++){
    sortOrder[i] = sampleArray[i]
}

function headerAppend(counter) {
    if (documentSect.childElementCount > 0){
        documentSect.innerHTML = ""
    }
    let KataHeader = document.createElement("h1")
    KataHeader.append("Kata " + counter)
    documentSect.append(KataHeader)
}

function coolMath(var1, var2){
    let coolText = document.createElement('p')
    coolText.append(var1)
    coolText.className = "Kata " + var2
    documentSect.append(coolText)
}

function cssRectangles(counter, width, backgroundColor) {
    let coolVariable = document.createElement('div')
    coolVariable.id = "Kata" + counter
    documentSect.append(coolVariable)
    let coolRectangle = document.getElementById('Kata' + counter)
    coolRectangle.style.height = "20px"
    coolRectangle.style.width = width
    coolRectangle.style.backgroundColor = backgroundColor
    coolRectangle.style.margin = "5px"
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

const buttons19 = document.getElementById('button19')
buttons19.addEventListener("click", function(){
    headerAppend(19)
    for(let index19 = 0; index19 < 20; index19++){
        cssRectangles(index19, "100px", "gray")
    }
})

const buttons20 = document.getElementById('button20')
buttons20.addEventListener("click", function(){
    let recWidths = (width) => 100 + (width * 5)
    headerAppend(20)
    for(let index20 = 1; index20 <= 20; index20++){
        cssRectangles(index20, recWidths(index20) + "px", "gray")
    }
})

const buttons21 = document.getElementById('button21')
buttons21.addEventListener("click", function() {
    headerAppend(21)
    for(let index21 = 0; index21 < 20; index21++){
        cssRectangles(index21, sortOrder[index21].toString() + "px", "gray")
    }
})

const buttons22 = document.getElementById('button22')
buttons22.addEventListener("click", function(){
    headerAppend(22)
    for(let index22 = 0; index22 < 20; index22++){
        if (index22 % 2 === 0){
            cssRectangles(index22, sortOrder[index22].toString() + "px", "red")
        } else if (index22 % 2 === 1){
            cssRectangles(index22, sortOrder[index22].toString() + "px", "gray")
        }
    }
})

const buttons23 = document.getElementById('button23')
buttons23.addEventListener("click", function(){
    headerAppend(23)
    for(let index23 = 0; index23 < 20; index23++){
        if (sortOrder[index23] % 2 === 0){
            cssRectangles(index23, sortOrder[index23].toString() + "px", "red")
        } else if (sortOrder[index23] % 2 === 1){
            cssRectangles(index23, sortOrder[index23].toString() + "px", "gray")
        }
    }
})
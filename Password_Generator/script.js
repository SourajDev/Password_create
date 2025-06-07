const resultEl = document.getElementById('result')

const lengthEl = document.getElementById('length')

const uppercaseEl = document.getElementById('uppercase')

const lowercaseEl = document.getElementById('lowercase')

const numbersEl = document.getElementById('number')

const symbolsEl = document.getElementById('symbol')

const generateEl = document.getElementById('generate')

const clipboardEl = document.getElementById('clipboard')




const randomFunc = {
    lower: getrandomlower,
    upper: getrandomupper,
    number: getrandomNumber,
    symbol: getrandomSymbol
}

clipboardEl.addEventListener('click',() =>{
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password) {return}

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard')
})


generateEl.addEventListener('click',() =>{
    const length = +lengthEl.value
    const hasUpper = uppercaseEl.checked
    const hasLower = lowercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

resultEl.innerText = generatepassword(hasLower,hasUpper,hasNumber,hasSymbol, length)

})


function generatepassword(lower,upper,number,symbol,length){
    let generatepassword = ""
    const typecount = lower + upper + number +symbol
    const typesArr = [{lower},{upper},{number},{symbol}].filter(item => Object.values(item)[0])
    
    if(typecount === 0){
        return ''
    }
    for(let i = 0; i < length; i+=typecount){
        typesArr.forEach(type =>{
            const funcName = Object.keys(type)[0]
            // console.log(funcName)
            generatepassword += randomFunc[funcName]()
        })
    }
const finalPassword = generatepassword.slice(0 , length)

return finalPassword

}


function getrandomlower(){
    return String.fromCharCode(Math.floor(Math.random() * 26)+ 97)
}

function getrandomupper(){
    return String.fromCharCode(Math.floor(Math.random() * 26)+ 65)
}

function getrandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10)+ 48)
}

function getrandomSymbol(){
    const symbols = "!@#$%^&*()_+=-{}[]|:;<>,.?/~`"
    return symbols[Math.floor(Math.random() * symbols.length)]
}

console.log(getrandomlower())
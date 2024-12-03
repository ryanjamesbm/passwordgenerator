const pwordCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

const option1El = document.getElementById("pword-button-1")
const option2El = document.getElementById("pword-button-2")
const copyEl = document.getElementById("copy-text")

let pwordOptionOne = ""
let pwordOptionTwo = ""

function generatePassword() {
    pwordOptionOne = ""
    pwordOptionTwo = ""
    for (let i = 0; i < 13; i++){
        const randomIndexOne = Math.floor(Math.random() * pwordCharacters.length)
        pwordOptionOne += pwordCharacters[randomIndexOne]
        const randomIndexTwo = Math.floor(Math.random() * pwordCharacters.length)
        pwordOptionTwo += pwordCharacters[randomIndexTwo]
    }
    option1El.textContent = pwordOptionOne;
    option2El.textContent = pwordOptionTwo;
}



function copyText(button){
    const textToCopy = button.textContent;
    navigator.clipboard.writeText(textToCopy)
    copyEl.textContent = "✅ Password copied to your clipbboard"
}
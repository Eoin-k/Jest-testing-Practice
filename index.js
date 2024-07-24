 const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const reverseString = (str) => {
    return str.split('').reverse().join('')
}

const calculator =  {
    add: function(a,b) {
        return a + b
    },
    subtract: function(a,b) {
        return a - b
    },
    divide: function(a,b){
        return a / b
    },
    multiply: function(a,b){
        return a * b
    }
};

const cesarCipher = (string, shiftVal) => {
    let output = "";
    for (let i = 0; i < string.length; i++){
        let char = string[i].charCodeAt();
        if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)){
            char += shiftVal;
            if((char > 90 && string[i] <= 'Z' || char > 122)){
                char -= 26
            }
        }
        output += String.fromCharCode(char)
    }
    return output
}

console.log(cesarCipher("The Odin Project is useful", 3))

module.exports = {reverseString: reverseString , capitalise: capitalise, calculator: calculator, cesarCipher: cesarCipher}
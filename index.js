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

module.exports = {reverseString: reverseString , capitalise: capitalise, calculator: calculator}
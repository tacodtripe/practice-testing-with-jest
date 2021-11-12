function capitalize(str) {
    if(typeof str !== 'string'){
        throw new Error('must provide a string')
    }
    let holder = str.substr(1)
    let capitalized = str[0].toUpperCase()
    return capitalized + holder
}

module.exports = capitalize
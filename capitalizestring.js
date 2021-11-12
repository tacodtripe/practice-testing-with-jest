function capitalize(str) {
    if(typeof str !== 'string'){
        throw new Error('must provide a string')
    }
}

module.exports = capitalize
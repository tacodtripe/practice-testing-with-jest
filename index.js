function stringLength(str) {
    if(str.length < 1){
        throw new Error('your string must be at least 1 character long')
    }
    if(str.length > 10){
        throw new Error('your string must be at most 10 character long')
    }
    return str.length
}

module.exports = stringLength
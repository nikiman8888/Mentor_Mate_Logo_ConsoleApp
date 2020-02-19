function drawer(count, sign) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += sign;
    }
    return result;
}
module.exports = drawer;
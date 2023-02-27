module.exports = function reverse(n) {
    let arr = String(Math.abs(n)).split("").reverse().join("");
    return arr;
};

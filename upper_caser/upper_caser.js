const UpperCaser = function (words) {
    this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
    return result = this.words.map(element => {
        return element.toUpperCase();
    })
}

module.exports = UpperCaser;

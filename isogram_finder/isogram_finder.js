const IsogramFinder = function (word) {
    this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {
    const wordLetterArray = this.word.split('');
    return wordLetterArray.every((element, letter) => 
        this.word.indexOf(element) == letter);
}

module.exports = IsogramFinder;


const AnagramFinder = function (word) {
    this.word = word.toLowerCase();
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    const wordLetterList = this.word.split('');
    
}

module.exports = AnagramFinder;

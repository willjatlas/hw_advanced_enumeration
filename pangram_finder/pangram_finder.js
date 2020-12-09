const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}


PangramFinder.prototype.isPangram = function () {
  const lowerPhrase = this.phrase.toLowerCase();
  console.log(lowerPhrase);
  return this.alphabet.every(element => {
    lowerPhrase.includes(element);
  });
}

module.exports = PangramFinder;

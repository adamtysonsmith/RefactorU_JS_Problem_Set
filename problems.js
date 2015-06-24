var letterCapitalize = function(sentence) {
    var words = sentence.split(' ');
    
    for (var i = 0; i < words.length; i++) {
        var capital = words[i][0].toUpperCase(); // not workign
        words.push(capital);
    }
    
    console.log(words);
}

var wordCount = function(sentence) {
    var words = sentence.split(' ');
    console.log(words.length);
}

var primeTime = function() {
    // I did this already?
}
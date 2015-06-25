var letterCapitalize = function(sentence) {
    // Create an array containing each word using split
    var words = sentence.split(' ');
    var newArray = [];
    var newSentence;
    
    // Loop through each word and perform capitalization/lowercase
    for (var i = 0; i < words.length; i++) {
        var firstLetter = words[i][0].toUpperCase(); // Capitalize the first letter
        var remainingLetters = words[i].slice(1).toLowerCase(); // Lowercase the rest of the word
        
        // Concatenate the word and push the result to our new array
        newArray.push(firstLetter + remainingLetters);
    }
    
    // Construct the new sentence using join
    newSentence = newArray.join(' ');
    console.log(newSentence);
}



var wordCount = function(sentence) {
    var words = sentence.split(' ');
    console.log(words.length);
}



var primeTime = function(n) {
    // Helper function to check for integer
    var isInteger = function(n) {
        return n % 1 === 0;
    }
    
    // Now the prime number logic
    function optimusPrime(n) {
        var prime = true;

        for (var i = 2; i < n; i++) {
            var dividend = n / i;
            if (isInteger(dividend)) {
                prime = false;
            }
        }

        if (n === 1) {
            console.log('1 is NOT a prime number!');
        } else if (prime === true) {
            console.log(n + ' is a prime number!');
        } else {
            console.log(n + ' is NOT a prime number!');
        }
    }
    
    // Call the function!
    optimusPrime(n);
}
(() => {

    $words = document.getElementById("words_length");

    wordsLength = 0;

    $words.textContent = wordsLength;

    
})();


function showLength( str ) {
    document.getElementById("words_length").textContent = str.length;
 }


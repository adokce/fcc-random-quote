$(document).ready(function(){
var randomQuote = ''
    function getQuote(){
        var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"
        $.getJSON(url, function(data){
            $(".quote-text").html(data.quoteText)
            $(".quote-author").html(data.quoteAuthor)
            console.log(data.quoteText)
            randomQuote = data.quoteText
        })
    }

    $(".generate-quote").on("click", function(){
        getQuote();
    })
    
    $(".twitter-share-button").attr("href", 'https://twitter.com/intent/tweet?text=' + randomQuote);

})
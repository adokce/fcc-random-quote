$(document).ready(function(){

    var bake = {
        alija: "aa"
    }
    function getQuote(){
        var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"
        $.getJSON(url, function(data){
            bake.alija = data.quoteText
            $(".quote-text").html(bake.alija)
            $(".quote-author").html(data.quoteAuthor)
            console.log(bake.alija)
        })
    }

    $(".generate-quote").on("click", function(){
        getQuote();
    })
    
    $(".twitter-share-button").attr("href", 'https://twitter.com/intent/tweet?text=' + bake.alija);

})
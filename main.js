$(document).ready(function(){
    
    function getQuote(){
        var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"
        $.getJSON(url, function(data){
            $(".quote-text").html(data.quoteText)
            $(".quote-author").html(data.quoteAuthor)
        })
    }
    $(".generate-quote").on("click", function(){
        getQuote();
    })
})
   





// $(document).ready(function(){
//     getQuote();
  
//     var randomQuote;
//     var author;
// //   function getQuote(){
// //     var url= "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
// //     $.getJSON(url, function(data){
// //       $(".quote").html('"'+data.quoteText+'"'); 
// //       $(".author").html("-"+data.quoteAuthor);
// //     });
// //   };

//       $("#tweet").on("click", function(){
//         console.log(randomQuote);
//   window.open("https://twitter.com/intent/tweet?text=" + randomQuote);
//     });
    
//       $("#newQuote").on("click", function(){
//       getQuote();
//     });
//   });
  
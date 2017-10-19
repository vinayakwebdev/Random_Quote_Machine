window.onload = function() {
    var quoteSpan     = document.getElementById("quoteText");
    var authorSpan    = document.getElementById("authorText");
    var quoteText = '';
    var submitButton  =  document.getElementById('submit');
    var oldQuoteIndex = -1;
    var newQuoteIndex = -1;
    var quotes        = [
        {'text': '"Stay Hungry, Stay Foolish."', 'author': '-Steve Jobs'},
		{'text': '"Enjoy life. There&apos;s plenty of time to be dead."', 'author': '-Anonymous'},
		{'text': '"Whatever you are, be a good one."', 'author': '-Abraham Lincoln'}, 
        {'text': '"It has been my philosophy of life that difficulties vanish when faced boldly."', 'author': '-Isaac Asimov'}, 
        {'text': '"One day your life will flash before your eyes. Make sure it is worth watching."', 'author': '-Anonymous'}, 
        {'text': '"Every moment is a fresh beginning."', 'author': '-T.S. Eliot'}, 
        {'text': '"Everything is a TEST"', 'author': '-Pratik Shukla'}
    ];  

    function nextQuote() {
        while (newQuoteIndex == oldQuoteIndex) {
            newQuoteIndex = Math.floor(Math.random() * quotes.length);
        }

        quoteSpan.innerHTML  = quotes[newQuoteIndex].text; //make HTML's quoteText random quote
        authorSpan.innerHTML = quotes[newQuoteIndex].author; //make HTML's authorText random author
        
      quoteText = quotes[newQuoteIndex].text + ' ' + quotes[newQuoteIndex].author + " (via @pratik2012)";
      
     if(document.getElementById("container")){
        rmvDiv();
        addDiv();
      }
      twttr.widgets.createShareButton(
  'https://bit.ly/1PNlqvJ',
  document.getElementById('container'),
  {
    text: quoteText
  }
);  
        oldQuoteIndex = newQuoteIndex;
    }
    submitButton.onclick = nextQuote;
    nextQuote(); 
}

function rmvDiv(){
 var parent = document.getElementById("twtr");
var child = document.getElementById("container"); parent.removeChild(child);
}

function addDiv(){
  var parent = document.getElementById("twtr");
var child = document.createElement("div");
  child.id = "container";
parent.appendChild(child);
}

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


$(document).ready(function () {
	var d = new Date();
    var day = d.getDate();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
        var colorBox=[
        {
            color: 'Blue'
        },
        {
            color: 'Green'
        }]

		var funFact=[
		{
			quote:"Shaq has only made 1 three pointer ever (1 for 22)."
	    },
	    {
	    	quote:"The Cookie Monster has a real name. It's Sid."
	    },
	    {
	    	quote:"Rutgers played in the first College Football game in 1869, beating Princeton 6-4."
	    },
	    {
	    	quote:"Haiti was the first self-liberated black slave colony. It gained it's independence on January 1st, 1804."
	    },
	    {
	        quote:"There's a basketball court on the top floor of the U.S. Supreme Court Building. It's nicknamed 'The highest court in the land.'"
	    },
	    {
	    	quote:"Only about 10% of the world’s currency is physical money, the rest only exists on computers."
	    },
	    {
	    	quote:"Jay-Z is hip-hop's first official billionaire"
	    },
	    {
	    	quote:"McDonald’s once made bubblegum-flavored broccoli"
	    },
	    {
	    	quote:"A citizen of Autralia attempted to sell the country of New Zealand in May 2006. The bid had reached $3000 before it was taken down due to a violation of eBay’s policy."
	    },
	    {
	    	quote:"McDonald’s once made bubblegum-flavored broccoli"
	    },
	    {
	    	quote:"Floyd Mayweather used to live in New Brunswick"
	    },
	    {
	    	quote:"In 1911, a Paris orphanage held a raffle where the prize was live human babies."
	    },
	    {
	    	quote:"Researchers have found out that for jigsaw puzzles, when you double the number of pieces, you quadruple the time it takes to complete it."
	    },
	    {
	    	quote:"Nintendo trademarked the phrase “It’s on like Donkey Kong” in 2010."
	    },
	    {
	    	quote:"Nintendo trademarked the phrase “It’s on like Donkey Kong” in 2010."
	    },
	    {
	    	quote:"Rutgers played in the first College Football game in 1869, beating Princeton 6-4."
	    },
	    {
	    	quote:"Floyd Mayweather used to live in New Brunswick"
	    },
	    {
	    	quote:"Shaq has only made 1 three pointer ever (1 for 22)."
	    },
	   {
	    	quote:"The computer used to land Apollo 11 on the moon is six times less powerful than the one inside a TI-83 calculator."
	    },
	    {
	    	quote:"Rutgers played in the first College Football game in 1869, beating Princeton 6-4."
	    },
	];
		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = funFact.length;
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var rando=Math.floor(Math.random() * 20);
			console.log(rando);
			var newQuoteText = funFact[rando].quote;
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>');
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });

			break;
		};//end for loop

	});//end quoteButton function

    setInterval(function() {
    $('.topnav').animate( { backgroundColor: 'red' }, 20000).animate( { backgroundColor: '#9999FF' }, 20000).animate( { backgroundColor: '#66B2FF' }, 20000)
    .animate( { backgroundColor: '#59D259' }, 20000)
    .animate( { backgroundColor: '#FFFF99' }, 20000)
    .animate( { backgroundColor: 'green' }, 20000)}, 10000);

    $(".content").hide();
    $(".show_hide").on("click", function () {
        var txt = $(".content").is(':visible') ? 'Read More' : 'Read Less';
        $(".show_hide").text(txt);
        $(this).prev('.content').slideToggle(100);
    });
});






$(document).ready(function(){ 

		makeMap();
	

	

			// $('#tweet-deck').css('height', windHeight);
			
			

			var tweet_arr = [];

			var socket = io.connect('http://tweets-usa.herokuapp.com:80/');
			initialize();
			socket.on('stream', function(tweet){
			tweet_arr.push(tweet);
			});		
				
			

			
				});







$(document).ready(function(){ 

		makeMap();			
			

			var tweet_arr = [];

			var socket = io.connect('localhost:5000');
			initialize();
			socket.on('stream', function(tweet){
			tweet_arr.push(tweet);
			});		
				
			

			
				});

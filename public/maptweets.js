
function makeMap(){
var width = 1000;
  var height = 540;

  var projection = d3.geo.albers();

  var svg = d3.select('#map_canvas').append('svg')
      .attr('width', width)
      .attr('height', height);

  var path = d3.geo.path()
      .projection(projection);

  var g = svg.append('g');

  d3.json('https://gist.githubusercontent.com/girliemac/b2fdcd10a5a76d87bef3/raw/698891c4e260e3501ecf235205ce87e2dd20467e/us-states.json', function(error, topology) {
      g.selectAll('path')
      .data(topojson.feature(topology, topology.objects.usStates).features)
      .enter()
      .append('path')
      .attr('class', function(d){ return 'states ' + d.properties.STATE_ABBR;} )
      .attr('d', path);
})

} 


function initialize(){

  var x = 0;
  
  if(io !== undefined) {
       // Storage for WebSocket connections
       var socket = io.connect('/');

   }

   //   //listens on stream channel
   socket.on('stream', function(tweet) {


    // if($("#map_canvas").has("svg")){
    //   $("#map_canvas svg").remove();
    // }
   
//    //longitude and latitutde are reveresed in place object
     var tweetLocation = [tweet.coordinates.coordinates[0], tweet.coordinates.coordinates[1]];

//      console.log(tweetLocation);

//    var width = 1000;
//   var height = 540;

  var projection = d3.geo.albers();

//   var svg = d3.select('#map_canvas').append('svg')
//       .attr('width', width)
//       .attr('height', height);

//   var path = d3.geo.path()
//       .projection(projection);

//   var g = svg.append('g');

//   d3.json('https://gist.githubusercontent.com/girliemac/b2fdcd10a5a76d87bef3/raw/698891c4e260e3501ecf235205ce87e2dd20467e/us-states.json', function(error, topology) {
//       g.selectAll('path')
//       .data(topojson.feature(topology, topology.objects.usStates).features)
//       .enter()
//       .append('path')
//       .attr('class', function(d){ return 'states ' + d.properties.STATE_ABBR;} )
//       .attr('d', path);
// })  

var z;

  d3.select("svg")
    .append("circle")
    .attr("cx", function (d) { console.log(projection(tweetLocation)); return projection(tweetLocation)[0]; })
    .attr("cy", function (d) { return projection(tweetLocation)[1]; })
    .attr("r", "3px")
    .attr("fill", "red")
    .attr("id", function(i){
      z = i;
      return "dot_" + z;
    })


    setTimeout(function(){
      d3.select("#dot_" + z).remove();
    }, 2000);

 
    

})
  

 }




// function initialize(){

// 	//United States bounding box coords
// 	var myCoords =  new google.maps.LatLng(37.09024, -95.712891);

// 	var mapOptions = {
// 		//North America
// 		center: myCoords,
// 		zoom: 4
// 		}

// 	var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

     
// 	 if(io !== undefined) {
//        // Storage for WebSocket connections
//        var socket = io.connect('/');

//    }
//    var liveTweets = new google.maps.MVCArray();
//    heatmap = new google.maps.visualization.HeatmapLayer({
//      data: liveTweets,
//      radius: 25
//    });
//    heatmap.setMap(map);

     
// 	//listens on stream channel
//    socket.on('stream', function(tweet) {
   
//    //longitude and latitutde are reveresed in place object
//    	var tweetLocation = new google.maps.LatLng(tweet.coordinates.coordinates[1], tweet.coordinates.coordinates[0]);
//     liveTweets.push(tweetLocation);
	
//  	var image = 'public/images/small-dot-icon.png';
//      var marker = new google.maps.Marker({
//        position: tweetLocation,
// 		 map: map,
// 		icon: image
// 	      });
 
//      setTimeout(function(){
//        marker.setMap(null);
//      }, 700);
 	


// });


// }


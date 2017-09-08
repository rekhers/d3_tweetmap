
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

  var id; 
var id_arr = [];
  var z = 0;
  if(io !== undefined) {
       // Storage for WebSocket connections
       var socket = io.connect('/');

   }

   socket.on('stream', function(tweet) {
        z++;



     id = tweet.id;

     var tweetLocation = [tweet.coordinates.coordinates[0], tweet.coordinates.coordinates[1]],
     projection = d3.geo.albers(),
     url = tweet.user.profile_image_url,
     textBlurb = d3.select("svg").append("g"),
    tweetX = projection(tweetLocation)[0],
    tweetY = projection(tweetLocation)[1];

  $("body").append("<div id='tw" + id + "' class='twDiv'><img class='userPic' src='" + url + "' /><div class='twText'>" + tweet.text + "</div></div>");

  $("#tw" + id).css("left", tweetX - 50).css("top", tweetY).toggle();


   d3.select("svg")
              .append("circle")
              .attr("cx", function (d) { return projection(tweetLocation)[0]; })
              .attr("cy", function (d) { return projection(tweetLocation)[1]; })
              .attr("r", "15px")
              .attr("fill", "teal")
              .style("opacity", .2)
              .attr("id", function(i){
                return "dot_" + id;
              })
              .attr("class", "dots")



  // if(z % 2 == 0){
  //   $("#tw" + y).remove();
  //   $("#dot_" + y).remove();
  // }


setTimeout(function(){
  $(".twDiv").remove();
  $(".dots").remove();
}, 2000);


// setInterval(function(){

//   var x = id

//   id_arr.push(x);

//       setTimeout(function(){
//         for(var z=0; z<id_arr.length; z++){
//              $("#dot_" + id_arr[z]).remove();
//             $("#tw" + id_arr[z]).remove();
//             id_arr= [];
//         }

 
//       }, 300)

//     }, 500)








 //     d3.selectAll('svg')
 //  .append('image')
 // .attr("x", function (d) { return projection(tweetLocation)[0]; })
 //    .attr("y", function (d) { return projection(tweetLocation)[1]; })
 //  .attr('xlink:href', url)
 //  .attr('class', 'pic')
 //  .attr('height', '35')
 //  .attr('width', '35')
 //  .attr("id", function(i){
 //      z = i;
 
 //      return "dot_" + z;
 //    })

 //     d3.select("svg").append('rect')
 // .attr("x", function (d) { return projection(tweetLocation)[0] + 60; })
 //    .attr("y", function (d) { return projection(tweetLocation)[1]; })
 //    .attr("height", 50)
 //    .attr("width", 300)
 //  .style('fill', function(){
 //    return "steelBlue";
 //  })
 //  .attr("id", function(i){
 //      z = i;
 //      return "rect" + z;
 //    });


 //        d3.select("svg").append('text')
 // .attr("x", function (d) { return projection(tweetLocation)[0] + 60; })
 //    .attr("y", function (d) { return projection(tweetLocation)[1] + 20})
 //  .attr('class', 'twText')
 //  .attr("width", 100)
 //  .attr('height', 50)
 //  .text(tweet.text)
 //  .attr("id", function(i){
 //      z = i;
 //      return "text" + z;
 //    });





 
    

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


$(document).ready(function(){
   
 });

 var location;

$("#events-btn").click(function(){
    $("#events-section").show();
    console.log("Show choose location");
});

$("#search-location-btn").on('click', function(event){
    event.preventDefault();
    location = $("#locationToSearch").val().trim();
    console.log("location: ", location);
});
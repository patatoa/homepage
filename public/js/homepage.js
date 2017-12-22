var home = ["Home", "First things first, Amarilliss", "Good morning, Batman", "I give it a light to decent 4",
    "Only the dead can know peace from this fun", "Call your mom", "G'day, mate"];
var title = home[Math.floor(Math.random() * home.length)];
$(document).foundation();

$(document).ready(function () {

    $('h1').text(title);

    $.getJSON("http://api.wunderground.com/api/1403823fd54de5d5/conditions/q/TX/San_Antonio.json", function(data){
        var current_temp = data.current_observation.temp_f;
        var condition = data.current_observation.weather;
        var current_time = data.current_observation.local_time_rfc822;
        var city = data.current_observation.display_location.city;
        var weatherstring = "Currently: " + current_temp + " and "+ condition + " in " + city + " at " + current_time;
            $('.weather').text(weatherstring);
    }, "json");

    $(document).keyup(function(e){
        var keyCode = e.keyCode ? e.keyCode : e.which;
        if (keyCode == 84){
            window.location = "https://www.todoist.com";
        }
    });

});

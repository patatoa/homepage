/*jshint esversion: 6*/
const $ = require('jquery')
import {GetUrlForKeyCode} from '~/assets/bookmarks.js';
function GetLinkForKey(keyEvent){
    var keyCode = keyEvent.keyCode ? keyEvent.keyCode : keyEvent.which;
    var linkFilter = GetUrlForKeyCode(keyCode);
    if (linkFilter.length == 0){
        return;
    }

    var link = linkFilter[0];
    if(link){ //if link does not show on page, do not fire hotkey.
        window.location = link;
    }
}
function GetWeather(){
    $.getJSON("https://api.wunderground.com/api/1403823fd54de5d5/conditions/q/TX/San_Antonio.json", function(data){
        var current_temp = data.current_observation.temp_f;
        var condition = data.current_observation.weather;
        var current_time = data.current_observation.local_time_rfc822;
        var city = data.current_observation.display_location.city;
        var weatherstring = "Currently: " + current_temp + " and "+ condition + " in " + city + " at " + current_time;
            $('.weather').text(weatherstring);
    }, "json");
}
if (process.browser) {
    const $ = require('jquery')
    $(function() {
        GetWeather();

        $(document).keyup(function(e){
            GetLinkForKey(e);
        });
    })
 }

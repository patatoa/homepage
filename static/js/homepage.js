/*jshint esversion: 6*/
import {GetUrlForKeyCode} from '~/assets/bookmarks.js';
function GetLinkForKey(keyEvent){
    var keyCode = keyEvent.keyCode ? keyEvent.keyCode : keyEvent.which;
    var linkFilter = GetUrlForKeyCode(keyCode);
    if (linkFilter.length == 0){
        return;
    }
    var link = linkFilter[0];
    if($("#"+link.id).length == 0){ //if link does not show on page, do not fire hotkey.
        return;
    }
    if (keyCode == link.hotkey){
        window.location = link.url;
    }
}
function GetWeather(){
    $.getJSON("http://api.wunderground.com/api/1403823fd54de5d5/conditions/q/TX/San_Antonio.json", function(data){
        var current_temp = data.current_observation.temp_f;
        var condition = data.current_observation.weather;
        var current_time = data.current_observation.local_time_rfc822;
        var city = data.current_observation.display_location.city;
        var weatherstring = "Currently: " + current_temp + " and "+ condition + " in " + city + " at " + current_time;
            $('.weather').text(weatherstring);
    }, "json");
}
$(document).ready(function () {
    GetWeather();

    $(document).keyup(function(e){
        alert('hi');
        GetLinkForKey(e);
    });
});
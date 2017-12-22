var home = ["Home", "First things first, Amarilliss", "Good morning, Batman", "I give it a light to decent 4",
    "Only the dead can know peace from this fun", "Call your mom", "G'day, mate"];
var title = home[Math.floor(Math.random() * home.length)];

class link{
    constructor(id, url, hotkey){
        this.id = id;
        this.url = url;
        this.hotkey = hotkey;
    }
}

var linkList = [
    // hotkey t
    new link("todoist", "https://en.todoist.com/", 84),
    // hotkey i
    new link("inbox",  "https://inbox.google.com", 73),
    // hotkey r
    new link("reddit",  "https://www.reddit.com", 82),
    // hotkey b
    new link("r-nba", "https://www.reddit.com/r/nba", 66),
    // hotkey l
    new link("trello", "https://trello.com/", 76),
    // hotkey y
    new link("youtube", "https://www.youtube.com", 89),
    // hotkey f
    new link("facebook", "https://www.youtube.com", 70),
    // hotkey m
    new link("music", "https://music.google.com", 77),
    // hotkey o
    new link("onenote", "https://onedrive.live.com/edit.aspx?resid=81E5ACFF337707F3!130&cid=81e5acff337707f3&app=OneNote", 79),
    // hotkey k
    new link("keep", "https://keep.google.com", 75),
    // hotkey 4
    new link("4chan-b", "https://boards.4chan.org/b/", 52),
    // hotkey u
    new link("4chan-mu", "https://boards.4chan.org/mu/", 85),
    // hotkey g
    new link("4chan-g", "https://boards.4chan.org/g/", 71),
    // hotkey a
    new link("amazon", "http://smile.Amazon.com", 65),
    // hotkey v
    new link("amazonVideo", "http://www.amazon.com/Prime-Instant-Video/b/ref=sd_allcat_aiv_piv?ie=UTF8&node=2676882011", 86),
    // hotkey p
    new link("pitchfork", "http://www.Pitchfork.com", 80),
];

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

    for(var i =0; i < linkList.length; i++){
        let link = linkList[i];
        $("#"+link.id).attr("href", link.url);
    }

    $(document).keyup(function(e){
        var keyCode = e.keyCode ? e.keyCode : e.which;
        var linkFilter = linkList.filter(l => l.hotkey == keyCode);
        if (linkFilter.length == 0){
            return;
        }
        var link = linkFilter[0];
        if($("#"+link.id).length == 0){
            return;
        }
        if (keyCode == link.hotkey){
            window.location = link.url;
        }
    });

});

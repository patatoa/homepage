var home = ["Home", "First things first, Amarilliss", "Good morning, Batman", "I give it a light to decent 4",
    "Only the dead can know peace from this fun", "Call your mom", "G'day, mate"];
var title = home[Math.floor(Math.random() * home.length)];

// link is a class that defines a linkentry on the landing pages.
// the primary motivation is to enable hotkeys and to limit the unique
// instances of any one url.
class link{
    constructor(id, url, hotkey, key){
        this.id = id;
        this.url = url;
        this.hotkey = hotkey;
        this.key = key;
    }
}

var linkList = [
    // hotkey t
    new link("todoist", "https://en.todoist.com/", 84, "t"),
    // hotkey i
    new link("inbox",  "https://inbox.google.com", 73, "i"),
    // hotkey r
    new link("reddit",  "https://www.reddit.com", 82, "r"),
    // hotkey b
    new link("r-nba", "https://www.reddit.com/r/nba", 66, "b"),
    // hotkey l
    new link("trello", "https://trello.com/", 76, "l"),
    // hotkey y
    new link("youtube", "https://www.youtube.com", 89, "y"),
    // hotkey f
    new link("facebook", "https://www.youtube.com", 70, "f"),
    // hotkey m
    new link("music", "https://music.google.com", 77, "m"),
    // hotkey o
    new link("onenote", "https://onedrive.live.com/edit.aspx?resid=81E5ACFF337707F3!130&cid=81e5acff337707f3&app=OneNote", 79, "o"),
    // hotkey k
    new link("keep", "https://keep.google.com", 75, "k"),
    // hotkey 4
    new link("4chan-b", "https://boards.4chan.org/b/", 52, "4"),
    // hotkey u
    new link("4chan-mu", "https://boards.4chan.org/mu/", 85, "u"),
    // hotkey g
    new link("4chan-g", "https://boards.4chan.org/g/", 71, "g"),
    // hotkey a
    new link("amazon", "http://smile.Amazon.com", 65, "a"),
    // hotkey v
    new link("amazonVideo", "http://www.amazon.com/Prime-Instant-Video/b/ref=sd_allcat_aiv_piv?ie=UTF8&node=2676882011", 86, "v"),
    // hotkey p
    new link("pitchfork", "http://www.Pitchfork.com", 80, "p"),
    // hotkey d
    new link("drive", "https://drive.google.com", 68, "d"),
    // hotkey 0
    new link("onedrive", "https://onedrive.live.com", 48, "0"),
    // hotkey s
    new link("pluralsight", "http://www.pluralsight.com", 83, "s"),
    // hotkey w
    new link("twitter", "http://www.twitter.com", 87, "w"),
    // hotkey e
    new link("ebay", "http://www.ebay.com", 69, "e"),
    // hotkey [
    new link("pocket", "https://www.getpocket.com/", 219, "["),
    // hotkey h
    new link("hemingway", "http://www.hemingwayapp.com", 72, "h"),
];

$(document).foundation();

$(document).ready(function () {

    // set title
    $('h1').text(title);

    // Populate weather div with weather underground info.
    $.getJSON("http://api.wunderground.com/api/1403823fd54de5d5/conditions/q/TX/San_Antonio.json", function(data){
        var current_temp = data.current_observation.temp_f;
        var condition = data.current_observation.weather;
        var current_time = data.current_observation.local_time_rfc822;
        var city = data.current_observation.display_location.city;
        var weatherstring = "Currently: " + current_temp + " and "+ condition + " in " + city + " at " + current_time;
            $('.weather').text(weatherstring);
    }, "json");

    // loop through link list and add urls (et cetera) to tagged list items.
    for(var i =0; i < linkList.length; i++){
        let link = linkList[i];
        $("#"+link.id).attr("href", link.url).append("<small>("+link.key+")</small>");
    }

    // enable hotkeys.
    $(document).keyup(function(e){
        var keyCode = e.keyCode ? e.keyCode : e.which;
        var linkFilter = linkList.filter(l => l.hotkey == keyCode);
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
    });

});

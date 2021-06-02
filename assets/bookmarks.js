/*jshint esversion: 6*/

var bookmarks = [
   {
       Name: 'Gmail',
       ImgUrl: '/img/gmail.ico',
       Url: 'https://mail.google.com',
       PageSections: {
           Home:'Not Fun',
           Work:'Personal'
       }
   },
   {
       Name: 'OneNote',
       ImgUrl: '/img/onenote.png',
       Url: 'https://onedrive.live.com/edit.aspx?resid=81E5ACFF337707F3!130&cid=81e5acff337707f3&app=OneNote',
       PageSections: {
           Home:'Not Fun',
           Work:'Personal'
       }
   },
   {
       Name: 'Keep',
       ImgUrl: '/img/keep.png',
       Url: 'https://keep.google.com',
       PageSections: {
           Home:'Not Fun',
           Work:'Personal'
       }
   },
   {
       Name: 'Drive',
       ImgUrl: '/img/drive.ico',
       Url: 'https://drive.google.com',
       PageSections: {
           Home:'Not Fun',
           Work:'Personal'
       }
   },
   {
       Name: 'OneDrive',
       ImgUrl: '/img/onedrive.png',
       Url: 'https://onedrive.live.com/',
       PageSections: {
           Home:'Not Fun',
           Work:'Personal'
       }
   },
   {
       Name: 'Todoist',
       ImgUrl: '/img/todoist.png',
       Url: 'https://en.todoist.com/',
       PageSections: {
           Home:'Not Fun',
           Work:'Personal'
       }
   },
   {
       Name: 'Github',
       ImgUrl: '/img/github.png',
       Url: 'https://github.com/Jungledisk',
       PageSections: {
           Work:'Work'
       }
   },
   {
       Name: 'DataDog',
       ImgUrl: '/img/datadog.png',
       Url: 'https://app.datadoghq.com/apm/home?env=production',
       PageSections: {
           Work:'Work'
       }
   },
   {
       Name: 'Google Cloud',
       ImgUrl: '/img/gcp.png',
       Url: 'https://console.cloud.google.com/',
       PageSections: {
           Work:'Work'
       }
   },
   {
       Name: 'zube',
       ImgUrl: '/img/zube.png',
       Url: 'https://zube.io/jungle-disk',
       PageSections: {
           Work:'Work'
       }
   },
   {
       Name: 'Slab',
       ImgUrl: '/img/slab.png',
       Url: 'https://jungledisk.slab.com/',
       PageSections: {
           Work:'Work'
       }
   },
   {
       Name: 'Jenkins',
       ImgUrl: '/img/Jenkins.png',
       Url: 'n',
       PageSections: {
           Work:'Work'
       }
   },
   {
       Name: 'Team Password',
       ImgUrl: '/img/teampassword.png',
       Url: 'https://app.teampassword.com/dashboard#accounts',
       PageSections: {
           Work:'Work'
       }
   },
   {
       Name: 'Trello',
       ImgUrl: '/img/trello.png',
       Url: 'https://trello.com/',
       PageSections: {
       }
   },
   {
       Name: 'Washington Post',
       ImgUrl: '/img/wp.png',
       Url: 'https://www.washingtonpost.com',
       PageSections: {
           Home:'Reading',
           Work:'Reading'
       }
   },
   {
       Name: 'Express News',
       ImgUrl: '/img/expressnews.png',
       Url: 'https://www.expressnews.com',
       PageSections: {
           Home:'Reading',
           Work:'Reading'
       }
   },
   {
       Name: 'The Ringer',
       ImgUrl: '/img/theringer.png',
       Url: 'https://www.theringer.com/nba',
       PageSections: {
           Home:'Reading',
           Work:'Reading'
       }
   },
   {
       Name: 'CBS Sports',
       ImgUrl: '/img/cbs.png',
       Url: 'https://www.cbssports.com/nba/',
       PageSections: {
           Home:'Reading',
           Work:'Reading'
       }
   },
   {
       Name: 'Pounding the Rock',
       ImgUrl: '/img/poundingtherock.png',
       Url: 'https://www.poundingtherock.com/',
       PageSections: {
           Home:'Reading',
           Work:'Reading'
       }
   },
   {
       Name: 'Reddit',
       ImgUrl: '/img/reddit-alien.gif',
       Url: 'https://www.reddit.com/',
       PageSections:{
           Home: 'Reading',
           Work: 'Reading'
       }
   },
   {
       Name: '/r/nba',
       ImgUrl: '/img/bball.gif',
       Url: 'https://www.reddit.com/r/nba',
       PageSections:{
           Home: 'Reading',
           Work: 'Reading'
       }
   },
   {
       Name: 'The AV Club',
       ImgUrl: '/img/avclub.gif',
       Url: 'http://tv.avclub.com',
       PageSections: {
           Home:'Reading',
           Work:'Reading'
       }
   },
   {
       Name: 'Slashfilm',
       ImgUrl: '/img/slashfilm.png',
       Url: 'https://www.slashfilm.com',
       PageSections: {
           Home:'Reading',
           Work:'Reading'
       }
   },
   {
       Name: 'Pitchfork',
       ImgUrl: '/img/pitchfork.ico',
       Url: 'http://www.Pitchfork.com',
       PageSections: {
           Home:'Reading',
           Work:'Reading'
       }
   },
   {
       Name: 'YouTube Music',
       ImgUrl: '/img/ytmusic.png',
       Url: 'https://music.youtube.com',
       PageSections: {
           Home:'Fun',
           Work:'Fun'
       }
   },
   {
       Name: 'YouTube',
       ImgUrl: '/img/youtube.ico',
       Url: 'https://www.youtube.com',
       PageSections: {
           Home:'Fun',
           Work:'Fun'
       }
   },
   {
       Name: 'Escapist',
       ImgUrl: '/img/escapist.ico',
       Url: 'https://www.escapistmagazine.com/v2/author/bob/',
       PageSections: {
       }
   },
   {
       Name: 'Something Awful',
       ImgUrl: '/img/sa.gif',
       Url: 'http://forums.somethingawful.com/',
       PageSections: {
           Home:'Fun',
           Work:'Fun'
       }
   },
   {
       Name: 'Electric Mole',
       ImgUrl: '/img/favicon.ico',
       Url: 'http://forums.electricmole.net/',
       PageSections: {
           Home:'Fun',
           Work:'Fun'
       }
   },
   {
       Name: 'Spurs Talk',
       ImgUrl: '/img/spurs.ico',
       Url: 'http://www.spurstalk.com/forums/forumdisplay.php?f=2',
       PageSections: {
           Home:'Fun',
           Work:'Fun'
       }
   },
   {
       Name: 'Twitter',
       ImgUrl: '/img/twitter.png',
       Url: 'https://www.twitter.com',
       PageSections:{
           Home: 'Fun',
           Work: 'Fun'
       }
   },
   {
       Name: 'Amazon',
       ImgUrl: '/img/amazon.gif',
       Url: 'http://smile.Amazon.com',
       PageSections: {
           Home:'Fun',
           Work:'Fun'
       }
   },
   {
       Name: 'eBay',
       ImgUrl: '/img/ebay.gif',
       Url: 'http://www.ebay.com',
       PageSections: {
           Home:'Fun',
           Work:'Fun'
       }
   },
   {
       Name: 'Amazon On Demand',
       ImgUrl: '/img/amazonvideo.gif',
       Url: 'https://www.amazon.com/b/ref=lp_2858778011_nav_em_T1_0_4_5_1__aiv?rh=i%3Ainstant-video%2Cn%3A2858778011&ie=UTF8&node=2858778011',
       PageSections: {
           Home:'Fun',
           Work:'Fun'
       }
   },
   {
       Name: 'Kindle Cloud App',
       ImgUrl: '/img/kindle.png',
       Url: 'http://read.Amazon.com',
       PageSections: {
           Home:'Fun',
           Work:'Fun'
       }
   },
   {
       Name: 'PluralSight',
       ImgUrl: '/img/pluralsight.ico',
       Url: 'http://www.pluralsight.com',
       PageSections: {
           Home:'Not Fun',
           Work:'Reading'
       }
   },
   {
       Name: 'Pocket',
       ImgUrl: '/img/pocket.png',
       Url: 'https://www.getpocket.com/',
       PageSections: {
           Home:'Not Fun',
           Work:'Reading'
       }
   },
   {
       Name: 'HemingWayApp',
       ImgUrl: '/img/hemingway.png',
       Url: 'http://www.hemingwayapp.com',
       PageSections: {
       }
   },
   {
       Name: 'rTorrent',
       ImgUrl: '/img/rutorrent.gif',
       Url: 'https://fremicro062.xirvik.com/rtorrent/',
       PageSections: {
           Home:'Fun'
       }
   },
   {
       Name: 'redacted',
       ImgUrl: '/img/redacted.png',
       Url: 'https://redacted.ch',
       PageSections: {
           Home:'Fun'
       }
   },
];

function GetBookmarksForPage(page){

    const allBookmarks = bookmarks.filter(bookmark => bookmark.PageSections[page]);
    const sections = GetBookmarkSections(allBookmarks, page);

    let bookmarkReturnObjects = sections.map(section => {
        return {
            Name: section, 
            bookmarks: GetBookmarksFromSections(allBookmarks, page, section)
        };
    });

    return bookmarkReturnObjects;
}

function GetBookmarkSections(bookmarkList, page){
    
    var listOfCategories = bookmarkList.map(bookmark => bookmark.PageSections[page]);

    return listOfCategories.filter((item, i, ar) => ar.indexOf(item) === i);
}

function GetBookmarksFromSections(bookmarkList, page, section){
    return bookmarkList.filter(bookmark => bookmark.PageSections[page] === section);
}

export { GetBookmarkSections, GetBookmarksForPage, GetBookmarksFromSections};

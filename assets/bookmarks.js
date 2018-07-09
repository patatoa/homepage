/*jshint esversion: 6*/

var bookmarks = [
   {
       Name: 'Inbox',
       ImgUrl: '/img/inbox.png',
       Url: 'https://inbox.google.com',
       Hotkey: {
           Value: 73,
           Label: 'i'
       },
       PageSections: {
           Home:'Not Fun',
           Work:'Personal'
       }
   },
   {
       Name: 'OneNote',
       ImgUrl: '/img/onenote.png',
       Url: 'https://onedrive.live.com/edit.aspx?resid=81E5ACFF337707F3!130&cid=81e5acff337707f3&app=OneNote',
       Hotkey: {
           Value: 79,
           Label: 'o'
       },
       PageSections: {
           Home:'Not Fun',
           Work:'Personal'
       }
   },
   {
       Name: 'Keep',
       ImgUrl: '/img/keep.png',
       Url: 'https://keep.google.com',
       Hotkey: {
           Value: 75,
           Label: 'k'
       },
       PageSections: {
           Home:'Not Fun',
           Work:'Personal'
       }
   },
   {
       Name: 'Drive',
       ImgUrl: '/img/drive.ico',
       Url: 'https://drive.google.com',
       Hotkey: {
           Value: 69,
           Label: 'e'
       },
       PageSections: {
           Home:'Not Fun',
           Work:'Personal'
       }
   },
   {
       Name: 'OneDrive',
       ImgUrl: '',
       Url: '79',
       Hotkey: {
           Value: 48,
           Label: '0'
       },
       PageSections: {
           Home:'Not Fun',
           Work:'Personal'
       }
   },
   {
       Name: 'Todoist',
       ImgUrl: '/img/todoist.png',
       Url: 'https://en.todoist.com/',
       Hotkey: {
           Value: 84,
           Label: 't'
       },
       PageSections: {
           Home:'Not Fun',
           Work:'Personal'
       }
   },
   {
       Name: 'Trello',
       ImgUrl: '/img/trello.png',
       Url: 'https://trello.com/',
       Hotkey: {
           Value: 76,
           Label: 'l'
       },
       PageSections: {
           Home:'Not Fun',
           Work:'Work'
       }
   },
   {
       Name: 'PluralSight',
       ImgUrl: '/img/pluralsight.ico',
       Url: 'http://www.pluralsight.com',
       Hotkey: {
           Value: 83,
           Label: 's'
       },
       PageSections: {
           Home:'Not Fun',
           Work:'Work'
       }
   },
   {
       Name: 'Pocket',
       ImgUrl: '/img/pocket.png',
       Url: 'https://www.getpocket.com/',
       Hotkey: {
           Value: 219,
           Label: '['
       },
       PageSections: {
           Home:'Not Fun',
           Work:'Work'
       }
   },
   {
       Name: 'Front Page',
       ImgUrl: '/img/reddit-alien.gif',
       Url: 'https://www.reddit.com',
       Hotkey: {
           Value: 82,
           Label: 'r'
       },
       PageSections: {
           Home:'Forums',
           Work:'Forums'
       }
   },
   {
       Name: 'r/NBA',
       ImgUrl: '/img/bball.gif',
       Url: 'https://www.reddit.com/r/nba',
       Hotkey: {
           Value: 66,
           Label: 'b'
       },
       PageSections: {
           Home:'Forums',
           Work:'Forums'
       }
   },
   {
       Name: 'Something Awful',
       ImgUrl: '/img/sa.gif',
       Url: 'http://forums.somethingawful.com/',
       PageSections: {
           Home:'Forums',
           Work:'Forums'
       }
   },
   {
       Name: 'Electric Mole',
       ImgUrl: '/img/favicon.ico',
       Url: 'http://forums.electricmole.net/',
       PageSections: {
           Home:'Forums',
           Work:'Forums'
       }
   },
   {
       Name: 'Spurs Talk',
       ImgUrl: '/img/spurs.ico',
       Url: 'http://www.spurstalk.com/forums/forumdisplay.php?f=2',
       PageSections: {
           Home:'Forums',
           Work:'Forums'
       }
   },
   {
       Name: 'Google Music',
       ImgUrl: '/img/google-music.gif',
       Url: 'https://music.google.com',
       Hotkey: {
           Value: 77,
           Label: 'm'
       },
       PageSections: {
           Home:'Fun',
           Work:'Fun'
       }
   },
   {
       Name: '/b/',
       ImgUrl: '/img/4chan-g.ico',
       Url: 'https://boards.4chan.org/b/',
       Hotkey: {
           Value: 52,
           Label: '4'
       },
       PageSections: {
           Home:'Forums',
       }
   },
   {
       Name: '/mu/',
       ImgUrl: '/img/4chan-g.ico',
       Url: 'https://boards.4chan.org/mu/',
       Hotkey: {
           Value: 85,
           Label: 'u'
       },
       PageSections: {
           Home:'Forums',
       }
   },
   {
       Name: '/g/',
       ImgUrl: '/img/4chan-b.ico',
       Url: 'https://boards.4chan.org/g/',
       Hotkey: {
           Value: 71,
           Label: 'g'
       },
       PageSections: {
           Home:'Fourms',
       }
   },
   {
       Name: 'YouTube',
       ImgUrl: '/img/youtube.ico',
       Url: 'https://www.youtube.com',
       Hotkey: {
           Value: 89,
           Label: 'y'
       },
       PageSections: {
           Home:'Fun',
           Work:'Fun'
       }
   },
   {
       Name: 'Facebook',
       ImgUrl: '/img/facebook.gif',
       Url: 'https://www.facebook.com',
       Hotkey: {
           Value: 70,
           Label: 'f'
       },
       PageSections: {
           Home:'Fun',
           Work:'Fun'
       }
   },
   {
       Name: 'Twitter',
       ImgUrl: '/img/twitter.png',
       Url: 'http://www.twitter.com',
       Hotkey: {
           Value: 87,
           Label: 'w'
       },
       PageSections: {
           Home:'Fun',
           Work:'Fun'
       }
   },
   {
       Name: 'Pitchfork',
       ImgUrl: '/img/pitchfork.ico',
       Url: 'http://www.Pitchfork.com',
       Hotkey: {
           Value: 80,
           Label: 'p'
       },
       PageSections: {
           Home:'Fun',
           Work:'Fun'
       }
   },
   {
       Name: 'Amazon',
       ImgUrl: '/img/amazon.gif',
       Url: 'http://smile.Amazon.com',
       Hotkey: {
           Value: 65,
           Label: 'a'
       },
       PageSections: {
           Home:'Fun',
           Work:'Fun'
       }
   },
   {
       Name: 'eBay',
       ImgUrl: '/img/ebay.gif',
       Url: 'http://www.ebay.com',
       Hotkey: {
           Value: 69,
           Label: 'e'
       },
       PageSections: {
           Home:'Fun',
           Work:'Fun'
       }
   },
   {
       Name: 'The AV Club',
       ImgUrl: '/img/avclub.gif',
       Url: 'http://tv.avclub.com',
       PageSections: {
           Home:'Fun',
           Work:'Fun'
       }
   },
   {
       Name: 'Amazon On Demand',
       ImgUrl: '/img/amazonvideo.gif',
       Url: 'amazonVideo',
       Hotkey: {
           Value: 86,
           Label: 'v'
       },
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
       Name: 'HemingWayApp',
       ImgUrl: '/img/hemingway.png',
       Url: 'http://www.hemingwayapp.com',
       Hotkey: {
           Value: 72,
           Label: 'h'
       },
       PageSections: {
           Work:'Work'
       }
   },
];

function GetBookmarksForPage(page){

    return bookmarks.filter(bookmark => bookmark.PageSections[page]);
}

function GetBookmarkSections(bookmarkList, page){
    
    var listOfCategories = bookmarkList.map(bookmark => bookmark.PageSections[page]);

    return listOfCategories.filter(item, i, ar => ar.indexOf(item) === i);
}

function GetBookmarksFromSections(bookmarkList, page, section){
    return bookmarkList.filter(bookmark => bookmark.PageSections[page] === section);
}

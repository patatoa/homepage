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
           Value: 68,
           Label: 'd'
       },
       PageSections: {
           Home:'Not Fun',
           Work:'Personal'
       }
   },
   {
       Name: 'OneDrive',
       ImgUrl: '/img/onedrive.png',
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
       Name: 'Washington Post',
       ImgUrl: '/img/wp.png',
       Url: 'https://www.washingtonpost.com',
       Hotkey: {
           Value: 87,
           Label: 'w'
       },
       PageSections: {
           Home:'Reading',
           Work:'Reading'
       }
   },
   {
       Name: 'Express Reading',
       ImgUrl: '/img/expressnews.png',
       Url: 'https://www.expressnews.com',
       Hotkey: {
           Value: 69,
           Label: 'e'
       },
       PageSections: {
           Home:'Reading',
           Work:'Reading'
       }
   },
   {
       Name: 'The Ringer',
       ImgUrl: '/img/theringer.png',
       Url: 'https://www.theringer.com/nba',
       Hotkey: {
           Value: 82,
           Label: 'r'
       },
       PageSections: {
           Home:'Reading',
           Work:'Reading'
       }
   },
   {
       Name: 'CBS Sports',
       ImgUrl: '/img/cbs.png',
       Url: 'https://www.cbssports.com/nba/',
       Hotkey: {
           Value: 67,
           Label: 'c'
       },
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
       Url: 'https://www.slasfilm.com',
       Hotkey: {
           Value: 70,
           Label: 'f'
       },
       PageSections: {
           Home:'Reading',
           Work:'Reading'
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
           Home:'Reading',
           Work:'Reading'
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
       Hotkey: {
           Value: 83,
           Label: 's'
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
       PageSections: {
           Home:'Fun',
           Work:'Fun'
       }
   },
   {
       Name: 'Amazon On Demand',
       ImgUrl: '/img/amazonvideo.gif',
       Url: 'https://www.amazon.com/b/ref=lp_2858778011_nav_em_T1_0_4_5_1__aiv?rh=i%3Ainstant-video%2Cn%3A2858778011&ie=UTF8&node=2858778011',
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

function GetUrlForKeyCode(keycode){
    return bookmarks.filter(bm => bm.Hotkey && bm.Hotkey.Value == keycode).map(bm => bm.Url);
}

export { GetBookmarkSections, GetBookmarksForPage, GetBookmarksFromSections, GetUrlForKeyCode};

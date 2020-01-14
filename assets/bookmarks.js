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
       Name: 'Ops Portal (Test)',
       ImgUrl: '/img/phyzdata.png',
       Url: 'https://opsportal.test.phyzdata.com/',
       PageSections: {
           Work:'Work'
       }
   },
   {
       Name: 'Prescriber Portal (Test)',
       ImgUrl: '/img/phyzdata.png',
       Url: 'https://frontdesk.test.phyzdata.com/Prescriber',
       PageSections: {
           Work:'Work'
       }
   },
   {
       Name: 'Ops Portal (UAT)',
       ImgUrl: '/img/phyzdata.png',
       Url: 'https://opsportaluat.test.phyzdata.com/',
       PageSections: {
           Work:'Work'
       }
   },
   {
       Name: 'Prescriber Portal (UAT)',
       ImgUrl: '/img/phyzdata.png',
       Url: 'https://frontdeskuat.test.phyzdata.com/Prescriber',
       PageSections: {
           Work:'Work'
       }
   },
   {
       Name: 'Jira (.Net)',
       ImgUrl: '/img/jira.png',
       Url: 'https://phyzdata.atlassian.net/secure/RapidBoard.jspa?rapidView=7&projectKey=NET',
       PageSections: {
           Work:'Work'
       }
   },
   {
       Name: 'Jira (Logi)',
       ImgUrl: '/img/jira.png',
       Url: 'https://phyzdata.atlassian.net/secure/RapidBoard.jspa?rapidView=6&projectKey=LOGI',
       PageSections: {
           Work:'Work'
       }
   },
   {
       Name: 'Github (Phyzdata)',
       ImgUrl: '/img/github.png',
       Url: 'https://github.com/phyzdata/phyzdata/pulls',
       PageSections: {
           Work:'Work'
       }
   },
   {
       Name: 'Github (frontdesk)',
       ImgUrl: '/img/github.png',
       Url: 'https://github.com/phyzdata/frontdesk/pulls',
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
       Name: 'Outlook',
       ImgUrl: '/img/outlook.png',
       Url: 'https://outlook.office.com/mail/inbox',
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
       Name: 'Google Music',
       ImgUrl: '/img/google-music.gif',
       Url: 'https://music.google.com',
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
       PageSections: {
           Home:'Fun',
           Work:'Fun'
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

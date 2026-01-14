import { type Bookmark } from "../types/types";

//Images
import gmail from "../img/gmail.ico";
import pluralsight from "../img/pluralsight.ico";
import reddit from "../img/reddit-alien.gif";
import redditBasketball from "../img/bball.gif";
import spurs from "../img/spurs.ico";
import rutorrent from "../img/rutorrent.gif";
import redacted from "../img/redacted.png";
import btn from "../img/btn.gif";
import ptp from "../img/ptp.ico";
import github from "../img/github.png";
import chatgpt from "../img/ChatGPT_logo.svg.png";
import wapo from "../img/wp.png";
import expressnews from "../img/expressnews.png";
import hackernews from "../img/hackernews.gif";
import theringer from "../img/theringer.png";
import somethingawful from "../img/sa.gif";
import electricmole from "../img/favicon.ico";
import youtube from "../img/youtube.ico";
import amazon from "../img/amazon.gif";
import ebay from "../img/ebay.gif";
import amazonvideo from "../img/amazonvideo.gif";
import kindle from "../img/kindle.png";
import jungledisk from "../img/jd.ico";
import gcp from "../img/gcp.png";
import datadog from "../img/datadog.png";
import slab from "../img/slab.png";
import aws from "../img/AWS.jpeg";
import meet from "../img/meet.png";
import calendar from "../img/calendar.png";
import jira from "../img/jira.png";
import bitwarden from "../img/bitwarden.png";
import bloom from "../img/bloom.jpeg";
import elephantdrive from "../img/elephantdrive1.ico";
import elephantdrivepartnerportal from "../img/elephantdrive2.ico";
import kibana from "../img/elastic-kibana.svg";
import forgejo from "../img/forgejo.ico";
import netdata from "../img/netdata.png";
import plex from "../img/plex.png";
import immich from "../img/immich.png";
import vaultwarden from "../img/vaultwarden.png";
import syncthing from "../img/syncthing.png";
import qbittorrent from "../img/qbittorrent.png";

interface BookmarkInternal extends Bookmark {
  workSection?: string;
  homeSection?: string;
}

const bookmarks: BookmarkInternal[] = [
  {
    name: "Gmail",
    url: "https://gmail.com",
    src: gmail,
    homeSection: "Productivity",
    workSection: "Work",
  },
  {
    name: "Pluralsight",
    url: "http://www.pluralsight.com/",
    src: pluralsight,
    homeSection: "Productivity",
    workSection: "Work",
  },
  {
    name: "Meet",
    src: meet,
    url: "https://meet.google.com",
    workSection: "Work",
  },
  {
    name: "Calendar",
    src: calendar,
    url: "https://calendar.google.com",
    workSection: "Work",
  },
  {
    name: "Jira",
    src: jira,
    url: import.meta.env.JIRA_WORK as string,
    workSection: "Work",
  },
  {
    name: "Confluence",
    src: jira,
    url: import.meta.env.CONFLUENCE as string,
    workSection: "Work",
  },
  {
    name: "Bitwarden",
    src: bitwarden,
    url: "https://vault.bitwarden.com/#/login",
    workSection: "Work",
  },
  {
    name: "Bloom",
    src: bloom,
    url: "https://app.bloomgrowth.com/Dashboard",
    workSection: "Work",
  },
  {
    name: "Github (patatoa)",
    url: "https://github.com/patatoa",
    src: github,
    homeSection: "Dev",
    workSection: "Dev",
  },
  {
    name: "Forgejo (tailscale)",
    url: import.meta.env.REPO_FORGEJO as string,
    src: forgejo,
    homeSection: "Dev",
  },
  {
    name: "Netdata (tailscale)",
    url: import.meta.env.REPO_NETDATA as string,
    src: netdata,
    homeSection: "Dev",
  },
  {
    name: "ChatGPT",
    url: "https://chat.openai.com/",
    src: chatgpt,
    homeSection: "Productivity",
    workSection: "Dev",
  },
  {
    name: "Immich (home only)",
    url: import.meta.env.IMMICH as string,
    src: immich,
    homeSection: "Productivity",
  },
  {
    name: "VaultWarden (tailscale)",
    url: import.meta.env.VAULTWARDEN as string,
    src: vaultwarden,
    homeSection: "Productivity",
  },
  {
    name: "SyncThing (tailscale)",
    url: import.meta.env.SYNCTHING as string,
    src: syncthing,
    homeSection: "Productivity",
  },

  {
    name: "Reddit",
    url: "https://reddit.com",
    src: reddit,
    homeSection: "Reddit",
    workSection: "Reddit",
  },
  {
    name: "/r/nba",
    url: "https://reddit.com/r/nba",
    src: redditBasketball,
    homeSection: "Reddit",
    workSection: "Reddit",
  },
  {
    name: "/r/nbaspurs",
    url: "https://reddit.com/r/nbaspurs",
    src: redditBasketball,
    homeSection: "Reddit",
    workSection: "Reddit",
  },

  {
    name: "Spurs Talk",
    url: "http://www.spurstalk.com/forums/forumdisplay.php?f=2",
    src: spurs,
    homeSection: "Reddit",
    workSection: "News",
  },

  {
    name: "qBittorrent",
    src: qbittorrent,
    url: import.meta.env.QBITTORRENT as string,
    homeSection: "Torrents",
  },
  {
    name: "rTorrent",
    src: rutorrent,
    url: import.meta.env.RUTORRENT as string,
    homeSection: "Torrents",
  },
  {
    name: "redacted",
    src: redacted,
    url: import.meta.env.REDACTED as string,
    homeSection: "Torrents",
  },
  {
    name: "BTN",
    src: btn,
    url: import.meta.env.BTN as string,
    homeSection: "Torrents",
  },
  {
    name: "Pass The Popcorn",
    src: ptp,
    url: import.meta.env.PTP as string,
    homeSection: "Torrents",
  },

  {
    name: "YouTube",
    src: youtube,
    url: "https://www.youtube.com",
    homeSection: "Entertainment",
    workSection: "Fun",
  },
  {
    name: "Plex",
    src: plex,
    url: "https://app.plex.tv/desktop/#!/",
    homeSection: "Entertainment",
  },
  {
    name: "Amazon",
    src: amazon,
    url: "http://www.amazon.com",
    homeSection: "Entertainment",
    workSection: "Fun",
  },
  {
    name: "eBay",
    src: ebay,
    url: "http://www.ebay.com",
    homeSection: "Entertainment",
    workSection: "Fun",
  },
  {
    name: "Prime Video",
    src: amazonvideo,
    url: "https://www.amazon.com/b/ref=lp_2858778011_nav_em_T1_0_4_5_1__aiv?rh=i%3Ainstant-video%2Cn%3A2858778011&ie=UTF8&node=2858778011",
    homeSection: "Entertainment",
    workSection: "Fun",
  },
  {
    name: "Kindle Cloud App",
    src: kindle,
    url: "http://read.Amazon.com",
    homeSection: "Entertainment",
    workSection: "Fun",
  },

  {
    name: "Google Cloud",
    src: gcp,
    url: "https://console.cloud.google.com/",
    workSection: "Infrastructure",
    homeSection: "Dev",
  },
  {
    name: "AWS",
    src: aws,
    url: "https://us-east-1.console.aws.amazon.com/console/home?region=us-east-1#",
    workSection: "Infrastructure",
    homeSection: "Dev",
  },
];
const getBookmarks = (type: "Home" | "Work", section: string): Bookmark[] => {
  if (type === "Home") {
    return bookmarks.filter((b) => b.homeSection === section);
  }
  return bookmarks.filter((b) => b.workSection === section);
};

const GetHomeBookmarks = (section: string): Bookmark[] =>
  getBookmarks("Home", section);
const GetWorkBookmarks = (section: string): Bookmark[] =>
  getBookmarks("Work", section);

export { GetHomeBookmarks, GetWorkBookmarks };

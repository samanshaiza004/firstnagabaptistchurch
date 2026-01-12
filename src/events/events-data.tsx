export type Event = {
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  recurring: boolean;
  // For non-recurring events: month (1-12) and day (1-31) for sorting
  // null means TBA/TBD
  month?: number | null;
  day?: number | null;
  year?: number;
};

export const events: Event[] = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "3:00 PM",
    location: "Burton Hill Baptist Church",
    description:
      "Join us for our weekly worship gathering with praise, prayer, Scripture reading, and teaching from God's Word.",
    recurring: true,
  },
  {
    title: "Sunday Fellowship and Refreshments",
    date: "Every Sunday",
    time: "After Service",
    location: "Fellowship Hall",
    description:
      "A time for the community to share refreshments and strengthen bonds of fellowship.",
    recurring: true,
  },
  {
    title: "Monthly Prayer and Fasting",
    date: "Last Saturday of the Month",
    time: "10:00 AM",
    location: "Online / In-Person",
    description:
      "Gather together for corporate prayer, testimony, reflection, and intercession for our community.",
    recurring: true,
  },
  {
    title: "Church Anniversary Celebration",
    date: "January 4th",
    time: "3:00 PM",
    location: "Burton Hill Baptist Church",
    description:
      "Celebrating the establishment of First Naga Baptist Church with special worship, guest speakers, and remembrance of God's faithfulness.",
    recurring: false,
    month: 1,
    day: 4,
    year: 2026,
  },
  {
    title: "Fundraising Cultural Event",
    date: "August 9th",
    time: "TBA",
    location: "Burton Hill Baptist Church",
    description:
      "A vibrant cultural celebration featuring traditional Naga music, dance, and cuisine to support church ministries.",
    recurring: false,
    month: 8,
    day: 9,
    year: 2026,
  },
  {
    title: "Christmas Celebration",
    date: "December 25th",
    time: "TBA",
    location: "Burton Hill Baptist Church",
    description:
      "Celebrate the birth of Jesus Christ with carols, special music, and a festive gathering of the church family.",
    recurring: false,
    month: 12,
    day: 25,
    year: 2026,
  },
  {
    title: "Fellowship with Baylor Students",
    date: "February",
    time: "TBA",
    location: "TBA",
    description:
      "A special gathering for fellowship with Baylor University students and faculty.",
    recurring: false,
    month: 2,
    day: null,
  },
  {
    title: "Vacation Bible School",
    date: "June",
    time: "TBA",
    location: "Burton Hill Baptist Church",
    description:
      "A Vacation Bible school for children ministry and members to learn about the Bible and how to apply it to their daily lives. ",
    recurring: false,
    month: 6,
    day: null,
  },
  {
    title: "Half Yearly GBM",
    date: "June",
    time: "TBA",
    location: "Burton Hill Baptist Church",
    description:
      "Mid-year General Body Meeting to review church progress, discuss upcoming initiatives, and make important decisions.",
    recurring: false,
    month: 6,
    day: null,
  },
  {
    title: "Church-wide Seminar",
    date: "October",
    time: "TBA",
    location: "TBD",
    description: "During the Fall Break.",
    recurring: false,
    month: 10,
    day: 5
  },
  {
    title: "Missions Sunday",
    date: "December 6th",
    time: "TBA",
    location: "Burton Hill Baptist Church",
    description: "Focus areas: Refugees, Homeless, Senior Citizens.",
    recurring: false,
    month: 12,
    day: 6,
  },
  {
    title: "Palm Sunday",
    date: "March 29th",
    location: "Burton Hill Baptist Church",
    description:
      "Commemorate Jesus' triumphant entry into Jerusalem with special worship and palm branch procession.",
    recurring: false,
    month: 3,
    day: 29,
    year: 2026,
  },
  {
    title: "Easter Sunday & Lord Supper",
    date: "April 5th",
    location: "Burton Hill Baptist Church",
    description:
      "Celebrate Christ's resurrection with sunrise service, special music, and participation in the Lord's Supper.",
    recurring: false,
    month: 4,
    day: 5,
    year: 2026,
  },
  {
    title: "Lord Supper",
    date: "July 5th",
    location: "Burton Hill Baptist Church",
    description:
      "A solemn observance of the Lord's Supper, remembering Christ's sacrifice and renewing our covenant with Him.",
    recurring: false,
    month: 7,
    day: 5,
    year: 2026,
  },
  {
    title: "Homeless Ministry",
    date: "July 2nd Week",
    location: "Burton Hill Baptist Church",
    description:
      "Homeless Ministry to provide food, clothing, and shelter to the homeless in our community.",
    recurring: false,
    month: 7,
    year: 2026,
  },
  {
    title: "Church Picnic",
    date: "May 9th",
    location: "TBA",
    description:
      "A fun outdoor gathering with games, food, and fellowship for the entire church family to relax and connect.",
    recurring: false,
    month: 5,
    day: 9,
    year: 2026,
  },
  {
    title: "Executive Meeting",
    date: "May 16th",
    location: "Burton Hill Baptist Church",
    description:
      "Monthly meeting of church leaders to discuss ministry plans, review finances, and coordinate upcoming activities.",
    recurring: false,
    month: 5,
    day: 16,
    year: 2026,
  },

  {
    title: "Mother's Day",
    date: "May 10th",
    location: "Burton Hill Baptist Church",
    description:
      "Honor mothers in our congregation with special recognition, flowers, and a message celebrating godly motherhood.",
    recurring: false,
    month: 5,
    day: 10,
    year: 2026,
  },
  {
    title: "Father's Day",
    date: "June 21st",
    location: "Burton Hill Baptist Church",
    description:
      "Celebrate fathers and fatherhood with special recognition, gifts, and a sermon on godly fatherhood.",
    recurring: false,
    month: 6,
    day: 21,
    year: 2026,
  },
  {
    title: "Carol and Advent",
    date: "December",
    location: "Burton Hill Baptist Church",
    description:
      "A month-long celebration of Advent with special carol singing, Advent wreaths, and Christmas music programs.",
    recurring: false,
    month: 12,
    year: 2026,
  },
  {
    title: "Outreach missions at Houston",
    date: "March",
    location: "Houston",
    description:
      "Church members travel to Houston to conduct outreach, evangelism, and community service projects.",
    recurring: false,
    month: 3,
    year: 2026,
  },
  {
    title: "Executive Meeting",
    date: "September 12th",
    location: "Burton Hill Baptist Church",
    description:
      "Monthly leadership meeting to review church operations, plan future activities, and address administrative matters.",
    recurring: false,
    month: 9,
    day: 12,
    year: 2026,
  },
  {
    title: "Lord Supper",
    date: "October 4th",
    location: "Burton Hill Baptist Church",
    description:
      "Quarterly observance of the Lord's Supper with special focus on remembrance and spiritual reflection.",
    recurring: false,
    month: 10,
    day: 4,
    year: 2026,
  },
  {
    title: "Thanksgiving Sunday",
    date: "November 22nd",
    location: "Burton Hill Baptist Church",
    description:
      "A special Sunday dedicated to gratitude with special services, testimonies, and activities focusing on thankfulness to God.",
    recurring: false,
    month: 11,
    day: 22,
    year: 2026,
  },
  {
    title: "Executive Meeting",
    date: "December 28th",
    location: "Burton Hill Baptist Church",
    description:
      "Year-end leadership meeting to review the year's activities, plan for the coming year, and set church goals.",
    recurring: false,
    month: 12,
    day: 28,
    year: 2026,
  },
  {
    title: "Missions/Deacon Team Meet",
    date: "Bi Monthly",
    location: "Burton Hill Baptist Church",
    description:
      "Regular meetings for missions and deacon teams to coordinate outreach activities and ministry planning.",
    recurring: true,
  },
  {
    title: "World Sunday School Celebration",
    date: "November 1st",
    location: "Burton Hill Baptist Church",
    description:
      "Year-end leadership meeting to review the year's activities, plan for the coming year, and set church goals.",
    recurring: false,
    month: 11,
    day: 1,
    year: 2026,
  },
  {
    title: "Mission Trip to Florida",
    date: "October 3rd Week",
    location: "Burton Hill Baptist Church",
    description:
      "Mission trip to Florida to conduct outreach, evangelism, and community service projects.",
    recurring: false,
    month: 10,
    day: 18,
    year: 2026,
  },
  {
    title: "Fellowship with Chin Baptist Church",
    date: "November",
    location: "Lewisville",
    description:
      "Year-end fellowship with Chin Baptist Church to review the year's activities, plan for the coming year, and set church goals.",
    recurring: false,
    month: 11,
    day: 8,
    year: 2026,
  },
];

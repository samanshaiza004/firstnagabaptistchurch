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
      "A time for the community to share a meal and strengthen bonds of fellowship.",
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
      "Our annual gathering to give thanks to God, share testimonies of His faithfulness, and enjoy fellowship over a traditional meal.",
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
      "Our annual gathering to give thanks to God, share testimonies of His faithfulness, and enjoy fellowship over a traditional meal.",
    recurring: false,
    month: 12,
    day: 25,
    year: 2026,
  },
  {
    title: "Fellowship with Baylor Students",
    date: "TBA",
    time: "TBA",
    location: "TBA",
    description:
      "A special gathering for fellowship with Baylor University students and faculty.",
    recurring: false,
    month: null,
    day: null,
  },
  {
    title: "World Sunday School Day",
    date: "TBA",
    time: "TBA",
    location: "Burton Hill Baptist Church",
    description:
      "Celebration of Sunday School Day with special activities and programs.",
    recurring: false,
    month: null,
    day: null,
  },
  {
    title: "Church-wide Seminar",
    date: "TBA",
    time: "TBA",
    location: "TBA",
    description:
      "An educational seminar for church members covering various spiritual topics.",
    recurring: false,
    month: null,
    day: null,
  },
  {
    title: "Mission Sunday",
    date: "TBA",
    time: "TBA",
    location: "Burton Hill Baptist Church",
    description: "Focus areas: Refugees, Homeless, Senior Citizens.",
    recurring: false,
    month: null,
    day: null,
  },
  {
    title: "Palm Sunday",
    date: "March 29th",
    location: "Burton Hill Baptist Church",
    description:
      "Our annual gathering to give thanks to God, share testimonies of His faithfulness, and enjoy fellowship over a traditional meal.",
    recurring: false,
    month: 3,
    day: 29,
    year: 2026,
  },
  {
    title: "Easter Sunday",
    date: "April 5th",
    location: "Burton Hill Baptist Church",
    description:
      "Our annual gathering to give thanks to God, share testimonies of His faithfulness, and enjoy fellowship over a traditional meal.",
    recurring: false,
    month: 4,
    day: 5,
    year: 2026,
  },
  {
    title: "Mother's Day",
    date: "May 10th",
    location: "Burton Hill Baptist Church",
    description:
      "Our annual gathering to give thanks to God, share testimonies of His faithfulness, and enjoy fellowship over a traditional meal.",
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
      "Our annual gathering to give thanks to God, share testimonies of His faithfulness, and enjoy fellowship over a traditional meal.",
    recurring: false,
    month: 6,
    day: 21,
    year: 2026,
  },
  {
    title: "Carol",
    date: "December",
    location: "Burton Hill Baptist Church",
    description:
      "Our annual gathering to give thanks to God, share testimonies of His faithfulness, and enjoy fellowship over a traditional meal.",
    recurring: false,
    month: 12,
    year: 2026,
  },
];

export const siteConfig = {
  name: "First Naga Baptist Church",
  shortName: "FNBC",
  domain: "https://firstnagabaptistchurch.org",
  description:
    "First Naga Baptist Church in DFW, Texas—a community for worship, fellowship, discipleship, and outreach.",
  email: "firstnagabaptistchurch@yahoo.com",
  phoneDisplay: "469 236-7545",
  phoneHref: "+14692367545",
  venue: "Burton Hill Baptist Church",
  address: "308 Burton Hill Rd, Westworth Village, TX 76114",
  region: "DFW, Texas",
  serviceTime: {
    daylight: "3:30 PM",
    standard: "3:00 PM",
    timeZone: "America/Chicago",
  },
  donations: {
    paypal: "firstnagabaptistchurch@yahoo.com",
    zelle: "(817) 724-6922",
  },
} as const;

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Give", href: "/give" },
  { name: "Contact", href: "/contact" },
] as const;

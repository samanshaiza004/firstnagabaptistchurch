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
  { name: "Visit", href: "/visit" },
  { name: "About", href: "/about" },
  { name: "Leadership", href: "/leadership" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Give", href: "/give" },
] as const;

/** Desktop header links; Home is omitted because the wordmark already links home. */
export const primaryNavigation = navigation.filter((item) => item.href !== "/");

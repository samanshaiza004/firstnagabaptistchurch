import eventsData from "../../data/events.json";
import galleryData from "../../data/gallery.json";
import ministriesData from "../../data/ministries.json";
import peopleData from "../../data/people.json";
import { paragraphs } from "./portable-text";
import type { CmsContent, EventContent, GalleryPhotoContent, MinistryContent, PersonContent } from "./types";

const image = (key: string, alt: string) => ({ source: "local" as const, key, alt });

const objectives: CmsContent["objectives"] = [
  { id: "share-the-word", icon: "book", shortTitle: "Share the Word", shortDescription: "To share the Word and engage with the unreached.", title: "Share the Word and Engage with the Unreached", description: "We are committed to spreading the Gospel and reaching those who have not yet heard the good news of Jesus Christ. Through our services, outreach programs, and personal evangelism, we aim to share God's love with everyone.", order: 1 },
  { id: "support-naga-families", icon: "users", shortTitle: "Support Naga Families", shortDescription: "To support Naga students and families in the DFW area.", title: "Support Naga Students and Families in DFW", description: "We provide a spiritual home and support system for Naga students pursuing education and families building their lives in the Dallas-Fort Worth area. From fellowship to practical assistance, we are here for our community.", order: 2 },
  { id: "connect-community", icon: "globe", shortTitle: "Connect Community", shortDescription: "To connect with the Naga community throughout the United States.", title: "Connect with Naga Community Throughout the United States", description: "We serve as a hub connecting Nagas across America, fostering unity and fellowship among our scattered brothers and sisters. Through events, communication, and shared worship, we maintain our bonds of community.", order: 3 },
  { id: "reach-out", icon: "service", shortTitle: "Reach Out", shortDescription: "To reach out to the Indian subcontinent community in DFW.", title: "Reach Out to the Indian Subcontinent Community", description: "Beyond our Naga community, we extend our ministry to welcome and serve the broader Indian subcontinent community in DFW, building bridges of friendship and sharing God's love across cultural boundaries.", order: 4 },
  { id: "strengthen-connections", icon: "connection", shortTitle: "Strengthen Connections", shortDescription: "To strengthen connections among Naga churches and American communities.", title: "Strengthen Connections Among Churches", description: "We work to build stronger relationships between Naga churches and American communities, creating partnerships that benefit both and furthering the Kingdom of God through collaboration and mutual support.", order: 5 },
];

export const localContent: CmsContent = {
  settings: {
    name: "First Naga Baptist Church", shortName: "FNBC", domain: "https://firstnagabaptistchurch.org",
    description: "First Naga Baptist Church in DFW, Texas—a community for worship, fellowship, discipleship, and outreach.",
    email: "firstnagabaptistchurch@yahoo.com", phoneDisplay: "469 236-7545", phoneHref: "+14692367545",
    venue: "Burton Hill Baptist Church", address: "308 Burton Hill Rd, Westworth Village, TX 76114", region: "DFW, Texas",
    footerDescription: "The first Naga church established in America, dedicated to sharing the Word, supporting Naga families, and building bridges between communities.",
    mapEmbedUrl: "https://maps.google.com/maps?width=660&height=575&hl=en&q=Burton%20Hill%20Baptist%20Church%2C%20Fort%20Worth%2C%20TX&t=&z=15&ie=UTF8&iwloc=B&output=embed",
    serviceTime: { daylight: "3:30 PM", standard: "3:00 PM", timeZone: "America/Chicago" },
  },
  pages: {
    home: {
      seo: { title: "First Naga Baptist Church | DFW, Texas", description: "First Naga Baptist Church in DFW, Texas—a community for worship, fellowship, discipleship, and outreach." },
      hero: { eyebrow: "A Naga church in DFW", title: "First Naga Baptist Church", description: "The first Naga church established in America—a place to worship together, grow in faith, and keep community close across generations.", image: image("churchFamilyShirts", "First Naga Baptist Church worship gathering") },
      heroNote: "Established in America · November 4, 2018",
      primaryCta: { label: "Plan Your Sunday", href: "/contact" }, secondaryCta: { label: "Read Our Story", href: "/about" },
      serviceEyebrow: "Join Us", serviceTitle: "Service Times & Location", serviceDescription: "We gather every Sunday to worship, learn, and grow together as a family in Christ.",
      serviceCards: [
        { kind: "worship", title: "Sunday Worship", value: "{serviceTime}", description: "Join us for our main worship service with praise, prayer, and teaching." },
        { kind: "location", title: "Location", value: "{address}", description: "We are grateful to Burton Hill Baptist Church for hosting us." },
        { kind: "fellowship", title: "Fellowship", value: "After Service", description: "Stay for refreshments and fellowship with the community after worship." },
      ],
      seasonalNote: "Service starts at 3:30 PM while Central Time observes daylight saving time and at 3:00 PM during standard time.",
      leadershipEyebrow: "Our Leadership", leadershipTitle: "Meet the Team", leadershipDescription: "Get to know the dedicated servants who guide our church family with faith, wisdom, and love.", trusteesTitle: "Board of Trustees", trusteesDescription: "Our trustees oversee the church's budget and financial matters. As pioneers and elders, they provide invaluable guidance for our future goals and vision.",
      objectivesEyebrow: "Our Mission", objectivesTitle: "Main Objectives", objectivesDescription: "We are committed to these core objectives that guide our ministry and outreach.",
      storyEyebrow: "Our Story", storyTitle: "A Historic Journey of Faith",
      storyBody: paragraphs(
        "The first Naga church was established in America on November 4th, 2018 in DFW, Texas—113 years after the first Naga, Mr. Sanjamo Jungi, landed in this country in 1905.",
        "The inspiration came through Mr. Chuingachan Shokwungnao, who believed a church of their own would foster fellowship among scattered Nagas and open the door for evangelism.",
        "He emphasized that Nagas must never forget the Americans, for it was them who introduced the Nagas to the living God.",
      ),
      storyImage: image("churchFamily", "Church worship gathering"), storyCta: { label: "Read Full History", href: "/about" },
      eventsEyebrow: "Stay Connected", eventsTitle: "Upcoming Events", eventsCta: { label: "View All Events", href: "/events" },
    },
    about: {
      seo: { title: "About | First Naga Baptist Church", description: "Learn the history, mission, objectives, and founding story of First Naga Baptist Church." },
      hero: { eyebrow: "Our Story", title: "About First Naga Baptist Church", description: "A journey of faith, perseverance, and community that led to the establishment of the first Naga church in America.", image: image("churchLeaders", "First Naga Baptist Church community") },
      historyEyebrow: "Our History", historyTitle: "A Historic Journey of Faith",
      historyLead: paragraphs(
        "The first Naga church was established in America on November 4th, 2018 in DFW, Texas, 113 years after the first Naga, Mr. Sanjamo Jungi, landed in this country in 1905.",
        "The inspiration behind the establishment of a Naga church came through Mr. Chuingachan Shokwungnao, a businessman by profession. For the first time, in 2006, he shared his God-given desire of planting a Naga church with his Naga brethren in Texas.",
        "Unfortunately, nothing came to fruition initially. In subsequent years, he put up multiple proposals but his dream still did not materialize. This did not deter him and he continued to pursue his vision.",
      ),
      historyImage: image("lakesideBaptism", "Church worship gathering"),
      quote: "Nagas must never forget the Americans—for it was them who introduced the Nagas to the living God.", quoteAttribution: "Mr. Chuingachan Shokwungnao",
      historyMiddle: paragraphs(
        "He believed a church of their own would not only foster closeness and fellowship among scattered Nagas in the USA, but most importantly open the door to evangelize non-believers in America.",
        "He further stressed that a Naga church in this country could play an important role in building a stronger relationship between American churches and Naga churches back home.",
        "In 2017, he met Mr. Visedelie Seyie, a student at Southwestern Baptist Theological Seminary, and shared his vision. He became committed to the idea and together they worked with other like-minded Nagas.",
      ),
      founding: { year: "2018", title: "Historic Founding Meeting", date: "May 19, 2018", body: "Through the blessings of Almighty God, the following Nagas took a firm decision even under extreme criticism to start the Naga church in America: Mr. Brian Kashung, Mr. Lanutenzuk Lemtur, Mr. Chuingachan Shokwungnao, Mr. Visedelie Seyie, Mr. Theishing Konghar, Mr. Kughaho Chishi, Ms. Peraly Meyer, Mr. Mairising Damai, Mr. Ningreithan Shaiza, Ms. Abotoli Tuccu Sehgal, and Mr. Kaiser Kiirii (Monsang)." },
      historyFinal: paragraphs(
        "The second meeting was held at Mr. Kughaho Chishi's residence. With God's blessings, the first service was held on November 4th, 2018, and the church was named First Naga Baptist Church.",
        "After much struggle in finding a pastor, the committee approached Mr. Lanutenzuk Lemtur, a graduate from Southwestern Baptist Theological Seminary with a Master of Arts in Biblical Counselling. He willingly accepted the responsibility.",
        "Around the same time, Mr. Kughaho Chishi shared the need for a place to worship with Dr. Terry Coley, pastor of Burton Hill Baptist Church. He warmly welcomed First Naga Baptist Church to use their facility free of cost, for which the church remains forever grateful.",
      ),
      inauguration: { title: "Official Inauguration—August 10–11, 2019", body: "The church's inauguration celebration was held on August 10th and 11th, 2019, with Naga church leaders from Nagaland, Manipur, and Myanmar blessing the occasion.", guestSpeakers: ["Rev. Dr. Zelhou Keyho", "Rev. Dr. Mathotmi Vasha", "Rev. Dr. Daniel Kashung", "Rev. Dr. Atsi Dolie", "Rev. Say Phro", "Rev. Dr. Wungreiso Valui"], historyDate: "Dated September 17, 2022" },
      founders: { eyebrow: "Our Founders", title: "The Founding Members", description: "These faithful servants took a bold step of faith on May 19, 2018 to establish the first Naga church in America.", image: image("foundingMembers", "First Naga Baptist Church founding members"), caption: "13 founding members are present in this photo. Mr. Theishing Konghar is taking the picture.", names: ["Mr. Lanutenzuk Lemtur", "Mr. Kughaho Chishi", "Mr. Ningreithan Shaiza", "Mr. Kinoto Chishi", "Mr. Nikoto Chishi", "Mr. Chuingachan Shokwungnao", "Mr. Mathingmi Hongchui", "Mr. Mairising Damai", "Mr. Brian Kashung", "Mrs. Themsing Wungsek", "Mrs. Tosheni Chishi", "Ms. Tolina Chishi", "Mr. Visedelie Seyie", "Mr. Theishing Konghar"] },
      objectivesEyebrow: "Our Mission", objectivesTitle: "Our Main Objectives", objectivesDescription: "These objectives guide our ministry and reflect our commitment to serving God and our community.", objectivesCta: { label: "Get Involved", href: "/contact" },
    },
    events: { seo: { title: "Events | First Naga Baptist Church", description: "See worship services, prayer gatherings, ministry events, and special events at First Naga Baptist Church." }, hero: { eyebrow: "Gather With Us", title: "Services & Events", description: "Worship, fellowship, prayer, and special gatherings help us grow together as one family in Christ.", image: image("worshipChoir", "First Naga Baptist Church gathering") }, regularTitle: "Regular Services", specialTitle: "Special Events", calendarLabel: "2026 calendar", undatedTitle: "Dates To Be Announced", undatedDescription: "These events are being planned. Check back soon for specific dates and times." },
    gallery: { seo: { title: "Gallery | First Naga Baptist Church", description: "Photographs of worship, fellowship, baptisms, cultural celebrations, and church life at First Naga Baptist Church." }, hero: { eyebrow: "Photo Gallery", title: "Church Life, Remembered", description: "A growing collection of worship, fellowship, milestones, and shared moments from our church family.", image: image("churchFamily", "First Naga Baptist Church family gathered together") }, introEyebrow: "Our Shared Story", introTitle: "Moments from Our Church Family", introDescription: "These photographs preserve the people and moments that shape our life together. Select any image to view it in full.", shareEyebrow: "Help Preserve Our Story", shareTitle: "Have church photos to share?", shareDescription: "Send original photographs with the event name and approximate date so they can be considered for the gallery.", shareButtonLabel: "Share Photos" },
    giving: { seo: { title: "Give | First Naga Baptist Church", description: "Support the ministries and community outreach of First Naga Baptist Church." }, hero: { eyebrow: "Giving as Worship", title: "Support Our Ministry", description: "Your generous giving helps us spread the Gospel, support Naga families, and build bridges between communities in DFW and beyond.", image: image("culturalDay", "First Naga Baptist Church community fundraiser") }, waysEyebrow: "Ways to Give", waysTitle: "Choose Your Donation Method", waysDescription: "Scan the QR code with your phone camera or payment app, then verify the church recipient before sending.", verificationNotice: "Always verify the church recipient before completing a donation.", impactEyebrow: "Your Impact", impactTitle: "Where Your Giving Goes", impactDescription: "Every donation directly supports our church's mission and makes a tangible difference in our community.", scripture: "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.", scriptureCitation: "2 Corinthians 9:7", thanksTitle: "Thank You for Your Generosity", thanksDescription: "On behalf of First Naga Baptist Church, we extend our heartfelt gratitude for your faithful giving. Your contributions help us fulfill our God-given mission and touch lives both near and far." },
    contact: { seo: { title: "Contact | First Naga Baptist Church", description: "Contact First Naga Baptist Church, send a prayer request, or find our Sunday worship location in Fort Worth." }, hero: { eyebrow: "Get In Touch", title: "Contact Us", description: "We would love to hear from you. Reach out with any questions, prayer requests, or to learn more about our community.", image: image("prayingHands", "Hands joined in prayer") }, formTitle: "Send Us a Message", formDescription: "Fill out the form below and we will respond as soon as we can.", privacyNotice: "Your information will only be used to respond to your message.", successTitle: "Message sent successfully", successDescription: "Thank you for reaching out. We will respond as soon as we can.", infoTitle: "Contact Information", infoDescription: "Find us at our worship location or reach out through any of the channels below.", locationNote: "We worship at Burton Hill Baptist Church, who graciously hosts our services.", fellowshipNote: "Fellowship follows after service.", joinTitle: "Join Us This Sunday", fellowshipLabel: "After Service", mapTitle: "Find Us", mapRegionLabel: "Fort Worth, TX" },
  },
  events: eventsData as EventContent[],
  people: peopleData.map((person) => ({ ...person, image: image(person.imageKey, `Portrait of ${person.name}`) })) as PersonContent[],
  ministries: ministriesData as MinistryContent[], objectives,
  gallery: galleryData.map((photo) => ({ id: photo.id, title: photo.title, caption: photo.caption, image: image(photo.imageKey, photo.alt), category: photo.category, tags: photo.tags, dateLabel: photo.dateLabel, order: photo.order })) as GalleryPhotoContent[],
  givingMethods: [
    { id: "paypal", name: "PayPal", description: "A familiar online payment option", contact: "firstnagabaptistchurch@yahoo.com", qrCode: image("paypalQr", "PayPal donation QR code"), brandColor: "#0070ba", instructions: ["Visit paypal.com or use the PayPal app", "Send payment to: firstnagabaptistchurch@yahoo.com", "Include ‘Donation’ in the payment notes", "Keep your payment confirmation for your records"], order: 1 },
    { id: "zelle", name: "Zelle", description: "Fast, free bank-to-bank transfers", contact: "(817) 724-6922", qrCode: image("zelleQr", "Zelle donation QR code"), brandColor: "#6d1ed4", instructions: ["Open your banking app with Zelle", "Send to phone: (817) 724-6922", "Enter your donation amount", "Complete the secure transfer"], order: 2 },
  ],
  impactAreas: [
    { id: "word", icon: "book", title: "Ministry of the Word", description: "Pastoral salaries, teaching ministries, and resources that ground our church in Scripture—the primary way God transforms lives and builds His people.", order: 1 },
    { id: "community", icon: "users", title: "Community Support", description: "Assistance for Naga families transitioning to life in the DFW area.", order: 2 },
    { id: "facility", icon: "house", title: "Facility & Operations", description: "Maintaining our worship space and covering operational expenses.", order: 3 },
    { id: "media", icon: "globe", title: "Worship & Media", description: "Audio-visual, livestream, website, printed media, and creative resources that help our community encounter God and stay connected.", order: 4 },
    { id: "youth", icon: "heart", title: "Youth & Children", description: "Age-appropriate teaching, events, safe environments, and mentorship helping young people grow in faith and character.", order: 5 },
    { id: "benevolence", icon: "service", title: "Benevolence Fund", description: "Helping members and community in times of need and hardship.", order: 6 },
  ],
};

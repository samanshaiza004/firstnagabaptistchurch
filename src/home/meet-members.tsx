import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const teamMembers = [
  {
    name: "Pastor Mathingmi Hongchui",
    role: "Interim Pastor",
    category: "Pastoral Staff",
    bio: "Mathingmi Hongchui, married to Yami Asai Shimray for three years, is a SWBTS PhD student and father to Hesed (2) and Thanzat (6 months). He served as Secretary, then Deacon (3 years), and previously as Children’s Coordinator at Richland Hill Baptist Church (3 years). Driven by love for Christ, Mathing is passionate about disciple-making through Jesus’ model and pursuing conformity to His image.",
    image: "/mathingmi2.JPEG",
  },
  {
    name: "Ms. Livi Yepthomi",
    role: "Church Secretary",
    category: "Administration",
    bio: "With a passion for ministry and serving others, Livi supports the mission and vision of the church community. She is pursuing a ThM in Biblical Counseling.",
    image: "/Livi.jpg",
  },
  {
    name: "Pastor Lanu Lemtur",
    role: "Mission Pastor",
    category: "Missions Team",
    bio: "An ordained theologian and chaplain who served as the first pastor of First Naga Baptist Church. Despite the challenges posed by the global pandemic during the church's early years, Pastor Lanu successfully guided the congregation through that tumultuous period, leading to steady and gradual growth.",
    image: "/lanu.JPG",
  },

  {
    name: "Mr. Theishing Konghar",
    role: "Deacon",
    category: "Deacon",
    bio: "Pursuing his PhD in World Christian Studies at Southwestern Baptist Theological Seminary, Texas. Married to Maiya, and they have a daughter named Phashun.",
    image: "/theishing.jpg",
  },
  {
    name: "Mr. Joseph Ngulie",
    role: "Deacon",
    category: "Deacon",
    bio: "Pursuing a PhD in Worship Studies at Southwestern Baptist Theological Seminary. Married to Jihye Cheon from South Korea. Also leads worship at First Baptist Church, Everman and previously served as a youth pastor in India.",
    image: "/joseph.JPG",
  },
  {
    name: "Mr. Hosea Riamei",
    role: "Deacon",
    category: "Deacon",
    bio: "Hosea Riamei is pursuing a ThM in Preaching. He is married to Riangguiliu Gangmei, and they are blessed with two children, Luke and Gratia",
    image: "/hosea.JPG",
  },
  {
    name: "Mrs. Hokali Kumar",
    role: "Treasurer",
    category: "Administration",
    bio: "Originally from Nagaland, now married to Atul Kumar from North India. They have made Texas their home with their two daughters, Rhea and Nilivi. Passionate about serving the church and hosting events.",
    image: "/kumar.JPG",
  },
  {
    name: "Mr. Kinoto Chishi",
    role: "Worship Minister",
    category: "Ministry Team",
    bio: "Brings his passion for worship and music ministry to life, creating an atmosphere of heartfelt praise. Kinoto leads the worship team, arranges music, and guides the church through a blend of hymns, contemporary worship, and traditional songs.",
    image: "/kinoto2.jpg",
  },
  {
    name: "Ms. Katensangla Longchar",
    role: "Children Minister",
    category: "Ministry Team",
    bio: "Coordinator of Children's Ministry with over six years of dedicated service to children. Currently pursuing a Master of Arts in Biblical Counseling at Southwestern Baptist Theological Seminary, passionate about leading children to Christ.",
    image: "/katensangla2.jpg",
  },
];

const trustees = [
  {
    name: "Peraly Sam Meyer",
    image: "/peraly.jpg",
    bio: "Perary Sam Meyer works at Medical City Denton (16 years) as a PCT and Phlebotomist in the Surgical Trauma Unit and Laboratory. Trekking in nature and meditation give her peace.",
  },
  {
    name: "Kughaho Chishi",
    image: "/chishis.jpeg",
    bio: "Kughaho Chishi has been married to Tosheni for over 30 years and has three grown children: Kinito, Nikoto, and Tolina. Chishi has served as the music minister for over a decade at Burton Hill Baptist Church, which allowed FNBC to use its church premises for seven years at no cost.",
  },
  {
    name: "Chuingachan Showungnao",
    image: "/achan.jpg",
    bio: "Mr. Chuingachan Shokwungnao has been married to Themsing Wungsek for ten years. Achan and Themsing have served the church with radical generosity and wholehearted commitment since its inception.",
  },
];

function TeamMemberCard({ member }: { member: (typeof teamMembers)[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsExpanded(true);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative flex sm:h-[700px] md:h-[690px] lg:h-[620px]">
      <Card
        className={`
          overflow-hidden group transition-all duration-300 ease-in-out bg-card
          ${
            isMobile
              ? "relative shadow-sm"
              : `absolute top-0 left-0 right-0 cursor-pointer ${
                  isExpanded
                    ? "shadow-2xl z-50"
                    : "shadow-sm hover:shadow-lg z-10"
                }`
          }
        `}
        onMouseEnter={() => !isMobile && setIsExpanded(true)}
        onMouseLeave={() => !isMobile && setIsExpanded(false)}
        onClick={() => !isMobile && setIsExpanded(!isExpanded)}
        role={isMobile ? undefined : "button"}
        tabIndex={isMobile ? undefined : 0}
        onKeyDown={(e) => {
          if (!isMobile && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            setIsExpanded(!isExpanded);
          }
        }}
        aria-expanded={isMobile ? undefined : isExpanded}
      >
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={member.image || "/placeholder.svg"}
            alt={`Portrait of ${member.name}`}
            className={`w-full h-full object-cover transition-transform duration-300 ${
              !isMobile ? "group-hover:scale-105" : ""
            }`}
          />
        </div>
        <CardContent className="p-5">
          <Badge variant="secondary" className="mb-2 text-xs font-normal">
            {member.category}
          </Badge>
          <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
            {member.name}
          </h3>
          <p className="text-secondary font-medium text-sm mb-3">
            {member.role}
          </p>

          <div className="relative">
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isExpanded ? "max-h-96" : "max-h-12"
              }`}
            >
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-card to-transparent pointer-events-none" />
            )}
          </div>

          {!isMobile && (
            <div className="flex items-center justify-center mt-3 text-muted-foreground">
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
              <span className="text-xs ml-1">
                {isExpanded ? "Less" : "More"}
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export function MeetTheTeam() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-secondary font-medium mb-2 tracking-wide uppercase text-sm">
            Our Leadership
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Meet the Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get to know the dedicated servants who guide our church family with
            faith, wisdom, and love.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {teamMembers.map((member) => (
            <TeamMemberCard member={member} />
          ))}
        </div>

        {/* Board of Trustees */}
        <div className="bg-primary/5 rounded-xl p-8">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
            Board of Trustees
          </h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-xl">
            Our trustees oversee the church's budget and financial matters. As
            pioneers and elders, they provide invaluable guidance for our future
            goals and vision.
          </p>
          <div className="space-y-4 max-w-4xl mx-auto">
            {trustees.map((trustee) => (
              <Card
                key={trustee.name}
                className="overflow-hidden group hover:shadow-lg transition-shadow duration-300 bg-card"
              >
                <div className="flex flex-row h-full">
                  <div className="w-32 overflow-hidden bg-muted flex-shrink-0 h-full">
                    <img
                      src={trustee.image || "/placeholder.svg"}
                      alt={`Portrait of ${trustee.name}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-5 flex-1">
                    <Badge
                      variant="secondary"
                      className="mb-2 text-xs font-normal"
                    >
                      Trustee
                    </Badge>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                      {trustee.name}
                    </h3>
                    <p>{trustee.bio}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

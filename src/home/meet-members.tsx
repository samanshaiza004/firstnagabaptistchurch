import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { ChevronDown, Heart, Music } from "lucide-react";

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
    bio: "An ordained theologian and chaplain who served as the first pastor of First Naga Baptist Church. Despite the challenges of the global pandemic during the church's early years, Pastor Lanu guided the congregation through that tumultuous period. Currently he serves as a mission pastor.",
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
    name: "Mr. Joseph Ngullie",
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
    name: "Mr. Rhite Tsido",
    role: "Financial Secretary",
    category: "Finance",
    bio: "Rhite Tsido is the financial secretary of First Naga Baptist Church. He is pursuing a ThM in Educational Ministries.",
    image: "/rhite.png",
  },
  {
    name: "Mrs. Hokali Kumar",
    role: "Treasurer",
    category: "Finance",
    bio: "Originally from Nagaland, now married to Atul Kumar from North India. They have made Texas their home with their two daughters, Rhea and Nilivi. Passionate about serving the church and hosting events.",
    image: "/kumar.JPG",
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
    bio: "Kughaho Chishi has been married to Tosheni for over 30 years and has three grown children: Kinito, Nikoto, and Tolina. Chishi has served as the worship minister for over a decade at Burton Hill Baptist Church, which allowed FNBC to use its church premises for seven years at no cost.",
  },
  {
    name: "Chuingachan Showungnao",
    image: "/achan.jpg",
    bio: "Mr. Chuingachan Shokwungnao has been married to Themsing Wungsek for ten years. Achan and Themsing have served the church with radical generosity and wholehearted commitment since its inception. Businessman by profession.",
  },
];

const ministryTeams = [
  {
    leader: { name: "Mr. Kinoto Chishi", role: "Worship Minister", image: "/kinoto2.jpg" },
    teamName: "Worship Team",
    icon: Music,
    members: [
      "Shanchuiphy Keishing",
      "Wewalhi Thopi",
      "Joseph Nguille"
    ]
  },
  {
    leader: { name: "Ms. Katensangla Longchar", role: "Children Minister", image: "/katensangla2.jpg" },
    teamName: "Children Ministry Team",
    icon: Heart,
    members: [
      "Kumsangmar Moainla",
      "Keyilungdaule Hieme",
      "Lhouvi Mezhu",
      "Yami Asai Shimray"
    ]
  }
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
    <div className="relative flex sm:h-[700px] md:h-[690px] lg:h-[600px]">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-4 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={index >= 8 ? "xl:col-span-2" : ""}
            >
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>

        {/* Ministry Teams */}
        <div className="space-y-8 mb-12">
          {ministryTeams.map((team) => (
            <MinistryTeamSection key={team.teamName} team={team} />
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

function MinistryTeamSection({ team }: { team: (typeof ministryTeams)[0] }) {
  const Icon = team.icon
  const memberCount = team.members.length

  return (
    <div className="bg-background rounded-2xl border border-border p-6 md:p-8 shadow-sm">
      {/* Team Header with Leader */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
        {/* Leader Card */}
        <div className="flex items-center gap-4 md:min-w-[280px]">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-secondary/20 shadow-md flex-shrink-0">
            <img
              src={team.leader.image || "/placeholder.svg"}
              alt={`Portrait of ${team.leader.name}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Badge className="mb-1 bg-secondary/10 text-secondary hover:bg-secondary/20 border-0">
              <Icon className="w-3 h-3 mr-1" />
              Leader
            </Badge>
            <h4 className="font-serif text-lg font-semibold text-foreground">{team.leader.name}</h4>
            <p className="text-muted-foreground text-sm">{team.leader.role}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-16 bg-border" />
        <div className="md:hidden h-px w-full bg-border" />

        {/* Team Name */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Icon className="w-5 h-5 text-secondary" />
            <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground">{team.teamName}</h3>
          </div>
          <p className="text-muted-foreground text-sm">{memberCount} dedicated team members</p>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
        {team.members.map((memberName, index) => {
          const isLastRow = Math.floor(index / 4) === Math.floor((memberCount - 1) / 4)
          const itemsInLastRow = memberCount % 4 || 4
          const shouldCenter = isLastRow && itemsInLastRow < 4

          return (
            <div
              key={memberName}
              className={`
                flex items-center justify-center text-center p-4 rounded-xl bg-muted/50
                hover:bg-muted transition-colors duration-200 border border-border/50
                ${shouldCenter && itemsInLastRow === 1 ? "sm:col-span-2 lg:col-span-3 xl:col-span-4" : ""}
                ${shouldCenter && itemsInLastRow === 2 ? "lg:col-span-2 xl:col-span-2" : ""}
                ${shouldCenter && itemsInLastRow === 3 ? "xl:col-span-1" : ""}
              `}
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-3 shadow-sm">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
                </div>
                <p className="font-medium text-foreground text-sm md:text-base leading-tight">{memberName}</p>
                <p className="text-muted-foreground text-xs mt-1">Team Member</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
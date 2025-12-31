import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const teamMembers = [
  {
    name: "Pastor Mathingmi Hongchui",
    role: "Interim Pastor",
    category: "Pastoral Staff",
    bio: "An ordained theologian and chaplain who served as the first pastor of First Naga Baptist Church. Despite the challenges posed by the global pandemic during the church's early years, Pastor Lanu successfully guided the congregation through that tumultuous period, leading to steady and gradual growth.",
    image: "/pastor-portrait-professional-headshot-male.jpg",
  },
  {
    name: "Pastor Lanu Lemtur",
    role: "Mission Pastor",
    category: "Pastoral Staff",
    bio: "An ordained theologian and chaplain who served as the first pastor of First Naga Baptist Church. Despite the challenges posed by the global pandemic during the church's early years, Pastor Lanu successfully guided the congregation through that tumultuous period, leading to steady and gradual growth.",
    image: "/pastor-portrait-professional-headshot-male.jpg",
  },
  {
    name: "Kinoto",
    role: "Music Minister",
    category: "Ministry Staff",
    bio: "Brings his passion for worship and music ministry to life, creating an atmosphere of heartfelt praise. Kinoto leads the worship team, arranges music, and guides the church through a blend of hymns, contemporary worship, and traditional songs.",
    image: "/worship-leader-musician-portrait-male.jpg",
  },
  {
    name: "Ms. Katensangla Longchar",
    role: "Children Minister",
    category: "Ministry Staff",
    bio: "Coordinator of Children's Ministry with over six years of dedicated service to children. Currently pursuing a Master of Arts in Biblical Counseling at Southwestern Baptist Theological Seminary, passionate about leading children to Christ.",
    image: "/woman-teacher-professional-portrait-friendly.jpg",
  },
  {
    name: "Mr. Theishing Konghar",
    role: "Deacon",
    category: "Deacons",
    bio: "Pursuing his PhD in World Christian Studies at Southwestern Baptist Theological Seminary, Texas. Married to Maya, and they have a daughter named Phasun.",
    image: "/professional-man-portrait-deacon-church-leader.jpg",
  },
  {
    name: "Joseph Ngulie",
    role: "Deacon & Worship Leader",
    category: "Deacons",
    bio: "Pursuing a PhD in Worship Studies at Southwestern Baptist Theological Seminary. Married to Jihye Cheon from South Korea. Also leads worship at First Baptist Church, Everman and previously served as a youth pastor in India.",
    image: "/worship-leader-man-portrait-professional.jpg",
  },
  {
    name: "Hosea Riamei",
    role: "Deacon",
    category: "Deacons",
    bio: "",
    image: "/worship-leader-man-portrait-professional.jpg",
  },
  {
    name: "Livi Yepthomi",
    role: "Church Secretary",
    category: "Administration",
    bio: "With a passion for ministry and serving others, Livi supports the mission and vision of the church community. She is pursuing a Master of Arts in Christian Education at Southwestern Baptist Theological Seminary.",
    image: "/professional-woman-secretary-portrait-friendly.jpg",
  },
  {
    name: "Hokali Kumar",
    role: "Treasurer",
    category: "Administration",
    bio: "Originally from Nagaland, now married to Atul Kumar from North India. They have made Texas their home with their two daughters, Rhea and Nilivi. Passionate about serving the church and hosting events.",
    image: "/professional-woman-treasurer-portrait-friendly.jpg",
  },
]

const trustees = [{ name: "Peraly Sam Meyer" }, { name: "Chuingachan Showungnao" }, { name: "Kughaho Chishi" }]

export function MeetTheTeam() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-secondary font-medium mb-2 tracking-wide uppercase text-sm">Our Leadership</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Meet the Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get to know the dedicated servants who guide our church family with faith, wisdom, and love.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="overflow-hidden group hover:shadow-lg transition-shadow duration-300 bg-card"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={`Portrait of ${member.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-5">
                <Badge variant="secondary" className="mb-2 text-xs font-normal">
                  {member.category}
                </Badge>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-secondary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Board of Trustees */}
        <div className="bg-primary/5 rounded-xl p-8 text-center">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Board of Trustees</h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-xl mx-auto">
            Our trustees oversee the church's budget and financial matters. As pioneers and elders, they provide
            invaluable guidance for our future goals and vision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {trustees.map((trustee) => (
              <div key={trustee.name} className="px-5 py-3 bg-background rounded-lg shadow-sm border border-border">
                <span className="font-medium text-foreground">{trustee.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

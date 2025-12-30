
import { BookOpen, Users, Globe, HandHeart, Link2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const objectives = [
  {
    icon: BookOpen,
    title: "Share the Word and Engage with the Unreached",
    description:
      "We are committed to spreading the Gospel and reaching those who have not yet heard the good news of Jesus Christ. Through our services, outreach programs, and personal evangelism, we aim to share God's love with everyone.",
  },
  {
    icon: Users,
    title: "Support Naga Students and Families in DFW",
    description:
      "We provide a spiritual home and support system for Naga students pursuing education and families building their lives in the Dallas-Fort Worth area. From fellowship to practical assistance, we are here for our community.",
  },
  {
    icon: Globe,
    title: "Connect with Naga Community Throughout the United States",
    description:
      "We serve as a hub connecting Nagas across America, fostering unity and fellowship among our scattered brothers and sisters. Through events, communication, and shared worship, we maintain our bonds of community.",
  },
  {
    icon: HandHeart,
    title: "Reach Out to the Indian Subcontinent Community",
    description:
      "Beyond our Naga community, we extend our ministry to welcome and serve the broader Indian subcontinent community in DFW, building bridges of friendship and sharing God's love across cultural boundaries.",
  },
  {
    icon: Link2,
    title: "Strengthen Connections Among Churches",
    description:
      "We work to build stronger relationships between Naga churches and American communities, creating partnerships that benefit both and furthering the Kingdom of God through collaboration and mutual support.",
  },
]

export function ObjectivesDetail() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-secondary font-medium mb-2 tracking-wide uppercase text-sm">Our Mission</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Main Objectives</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These objectives guide our ministry and reflect our commitment to serving God and our community.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {objectives.map((objective, index) => (
            <div
              key={objective.title}
              className="flex gap-6 p-6 rounded-lg bg-muted/30 border border-border hover:border-secondary/50 transition-colors"
            >
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <objective.icon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-foreground">{objective.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{objective.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a href="#contact">Get Involved</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

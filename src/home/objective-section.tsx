import { BookOpen, Users, Globe, HandHeart, Link2 } from "lucide-react"

const objectives = [
  {
    icon: BookOpen,
    title: "Share the Word",
    description: "To share the Word and engage with the unreached.",
  },
  {
    icon: Users,
    title: "Support Naga Families",
    description: "To support Naga students and families in the DFW area.",
  },
  {
    icon: Globe,
    title: "Connect Community",
    description: "To connect with the Naga community throughout the United States.",
  },
  {
    icon: HandHeart,
    title: "Reach Out",
    description: "To reach out to the Indian subcontinent community in DFW.",
  },
  {
    icon: Link2,
    title: "Strengthen Connections",
    description: "To strengthen connections among Naga churches and American communities.",
  },
]

export function ObjectivesSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-secondary font-medium mb-2 tracking-wide uppercase text-sm">Our Mission</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Main Objectives</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are committed to these core objectives that guide our ministry and outreach.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {objectives.map((objective) => (
            <div
              key={objective.title}
              className="flex items-start gap-4 p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <objective.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{objective.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{objective.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

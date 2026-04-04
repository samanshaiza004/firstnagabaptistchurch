import { Heart, Users, BookOpen, Globe, Home, HandHeart } from "lucide-react"

const impactAreas = [
  {
    icon: BookOpen,
    title: "Ministry of the Word",
    description: "Pastoral salaries, teaching ministries, and resources that ground our church in Scripture-the primary way God transforms lives and builds His people.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Assistance for Naga families transitioning to life in the DFW area.",
  },
  {
    icon: Home,
    title: "Facility & Operations",
    description: "Maintaining our worship space and covering operational expenses.",
  },
  {
    icon: Globe,
    title: "Worship & Media",
    description: "Audio-visual, livestream, website, printed media, and creative resources that help our community encounter God and stay connected.",
  },
  {
    icon: Heart,
    title: "Youth & Children",
    description: "Age-appropriate teaching, events, safe environments, and mentorship helping youngpeople grow in faith and character.",
  },
  {
    icon: HandHeart,
    title: "Benevolence Fund",
    description: "Helping members and community in times of need and hardship.",
  },
]

export function WhyGive() {
  return (
    <section className="py-16 lg:py-24 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-medium text-secondary-foreground uppercase tracking-wider mb-2">Your Impact</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Where Your Giving Goes</h2>
          <p className="text-muted-foreground">
            Every donation directly supports our church&apos;s mission and makes a tangible difference in our community.
            Here&apos;s how your generosity helps:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {impactAreas.map((area) => (
            <div
              key={area.title}
              className="flex gap-4 p-5 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <area.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

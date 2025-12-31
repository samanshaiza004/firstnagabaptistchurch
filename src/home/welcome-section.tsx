
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function WelcomeSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-secondary font-medium mb-2 tracking-wide uppercase text-sm">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              A Historic Journey of Faith
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The first Naga church was established in America on November 4th, 2018 in DFW, Texas — 113 years after
                the first Naga, Mr. Sanjamo Jungi, landed in this country in 1905.
              </p>
              <p>
                The inspiration behind the establishment came through Mr. Chuingachan Shokwungnao, a businessman who
                held the utmost belief that a church of their own would not only foster closeness and fellowship among
                scattered Nagas in the USA, but most importantly, open the door for evangelism.
              </p>
              <p>
                He emphasized that Nagas must never forget the Americans — for it was them who introduced the Nagas to
                the living God.
              </p>
            </div>
            <Button asChild className="mt-8 bg-primary hover:bg-primary/90">
              <Link to="/about">Read Full History</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
              <img src="/bgoption.webp" alt="Church Worship" className="w-full h-full object-cover" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

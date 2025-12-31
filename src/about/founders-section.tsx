const founders = [
  "Mr. Lanutenzuk Lemtur",
  "Mr. Kughaho Chishi",
  "Mr. Ningreithan Shaiza",
  "Mr. Kinoto Chishi",
  "Mr. Nikoto Chishi",
  "Mr. Chuingachan Shokwungnao",
  "Mr. Mathingmi Hongchui",
  "Mr. Mairising Damai",
    "Mr. Brian Kashung",
    "Mrs. Themsing Wungsek",
    "Mrs. Tosheni Chishi",
    "Ms. Tolina Chishi",
    "Mr. Visedelie Seyie",
    "Mr. Theishing Konghar",
  ]
  
  export function FoundersSection() {
    return (
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-secondary font-medium mb-2 tracking-wide uppercase text-sm">Our Founders</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">The Founding Members</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These faithful servants took a bold step of faith on May 19, 2018 to establish the first Naga church in
              America.
            </p>
          </div>
          <div className="max-w-4xl mx-auto mb-8">
            <img
              src="/foundingmembers.jpg"
              alt="First Naga Baptist Church Founding Members"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <p className="text-center text-sm text-muted-foreground mt-3 italic">
              *13 founding members present in this photo. Mr. Theishing Konghar is taking the picture.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-center text-foreground mb-8">Founding Members (From top right to left then bottom left to right)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {founders.map((founder) => (
                <div
                  key={founder}
                  className="bg-card rounded-lg p-5 text-center shadow-sm hover:shadow-md transition-shadow border border-border"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-serif text-xl font-semibold text-primary">
                      {founder.charAt(founder.indexOf(" ") + 1)}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-card-foreground leading-relaxed">{founder}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
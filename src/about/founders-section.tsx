const founders = [
    "Mr. Brian Kashung",
    "Mr. Lanutenzuk Lemtur",
    "Mr. Chuingachan Shokwungnao",
    "Mr. Visedelie Seyie",
    "Mr. Theishing Konghar",
    "Mr. Kughaho Chishi",
    "Ms. Peraly Meyer",
    "Mr. Mairising Damai",
    "Mr. Ningreithan Shaiza",
    "Ms. Abotoli Tuccu Sehgal",
    "Mr. Kaiser Kiirii (Monsang)",
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
  
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {founders.map((founder) => (
              <div
                key={founder}
                className="bg-card rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-serif text-lg font-semibold text-primary">
                    {founder.charAt(founder.indexOf(" ") + 1)}
                  </span>
                </div>
                <p className="text-sm font-medium text-card-foreground">{founder}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  


export function HistorySection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Timeline intro */}
          <div className="text-center mb-12">
            <p className="text-secondary font-medium mb-2 tracking-wide uppercase text-sm">Our History</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              A Historic Journey of Faith
            </h2>
          </div>

          {/* Main content */}
          <div className="prose prose-lg max-w-none">
            <div className="grid lg:grid-cols-5 gap-8 items-start mb-12">
              <div className="lg:col-span-3 space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  The first Naga church was established in America on <strong>November 4th, 2018</strong> in DFW, Texas,
                  113 years after the first Naga, Mr. Sanjamo Jungi, landed in this country in 1905.
                </p>
                <p>
                  The inspiration behind the establishment of a Naga church came through{" "}
                  <strong>Mr. Chuingachan Shokwungnao</strong>, a businessman by profession. For the first time, in
                  2006, he shared his God-given desire of planting a Naga church with his Naga brethren in Texas.
                </p>
                <p>
                  Unfortunately, nothing came to fruition initially. In subsequent years, he put up multiple proposals
                  but his dream of a Naga Church still did not materialize. This did not deter him and he continued to
                  pursue his vision.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Church worship image</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 lg:p-8 mb-12 border-l-4 border-secondary">
              <blockquote className="text-foreground italic font-serif text-lg lg:text-xl leading-relaxed">
                &ldquo;Nagas must never forget the Americans — for it was them who introduced the Nagas to the living
                God.&rdquo;
              </blockquote>
              <p className="mt-4 text-muted-foreground text-sm">— Mr. Chuingachan Shokwungnao</p>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                He had the utmost belief and confidence that a church of their own would not only foster closeness and
                fellowship among the scattered Nagas in the USA, but most importantly, that it would open the door for
                the Nagas to evangelize non-believers in America.
              </p>
              <p>
                He further stressed that a Naga church in this country could play a very important role in building a
                stronger relationship between American churches and Naga churches back home.
              </p>
              <p>
                In 2017, he met <strong>Mr. Visedelie Seyie</strong>, a student at South Western Baptist Theological
                Seminary and shared his vision of a Naga church. He became very committed to the idea and together they
                fervently worked with other like-minded Nagas.
              </p>
            </div>

            {/* Key milestone */}
            <div className="my-12 bg-primary text-primary-foreground rounded-lg p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <span className="font-serif text-2xl font-bold text-secondary-foreground">2018</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold">Historic Founding Meeting</h3>
                  <p className="text-primary-foreground/80">May 19, 2018</p>
                </div>
              </div>
              <p className="text-primary-foreground/90 leading-relaxed">
                Through the blessings of the Almighty God, the following Nagas took a firm decision even under extreme
                criticisms to start the Naga church in America: Mr. Brian Kashung, Mr. Lanutenzuk Lemtur, Mr.
                Chuingachan Shokwungnao, Mr. Visedelie Seyie, Mr. Theishing Konghar, Mr. Kughaho Chishi, Ms. Peraly
                Meyer, Mr. Mairising Damai, Mr. Ningreithan Shaiza, Ms. Abotoli Tuccu Sehgal, and Mr. Kaiser Kiirii
                (Monsang).
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                The second meeting for the Naga church was held at Mr. Kughaho Chishi&apos;s residence. With God&apos;s
                blessings, the first service was held on <strong>November 4th, 2018</strong>, and it was during this
                meeting that the church was named &ldquo;First Naga Baptist Church.&rdquo;
              </p>
              <p>
                After much struggle in finding a pastor to lead the church, the committee approached{" "}
                <strong>Mr. Lanutenzuk Lemtur</strong>, a graduate from Southwestern Baptist Theological Seminary with a
                Master of Arts in Biblical Counselling, to be the pastor. He willingly accepted the responsibility.
              </p>
              <p>
                Around the same time, Mr. Kughaho Chishi, the worship leader of Burton Hill Baptist Church, shared the
                concern about finding a place to worship with his pastor, <strong>Dr. Terry Coley</strong>. He warmly
                welcomed the First Naga Baptist Church to use their facility free of cost, for which the church will
                remain forever grateful.
              </p>
            </div>

            {/* Inauguration */}
            <div className="mt-12 bg-muted rounded-lg p-6 lg:p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Official Inauguration — August 10-11, 2019
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The church&apos;s inauguration celebration was held on August 10th and 11th, 2019, with Naga church
                leaders from Nagaland, Manipur, and Myanmar blessing the occasion.
              </p>
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold mb-2">Distinguished Guest Speakers:</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  <li>Rev. Dr. Zelhou Keyho (General Secretary, Nagaland Baptist Church Council)</li>
                  <li>Rev. Dr. Mathotmi Vasha (Executive Secretary, Tangkhul Baptist Churches Association)</li>
                  <li>Rev. Dr. Daniel Kashung (Executive Secretary, Southern Tangkhul Naga Baptist Association)</li>
                  <li>Rev. Dr. Atsi Dolie (Executive Secretary, Angami Baptist Church Council)</li>
                  <li>Rev. Say Phro (Advisor, Naga Baptist Convention Myanmar)</li>
                  <li>Rev. Dr. Wungreiso Valui (Pastor, Santa Clara First Baptist Church)</li>
                </ul>
              </div>
            </div>

            <p className="mt-8 text-sm text-muted-foreground italic text-right">Dated September 17, 2022</p>
          </div>
        </div>
      </div>
    </section>
  )
}

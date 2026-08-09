# First Naga Baptist Church — Brand & Web Design Direction

Supplied by the content owner on August 8, 2026. This document is the visual and cultural source of truth for the FNBC website. The UX/information-architecture audit in `docs/UX_INFORMATION_ARCHITECTURE_AUDIT.md` is reconciled against it.

## 1. Brand concept

**Internal design principle: Woven Faith**

This is not necessarily a public-facing tagline. It is the rule behind the visual system.

FNBC is both a Christian church and a Naga diaspora institution. Its identity should express distinct communities joined into one body without presenting any single tribe, village, state, or political tradition as representative of all Nagas.

The church's own history supports this framing. FNBC describes its purpose as fostering fellowship among scattered Nagas in the United States, connecting Naga and American churches, and serving Naga families in DFW. Its 2019 inauguration included Naga church leaders from Nagaland, Manipur, and Myanmar.

Conceptually:

**Cross + weave + joined panels**

Christian faith.
Naga material heritage.
Distinct communities joined into one church.

The intended feeling is:

**contemporary, reverent, warm, rooted, restrained, documentary, distinctly Naga without becoming ethnographic decoration.**

---

# 2. The problem being solved

FNBC represents Nagas whose visual traditions differ significantly by tribe, village, clan, and region.

Naga textiles do not provide one universal shawl, pattern, or fixed color dictionary. IGNCA documents variation in both design and color between tribes and sometimes between villages, while noting that lines, stripes, squares, and bands are among the most traditional recurring forms.

This creates two major branding traps.

### Too generic

The existing red-and-green treatment reads strongly as Christmas in a US context and says little about Naga identity.

### Too specific

Taking an Ao, Angami, Tangkhul, Lotha, Rengma, Zeliangrong, Sumi, or other community's recognizable textile and presenting it as generic "Naga design" falsely universalizes something culturally specific.

Some garments and motifs historically indicated social status, ceremonial achievement, feasts of merit, or headhunting rights. IGNCA specifically documents such restrictions for several textiles.

### Design response

Borrow the **grammar**, not the **vocabulary**.

Use:

bands
strips
panels
repetition
contrast
joining
rhythm
overlap
negative space

Do not reproduce recognizable tribe-specific motifs unless they appear in editorial content explicitly identified with that community.

---

# 3. Cultural foundation: joined panels

One especially useful construction principle is documented by IGNCA: a common feature of Naga shawls is the construction of three separately woven pieces that are later stitched together, with the central strip often receiving greater decoration.

This should inspire the brand system without being copied literally.

The useful abstraction is:

> Distinct pieces remain visible as distinct pieces, but together form one whole.

This maps naturally onto FNBC's diaspora character and Christian understanding of a church made from many members.

Do not turn this into an explicit historical or theological claim on the public website. It is primarily a visual-design rationale.

---

# 4. Color system

## Core palette

| Token          | Hex       | Role                                                       |
| -------------- | --------- | ---------------------------------------------------------- |
| Woven Ink      | `#171B19` | Deep neutral, primary text, footer, occasional dark fields |
| Natural Cotton | `#F3EFE6` | Primary light background                                   |
| Deep Indigo    | `#243343` | Primary brand color                                        |
| Oxblood        | `#8A3035` | Controlled accent                                          |
| Muted Ochre    | `#B18A52` | Optional decorative accent only                            |

## Deep Indigo — primary

`#243343`

Use for:

primary buttons
navigation emphasis
major headings where appropriate
large editorial fields
selected states
logo applications
important structural bands

Indigo has legitimate material grounding. IGNCA describes traditional dark-blue dye and specifically calls the blue dye derived from *Strobilanthes flaccidifolius* a "universal Naga dye," while noting that preparation differed among tribes. It also records indigenous red as being used less than dark blue.

This does **not** mean every Naga textile is blue or that indigo carries one universal symbolic meaning. Use it as a material reference, not a cultural claim.

## Natural Cotton — primary ground

`#F3EFE6`

Prefer this over pure `#FFFFFF` for major surfaces.

It should make the site feel warmer and more material without simulating paper or fabric.

Do not add fake textile noise by default.

## Woven Ink — text and dark neutral

`#171B19`

Keep this existing color.

Use for:

body copy
dark navigation/footer areas
headings
icons
high-contrast borders where needed

This should replace generic pure black in most UI.

## Oxblood — accent

`#8A3035`

Use sparingly.

Good uses:

small rules
active indicators
small icons
important metadata
editorial accents
occasional decorative bands

Do not make every CTA red.

Do not use Indigo and Oxblood at equal visual weight. Indigo is primary; Oxblood is punctuation.

## Muted Ochre — optional

`#B18A52`

Decoration only unless accessibility is separately verified for a particular use.

It is not required for the brand to work.

If its presence causes the palette to feel busy, remove it.

---

# 5. Accessibility rules

Calculated contrast against Natural Cotton:

| Pair               | Approx. contrast | Rule                                |
| ------------------ | ---------------: | ----------------------------------- |
| Woven Ink / Cotton |           15.2:1 | Excellent for text                  |
| Indigo / Cotton    |           11.2:1 | Excellent for text/UI               |
| Oxblood / Cotton   |            7.2:1 | Suitable for normal text            |
| Ochre / Cotton     |            2.8:1 | Decorative only                     |
| Cotton / Indigo    |           11.2:1 | Excellent                           |
| Oxblood / Indigo   |            1.6:1 | Never use for text or meaningful UI |

WCAG AA requires at least 4.5:1 contrast for ordinary text, with separate provisions for large text.

Implementation rule:

**Never communicate state by color alone.**

Hover, active, validation, selected, and focus states must also change shape, border, icon, weight, underline, or another perceivable property.

Focus indicators must remain obvious.

---

# 6. Political-symbol constraint

Do not recreate or evoke the recognizable Naga nationalist flag composition:

**blue field + red/yellow/green rainbow + white Star of Bethlehem**

The Naga flag predates NSCN-IM and is broader than any one contemporary organization, but it remains a politically significant symbol of Naga nationalism and continues to be used by Naga political groups. Its documented design uses a blue background, red/yellow/green rainbow, and Star of Bethlehem.

Therefore:

Individual blue, red, yellow, or green colors are not forbidden.

A normal rainbow appearing naturally in photography is not forbidden.

The constraint is against intentionally reconstructing or closely echoing that recognizable composition in FNBC branding.

Do not describe the flag simply as "the NSCN flag." That is historically inaccurate.

---

# 7. Graphic language

The visual system should derive from textile **structure**, not literal textile ornament.

## Core forms

Use:

horizontal bands
rectangular panels
visible joins
repeated spacing
offset blocks
strong vertical/horizontal alignment
controlled interruptions in otherwise clean grids

Avoid:

generic zigzag "tribal" patterns
random diamonds and triangles added to look ethnic
copied shawl motifs
decorative pattern wallpaper
fake woven textures
frayed edges
fabric photographs behind text

The site should not look like a restaurant, handicraft shop, festival poster, or anthropology exhibit.

It is a church first.

---

# 8. Band system

Bands are a signature accent, not a default border on every component.

### Hairline

`1px` Warm Stone/neutral border.

Use for ordinary separators, card boundaries, tables, and quiet structure.

### Major section band

Preferred starting treatment:

`6px Indigo`
`2px Cotton gap`
`2px Oxblood`

Use only at major transitions.

Examples:

hero → service information
main content → historical/editorial section
top of footer

Do not automatically place one between every homepage section.

Target: approximately **1–3 prominent band treatments per long page**.

### Minor accent

`2px Oxblood`

Possible uses:

active navigation indicator
blockquote accent
small editorial label

These proportions are an original FNBC graphic system. They are not presented as a traditional Naga pattern.

---

# 9. Logo direction

## Primary concept: Interlocking Cross

Create a Christian cross from multiple rectangular strips/panels that visibly join around the center.

The mark should communicate weaving through **construction and negative space**, not through texture.

Important: a single vertical strip crossing a single horizontal strip only creates one crossing and cannot convincingly alternate over/under. Prefer four interlocking pieces, segmented bands, or another geometry that creates a genuine joined/interlaced relationship.

Requirements:

Christian cross must be recognizable first
weaving/joining should become apparent second
simple geometric construction
no illustrations
no outlines unless structurally required
no gradients
no shadows
no textile texture
no Celtic-knot complexity
no ornamental tribal pattern inside the cross

Primary applications:

Indigo on Cotton
Cotton on Indigo
Ink monochrome
white monochrome where necessary

The mark must work at:

16px favicon
24px
32px
48px
navigation/logo size
large signage/banner size

If the weaving disappears at favicon scale, create a simplified small-size variant rather than forcing the full mark into 16px.

## Symbolism

Internally, the mark represents:

cross → Christian faith
joined pieces → weaving/material heritage
separate pieces → distinct communities
one completed form → one church

Do not over-explain this symbolism publicly unless FNBC deliberately chooses to tell the brand story.

---

# 10. Symbols to avoid

Do not use as primary brand elements:

hornbill
mithun
dao
spear
human-head imagery
warrior silhouettes
feathers/headdresses
generic mountains
generic bamboo
tribe-specific ceremonial motifs

This does not mean these subjects are culturally inappropriate in documentary or editorial material.

The distinction is:

**content may depict culture accurately; the brand should not reduce Naga identity to an icon.**

The hornbill in particular is strongly visible in official Nagaland tourism branding through the state-organized Hornbill Festival. FNBC's own institutional story extends across Nagaland, Manipur, Myanmar, and the US diaspora, making a more neutral mark preferable.

---

# 11. Typography

Typography should provide dignity and readability rather than perform ethnicity.

## Suggested pairing

### Headings

**Source Serif 4**

Alternative: **Noto Serif**

Use relatively restrained weights. Prefer 400–600 over extremely heavy display weights.

### Body/UI

**Inter**

Alternative: **Noto Sans**

Do not use:

faux-tribal fonts
woodcut fonts
distressed fonts
Western-style church fonts
decorative "ethnic" lettering
all-caps everywhere

Naga identity should come from the institution, imagery, rhythm, color, and graphic system—not from caricatured typography.

## Starting type scale

Desktop:

Hero: `clamp(2.75rem, 5vw, 4.75rem)`
H1: `3rem`
H2: `2rem`
H3: `1.5rem`
Large body: `1.125rem`
Body: `1rem`
Small/meta: `0.875rem`

Use generous line height.

Body copy: roughly `1.6`.

Large serif headings: approximately `1.05–1.15`.

Do not make the design depend on enormous typography alone.

---

# 12. Layout language

The site should feel editorial and institutional rather than SaaS-like.

Preferred traits:

generous whitespace
clear vertical rhythm
wide photography
strong grid
mostly rectangular geometry
few visual effects
occasional asymmetric composition
structured full-width bands
clear hierarchy

Avoid:

floating glass cards
blurred backgrounds
large gradients
excessive rounded pills
neumorphism
heavy shadows
generic dashboard cards
endless centered sections
every section in its own rounded container

Border radius should generally be modest:

`0–8px`

Large photographs may use up to roughly `8px`.

Pills are acceptable only where the semantic form calls for them, such as compact tags.

---

# 13. Components

## Buttons

Primary:

Indigo background
Cotton text
clear rectangular form
modest radius
strong focus state

Secondary:

transparent/Cotton background
Indigo or Ink text
visible border

Oxblood should generally not be the default primary CTA color.

No gradient buttons.

No excessive animation.

## Cards

Use cards only when the content actually forms a discrete unit.

Prefer:

Cotton or plain background
1px subtle border
little/no shadow
clear spacing hierarchy

Do not make every section a card.

## Navigation

Simple and quiet.

Active state may use:

Indigo weight/color
small band or line indicator

Avoid large pill-shaped nav items.

## Scripture / quotations

Use typography and whitespace first.

Optional treatment:

3px Oxblood left rule
slightly inset content
no giant quotation-mark graphics

## Section headings

A section may use:

small sans-serif eyebrow
large serif heading
short supporting copy
occasional narrow band element

Do not add Naga ornament to every heading.

---

# 14. Photography

Photography should carry more cultural specificity than the graphic system.

FNBC already uses photographs of its congregation throughout the current site, including worship gatherings and leadership portraits.

Prioritize:

actual worship
fellowship meals
prayer
baptisms
families
children
elders
music
visiting church leaders
community events
people wearing their own traditional clothing when naturally appropriate
historical photographs

Prefer documentary images over staged stock photography.

Avoid:

generic "Indian" imagery
generic "Asian" imagery
stock missionary imagery
AI-generated congregation photos
invented traditional clothing
using Naga landscapes as generic exotic wallpaper

## Color treatment

Preserve actual textile colors.

Normalize:

white balance
exposure
contrast
crop

Do not impose a heavy universal warm/desaturated filter.

The brand palette should frame photography, not recolor reality to fit the palette.

## Cropping

Prefer rectangles.

Avoid default circular portrait crops, particularly where traditional clothing or textiles are visually important.

Faces must remain the primary consideration for leadership portraits.

---

# 15. Cultural specificity in editorial content

The main brand stays deliberately broad.

Editorial material may become specific.

Example:

An article explicitly about Tangkhul culture may show Tangkhul textiles.

An Ao history feature may show an Ao textile.

A gallery may identify a particular community's attire where that information is known.

When using culturally specific material:

name the community
identify the object if known
credit photographer/source where appropriate
do not generalize it as "traditional Naga pattern"

This is where the site can celebrate visual diversity without forcing that diversity into one logo.

---

# 16. Content strategy

The rebrand should strengthen FNBC's existing content rather than bury it under visual experimentation.

The current homepage already establishes useful priorities: church identity, Sunday/service information, location, fellowship, leadership, mission, history, and upcoming events.

Keep those practical functions easy to find.

Recommended hierarchy:

1. Church identity / hero
2. Sunday time + location
3. Immediate upcoming event or announcement
4. Mission / why FNBC exists
5. Community photography
6. Church story / first Naga church in America
7. Selected leadership or ministries
8. Upcoming events
9. Footer/contact

The entire leadership directory does not need to dominate the homepage if it makes the page excessively long. A smaller representative section may link to the full leadership page.

FNBC's own history and mission provide the strongest long-form brand material: its founding in Texas, support for scattered Nagas, connection between Naga and American churches, and involvement of church leaders from Nagaland, Manipur, and Myanmar.

---

# 17. Motion

Motion should be restrained.

Allowed:

150–250ms fades
small position transitions
navigation state transitions
image reveal where appropriate
subtle button feedback

Avoid:

parallax
scroll hijacking
text flying in from multiple directions
continuous decorative motion
animated textile patterns
large page-transition effects

Respect `prefers-reduced-motion`.

The site's identity should come from composition, not animation.

---

# 18. Responsive behavior

Design mobile-first.

Critical mobile priorities:

Sunday time visible quickly
location easy to find
navigation simple
comfortable body text
large tap targets
photography crops intentionally
no motif consuming meaningful vertical space

Bands and decorative panel treatments may simplify or disappear on narrow screens.

Do not shrink a desktop composition until it fits. Recompose it.

---

# 19. Implementation tokens

Suggested starting tokens:

```css
:root {
  --color-ink: #171b19;
  --color-cotton: #f3efe6;
  --color-indigo: #243343;
  --color-oxblood: #8a3035;
  --color-ochre: #b18a52;

  --color-text: var(--color-ink);
  --color-bg: var(--color-cotton);
  --color-brand: var(--color-indigo);
  --color-accent: var(--color-oxblood);

  --radius-sm: 4px;
  --radius-md: 8px;

  --border-subtle: 1px solid rgba(23, 27, 25, 0.16);

  --space-section-mobile: 4rem;
  --space-section-desktop: 7rem;

  --content-width: 72rem;
  --text-width: 44rem;
}
```

These are starting values, not immutable requirements.

Do not introduce many near-duplicate colors.

If a new color is necessary, derive a tint/shade systematically rather than choosing arbitrary hex values component by component.

---

# 20. Implementation priorities

When redesigning the existing site:

**Preserve content and working functionality unless a change clearly improves usability.**

The goal is not to rewrite the site from zero merely to apply the new identity.

Priority order:

1. Global tokens and typography
2. Navigation/header
3. Homepage hero
4. Service-time/location block
5. Global section/layout system
6. Photography treatment
7. Buttons/links/forms/cards
8. Footer
9. Internal pages
10. Woven-cross logo once a successful mark exists

Do not delay the visual redesign waiting for a perfect logo. A simple typographic FNBC wordmark can temporarily coexist with the system.

---

# 21. Do / Avoid

## Do

Deep Indigo + Cotton as the dominant relationship.

Use Oxblood as punctuation.

Keep Ink for serious typography and grounding.

Use real congregation photography.

Use bands, panels, seams, joining, and repetition as abstract structure.

Keep the visual language modern.

Let different Naga communities remain visibly different.

Keep Christian identity obvious.

Keep practical church information obvious.

Use whitespace aggressively enough that culturally meaningful imagery can breathe.

## Avoid

Green + red as the core identity.

Rainbow-on-blue/star flag compositions.

Copied tribal shawl patterns as generic decoration.

Hornbill as the primary FNBC logo.

Warrior/headhunting iconography.

Fake textile textures.

Faux-tribal typography.

Universal claims about what every Naga color or symbol means.

Generic Indian design tropes.

Gradient-heavy church-template aesthetics.

SaaS-style pill/card overload.

Turning every UI component into a metaphor for weaving.

---

# 22. Design test

Whenever adding a visual element, ask:

**Is this structurally inspired by Naga material culture, or merely decorated to look "tribal"?**

If the answer is decoration, remove it.

Then ask:

**Would this still look dignified if every cultural photograph were removed?**

If not, simplify it.

Then ask:

**Could a Naga from a different tribe reasonably feel that this mark claims somebody else's specific tradition as theirs?**

If yes, abstract further.

Finally:

**Does this still look unmistakably like a functioning Christian church website?**

If not, the cultural treatment has become too dominant.

---

# 23. Definition of success

The redesign succeeds when:

A first-time visitor can immediately identify FNBC as a Christian church in DFW.

A Naga visitor senses cultural familiarity without being told one tribe's aesthetic represents them.

The design does not resemble Christmas branding.

The design does not resemble Nagaland tourism branding.

The design does not accidentally reproduce Naga nationalist iconography.

The site feels contemporary without looking generic.

Actual members and their stories carry more cultural weight than decorative motifs.

Indigo, Cotton, Ink, Oxblood, photography, and the panel/band system feel like one coherent identity.

The visual system still works if the woven-cross logo is removed.

The logo still works in monochrome at favicon scale.

Accessibility is treated as part of the design rather than a later correction.

---

# Final direction

**FNBC should look like a contemporary Baptist institution shaped by Naga textile logic—not a website wearing a Naga costume.**

Deep Indigo.
Natural Cotton.
Woven Ink.
Controlled Oxblood.

Joined panels.
Horizontal rhythm.
Documentary photography.
Modern serif + sans typography.
A simple interlocking cross.

**Woven Faith is the rule behind the system: distinct pieces, visibly themselves, joined into one whole.**

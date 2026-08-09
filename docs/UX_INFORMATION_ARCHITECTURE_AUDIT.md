# First Naga Baptist Church UX and Information Architecture Audit

Audit date: August 8, 2026  
Live site reviewed: https://firstnagabaptistchurch.org/  
Primary audiences: first-time visitors in DFW, church members, Naga diaspora visitors, ministry partners, and people considering a gift.  
Brand source of truth: `docs/BRAND_DESIGN_DIRECTION.md` (the FNBC "Woven Faith" brand and web design direction).

## Executive summary

The site has a dignified, recognizable visual foundation and a sensible set of top-level pages. Its primary information-architecture problem is not missing pages so much as misplaced emphasis: the homepage and gallery expose almost everything at once, while the information a newcomer needs to attend on Sunday is fragmented across the homepage, Contact page, footer, and Events page.

The clearest direction is:

1. Make **Visit** the primary newcomer path and put Sunday essentials before the contact form.
2. Reduce the homepage to orientation, attendance information, current events, identity, and a few confident pathways.
3. Move the full leadership roster off the homepage into a dedicated Leadership page.
4. Make the Events page future-first and move past events into an archive.
5. Make the Gallery an index of past-event collections rather than a 37-photo wall with attribute tags.
6. Keep About focused on identity, mission, and a scannable history; stop duplicating its content on the homepage.
7. Keep Give focused on safe donation actions and trust.

Measured at a 390 px mobile viewport, the live homepage is approximately 13,981 px tall and the gallery is approximately 15,401 px tall. Neither page has horizontal overflow, but both impose excessive vertical scanning before visitors can understand the whole page.

## Evidence and constraints

The audit covered the live Home, About, Events, Gallery, Give, Contact, Admin, and 404 pages at desktop and 390 px mobile widths. It also reviewed the navigation, footer, heading structure, calls to action, and current Astro templates.

The FNBC brand/design document was supplied after the audit was first drafted. This audit has been reconciled against it (see "Brand reconciliation" below). The brand direction confirms some audit recommendations and reverses others; where they differ, the brand document governs visual decisions and the audit governs information-architecture decisions.

The live Gallery still uses attribute tags. The working tree contains an unshipped Sanity refactor to structured Gallery Event relationships. The recommendations below evaluate the live experience and extend the event-based direction into the page architecture.

## Confidence scale

- **Clear UX problem**: supported by a task mismatch, content duplication, broken interaction, excessive scan cost, or missing essential visitor information.
- **Strong recommendation**: a well-supported improvement with some editorial or organizational discretion.
- **Subjective design preference**: a defensible direction that should be confirmed against the brand document.

## Native-first component architecture

Use Astro and semantic HTML by default. Add React Aria Components only in isolated React islands for complex widgets that native HTML cannot handle well.

| Need | Preferred implementation |
|---|---|
| Button, link, site navigation | Native HTML |
| Text input and ordinary form | Native `label`, `input`, `select`, `textarea`, and validation |
| FAQ or simple disclosure | Native `details` and `summary` |
| Modal or image lightbox | Native `dialog` plus small JavaScript |
| Simple popup | Popover API |
| Mobile navigation | Native `nav` with a button/disclosure pattern |
| Tabs | Small accessible JavaScript; React Aria only when state becomes complex |
| Combobox, listbox, or date picker | React Aria Components |
| Complex selection or focus behavior | React Aria Components |

Ordinary website navigation must remain links inside `nav`; it should not use the ARIA application-menu pattern.

## Site-wide information architecture

### What the site must do

The site has four primary jobs, in this order:

1. Help a newcomer confidently attend on Sunday.
2. Help members find current services, events, and church contacts.
3. Explain FNBC's identity, mission, leadership, and distinctive Naga history.
4. Preserve community memory and support trusted giving.

### Current navigation

Home / About / Events / Gallery / Give / Contact

This is understandable, but “Contact” is a weak label for the destination used by the homepage's “Plan Your Sunday” action. A visitor planning attendance lands on a form before seeing the practical information they need.

### Recommended primary navigation

Home / Visit / About / Events / Gallery / Give

Recommended utility destinations:

- Leadership, linked from About and the homepage rather than occupying a top-level slot.
- Contact form, email, and phone inside Visit; “Contact” may remain a footer link or anchored section.
- Admin remains unlisted and protected from indexing.

### Proposed sitemap

```text
/
├── /visit                 Sunday essentials, expectations, directions, contact
├── /about                 Identity, mission, beliefs/affiliation, history
│   └── /leadership        Pastors, officers, ministry leaders, trustees
├── /events                Upcoming services and events
│   └── /events/archive    Past events, grouped by year when needed
├── /gallery               Past-event collection index
│   └── /gallery/[event]   One event's context and photographs
├── /give                  Donation methods, verification, impact
├── /admin                 Staff-only Studio gateway; no public navigation
└── /404                   Recovery page
```

Do not create a Ministries page until the church has enough maintained content to make it useful. The current Worship and Children team rosters alone do not justify another top-level page.

### Site-wide changes

- **REMOVE / ADD** the Contact navigation label in favor of Visit (or “Visit & Contact”) because attendance planning is the dominant visitor task. **Confidence: clear UX problem.**
- **ADD** a Leadership page and move the complete roster there. **Confidence: clear UX problem.**
- **KEEP** Events, Gallery, and Give as top-level labels; they are plain, recognizable, and accurately describe the content. **Confidence: strong recommendation.**
- **KEEP** navigation as ordinary links inside `nav`; do not implement it as an ARIA menu. **Confidence: clear UX problem if changed.**
- **REMOVE** Home from the desktop navigation if space becomes constrained; the logo already links home. It may remain in the mobile menu and footer for clarity. **Confidence: subjective design preference.**
- **ADD** visible current-page styling and a concise “Plan a Visit” action in the desktop header if the brand system supports it. **Confidence: strong recommendation.**
- **ADD** Escape-key closing and focus return to the live mobile navigation. The live audit found that the menu remained open after Escape. **Confidence: clear UX problem.**

## Homepage

### Purpose

Orient first-time visitors within seconds, state who FNBC is, make Sunday attendance easy, surface what is happening next, and provide short pathways to deeper identity and community content.

### Current structure

1. Full-height identity hero with “Plan Your Sunday” and “Read Our Story”
2. Service Times & Location cards
3. Complete leadership, ministry-team, and trustee roster
4. Five Main Objectives cards
5. History/story teaser
6. Three recurring Upcoming Events
7. Footer

### Problems

#### Content and architecture

- The first two sections are correctly prioritized, but “Plan Your Sunday” links to a Contact page whose form appears before visit information.
- The complete leadership roster dominates the homepage and pushes mission, story, and events thousands of pixels down the page.
- The homepage is approximately 7,133 px tall on desktop and 13,981 px tall at 390 px. This is a hierarchy problem, not merely a long-page preference.
- “Meet the Team” combines pastors, officers, ministry rosters, and trustees, creating a directory where a concise trust-building introduction is needed.
- The five objectives and history summary substantially duplicate the About page.
- “Upcoming Events” currently surfaces recurring services, not the next dated special events. On August 8, the next relevant dated event is not presented on the homepage.
- The page lacks practical newcomer expectations: parking/entrance, children, language, accessibility, dress, and what happens after worship.
- No community/gallery preview demonstrates present-day church life despite strong available photography.

#### Visual design

- The hero has a distinctive composition and should remain the design thesis.
- The large number of biographies and cards turns the middle of the page into a content database.
- Repeated eyebrows, card borders, and similar section treatments reduce contrast between what is essential and what is supporting.
- The mobile H1 is visually forceful but the rest of the page is so long that its strong opening loses impact.

### Recommended structure

1. Hero: identity, current Sunday time, “Plan a Visit,” and secondary “Our Story” action
2. Sunday essentials: time, full address, directions, fellowship, and active seasonal-time note
3. What to expect: parking/entrance, children, accessibility, language, and atmosphere
4. Next gatherings: next two or three future events, not only recurring services
5. Who we are: condensed mission and Naga diaspora role
6. Community proof: one current photo/event collection and short Gallery link
7. Leadership introduction: interim pastor plus a link to all leadership
8. Short history distinction: first Naga church established in America, with About link
9. Final visit/contact invitation

### Changes

- **KEEP** the identity hero and its two-path structure. Change the primary destination from Contact to Visit. **Confidence: strong recommendation.**
- **KEEP** Service Times & Location immediately after the hero. Add direct directions and newcomer details. **Confidence: clear UX problem.**
- **MOVE** the complete leadership roster to `/leadership`; keep only the pastor and one short leadership introduction on Home. **Confidence: clear UX problem.**
- **COMBINE** the five objective cards into a concise “Who we are” section; retain the full approved wording on About. **Confidence: strong recommendation.**
- **MOVE** upcoming dated events above mission/history so the page reflects what visitors can do next. **Confidence: strong recommendation.**
- **REMOVE** repeated history detail from the homepage teaser; retain one distinctive fact and one paragraph. **Confidence: clear UX problem.**
- **ADD** a photo-led community section using a recent event, not a generic card grid. **Confidence: strong recommendation.**
- **ADD** a newcomer expectations section before any organizational content. **Confidence: clear UX problem.**
- **ADD** a major band transition only at hero → Sunday essentials; do not band every homepage section. This follows the brand band system. **Confidence: strong recommendation.**

### Confidence

Moving the full roster and repairing the visit path are clear UX corrections. The exact order of mission, gallery proof, leadership teaser, and history is a strong recommendation that should be validated with church stakeholders. Visual treatment is governed by `docs/BRAND_DESIGN_DIRECTION.md`.

## Visit / Contact

### Purpose

Help someone decide to attend, arrive without uncertainty, understand what to expect, and contact the church when they need a human response.

### Current structure

1. Contact hero
2. General contact form
3. Contact Information: location, service time, email, phone
4. Join Us This Sunday summary
5. Embedded map
6. Footer

### Problems

#### Content and architecture

- The general form appears before the high-value attendance information promised by “Plan Your Sunday.”
- Location and Sunday information are repeated in two adjacent sections.
- The page omits parking, entrance, accessibility, children's arrangements, language, dress expectations, and approximate service/fellowship flow.
- The embedded map is useful but has no prominent “Open directions” action.
- The form asks for first and last name separately and requires a subject; this is reasonable, but a simple purpose selector could better route prayer requests, visit questions, and general messages.
- The page does not state an expected response window or emergency limitation.

#### Visual design

- The split hero consumes substantial space before the practical information.
- The form leads visually and makes the page feel administrative rather than welcoming.
- The live mobile page has no horizontal overflow, and its native form controls and labels are a sound foundation.

### Recommended structure

1. Compact Visit hero with current Sunday time and full venue/address
2. Plan your visit: directions, parking/entrance, accessibility, children, language, dress, fellowship
3. This Sunday: current service time and any relevant next event
4. Map and “Open directions” action
5. Contact choices: email, phone, prayer request, general question
6. Contact form
7. Response/privacy note

### Changes

- **REMOVE / ADD** the Contact page identity in favor of “Visit” or “Visit & Contact.” **Confidence: clear UX problem.**
- **MOVE** Sunday essentials and directions above the form. **Confidence: clear UX problem.**
- **COMBINE** Contact Information and Join Us This Sunday into one visit-information section. **Confidence: clear UX problem.**
- **ADD** newcomer expectation content, written and approved by church leadership. **Confidence: clear UX problem.**
- **ADD** an external directions link next to the map. **Confidence: strong recommendation.**
- **KEEP** the native HTML form, labels, validation, honeypot, privacy note, and honest error/success states. **Confidence: strong recommendation.**
- **ADD** a response-time expectation and a statement that the form is not monitored for emergencies. **Confidence: strong recommendation.**

### Confidence

The ordering problem is clear. The exact content of the newcomer section requires factual input from the church and must not be invented.

## About

### Purpose

Explain what FNBC believes and exists to do, establish its distinctive place in Naga and American church history, and direct visitors to its leaders and community life.

### Current structure

1. About hero
2. Long chronological history narrative
3. Founder quotation
4. More history narrative
5. Historic Founding Meeting feature
6. More history narrative
7. Inauguration and guest-speaker list
8. Founding Members photograph and 14-name list
9. Five detailed mission objectives
10. “Get Involved” link

### Problems

#### Content and architecture

- The page begins with history before clearly answering “Who are you now?”
- Mission and current purpose are buried after several thousand pixels of historical content.
- The history is meaningful but formatted as a long continuous narrative with isolated feature boxes; it is difficult to scan.
- The homepage duplicates the objectives and history, weakening the reason to visit About.
- The page does not state beliefs, denominational/organizational affiliation, or present ministry identity. These should be added only with approved source material.
- Leadership is absent here even though visitors naturally expect it under About.
- “Get Involved” is vague and sends users to a general contact form.

#### Visual design

- The quotation and founding photograph provide valuable rhythm and should remain.
- The repeated full-size page hero is visually consistent but delays the page's actual identity content.
- Five equally weighted objective cards make every mission statement appear equally prominent and lengthen the mobile page to approximately 9,167 px.

### Recommended structure

1. Compact page identity and one-sentence present-day description
2. Who we are now: mission, community served, and approved beliefs/affiliation
3. Leadership introduction with link to `/leadership`
4. Why FNBC exists: condensed objectives grouped into three themes
5. Our story: scannable timeline from 2006 vision to 2018 founding to 2019 inauguration
6. Founder quotation within the timeline
7. Founding members photograph and names
8. Invitation to visit, connect, or explore Gallery

### Changes

- **MOVE** mission and current identity ahead of the long history. **Confidence: clear UX problem.**
- **ADD** approved beliefs/affiliation and present ministry identity. **Confidence: strong recommendation.**
- **ADD** a leadership introduction and link; do not duplicate the full roster. **Confidence: strong recommendation.**
- **COMBINE** the history paragraphs, founding meeting, and inauguration into a chronological timeline. **Confidence: strong recommendation.**
- **KEEP** the founder quotation, founding photograph, and complete names as historically meaningful material. **Confidence: strong recommendation.**
- **COMBINE** five objectives into three memorable themes while preserving full wording in Sanity or an expandable section if required. **Confidence: strong recommendation.**
- **REMOVE / ADD** the vague “Get Involved” action in favor of “Plan a Visit” or “Meet Our Leaders.” **Confidence: clear UX problem.**

### Confidence

Moving current identity before history is a clear UX correction. Timeline styling and objective grouping are strong recommendations. Belief and affiliation content must be supplied and approved.

## Leadership

### Purpose

Build trust by identifying pastoral, ministry, administrative, and governance leaders; help members know whom to contact; and present biographies consistently and respectfully.

### Current structure

There is no Leadership page. The homepage includes:

1. Nine individual leadership cards
2. Worship Team roster
3. Children Ministry Team roster
4. Board of Trustees introduction
5. Three long trustee biographies

### Problems

#### Content and architecture

- A directory-scale roster is occupying prime homepage space.
- Biography length and subject matter are inconsistent: some entries are only titles, while trustee biographies include employment, hobbies, and family details.
- Pastoral, ministry, administrative, financial, deacon, and trustee roles are mixed without a clear organizational hierarchy.
- The page provides no role-based contact routes.
- Personal details should be reviewed for consent, ongoing relevance, and consistency.

#### Visual design

- The existing `details`/`summary` pattern is appropriate for optional biographies.
- The volume of cards overwhelms the homepage visual hierarchy.
- A dedicated page could use fewer card styles and stronger group headings.

### Recommended structure

1. Leadership page identity and pastoral welcome
2. Pastoral leadership
3. Deacons and ministry leaders
4. Administration and finance
5. Ministry teams/rosters
6. Board of Trustees and governance explanation
7. Contact/serve invitation

### Changes

- **ADD** `/leadership`. **Confidence: clear UX problem.**
- **MOVE** every full biography and roster off Home. **Confidence: clear UX problem.**
- **KEEP** role groupings, portraits, and native expandable biographies. **Confidence: strong recommendation.**
- **KEEP** biographies, but standardize their length, tense, titles, and the type of personal information included. **Confidence: clear UX problem.**
- **SPLIT** pastoral/ministry leadership from governance so visitors understand responsibilities. **Confidence: strong recommendation.**
- **ADD** role-appropriate contact actions only where church policy allows. **Confidence: strong recommendation.**

### Confidence

The need for a separate page is clear. Exact categories and public contact information require leadership approval.

## Events

### Purpose

Tell visitors when the church gathers next, help members act on upcoming events, and preserve past events without making them obstruct the future schedule.

### Current structure

1. Events hero
2. Four Regular Services cards
3. Special Events heading and January-December jump index
4. Every 2026 month in chronological order, including past and future events
5. Footer

### Problems

#### Content and architecture

- On August 8, visitors must pass January through July to reach the next future event.
- The page treats past and future events with equal weight.
- The homepage “Upcoming Events” does not surface the next dated special events.
- Events have no detail page, registration/contact action, add-to-calendar link, or clear cancellation/update state.
- Some events are member-business items such as executive meetings; these may not deserve the same public prominence as worship, missions, or community events.
- The August 1 event is still listed on the live Events page at Burton Hill Baptist Church, while the confirmed event venue was the Riley Center at Southwestern Baptist Theological Seminary. This content should be corrected after editorial confirmation.
- The calendar contains several TBA/TBD values without a clear “details pending” treatment.

#### Visual design

- The compact month index and calm agenda treatment are stronger than a card wall and should be preserved.
- A 12-month page is approximately 9,780 px tall on mobile and makes current information visually indistinguishable from archival information.
- Regular Services correctly appear before special events for newcomers.

### Recommended structure

1. Compact page identity with next Sunday time
2. Next event highlight
3. Upcoming events, ordered from today forward
4. Regular weekly/monthly gatherings
5. Details-pending events
6. Past events archive by year, collapsed or on `/events/archive`
7. Contact/calendar subscription action when available

### Changes

- **KEEP** Regular Services near the top, but place one truly next event before the full recurring list. **Confidence: strong recommendation.**
- **SPLIT** Upcoming and Past Events using actual dates. **Confidence: clear UX problem.**
- **MOVE** past months into an archive and default the main page to current/future content. **Confidence: clear UX problem.**
- **KEEP** the month-index/timeline visual language for the upcoming list and archive. **Confidence: strong recommendation.**
- **ADD** event state fields such as scheduled, details pending, cancelled, and completed. **Confidence: strong recommendation.**
- **ADD** optional event details/actions only when useful: directions, contact, registration, livestream, or add to calendar. **Confidence: strong recommendation.**
- **REMOVE** internal governance meetings from the public schedule unless church leadership confirms that they serve a public audience. **Confidence: strong recommendation.**
- **REMOVE / ADD** the incorrect August 1 venue and replace it with the confirmed Riley Center venue after editorial confirmation. **Confidence: clear content error.**

### Confidence

Future-first ordering is a clear UX correction. Event detail pages and subscriptions depend on how often the church publishes actionable event information.

## Gallery

### Purpose

Let visitors and members explore church life through past events, preserve community memory, and make it easy to find all photographs from a specific event.

### Current structure

1. Gallery hero
2. Intro and count
3. Attribute-tag filters
4. All 37 photographs in one masonry wall
5. Native-dialog lightbox
6. Share Photos invitation
7. Footer

### Problems

#### Content and architecture

- Tags such as “Performance,” “Program,” “Celebration,” and “Fellowship” describe image attributes, but the real retrieval task is finding a past event.
- The page loads and exposes every photo at once, producing a mobile page approximately 15,401 px tall.
- Thirty photographs from one fundraising event dominate the seven older photographs.
- Numbered photo titles such as “· 08” through “· 37” are import artifacts, not useful gallery labels.
- Individual photos lack enough event context beyond category and date.
- There is no event-level page with title, date, venue, description, cover image, and photo count.
- The live filter state does not yet reflect the structured Gallery Event model already present in the working tree.

#### Visual design

- The masonry presentation and native `dialog` lightbox are suitable for photographs and should be preserved.
- Repeating a title and category under every photograph makes the wall heavier than necessary.
- The event-based collection index offers a stronger opportunity for large, memorable cover images.

### Recommended structure

1. Compact gallery identity
2. Featured/recent event collection
3. Event collection index: cover image, event name, date, location, and photo count
4. Optional older/undated collections
5. Share Photos invitation

For `/gallery/[event]`:

1. Event title, date, venue, and short context
2. Photo count and return-to-gallery link
3. Photo grid
4. Native-dialog lightbox with caption and keyboard navigation
5. Share or correction contact

### Changes

- **REMOVE / ADD** the Tags browsing concept in favor of Events or Event Collections. **Confidence: clear UX problem.**
- **SPLIT** the flat gallery into an event-collection index and event detail pages. **Confidence: strong recommendation.**
- **KEEP** category as optional editorial metadata in Sanity, not the main visitor filter. **Confidence: strong recommendation.**
- **KEEP** masonry imagery and the native `dialog` lightbox. **Confidence: strong recommendation.**
- **REMOVE** numeric title suffixes from visitor-facing labels. **Confidence: clear UX problem.**
- **REMOVE** repetitive grid captions when the collection page already provides context; otherwise keep only event/date. Preserve meaningful alt text and lightbox captions. **Confidence: strong recommendation.**
- **KEEP** the Share Photos invitation after the collections. **Confidence: strong recommendation.**

### Confidence

Event-based retrieval is explicitly confirmed by the content owner. Separate event pages are a strong recommendation that becomes more valuable as the archive grows.

## Give

### Purpose

Make legitimate donation methods easy to understand and verify, establish trust, and explain how giving supports the church's approved mission.

### Current structure

1. Giving hero
2. PayPal and Zelle methods with QR codes/contact details and instructions
3. Verification warning
4. Six “Where Your Giving Goes” areas
5. Scripture quotation
6. Thank-you section
7. Footer

### Problems

#### Content and architecture

- The core order is sound: methods precede impact.
- PayPal has no direct official payment link, so desktop visitors may have to manually copy an email or scan a code with another device.
- The page should state whether gifts are tax-deductible, how receipts are handled, and whom to contact about a giving error, but only after church/legal confirmation.
- Six impact areas are credible but visually equal and somewhat generic; they need approved language and possibly annual examples.
- The thank-you section repeats the hero's gratitude and could be shorter.
- Payment destinations are high-risk content and should remain prominently verifiable.

#### Visual design

- QR codes and numbered steps are easy to scan.
- The full secondary-page hero delays the actionable methods.
- The impact area card grid is clear but generic compared with the site's stronger textile/history identity.

### Recommended structure

1. Compact giving identity and verification statement
2. Donation methods with official direct action, QR code, recipient, and copyable details
3. Receipt/tax/contact note approved by church leadership
4. Where giving goes, grouped into three or four plain-language areas
5. One approved impact example or accountability note
6. Scripture and concise thank-you

### Changes

- **KEEP** methods first, followed by impact and scripture. **Confidence: strong recommendation.**
- **KEEP** the recipient-verification warning adjacent to every method, not only once below both. **Confidence: clear safety requirement.**
- **ADD** an official PayPal link if the church can provide and verify one. **Confidence: strong recommendation.**
- **ADD** approved receipt, tax-deductibility, and giving-help information. **Confidence: strong recommendation.**
- **COMBINE** six impact cards into fewer memorable themes unless each area has distinct current examples. **Confidence: subjective design preference.**
- **REMOVE** repeated gratitude copy from the final thank-you section. **Confidence: subjective design preference.**
- **KEEP** the custom Sanity review safeguards for payment contacts and QR codes. **Confidence: clear safety requirement.**
- **ADD** the scripture quotation treatment from the brand direction (3px Oxblood left rule, inset content, typography and whitespace first). **Confidence: strong recommendation.**

### Confidence

The current hierarchy is already strong. Most recommendations are trust and convenience improvements that require verified church policy.

## Footer and repeated global information

### Purpose

Provide reliable orientation and recovery at the end of every page: visit information, key destinations, and a direct contact route.

### Current structure

1. Woven band
2. Brand mark, name, region, and mission description
3. Quick Links duplicating the primary navigation
4. Contact Us with venue, DFW region, current Sunday time, and email
5. Copyright

### Problems

#### Content and architecture

- The footer says “DFW, Texas” rather than displaying the full street address or a directions link.
- Phone is omitted despite appearing on Contact.
- The footer repeats all primary links, which is acceptable, but could give more weight to Visit, Events, and Give.
- Service time is useful here, but its relationship to the seasonal schedule should remain driven by the shared settings data.
- No social or livestream links are present; do not add empty icons unless active official accounts exist.

#### Visual design

- The woven band is the most subject-specific global visual element and is worth preserving if the brand document confirms its authenticity.
- The circular “F” and square header “F” are inconsistent and feel provisional rather than like an official church mark.

### Recommended structure

1. Woven band/signature
2. Church name and one-sentence identity
3. Plan a Visit: current time, venue, full address, directions
4. Explore: About, Leadership, Events, Gallery, Give
5. Contact: email and phone
6. Approved social/livestream links, only if real and maintained
7. Copyright and optional privacy/accessibility links

- **KEEP** a single recurring signature at the footer. The brand direction endorses a major band at the top of the footer; the current generic woven band should be replaced by the brand's major section band (6px Indigo / 2px Cotton gap / 2px Oxblood) rather than kept verbatim. **Confidence: strong recommendation.**
- **ADD** the full address and directions link. **Confidence: clear UX problem.**
- **ADD** the public phone number if church policy supports footer-wide visibility. **Confidence: strong recommendation.**
- **MOVE** Visit, Events, and Give ahead of less important footer links rather than mechanically repeating the header order. **Confidence: strong recommendation.**
- **REMOVE / ADD** the provisional “F” mark and replace it with the brand's Interlocking Cross mark once it exists, or a simple typographic FNBC wordmark in the interim. **Confidence: strong recommendation.**
- **KEEP** the footer free of social icons unless verified, maintained accounts are supplied. **Confidence: strong recommendation.**

### Confidence

The missing full address is a clear usability issue. The footer signature and logo are now resolved by the brand direction: the band system supplies the footer band, and the Interlocking Cross / interim wordmark replaces the provisional “F.”

## Admin

### Purpose

Direct authorized editors to the standalone Sanity Studio and remind them of publishing safeguards.

### Current structure

1. Authorized Staff label and page title
2. Explanation of editable content
3. Open Content Studio action
4. Before You Publish checklist

### Problems

- The page is already concise and task-focused.
- It is publicly reachable by URL, which is acceptable because Studio authentication protects access, but it must stay out of search results and public navigation.
- The checklist should mention Gallery Events now that photographs are event-organized.

### Recommended structure

1. Page identity
2. Open Studio action
3. Publishing safeguards and support/recovery contact

### Changes

- **KEEP** the standalone Studio link and concise gateway page. **Confidence: strong recommendation.**
- **KEEP** `noindex, nofollow` headers and exclude Admin from navigation and sitemap. **Confidence: clear safety requirement.**
- **ADD** a brief support/recovery instruction for editors who cannot sign in. **Confidence: strong recommendation.**
- **REMOVE / ADD** old photo-tag terminology in the checklist and replace it with Gallery Events. **Confidence: clear content maintenance issue.**

### Confidence

The current page is strong. Changes are operational refinements rather than a redesign.

## 404

### Purpose

Explain the missing page and help the visitor recover.

### Current structure

1. Error 404 label
2. “We couldn't find that page”
3. Short explanation
4. Return Home action

### Problems

- The page is clear but offers only one recovery path.
- A visitor looking for service details should not have to return home and search again.

### Recommended structure

1. Plain missing-page message
2. Return Home
3. Plan a Visit and View Events links
4. Contact link for unresolved needs

### Changes

- **KEEP** the plain language and primary Return Home action. **Confidence: strong recommendation.**
- **ADD** Visit and Events recovery links. **Confidence: strong recommendation.**
- **ADD** Contact as a secondary recovery option. **Confidence: subjective design preference.**

### Confidence

The current page is already usable. Additional recovery paths are a low-risk improvement.

## Service times and location system

Service information belongs in multiple contexts, but it should not be independently authored in each place.

- Home: full Sunday essentials and the active time.
- Visit: full operational detail and directions.
- Events: recurring-service details.
- Footer: concise current time and full-address link.

All variants should derive from shared Sanity settings. The active current time should be prominent; the standard/daylight explanation should be supporting text. Venue, full address, map destination, and directions URL should also be shared fields so they cannot drift.

## Visual-design audit, separate from architecture

### Brand reconciliation

The audit was drafted before the brand document was supplied. Reconciling the two:

- **REPLACE** the current deep green/charcoal/red/gold palette with the brand palette: Woven Ink `#171B19`, Natural Cotton `#F3EFE6`, Deep Indigo `#243343` (primary), Oxblood `#8A3035` (controlled accent), Muted Ochre `#B18A52` (optional decoration only). The audit's earlier suggestion to keep the green/red relationship is withdrawn; the brand document explicitly flags green+red as reading as Christmas in a US context and not as Naga identity. **Confidence: clear, brand-governed.**
- **REPLACE** Alegreya headings and Public Sans body with the brand pairing: Source Serif 4 (headings) and Inter (body/UI), with Noto Serif / Noto Sans as fallbacks. **Confidence: clear, brand-governed.**
- **REPLACE** the current generic woven seam motif with the brand's band system. The signature structural treatment is the major section band (6px Indigo / 2px Cotton gap / 2px Oxblood), used at roughly 1–3 major transitions per long page (hero → Sunday essentials, top of footer), plus 1px hairline borders for quiet structure and 2px Oxblood for active indicators and editorial accents. Do not band every section. **Confidence: clear, brand-governed.**
- **REPLACE** the provisional circular/square “F” mark with the brand's Interlocking Cross logo once designed, or a simple typographic FNBC wordmark in the interim. Do not let the logo block the visual redesign. **Confidence: clear, brand-governed.**
- **KEEP** the split-image homepage hero composition as the strongest visual thesis on the site; the brand direction prioritizes wide documentary photography and a strong hero. **Confidence: strong recommendation.**
- **KEEP** restrained sharp corners (0–8px radius) and visible focus styling; both match the brand's rectangular geometry and accessibility rules. **Confidence: strong recommendation.**
- **ADD** the brand's accessibility rule everywhere: never communicate state by color alone; hover/active/validation/selected/focus states must also change shape, border, icon, weight, or underline, and focus indicators must remain obvious. **Confidence: clear safety requirement.**
- **RESPECT** the brand's cultural constraints in all new work: borrow textile grammar (bands, panels, joins, repetition, contrast) not tribe-specific vocabulary; do not reproduce recognizable tribe-specific motifs as generic decoration; do not evoke the Naga nationalist flag composition (blue field + rainbow + Star of Bethlehem); avoid the listed prohibited symbols (hornbill, mithun, dao, spear, etc.) as primary brand elements; keep Christian identity unmistakably primary. **Confidence: clear, brand-governed.**

### Visual problems to address after IA approval

- The same large split-image hero is repeated on every secondary page, causing monotony and delaying page tasks. Use shorter page identities on utility-heavy pages such as Visit, Events, and Give.
- The provisional “F” mark is not a sufficiently distinctive or official identity system (replaced per the logo direction above).
- Too many sections use equivalent cards, borders, eyebrows, and weights; important and supporting content often look equally important.
- Portrait quality, crop, biography length, and card density are inconsistent across leadership.
- Imported gallery titles with numeric suffixes expose system artifacts to visitors.
- Long mobile pages need editorial reduction, not merely smaller type and tighter spacing.
- The hero arrival animation is restrained and reduced-motion aware; keep one orchestrated entrance or choose stillness, but do not add motion to every section, consistent with the brand's restrained-motion rule.

### Design signature

The brand document resolves the design signature: FNBC should be remembered for a disciplined panel/band system (joined, visibly distinct pieces) connecting contemporary DFW church life to Naga material heritage — "Woven Faith" as the internal rule, not as a public tagline or decorative motif.

## Content required from church leadership

The redesign should not invent the following:

1. Approved belief/affiliation statement
2. Parking and building entrance instructions
3. Children's arrangements and safeguarding language
4. Accessibility accommodations
5. Primary worship language(s) and translation availability
6. Dress/arrival expectations, if the church wants to state them
7. Public response-time and emergency-contact policy
8. Giving receipt/tax-deductibility policy
9. Official PayPal URL
10. The final Interlocking Cross logo artwork (the brand document supplies colors, typography, and textile guidance in `docs/BRAND_DESIGN_DIRECTION.md`; only the drawn mark itself is outstanding)
11. Approved leadership categories, biographies, and public contact routes
12. Whether governance meetings belong on the public Events page

## Recommended implementation order after approval

1. Apply the global design tokens and typography from `docs/BRAND_DESIGN_DIRECTION.md` (colors, band system, Source Serif 4 + Inter, spacing, radius).
2. Restyle the navigation/header and footer to the new system.
3. Rename/restructure Contact as Visit and centralize visit settings in Sanity.
4. Create Leadership and remove the full roster from Home.
5. Rebuild Home around visit essentials, next events, identity, and concise pathways.
6. Make Events future-first and add an archive/state model.
7. Finish Gallery Event collection pages and remove import-style titles.
8. Refine About, Give, Admin, and 404.
9. Commission/draw the Interlocking Cross logo and replace the interim wordmark.
10. Verify at desktop and narrow mobile widths with keyboard, reduced-motion, automated accessibility, and screen-reader smoke tests.

No React conversion is required for these structural changes. Native Astro components remain the default; React Aria should be introduced only when an approved feature actually needs a complex widget.

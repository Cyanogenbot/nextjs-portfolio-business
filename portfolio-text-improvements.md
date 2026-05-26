# Portfolio Text Improvements

## Overview

This document outlines all text improvements across the portfolio site, organized by section. Each entry includes:
- Current text
- Issues identified
- Suggested improvements
- Notes on tone/format

---

## 1. Navigation

### Current nav items (`components/nav.jsx:20-28`)
```
Identity, Projects, Vision, Contact
```

**Suggestion:** Rename "Identity" → "About" (more conventional, immediately understood).

---

## 2. Hero / Intro Line

### Current (`pages/index.jsx:186`)
```
Hi I'm Diede! A Human-Systems Interaction EngD candidate at Eindhoven University of Technology
```

**Issues:**
- A bit long for a hero tagline
- "EngD candidate" reads academic; may not land with industry readers

**Suggestion:**
```
Hi, I'm Diede. Design researcher and creative technologist working at the intersection of technology and society.
```

---

## 3. Identity Section

### Current title (`pages/index.jsx:21`)
```
Welcome to my portfolio
```

**Issues:** Generic, doesn't say anything distinctive.

**Suggestion:** `"Who I am"` or `"About me"` — mirrors the nav item and sets expectations.

### Current body text (`pages/index.jsx:25-38`)

**Paragraph 1:**
```
I'm Diede, an EngD candidate in Human-Systems Interaction at TU/e and an industrial designer with a deep interest in the relationship between technology and society. My work sits at the intersection of design research and creative technology as I build novel concepts, prototypes, and experiences that bring abstract futures into reality. But I also use design as a tool to gain a better understanding of the design context by utilizing Research-Through-Design methods.
```

**Issues:**
- Very long opening sentence (40+ words)
- "But I also" is a weak transition
- "utilizing Research-Through-Design methods" is academic jargon
- Passive voice in places

**Suggested rewrite:**
```
I'm Diede, an industrial designer and EngD candidate in Human-Systems Interaction at TU/e. My work sits at the intersection of design research and creative technology — I build prototypes and experiences that bring abstract ideas into the real world, and use those artifacts to better understand the problems I'm designing for.
```

**Paragraph 2:**
```
My specialisation is in UX research: understanding how people actually live with technology, how it impacts them, and how we can use technologies to support their values. That research feeds directly into design as I research how people interact and reflect on my provocations and probes, iteratively refining these into prototypes tested with real people in real contexts.
```

**Issues:**
- "research" used 3 times in one paragraph
- "provocations and probes" is niche terminology
- Long sentence structure

**Suggested rewrite:**
```
I specialize in UX research: understanding how people live with technology and how it affects their daily lives. That research feeds directly into my design work — I build prototypes, test them with real people in real contexts, and iterate based on their feedback.
```

**Paragraph 3:**
```
The domains that I primarily work within are privacy-by-design, slow technology, and sustainability. Not as buzzwords, but as the values that shape my decision-making. I've been formally trained with the KEMs, design methods for profesionals which allow me to dissect and contribute to complex societal challenges and deal with ambiguous situations.
```

**Issues:**
- "profesionals" is misspelled
- "KEMs" is insider TU/e knowledge — meaningless to most readers
- "Not as buzzwords" is defensive framing

**Suggested rewrite:**
```
I focus on three domains: privacy-by-design, slow technology, and sustainability. These aren't trends to me — they're the values that guide every design decision. My training in strategic design methods equips me to tackle complex, ambiguous challenges where technology and society intersect.
```

---

## 4. Vision Section

### Current title (`pages/index.jsx:48`)
```
Vision on design
```

**Suggestion:** `"My design philosophy"` or `"What I believe"` — more personal and natural.

### Current body text (`pages/index.jsx:52-65`)

**Paragraph 1:**
```
I believe design has more power than we realize. In a society that defines success by profitability rather than impact, practices like surveillance capitalism have emerged, and human-centered values like safety, privacy, and happiness have been pushed aside. I believe designers could take a stance against this growth and efficiency centered approach by going the extra mile and design with the public good in mind.
```

**Issues:**
- "I believe" repeated
- "growth and efficiency centered" should be hyphenated
- "going the extra mile" is cliché
- "design with" should be "design for" or "to design with"

**Suggested rewrite:**
```
Design has more power than we realize. In a society that measures success by profit rather than impact, surveillance capitalism thrives while values like safety, privacy, and well-being get pushed aside. Designers can push back — by choosing to design for the public good, not just for growth.
```

**Paragraph 2:**
```
An example of which can be found in designing around the internet. I believe the smart home itself resides in the users house, and not on an external cloud. This is because data protection often seems to be an afterthought in design, and sometimes even a business model. Humans have turned into products of the attention economy and Data sovereignty has become more important than ever. But to act on this, we might have to rethink our digital infrastructure. Not only do I advocate for a decentralized internet where our digital lives are not ruled by a handful of companies, but also the involvement of practices like Privacy-by-Design, which urges designers to take care of privacy throughout the entire design process. As practices like these can help us design for the public good.
```

**Issues:**
- Very long paragraph, hard to follow
- "An example of which can be found" is awkward phrasing
- "I believe" appears again
- "Data sovereignty" has inconsistent capitalization
- Multiple run-on sentences
- Ends with a fragment ("As practices like these...")

**Suggested rewrite:**
```
Take the internet as an example. I think your smart home should live in your home — not on someone else's cloud. Data protection is often an afterthought, sometimes even a business model. We've become the product of the attention economy, and data sovereignty matters more than ever. Acting on this means rethinking our digital infrastructure: a decentralized internet, free from the grip of a few tech giants, built with privacy-by-design principles from the ground up.
```

**Paragraph 3:**
```
But the bigger idea is this: what if we applied that same logic to other contexts? Sustainable-by-design. Equal-by-design. As designers, we should be innovating from social values like privacy, sustainability, and equality rather than innovating for the sake of technology or growth.
```

**Issues:**
- Good closing idea, but could be tighter

**Suggested rewrite:**
```
But why stop there? The same logic applies everywhere: sustainable-by-design, equitable-by-design. We should innovate from values — privacy, sustainability, fairness — not for the sake of technology or growth.
```

---

## 5. Final Master's Project Section

### Current title (`pages/index.jsx:112`)
```
Final masters project
```

**Suggestion:** `"Master's Thesis"` or `"Claude: My Thesis Project"` — "masters" should be possessive ("Master's").

### Current body text (`pages/index.jsx:116-137`)

**Paragraph 1:**
```
We are dependent on big tech companies. Day in day out we are using services by Microsoft, Google, Meta, Apple, and Amazon. While we have to use their services to live our comfortable western lifestyle, they have perfected creating intricate digital profiles which are sold to the highest bidder. These profiles are so detailed, that these companies can almost assure their clients they can nudge your behavior, Influence what you buy or determine an entire election. And we don't seem to have a choice.
```

**Issues:**
- "Influence" is randomly capitalized mid-sentence
- "comfortable western lifestyle" is a loaded phrase that may alienate readers
- Tone is somewhat preachy; could be more measured

**Suggested rewrite:**
```
We depend on big tech. Every day we use services from companies like Google, Meta, Apple, and Amazon — and in return, they build detailed digital profiles of us that are sold to the highest bidder. These profiles are so precise they can nudge our behavior, influence our purchases, even sway elections. And most of us feel we have no alternative.
```

**Paragraph 2:**
```
In my project Claude, I aim to reshape the future of the home server by adapting it to suit the decentralized internet, but this time putting privacy at center. This is done by drawing inspiration from the self-hosting community, a community of people that have been developing and hosting alternatives to big tech companies. Claude creates personal little clouds that can be hosted at home. Giving back control into the hands of the people who want to preserve their digital privacy through data-sovereignty.
```

**Issues:**
- "at center" → "at the center"
- "community" repeated
- "Giving back control" is a sentence fragment
- "into the hands" → "back into the hands" or just "back to"

**Suggested rewrite:**
```
My thesis project, Claude, reimagines the home server for a decentralized internet with privacy at its core. Drawing from the self-hosting movement, Claude lets users run their own personal cloud at home — storing data without relying on third parties. It puts control back where it belongs: in the hands of the user.
```

**Paragraph 3:**
```
Through an autoetnographic approach combined with expert interviews and a co-creation session I created a homeserver concept which put the users privacy first. It does this through a more personal approach to selfhosting architecture, which does not require personal services to be opened to the public web. This Architecture was then validated in another round of expert interviews. In the end I deliverd a well-rounded homeserver concept. The concept consists of two elements, the Claude portal; a home server and the Claude wallet; a key wallet to manage access to your or your friends' their servers. The whole project concept was then presented on the Nextcloud community days on invitation of Nextcloud.
```

**Issues:**
- "autoetnographic" → "autoethnographic"
- "put" → "puts"
- "Architecture" randomly capitalized
- "deliverd" misspelled
- "friends' their" is grammatically wrong
- "on invitation of" → "at the invitation of"
- Very dense paragraph, hard to follow

**Suggested rewrite:**
```
I developed the concept through an autoethnographic study, co-creation workshops, and multiple rounds of expert interviews. The result is a homeserver architecture that keeps personal services off the public web. Claude consists of two parts: the Claude Portal (a home server for storing and sharing data) and the Claude Wallet (a key manager for controlling access to your own and others' servers). The project was later presented at Nextcloud Community Days, at the invitation of Nextcloud.
```

---

## 6. Section Divider Texts (Buffertext components)

### Current (`pages/index.jsx:200, 227, 256`)
```
"What kind of projects have you done?"
"What is your vision on design?"
"Do you want work together on a better world? Click me and let's get in touch!"
```

**Issues:**
- Q&A format is inconsistent (some sections don't have buffertext headers)
- "Do you want work" → missing "to"
- "Click me" feels dated and informal
- The question format reads like an FAQ rather than a portfolio

**Suggestions:**
```
Projects          →  "Selected work" or "What I've built"
Vision            →  (keep as is, or "Design philosophy")
Contact           →  "Let's work together" or "Get in touch"
```

---

## 7. Skills Section

### Current (`components/Skills.jsx:118-122`)
```
Some of my software hard-skills:
```

**Issues:**
- "software hard-skills" is awkward phrasing
- Colon at end feels incomplete

**Suggestion:** `"Tools I work with"` or `"Technical skills"` — simpler, more confident.

---

## 8. Project Cards

### General issues across all `.md` files:
- Inconsistent use of year field (some have it, some don't)
- Some descriptions are too technical, others too vague
- Missing clear role/contribution statement in most
- Inconsistent tone between academic and professional

### Per-card notes:

#### `01-this-portfolio.md`
- Fine as-is, but could be tighter:
  ```
  I built this portfolio from scratch using Next.js to reflect my focus on the intersection of interaction design and technology. My previous portfolio was hand-coded HTML/CSS, which became unwieldy for dynamic content. This version is more flexible and better represents how I work.
  ```

#### `10-final-bachelor-project.md` (Sphere)
- Very long description, needs restructuring
- Suggestion: Lead with the problem, then the solution, then how it works
  ```
  As homes get smarter, appliances will act on their own based on sensing human presence. But how do we stay in control? Sphere lets users define how much interaction they want from their smart devices. By adjusting a physical cord on the device, you set your personal "sphere of influence" — controlling how close a device needs to be before it responds to your presence. Smart functionality, on your terms.
  ```

#### `11-polaris.md`
- "The polari" → should be "The Polaris" (inconsistent capitalization)
- Otherwise decent, but could clarify the role:
  ```
  Polaris is a speculative design project exploring how ambient interfaces can raise awareness of household energy use. Devices attach to appliance cables and sonify power consumption, helping homeowners stay within their energy generation capacity and making informed choices about what to turn off.
  ```

#### `14-stekkie.md`
- Good, but "its" should be "the" for clarity:
  ```
  Stekkie is an adaptive EV charging solution designed to promote sustainable behavior and help balance the power grid. It features a digital twin that analyzes grid status, weather forecasts, and the user's schedule to recommend optimal charging times — making vehicle-to-grid interaction transparent and effortless.
  ```

#### `16-rideswipe.md`
- "Additionally for the course" is awkward opening
- "hands of the handlebars" → "hands off the handlebars"
  ```
  Rideswipe is a hands-free phone interface for cyclists. Multi-touch sensors embedded in the handlebars communicate with the phone via Bluetooth, allowing riders to control media and navigate maps without taking their hands off the bars.
  ```

#### `17-busy-town.md`
- Good, minor tightening:
  ```
  Busy Town explores how novel interaction technologies can make toys more immersive. An NFC-enabled play mat and smart car trigger contextual sounds and visuals as the car moves across the mat. By measuring scan intervals, the system detects speed and adjusts audio accordingly. Research showed these contextual effects increased immersion and encouraged exploratory play.
  ```

#### `19-yourshelf.md`
- Long, could be split. "would" used too much (hedging language):
  ```
  During my M2.1 semester, I worked at TSG-Group, an engineering and design firm. My task: analyze their internal design processes and identify collaboration friction points. One key finding was poor cross-office communication. Yourshelf is my response — a physical office dashboard that establishes live video connections between TSG's two offices to increase participatory sensemaking. A 4-week study showed it improved group cohesion and lowered the barrier to asking questions.
  ```

#### `20-sensebox.md`
- "research aimed at" → "research project that"
- Could be clearer about what was achieved:
  ```
  The Sensebox enhances world-building and scenario creation through a hybrid physical-digital environment. Building on TU/e's IoT sandbox for smart home design, it adds a digital layer where students manipulate characters and control lighting and appliances to prototype future scenarios. The project analyzed how these tools affect the design process. Currently being prepared for academic publication.
  ```

#### `21-claude.md`
- Generally strong but repetitive with the main section
- "itself" is redundant
- Consider shortening since it's a card preview:
  ```
  Claude reimagines the home server for a privacy-first, decentralized internet. Inspired by the self-hosting community, it lets users run personal clouds at home — storing data independently, without relying on Big Tech. The project counters the detailed digital profiles companies build and sell, restoring user autonomy in an era where behavior nudging and influence are real concerns.
  ```

#### `22-powerparasite.md`
- "annecdotes" → "anecdotes"
- "resposible" → "responsible"
  ```
  A Data-Enabled Design research project developed with Mercedes-Benz, exploring how people think about energy use through everyday phone-charging habits. The project centered on a custom research probe that tracked charging data in real time and simulated an energy-scarcity future, prompting participants to rethink habits they'd never questioned. I led the research process, designed the probe, and facilitated data collection.
  ```

#### `23-ResearchWallets.md`
- "Frictious" → should be "Frictionous" or "Friction-based"
- "These we're" → "These were"
- Title doesn't match card title field
  ```
  A design research project with SURF, investigating how European digital identity wallets can encourage thoughtful data-sharing. While identity wallets give users more control over personal data, the challenge is designing interactions that promote mindful consent rather than mindless clicking. I tested alternative confirmation flows to see how specific UI elements affect user awareness during data-sharing moments. Findings were shared with identity wallet providers to inform their design decisions.
  ```

---

## 9. Commented-Out Sections

### Development section (`pages/index.jsx:74-109`)
This section is currently commented out. If you plan to bring it back:

**Issues:**
- Very long (5 paragraphs)
- Self-deprecating tone ("Writing is still not my strength", "could not reflect", "too complicated to explain")
- Reads like a personal journal entry rather than a professional narrative
- "tangible sand experienceable" → "sand" is a typo for "and"

**Suggestion:** If you bring this back, reframe it as growth narrative without the self-criticism. Focus on where you are now, not where you were. Keep it to 2-3 paragraphs max.

### Future section (`pages/index.jsx:144-166`)
Also commented out.

**Issues:**
- "I have no clear path laid out" undermines confidence
- "academics seems out of the question" is negative framing
- "I do not feel ready to start working for a company" reads as uncertain
- "the diededrive wil be rebuild" has typos ("wil" → "will", "rebuild" → "rebuilt")
- Very personal/internal thoughts that may not serve a professional portfolio

**Suggestion:** Generally, I'd recommend keeping this section off a public portfolio. Future plans change quickly and can date the site. If you bring it back, focus only on what you're actively pursuing, not what you're unsure about.

---

## Recommended Priority Order

1. **High priority** (affects first impression):
   - Hero tagline (section 2)
   - Identity section (section 3)
   - Navigation label (section 1)

2. **Medium priority** (core content):
   - Vision section (section 4)
   - Final Master's Project (section 5)
   - Section dividers (section 6)

3. **Lower priority** (supporting content):
   - Skills heading (section 7)
   - Individual project cards (section 8)
   - Commented-out sections (section 9)

---

## General Tone Guidelines

- **Be confident, not self-deprecating** — this is a portfolio, not a diary
- **Lead with outcomes, not process** — readers care about what you achieved
- **Use active voice** — "I designed" not "was designed"
- **Avoid hedging** — minimize "would", "might", "I think", "I believe"
- **Keep paragraphs short** — 2-4 sentences max for web readability
- **Be specific** — names, numbers, and concrete details are more credible than abstract claims
- **Write for two audiences** — academic reviewers AND industry employers

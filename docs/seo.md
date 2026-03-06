Every tag is rendering perfectly. Here's the full breakdown of what was done and what's left on the SEO roadmap:

---

## ✅ Implemented now

### Infrastructure
| File | What changed |
|---|---|
| `_data/site.json` | **Created** — global `name`, `url`, `description`, `author`, `locale` used across all pages |
| `_includes/layouts/base.njk` | **Updated head** — smart title logic, `<meta name="description">`, canonical, Open Graph (7 tags), Twitter Card, `robots: index, follow` |
| `robots.njk` | **Created** — outputs `/robots.txt` with `Allow: /` and Sitemap pointer |

### Per-page meta
| Page | `<title>` | Meta description |
|---|---|---|
| **Homepage** | `Grey Wellness \| Insomnia & CBT-I Therapist — English & Spanish` | Mentions Monica Grey, CBT-I, bilingual |
| **Services** | `CBT-I Sleep Therapy & Counseling \| Grey Wellness` | 6–8 weeks, evidence-based, English & Spanish |
| **Contact** | `Schedule an Appointment \| Grey Wellness` | New clients welcome, bilingual |
| **Updates** | `Sleep Health Resources & Updates \| Grey Wellness` | Insomnia specialist framing |

### JSON-LD Schema (homepage)
`LocalBusiness` + `MedicalOrganization` with Monica Grey as `founder`, two `Service` offers (CBT-I, Anxiety & Stress), and bilingual `availableLanguage`.

---

## 📋 SEO Todo — still needed

### Technical
- [ ] **OG/Social image** — Create a `1200×630px` branded image at `/assets/img/og-image.jpg` (all pages reference it, but the file doesn't exist yet)
- [X] **Sitemap** — Add `@11ty/eleventy-plugin-sitemap` to `eleventy.config.js` and register it (robots.txt already points to `/sitemap.xml`)
- [ ] **Submit to Search Console** — Verify domain ownership in Google Search Console, then submit sitemap

### Content (highest SEO impact)
- [ ] **Services page** — Currently empty; needs: CBT-I explained, what to expect session-by-session, session length/frequency, insurance/rates, bilingual availability, CTA
- [ ] **About/Bio page** — Mónica's credentials, her Colombian Latina background, why CBT-I, bilingual identity — this page alone can rank for `[name] therapist` searches
- [ ] **FAQ page** — "What is CBT-I?", "How many sessions?", "Do you take insurance?", "Do you offer therapy in Spanish?" — these are exact search queries

### Blog (long-tail keyword capture)
- [ ] "Why sleep hygiene advice alone doesn't work" (targets `sleep hygiene not working`)
- [ ] "What is CBT-I and how is it different from regular therapy?"
- [ ] "Anxiety and insomnia: which came first?" 
- [ ] "Sleep therapy in Spanish" / "Terapia para el insomnio en español"

### Off-page / Directories
- [ ] **Psychology Today** — Update profile with CBT-I specialty + sleep focus
- [ ] **TherapyDen** — Great visibility for BIPOC/Latina therapists
- [ ] **Inclusive Therapists** — Culturally responsive directory
- [ ] **Zencare** — Strong SEO, therapist-friendly
- [ ] **Google Business Profile** — Needed for local map pack rankings

### Keywords to weave into content
| Primary | Secondary | Local |
|---|---|---|
| `CBT-I therapist` | `bilingual therapist` | `[City] insomnia therapist` |
| `insomnia therapy` | `Spanish speaking therapist` | `[City] sleep therapy` |
| `sleep therapist` | `anxiety and sleep` | `[State] CBT-I` |
| `cognitive behavioral therapy for insomnia` | `Latina therapist` | — |

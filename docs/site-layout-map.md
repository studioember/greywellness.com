# Grey Wellness site layout map

Redesign baseline for `codex/site-redesign`, branched from `main` at `64a5343`. The Eleventy build contains **59 HTML routes** across 29 English pages, 29 Spanish pages, and the root redirect. The XML sitemap lists 57 of those routes. Each locale has 18 general pages, three blog category archives, and eight articles. The site also serves four printable sleep diaries and four machine-readable endpoints.

## Global layout and navigation

- **Entry.** `/` redirects to `/en/`. The logo returns visitors to the homepage for the current language. The language switcher links to the matching page, including translated blog slugs. The closed group flyer and its Spanish placeholder have no language switcher.
- **Main header, in order.** Meet Mónica / Conoce a Mónica → Specialties / Especialidades → Rates / Tarifas → Blog → Free Tools / Recursos Gratuitos → FAQ / Preguntas Frecuentes → Contact / Contacto → Client Portal / Portal del Cliente → language switcher. Specialties opens Sleep & Insomnia, Trauma, Anxiety, and Groups. Mobile puts the menu items behind a toggle and shows the other language beside it.
- **Standard footer.** Practice tagline, Send a Message, office phone, fax link to For Providers, contact email, Meet Mónica, Services, For Providers, Free Tools, Facebook, Instagram, LinkedIn, Psychology Today, Latinx Therapy, NBCC, TherapyDen, copyright, and site credits.
- **Layout variants.** The insomnia landing page uses a logo-and-phone header and a compact footer with crisis information. For Providers uses the main header and a dedicated footer with a home link. Its print layout has its own copy, URL and QR code.
- **Visual system.** The base and landing layouts use Poppins and Nunito, light and dark theme tokens, the Grey Wellness wordmark, and reusable hero, card, button, and form styles. The referral layout loads local resources under its own privacy settings.

## Practice and therapy pages

The last column follows the reading order within each page. The shared header and footer sit outside that sequence.

| Page | English route | Spanish route | Content in page order |
| --- | --- | --- | --- |
| Home | `/en/` | `/es/` | Sleep-focused hero with consultation and treatment links → cards for Sleep & Insomnia, Trauma and Anxiety → introduction to Mónica → inclusion and values → contact banner. |
| Meet Mónica | `/en/pages/about/` | `/es/pages/about/` | Portrait, credentials and practice focus → personal and professional background → education, licensure, training and affiliations → interest in sleep → what to expect in sessions → personal interests → contact. |
| What We Treat | `/en/pages/treatment/` | `/es/pages/treatment/` | Practice introduction and service area → cards for Sleep & Insomnia, Trauma and Anxiety → guidance for visitors unsure where to start → consultation form. Linked from the home hero and footer Services link. |
| Sleep & Insomnia Therapy | `/en/pages/sleep/` | `/es/pages/sleep/` | Hero and consultation link → common sleep experiences → explanation of persistent insomnia → CBT-I principles and session sequence → consultation prompt → examples of progress → Mónica’s credentials → sleep-specific FAQ and rates link → late-night note and form. The English FAQ includes a language question. |
| Trauma Therapy | `/en/pages/trauma/` | `/es/pages/trauma/` | Hero → common trauma experiences → body and nervous-system response → trauma-informed approach → consultation prompt → examples of progress → clinician panel in English → consultation form. |
| Anxiety Therapy | `/en/pages/anxiety/` | `/es/pages/anxiety/` | Hero → common anxiety experiences → nervous-system response → treatment approach → consultation prompt → examples of progress → consultation form. |
| How We Work | `/en/pages/process/` | `/es/pages/process/` | Practice approach → CBT-I, CBT, trauma-informed care, mindfulness-based approaches and feminist therapy → invitation to find an approach together → consultation form. The FAQ links here. |
| Groups | `/en/pages/groups/` | `/es/pages/groups/` | Group therapy introduction → current-offerings area, which shows an empty state and inquiry form → what to expect section in English → closing inquiry prompt. Linked from Specialties and the rates table. |
| CBT-I Group Therapy | `/en/pages/groups/cbt-i-group-therapy/` | `/es/pages/groups/cbt-i-group-therapy/` | Closed English cohort flyer with start date, calendar link, duration, price, virtual format, topics, and registration by email or phone. The Spanish route is a noindex placeholder linking to the English flyer and is excluded from the XML sitemap. |
| Session Rates | `/en/rates/` | `/es/rates/` | Service area and language → fee table for the free consultation, new-client evaluation, individual sessions at three lengths, and group therapy → reduced-fee options → inquiry form. The source files are named `investment.md`. |
| FAQ | `/en/pages/faq/` | `/es/pages/faq/` | Eight questions in four sections. Insurance and coverage covers state-specific acceptance, plan confirmation and out-of-network benefits. Treatment modalities covers approaches and CBT-I. Session format covers virtual care. Getting started covers outreach and the free consultation. |
| Contact | `/en/pages/contact/` | `/es/pages/contact/` | Service area → what happens during the free 15-minute consultation → prominent provider-referral link → response timing and contact form. |
| For Providers | `/en/for-providers/` | `/es/for-providers/` | Referral introduction and Print / Save as PDF → clinical care and eligibility → patient-initiated phone and email contact → provider-to-provider instructions and fax → care coordination and records → referral fees, privacy, and emergency information. Linked from Contact and from the footer, including the fax link. The page offers no public referral form and loads no analytics or ad trackers. |
| Insomnia Landing Page | `/en/lp/insomnia/` | `/es/lp/insomnia/` | Insomnia hero with service area, clinician credentials and rates link → consultation form → CBT-I overview → closing button back to the form. Standalone landing page with its own header and footer. Both URLs are indexable and appear in the XML sitemap. |

Consultation forms appear on Contact, What We Treat, all three specialty pages, How We Work, Groups, Rates, Free Tools, and the standalone insomnia landing page. They use the shared Google Forms macro, with localized copy and fields that vary by placement. For provider referrals, the office lists a phone and fax. The header’s Client Portal link takes existing clients to [SimplePractice](https://monicagrey.clientsecure.me/sign-in).

## Tools and downloads

| Page | English route | Spanish route | Content in page order |
| --- | --- | --- | --- |
| Free Tools | `/en/free-tools/` | `/es/free-tools/` | Intro hero → tool cards for Sleep Diary and Schedule Worry Time → browser privacy note → consultation form → educational-use note. Schedule Worry Time is a coming-soon card. |
| My Sleep Diary | `/en/free-tools/sleep-diary/` | `/es/free-tools/sleep-diary/` | Intro and instructions → seven-day selector → morning entry form for sleep times, awakenings, naps and contributing factors → calculated sleep time and efficiency → seven-morning summary → printable 14-day blank diary. Entries use browser-local storage shared across the two languages. Visitors can export a CSV and clear stored entries. |

| Printable worksheet | English route | Spanish route | Discovery |
| --- | --- | --- | --- |
| 14-day sleep diary | `/assets/downloads/grey-wellness-14-day-sleep-diary.pdf` | `/assets/downloads/grey-wellness-diario-de-sueno-14-dias.pdf` | Linked from the matching Sleep Diary page. |
| 7-day sleep diary | `/assets/downloads/grey-wellness-7-day-sleep-diary.pdf` | `/assets/downloads/grey-wellness-diario-de-sueno-7-dias.pdf` | Served as static files. The current Sleep Diary pages link to the 14-day edition. |

## Blog and archives

Each Blog index shows the three categories and the eight posts for that language. Cards use the article title, image when available, category, date and description. Category pages show filtered article cards and a back link. Article pages show a blog back link, category, title, author and date, optional hero image, body, author bio, and consultation link. Article-specific illustrations and references sit within each post.

| Archive | English route | Spanish route | Current content |
| --- | --- | --- | --- |
| Blog | `/en/blog/` | `/es/blog/` | Eight articles in each language. |
| Anxiety / Ansiedad | `/en/blog/category/anxiety/` | `/es/blog/category/ansiedad/` | Two articles on nighttime anxiety and Sunday-night worry. |
| Insomnia / Insomnio | `/en/blog/category/insomnia/` | `/es/blog/category/insomnio/` | Five articles on causes, awakenings, treatment, early parenting and aging. |
| Trauma | `/en/blog/category/trauma/` | `/es/blog/category/trauma/` | One article on how stress and trauma affect sleep. |
| Updates / Actualizaciones | `/en/posts/` | `/es/posts/` | Empty archive separate from the Blog, with both URLs still listed in the XML sitemap. |

| Article topic | English route | Spanish route | Content outline |
| --- | --- | --- | --- |
| Sunday scaries at bedtime | `/en/blog/posts/sunday-scaries-at-bedtime/` | `/es/blog/posts/sunday-scaries-at-bedtime/` | Anticipatory worry, why it surfaces at bedtime, pressure to sleep, and practical steps. |
| Sleep and aging | `/en/blog/posts/sleep-aging-insomnia/` | `/es/blog/posts/sleep-aging-insomnia/` | Age-related sleep changes, signs of insomnia, mental health context, and practical options. |
| Insomnia in postpartum and early parenthood | `/en/blog/posts/postpartum-parent-insomnia/` | `/es/blog/posts/postpartum-parent-insomnia/` | Sleep opportunity versus insomnia, being on alert while caregiving, mental health, and practical support. |
| CBT-I versus sleep medication | `/en/blog/posts/cbti-vs-sleep-medication/` | `/es/blog/posts/tcc-i-vs-medicamentos-insomnio/` | Medication, triggers versus maintaining factors, CBT-I, comparative evidence, durability, and options for combining care. |
| Stress, trauma and sleep | `/en/blog/posts/stress-trauma-sleep/` | `/es/blog/posts/stress-trauma-sleep/` | Nighttime thoughts, distinctions between stress and trauma, chronic stress, coping steps, seeking care, and a note for providers. |
| Why anxiety gets worse at night | `/en/blog/posts/anxiety-worse-at-night/` | `/es/blog/posts/anxiety-worse-at-night/` | Nighttime arousal and reduced distractions, the sleep–anxiety relationship, and practical steps. |
| Waking up at 3 a.m. | `/en/blog/posts/waking-up-at-3am/` | `/es/blog/posts/despertarse-a-las-3-am/` | Night awakenings and lighter sleep, what can prolong wakefulness, and what to do when it happens. |
| Why insomnia happens | `/en/blog/posts/why-does-insomnia-happen/` | `/es/blog/posts/why-does-insomnia-happen/` | Definition of insomnia, the three-factor model, an illustrative case, and treatment context. |

## System routes and shared sources

| Source | What it controls |
| --- | --- |
| [`redirect.njk`](../redirect.njk) | `/`, the English homepage redirect. |
| [`sitemap.njk`](../sitemap.njk) and [`robots.njk`](../robots.njk) | `/sitemap.xml` and `/robots.txt`, including localized sitemap alternates and crawler discovery. |
| [`llms.txt.njk`](../llms.txt.njk) and [`llms-full.txt.njk`](../llms-full.txt.njk) | `/llms.txt` and `/llms-full.txt`, the practice summary, official links and extended bilingual FAQ. |
| [`eleventy.config.js`](../eleventy.config.js) | Publishable collections, category archives, open group filtering and locale-route matching. |
| [`_includes/layouts/`](../_includes/layouts), [`_includes/components/`](../_includes/components) and [`_includes/macros/`](../_includes/macros) | Page shells, home, article and archive layouts, landing page, referral print layout, Sleep Diary, navigation, footer, service-area copy, metadata, logos, and consultation forms. |
| [`_data/i18n/`](../_data/i18n), [`_data/faq.json`](../_data/faq.json), [`_data/referrals.json`](../_data/referrals.json) and [`_data/site.json`](../_data/site.json) | Shared English and Spanish copy, homepage text, FAQs, referral instructions, practice identity and service areas. |
| [`assets/img/`](../assets/img), [`assets/css/theme/`](../assets/css/theme) and [`assets/js/`](../assets/js) | Brand assets, clinician portraits, therapy and blog imagery, directory badges, referral QR code, theme tokens, and referral and diary interactions. |

## Existing content differences to account for in the redesign

- The English CBT-I group flyer is still indexable and shows an April 22, 2026 start, an eight-week display, and a six-week Google Calendar event, while the Groups index reports no open cohorts. The Spanish flyer is a placeholder.
- The English group index has a “what to expect” section and the English trauma page has a clinician panel. Their Spanish counterparts omit those blocks. The insomnia landing page's shared footer copy is also in English on the Spanish route.
- The public site has two insomnia entry points in each language. The specialty page gives the full treatment overview. The standalone landing page puts the consultation form near the top and uses a different header and footer.

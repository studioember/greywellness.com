---
title: Home
title_hidden: true
date: "git Last Modified"
date_hidden: true
layout: layouts/base.njk
no_prose: true
meta_title: "Grey Wellness | Insomnia & CBT-I Therapist — English & Spanish"
description: "Monica Grey is a bilingual therapist specializing in CBT-I—the gold-standard, evidence-based treatment for insomnia. Helping adults overcome chronic sleep problems, anxiety, and stress. Therapy in English and Spanish."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalOrganization"],
  "name": "Grey Wellness",
  "description": "Bilingual CBT-I therapist helping adults overcome insomnia, anxiety, and sleep problems. Therapy in English and Spanish.",
  "url": "https://greywellness.com",
  "priceRange": "$$",
  "founder": {
    "@type": "Person",
    "name": "Monica Grey",
    "jobTitle": "Licensed Therapist",
    "knowsLanguage": ["en", "es"]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Therapy Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cognitive Behavioral Therapy for Insomnia (CBT-I)",
          "description": "Gold-standard, evidence-based treatment to retrain your mind and body for deeper, more restorative sleep—often in 6–8 weeks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Anxiety & Stress Therapy",
          "description": "Therapy for adults whose anxiety, trauma, or stress is making sleep harder."
        }
      }
    ]
  },
  "availableLanguage": [
    { "@type": "Language", "name": "English" },
    { "@type": "Language", "name": "Spanish" }
  ]
}
</script>

<section class="flex flex-col items-center justify-center text-center py-24 px-4">
  <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
    Grey Wellness
  </h1>
  <p class="text-xl md:text-2xl text-muted max-w-2xl leading-relaxed mb-10">
    Holistic wellness rooted in balance, intention, and lasting well-being.
  </p>
  {% scheduleButton "Get in touch" %}
</section>

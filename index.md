---
title: Home
title_hidden: true
date: "git Last Modified"
date_hidden: true
layout: layouts/base.njk
no_prose: true
full_width: true
meta_title: "Grey Wellness | Insomnia & CBT-I Therapist | English & Spanish"
description: "Mónica Grey is a bilingual therapist specializing in CBT-I, the gold-standard, evidence-based treatment for insomnia. Helping adults overcome chronic sleep problems, anxiety, and stress. Therapy in English and Spanish."
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
    "name": "Mónica Grey",
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
          "description": "Gold-standard, evidence-based treatment to retrain your mind and body for deeper, more restorative sleep, often in 6 to 8 weeks."
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

<!-- Hero -->
<section class="relative bg-[#31272d] overflow-hidden -mx-4 sm:-mx-6 -mt-10">
  <img src="{{ '/assets/img/hero.jpg' | url }}" alt="Hummingbird in flight against a moody sky" class="absolute inset-0 w-full h-full object-cover object-center" loading="eager" decoding="async">

  <div class="absolute inset-0 bg-gradient-to-r from-[#31272d]/90 via-[#31272d]/70 to-transparent"></div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-32 md:py-44">
    <div class="max-w-xl">
      <p class="text-[#DBA20D] text-sm font-semibold tracking-widest uppercase mb-4">Mónica Grey, LCPC</p>
      <h1 class="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
        Better is possible.<br>
        Let's get you there.
      </h1>
      <p class="text-white/70 text-lg md:text-xl leading-relaxed mb-10">
        Bilingual therapy for adults navigating insomnia, trauma, anxiety, stress, and life between cultures. Sessions in English and Spanish.
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <div>{% scheduleButton "Request Appointment" %}</div>
        <a
          href="{{ '/pages/services/' | url }}"
          class="inline-block px-6 py-3.5 text-sm font-semibold tracking-wide uppercase text-white border border-white/30 rounded-md hover:bg-white/10 transition-colors text-center"
        >
          See Services
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Services -->
<section class="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
  <div class="mb-12 text-center">
    <p class="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Areas of Support</p>
    <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-foreground">You don't have to figure this out alone.</h2>
    <p class="mt-4 text-muted text-lg max-w-2xl mx-auto">
      Whether you can't sleep, feel stuck, or are running on empty, support is here. Sessions in English and Spanish.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 gap-6">
    <div class="group relative bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-200 overflow-hidden">
      <a href="{{ '/pages/services/' | url }}#sleep-insomnia" class="absolute inset-0 z-10" aria-label="Learn more about Sleep & Insomnia therapy"></a>
      <div class="absolute top-0 left-0 right-0 h-1 bg-[#DBA20D]"></div>
      <div class="mb-4"><span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#DBA20D]/15 text-2xl">🌙</span></div>
      <h3 class="text-xl font-bold text-foreground mb-3">Sleep & Insomnia</h3>
      <p class="text-muted leading-relaxed mb-5">You lie in bed exhausted but can't fall asleep. Or you wake up at 3am and your mind won't stop. You're tired all day, then wired at night. This cycle is real, and it can change.</p>
      <span class="text-[#DBA20D] text-sm font-semibold tracking-wide group-hover:underline">Learn more →</span>
    </div>
    <div class="group relative bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-200 overflow-hidden">
      <a href="{{ '/pages/services/' | url }}#trauma" class="absolute inset-0 z-10" aria-label="Learn more about Trauma therapy"></a>
      <div class="absolute top-0 left-0 right-0 h-1 bg-accent"></div>
      <div class="mb-4"><span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/30 text-2xl">🤝</span></div>
      <h3 class="text-xl font-bold text-foreground mb-3">Trauma</h3>
      <p class="text-muted leading-relaxed mb-5">Something happened, and part of you never fully moved on. You might feel on edge, shut down, or both. Certain things bring it back without warning. You don't have to keep carrying it alone.</p>
      <span class="text-sm font-semibold tracking-wide group-hover:underline" style="color: hsl(271 30% 50%)">Learn more →</span>
    </div>
    <div class="group relative bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-200 overflow-hidden">
      <a href="{{ '/pages/services/' | url }}#childhood-adverse-experiences" class="absolute inset-0 z-10" aria-label="Learn more about Adverse Childhood Experiences therapy"></a>
      <div class="absolute top-0 left-0 right-0 h-1 bg-secondary"></div>
      <div class="mb-4"><span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/20 text-2xl">🌱</span></div>
      <h3 class="text-xl font-bold text-foreground mb-3">Adverse Childhood Experiences</h3>
      <p class="text-muted leading-relaxed mb-5">You grew up faster than you should have. Or learned that love came with conditions. What happened then still shows up now in ways that are hard to explain. Understanding that connection can change everything.</p>
      <span class="text-sm font-semibold tracking-wide group-hover:underline" style="color: hsl(271 30% 50%)">Learn more →</span>
    </div>
    <div class="group relative bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-200 overflow-hidden">
      <a href="{{ '/pages/services/' | url }}#stress-management" class="absolute inset-0 z-10" aria-label="Learn more about Stress Management therapy"></a>
      <div class="absolute top-0 left-0 right-0 h-1" style="background: hsl(271 20% 62%)"></div>
      <div class="mb-4"><span class="inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl" style="background: hsl(271 20% 62% / 0.15)">⚖️</span></div>
      <h3 class="text-xl font-bold text-foreground mb-3">Stress Management & Burnout</h3>
      <p class="text-muted leading-relaxed mb-5">You are always in go mode. Your list never ends. You feel tired but can't slow down. Your body keeps sending signals you keep ignoring. Learning to manage stress is not about doing less. It is about feeling better.</p>
      <span class="text-sm font-semibold tracking-wide group-hover:underline" style="color: hsl(271 20% 52%)">Learn more →</span>
    </div>
  </div>
</section>

<!-- Inclusion & Values -->
<section class="py-20 px-4 sm:px-6 -mx-4 sm:-mx-6 bg-accent/5">
  <div class="max-w-7xl mx-auto">
    <div class="mb-12 text-center">
      <p class="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Values & Approach</p>
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-foreground">You belong here, exactly as you are.</h2>
    </div>

    <div class="max-w-3xl mx-auto">
      <!-- Inclusion -->
      <div class="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border">
        <div class="mb-4"><span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#DBA20D]/15 text-2xl">🌍</span></div>
        <h3 class="text-xl font-bold text-foreground mb-4">An Inclusive, Affirming Practice</h3>
        <p class="text-muted leading-relaxed mb-4">
          At Grey Wellness, we believe every person deserves care that sees them fully. This is a space rooted in dignity and respect, regardless of immigration status, national origin, religion, race, ethnicity, sexual orientation, gender identity, gender expression, disability, body size, or any of the other beautiful, complex things that make us human.
        </p>
        <p class="text-muted leading-relaxed mb-4">
          Grey Wellness was founded by Mónica Grey, a licensed therapist, an immigrant, a woman, and a woman of color. Her path to this work was shaped by knowing firsthand what it feels like to navigate systems that were not always designed with you in mind, and still needing to heal, to rest, to feel whole.
        </p>
        <p class="text-muted leading-relaxed mb-4">
          That lived experience is not incidental to this practice. It is the foundation of it.
        </p>
        <p class="text-muted leading-relaxed mb-4">
          We stand against misogyny, racism, colorism, sexism, ableism, machismo, classism, elitism, xenophobia, antisemitism, Islamophobia, homophobia, transphobia, and any other system that reduces a person's humanity to a category.
        </p>
        <p class="text-muted leading-relaxed">
          If you've ever wondered whether there is a therapy space that is truly safe for someone like you, we want you to know: this one is.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- CTA Banner -->
<section class="bg-[#31272d] py-16 px-4 -mx-4 sm:-mx-6">
  <div class="max-w-2xl mx-auto text-center">
    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Something brought you here today.</h2>
    <p class="text-white/80 text-lg mb-8">Curiosity, exhaustion, courage, or maybe all three. Whatever it was, we're glad you're here. You don't have to have it all figured out to reach out.</p>
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      {% scheduleButton "Schedule your free consultation" %}
    </div>
  </div>
</section>

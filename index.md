---
title: Home
title_hidden: true
date: "git Last Modified"
date_hidden: true
layout: layouts/base.njk
no_prose: true
full_width: true
meta_title: "Grey Wellness | Insomnia & CBT-I Therapist — English & Spanish"
description: "Mónica Grey is a bilingual therapist specializing in CBT-I—the gold-standard, evidence-based treatment for insomnia. Helping adults overcome chronic sleep problems, anxiety, and stress. Therapy in English and Spanish."
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

<!-- Hero -->
<section class="relative bg-hero overflow-hidden -mx-4 sm:-mx-6 -mt-10">
  <img src="{{ '/assets/img/hero.jpg' | url }}" alt="Hummingbird in flight against a moody sky" class="absolute inset-0 w-full h-full object-cover object-center" loading="eager" decoding="async">

  <div class="absolute inset-0" style="background: linear-gradient(to right, hsl(var(--hero-overlay) / 0.92), hsl(var(--hero-overlay) / 0.65), transparent)"></div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-32 md:py-44">
    <div class="max-w-xl">
      <p class="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Mónica Grey, LCPC</p>
      <h1 class="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
        Better is possible.<br>
        Let's get you there.
      </h1>
      <p class="text-white/70 text-lg md:text-xl leading-relaxed mb-10">
        Bilingual therapist supporting adults through trauma, insomnia, stress, and the unique challenges of navigating life between cultures.
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

<!-- Wave: Hero → Services -->
<div class="-mt-16 relative z-10 overflow-hidden" aria-hidden="true">
  <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="block w-full h-16 fill-bg">
    <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40 L1440,80 L0,80 Z" />
  </svg>
</div>

<!-- Services -->
<section class="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
  <div class="mb-12 text-center">
    <p class="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Specialties</p>
    <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-foreground">How I can help</h2>
    <p class="mt-4 text-muted text-lg max-w-2xl mx-auto">
      Evidence-based therapy tailored to where you are — offered in English and Spanish.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 gap-6">
    <div class="group relative bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-200 overflow-hidden">
      <a href="{{ '/pages/services/' | url }}#sleep-insomnia" class="absolute inset-0 z-10" aria-label="Learn more about Sleep & Insomnia therapy"></a>
      <div class="absolute top-0 left-0 right-0 h-1.5 bg-primary"></div>
      <div class="mb-4"><span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/15 text-2xl">🌙</span></div>
      <h3 class="text-xl font-bold text-foreground mb-3">Sleep & Insomnia</h3>
      <p class="text-muted leading-relaxed mb-5">CBT-I is the gold-standard treatment for chronic insomnia. Together, we identify the thoughts and patterns keeping you awake and replace them with ones that support real, lasting rest.</p>
      <span class="text-primary text-sm font-semibold tracking-wide group-hover:underline">Learn more →</span>
    </div>
    <div class="group relative bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-200 overflow-hidden">
      <a href="{{ '/pages/services/' | url }}#trauma" class="absolute inset-0 z-10" aria-label="Learn more about Trauma therapy"></a>
      <div class="absolute top-0 left-0 right-0 h-1.5 bg-accent"></div>
      <div class="mb-4"><span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/30 text-2xl">🤝</span></div>
      <h3 class="text-xl font-bold text-foreground mb-3">Trauma</h3>
      <p class="text-muted leading-relaxed mb-5">Trauma isn't a sign of weakness — it's the nervous system doing its best to protect you. We work at a pace that feels safe, gradually helping your body release what it's been holding.</p>
      <span class="text-sm font-semibold tracking-wide group-hover:underline" style="color: hsl(340 35% 50%)">Learn more →</span>
    </div>
    <div class="group relative bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-200 overflow-hidden">
      <a href="{{ '/pages/services/' | url }}#childhood-adverse-experiences" class="absolute inset-0 z-10" aria-label="Learn more about Childhood Adverse Experiences therapy"></a>
      <div class="absolute top-0 left-0 right-0 h-1.5 bg-secondary"></div>
      <div class="mb-4"><span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/20 text-2xl">🌱</span></div>
      <h3 class="text-xl font-bold text-foreground mb-3">Childhood Adverse Experiences</h3>
      <p class="text-muted leading-relaxed mb-5">Early experiences shape how we move through the world as adults. Understanding where patterns come from is the first step toward building a life that feels stable, safe, and genuinely yours.</p>
      <span class="text-sm font-semibold tracking-wide group-hover:underline" style="color: hsl(271 30% 50%)">Learn more →</span>
    </div>
    <div class="group relative bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-200 overflow-hidden">
      <a href="{{ '/pages/services/' | url }}#stress-management" class="absolute inset-0 z-10" aria-label="Learn more about Stress Management therapy"></a>
      <div class="absolute top-0 left-0 right-0 h-1.5 bg-sage"></div>
      <div class="mb-4"><span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-sage/15 text-2xl">⚖️</span></div>
      <h3 class="text-xl font-bold text-foreground mb-3">Stress Management</h3>
      <p class="text-muted leading-relaxed mb-5">Chronic stress stops being useful and starts being harmful. We work to understand what's driving it, how it shows up in your body, and what tools will help you build real, lasting resilience.</p>
      <span class="text-sage text-sm font-semibold tracking-wide group-hover:underline">Learn more →</span>
    </div>
  </div>
</section>

<!-- Wave: Services → CTA -->
<div class="-mb-1 overflow-hidden" aria-hidden="true">
  <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="block w-full h-16 fill-surface-warm">
    <path d="M0,50 C360,10 720,70 1080,30 C1260,10 1380,50 1440,40 L1440,80 L0,80 Z" />
  </svg>
</div>

<!-- CTA Banner -->
<section class="bg-surface-warm py-16 px-4 -mx-4 sm:-mx-6">
  <div class="max-w-2xl mx-auto text-center">
    <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">Something brought you here today.</h2>
    <p class="text-muted text-lg mb-8">I'm glad you're here. Let's talk.</p>
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      {% scheduleButton "Schedule your free consultation" %}
    </div>
  </div>
</section>

<!-- Wave: CTA → Footer -->
<div class="-mt-1 overflow-hidden" aria-hidden="true">
  <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="block w-full h-12 fill-bg">
    <path d="M0,20 C360,60 720,0 1080,40 C1260,60 1380,20 1440,30 L1440,0 L0,0 Z" />
  </svg>
</div>

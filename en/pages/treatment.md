---
title: What We Treat
title_hidden: false
meta_title: "Therapy for Insomnia, Trauma & Stress | Grey Wellness"
description: "Bilingual therapy for insomnia, trauma, adverse childhood experiences, and burnout. Learn what brings people to Grey Wellness and how life can look different."
date: "git Last Modified"
date_hidden: true
layout: layouts/base.njk
hidden_from_nav: true
templateEngineOverride: njk,md
---

<p class="text-muted text-lg leading-relaxed">You don't have to know exactly what's wrong to reach out. Most people arrive with a feeling, not a diagnosis. Below are the areas we work with most.</p>

<div class="not-prose mt-12 grid sm:grid-cols-2 gap-6">

  <a href="{{ '/en/pages/sleep/' | url }}" class="group block rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition-all duration-200 hover:border-primary/30">
    <span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/15 text-2xl mb-4">🌙</span>
    <h2 class="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Sleep & Insomnia</h2>
    <p class="text-muted leading-relaxed mb-4">You lie in bed exhausted but can't fall asleep. Or you wake up at 3am and your mind won't stop. This cycle is real — and it can change.</p>
    <span class="text-primary text-sm font-semibold tracking-wide group-hover:underline">Learn more →</span>
  </a>

  <a href="{{ '/en/pages/trauma/' | url }}" class="group block rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition-all duration-200" style="--hover-color: hsl(340 35% 50%)">
    <span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/30 text-2xl mb-4">🤝</span>
    <h2 class="text-xl font-bold text-foreground mb-3">Trauma</h2>
    <p class="text-muted leading-relaxed mb-4">Something happened, and part of you never fully moved on. You don't have to keep carrying it alone.</p>
    <span class="text-sm font-semibold tracking-wide group-hover:underline" style="color: hsl(340 35% 50%)">Learn more →</span>
  </a>

  <a href="{{ '/en/pages/childhood-experiences/' | url }}" class="group block rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition-all duration-200">
    <span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/20 text-2xl mb-4">🌱</span>
    <h2 class="text-xl font-bold text-foreground mb-3">Adverse Childhood Experiences</h2>
    <p class="text-muted leading-relaxed mb-4">You grew up faster than you should have. What happened then still shows up now. Understanding that connection can change everything.</p>
    <span class="text-sm font-semibold tracking-wide group-hover:underline" style="color: hsl(271 30% 50%)">Learn more →</span>
  </a>

  <a href="{{ '/en/pages/stress/' | url }}" class="group block rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition-all duration-200">
    <span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-sage/15 text-2xl mb-4">⚖️</span>
    <h2 class="text-xl font-bold text-foreground mb-3">Stress Management & Burnout</h2>
    <p class="text-muted leading-relaxed mb-4">You are always on. Your list never ends. Learning to manage stress is not about doing less — it is about feeling better.</p>
    <span class="text-sm font-semibold tracking-wide group-hover:underline" style="color: hsl(150 40% 40%)">Learn more →</span>
  </a>

</div>

<div class="not-prose mt-16 rounded-2xl px-8 py-10 text-center" style="background: hsl(var(--hero-overlay))">
  <p class="text-white/60 text-sm font-semibold tracking-widest uppercase mb-3">Not sure where you fit?</p>
  <h3 class="text-2xl font-bold text-white mb-4">That's okay. Most people aren't.</h3>
  <p class="text-white/70 mb-8 max-w-xl mx-auto">The free consultation is a chance to talk through what's going on and figure out together whether we're a good fit. No pressure, no commitment.</p>
  {% scheduleButton "Schedule Free Consultation" %}
</div>

<div id="contact-form" class="not-prose mt-12">
  <div class="text-center mb-8">
    <p class="text-primary text-sm font-semibold tracking-widest uppercase mb-3">You don't have to figure it out alone.</p>
    <h2 class="text-2xl md:text-3xl font-bold text-foreground mb-4">Reach out and we'll take it from here.</h2>
    <p class="text-muted max-w-xl mx-auto">Fill out the form below and we'll be in touch within 1–2 business days.</p>
  </div>
  <div class="rounded-2xl border border-border bg-card p-8 shadow-sm max-w-lg mx-auto">
    {% from 'macros/google-form.njk' import googleForm %}
    {% set contactFields = [
      { label: "Name", placeholder: "Your full name", type: "text", entry: "entry.1227396429", required: true },
      { label: "Email", placeholder: "you@example.com", type: "email", entry: "entry.530090678", required: true },
      { label: "Phone", placeholder: "(555) 555-5555", type: "tel", entry: "entry.1797015219", required: true },
      { label: "Message / Note", placeholder: "What's on your mind?", type: "textarea", entry: "entry.965605968", required: false }
    ] %}
    {{ googleForm(
      formResponseId="1FAIpQLSch3XOLgnmjGqzqAhU-N6z-JEa6gAB-QYBP7JQFpcoTLmAi7g",
      fields=contactFields,
      uid="treatment-en",
      submitLabel="Send Message",
      successTitle="Message sent!",
      successBody="Thank you for reaching out. I'll be in touch within 1–2 business days.",
      gaEventName="contact_form_submitted",
      gaEventCategory="contact",
      gaEventLabel="treatment_page_en",
      adsConversion=""
    ) }}
  </div>
</div>

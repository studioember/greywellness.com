---
title: What We Treat
title_hidden: false
meta_title: "Therapy Services in Virginia, Maryland & DC | Grey Wellness"
description: "CBT-I, anxiety, and trauma therapy for adults in Maryland, Virginia, and Washington, DC. Explore bilingual virtual therapy services in English and Spanish."
date: "git Last Modified"
date_hidden: true
layout: layouts/base.njk
hidden_from_nav: true
templateEngineOverride: njk,md
---

<p class="chapter-intro text-muted text-lg leading-relaxed">You don't have to know exactly what's wrong to reach out. Most people arrive with a feeling, not a diagnosis. Below are the areas we work with most.</p>

<div class="not-prose mt-10 service-directory">

  <a href="{{ '/en/pages/sleep/' | url }}">
    <h2>Sleep & Insomnia</h2>
    <p class="text-muted leading-relaxed">You lie in bed exhausted but can't fall asleep. Or you wake up at 3am and your mind won't stop. This cycle is real — and it can change.</p>
    <span class="directory-action">Learn more →</span>
  </a>

  <a href="{{ '/en/pages/trauma/' | url }}">
    <h2>Trauma</h2>
    <p class="text-muted leading-relaxed">Something happened, and part of you never fully moved on. We often use Cognitive Processing Therapy (CPT), typically 7–13 sessions. You don't have to keep carrying it alone.</p>
    <span class="directory-action">Learn more →</span>
  </a>

  <a href="{{ '/en/pages/anxiety/' | url }}">
    <h2>Anxiety</h2>
    <p class="text-muted leading-relaxed">Your mind won't stop. Your body is always on alert. We draw on CBT and mindfulness-based stress reduction (MBSR) — anxiety is a pattern, and patterns can change.</p>
    <span class="directory-action">Learn more →</span>
  </a>

</div>

<div class="not-prose mt-16 dawn-callout text-center">
  <p class="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Not sure where you fit?</p>
  <h3 class="text-2xl font-bold text-foreground mb-4">That's okay. Most people aren't.</h3>
  <p class="text-muted mb-8 max-w-xl mx-auto">The free consultation is a chance to talk through what's going on and figure out together whether we're a good fit. No pressure, no commitment.</p>
  {% scheduleButton "Schedule Free Consultation" %}
</div>

<div id="contact-form" class="not-prose mt-12">
  <div class="text-center mb-8">
    <p class="text-primary text-sm font-semibold tracking-widest uppercase mb-3">You don't have to figure it out alone.</p>
    <h2 class="text-2xl md:text-3xl font-bold text-foreground mb-4">Reach out and we'll take it from here.</h2>
    <p class="text-muted max-w-xl mx-auto">Fill out the form below and we'll be in touch within 1–2 business days.</p>
  </div>
  <div class="entry-panel max-w-lg mx-auto">
    {% from 'macros/google-form.njk' import googleForm %}
    {% set contactFields = [
      { label: "Name", placeholder: "Your full name", type: "text", entry: "entry.1227396429", required: true },
      { label: "Phone", placeholder: "(555) 555-5555", type: "tel", entry: "entry.1797015219", required: true },
      { label: "Email", placeholder: "you@example.com", type: "email", entry: "entry.530090678", required: true },
      { label: "Message / Note", placeholder: "What's on your mind?", type: "textarea", entry: "entry.965605968", help: "Share what you'd like help with and a few days and times that work for a consultation.", required: false },
      { label: "Best time to call", placeholder: "e.g. weekday mornings", type: "text", entry: "entry.653282957", required: false },
      { label: "Preferred language", placeholder: "Select one", type: "select", entry: "entry.1926704313", required: false, default: "English", options: [{ value: "English", label: "English" }, { value: "Español", label: "Español" }] },
      { label: "How did you hear about us?", placeholder: "Select one", type: "select", entry: "entry.384378261", required: false, options: [{ value: "Google search/Busqueda de Google", label: "Google search" }, { value: "Ad/Aviso publicitario", label: "Ad" }, { value: "Instagram", label: "Instagram" }, { value: "Facebook", label: "Facebook" }, { value: "Friend / Amigx", label: "Friend" }, { value: "Doc Referral / Referido", label: "Doctor referral" }, { value: "Other", label: "Other" }] }
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

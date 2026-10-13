---
title: "Session Rates"
title_hidden: false
description_hidden: true
meta_title: "Therapy Rates in Maryland & Virginia | Grey Wellness"
description: "Session rates for bilingual virtual therapy in Maryland and Virginia. View evaluation, individual and group therapy fees, and reduced-fee options."
date: "git Last Modified"
date_hidden: true
permalink: /en/rates/
layout: layouts/base.njk
templateEngineOverride: njk,md
---

Virtual therapy for adults throughout Maryland and Virginia, in English and Spanish. Below are the session fees at Grey Wellness.

## Session fees

<div class="not-prose text-foreground my-6">
<p class="text-right text-sm text-muted mb-2">Rate</p>
<dl>
<div class="flex items-center justify-between gap-6 border-b border-border py-5"><dt class="font-medium"><a href="#contact-form" class="text-primary underline">Free consultation</a><span class="block mt-1 text-sm font-normal text-muted">15 min</span></dt><dd class="shrink-0 text-xl font-semibold">$0</dd></div>
<div class="flex items-center justify-between gap-6 border-b border-border py-5"><dt class="font-medium">New client evaluation<span class="block mt-1 text-sm font-normal text-muted">90 min</span></dt><dd class="shrink-0 text-xl font-semibold">$230</dd></div>
<div class="flex items-center justify-between gap-6 border-b border-border py-5"><dt class="font-medium">Individual psychotherapy<span class="block mt-1 text-sm font-normal text-muted">60 min</span></dt><dd class="shrink-0 text-xl font-semibold">$190</dd></div>
<div class="flex items-center justify-between gap-6 border-b border-border py-5"><dt class="font-medium">Individual psychotherapy<span class="block mt-1 text-sm font-normal text-muted">45 min</span></dt><dd class="shrink-0 text-xl font-semibold">$160</dd></div>
<div class="flex items-center justify-between gap-6 border-b border-border py-5"><dt class="font-medium">Individual psychotherapy<span class="block mt-1 text-sm font-normal text-muted">30 min</span></dt><dd class="shrink-0 text-xl font-semibold">$120</dd></div>
<div class="flex items-center justify-between gap-6 border-b border-border py-5"><dt class="font-medium"><a href="/en/pages/groups/" class="text-primary underline">Group therapy</a><span class="block mt-1 text-sm font-normal text-muted">Per session</span></dt><dd class="shrink-0 text-xl font-semibold">$75</dd></div>
</dl>
</div>

## Reduced-fee options

A limited number of reduced-fee spots are available on a case-by-case basis. If cost is a concern, please ask during your free consultation so we can discuss the options available.

<div id="contact-form" class="not-prose text-foreground mt-12">
  <div class="text-center mb-8">
    <p class="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Ready to get started?</p>
    <h2 class="text-2xl md:text-3xl font-bold text-foreground mb-4">Questions about session fees?</h2>
    <p class="text-muted max-w-xl mx-auto">Fill out the form below and we'll be in touch within 1–2 business days.</p>
  </div>
  <div class="max-w-lg mx-auto">
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
      uid="investment-en",
      submitLabel="Send Message",
      successTitle="Message sent!",
      successBody="Thank you for reaching out. I'll be in touch within 1–2 business days.",
      gaEventName="contact_form_submitted",
      gaEventCategory="contact",
      gaEventLabel="investment_page_en",
      adsConversion=""
    ) }}
  </div>
</div>

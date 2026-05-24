---
title: Contact
title_hidden: false
meta_title: "Contact & Free Consultation | Grey Wellness Bethesda"
description: "Book a free 15-minute consultation with Mónica Grey, bilingual CBT-I therapist. No commitment required. New clients welcome in English and Spanish."
description_hidden: true
date: "git Last Modified"
date_hidden: true
layout: layouts/base.njk
templateEngineOverride: njk,md
---

## Free Consultation

Getting started with therapy is a big step, and finding the right person matters. That is why I offer a free 15-minute consultation before anything else.

We will meet over video call, unless you prefer otherwise, and this time is simply for us to get to know each other a little. You will have the chance to share what is bringing you to therapy, ask any questions you have, and get a feel for how I work. I will share a bit about my background and experience so you can get a sense of who I am and how I approach the work.

There is no pressure to make a decision on the call. I genuinely encourage you to take your time, and if it feels right, to speak with a few other therapists before committing. This is a deeply personal process and you deserve to feel confident and comfortable with whoever you choose to work with.

---

<div class="max-w-2xl mx-auto px-6">
  <p class="text-lg text-muted mb-8">
    When you feel ready, fill out the form below and we will be in touch within 1–2 business days.
  </p>

<div class="rounded-2xl border border-border bg-card p-8 shadow-sm">
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
  uid="contact-en",
  submitLabel="Send Message",
  successTitle="Message sent!",
  successBody="Thank you for reaching out. I'll be in touch within 1–2 business days.",
  gaEventName="contact_form_submitted",
  gaEventCategory="contact",
  gaEventLabel="contact_page_en",
  adsConversion=""
) }}
</div>

</div>

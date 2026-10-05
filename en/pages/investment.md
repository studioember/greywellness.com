---
title: Insurance & Rates
title_hidden: false
description_hidden: true
meta_title: "Insurance & Therapy Rates in Maryland and Virginia | Grey Wellness"
description: "Transparent pricing for therapy at Grey Wellness. Session fees, accepted insurance plans in Maryland, self-pay in Virginia, and sliding scale options."
date: "git Last Modified"
date_hidden: true
permalink: /en/rates/
layout: layouts/base.njk
templateEngineOverride: njk,md
---

Explore insurance options for Maryland, self-pay rates for Maryland and Virginia, and support with out-of-network reimbursement.

<section class="not-prose text-foreground my-8" aria-labelledby="insurance-heading">
<h2 id="insurance-heading" class="text-2xl font-bold text-foreground">Insurance in Maryland</h2>
<p class="mt-3 text-muted">We accept the following insurance plans for Maryland clients:</p>
<ul class="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2" role="list">
<li class="text-base font-medium">Carelon Behavioral Health</li>
<li class="text-base font-medium">CareFirst BlueCross BlueShield</li>
<li class="text-base font-medium">Oscar (Optum)</li>
<li class="text-base font-medium">United Healthcare (Optum)</li>
<li class="text-base font-medium">Oxford (Optum)</li>
<li class="text-base font-medium">Cigna</li>
<li class="text-base font-medium">Aetna</li>
</ul>
<p class="mt-5 text-sm text-muted">Plan participation varies. Contact us to confirm whether your specific plan is accepted.</p>
<a href="#contact-form" class="mt-5 inline-block rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Ask about your plan →</a>
</section>

<aside class="not-prose text-foreground my-8 border-l-2 border-primary pl-5" aria-labelledby="virginia-heading">
<h2 id="virginia-heading" class="text-lg font-semibold">Care in Virginia</h2>
<p class="mt-2 text-muted">Virginia sessions are available through self-pay. Insurance is currently accepted only for Maryland clients.</p>
</aside>

## Self-pay rates

These rates apply when paying privately. When using accepted insurance, your cost depends on your plan and benefits.

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

## Out-of-network reimbursement

If your plan is not accepted, you may have out-of-network benefits. We can provide a detailed receipt, called a superbill, for you to submit to your insurer for reimbursement.

**The Mentaya tool checks out-of-network benefits. It does not confirm whether we accept your plan.** Please contact us for that information. Reimbursement depends on your plan.

<iframe width="100%" height=350 style="border:none;border-radius:20px;max-width:600px;margin:auto;display:block;" onload="const resize=() => this.height=this.clientWidth >= 600?350:590;resize();window.addEventListener('resize', resize);" src="https://app.mentaya.com/public/practices/Pq2FnJsy2h701kzicyOz/eligibility/widget" title="Check Mentaya eligibility"></iframe>

## Reduced-fee options

A limited number of reduced-fee spots are available on a case-by-case basis. If cost is a concern, please ask during your free consultation so we can discuss the options available.

<div id="contact-form" class="not-prose text-foreground mt-12">
  <div class="text-center mb-8">
    <p class="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Ready to get started?</p>
    <h2 class="text-2xl md:text-3xl font-bold text-foreground mb-4">Questions about coverage or cost?</h2>
    <p class="text-muted max-w-xl mx-auto">Fill out the form below and we'll be in touch within 1–2 business days.</p>
  </div>
  <div class="max-w-lg mx-auto">
    {% from 'macros/google-form.njk' import googleForm %}
    {% set contactFields = [
      { label: "Name", placeholder: "Your full name", type: "text", entry: "entry.1227396429", required: true },
      { label: "Phone", placeholder: "(555) 555-5555", type: "tel", entry: "entry.1797015219", required: true },
      { label: "Email", placeholder: "you@example.com", type: "email", entry: "entry.530090678", required: true },
      { label: "Message / Note", placeholder: "What's on your mind?", type: "textarea", entry: "entry.965605968", help: "Using insurance? Include your insurance provider and plan name in your message. Insurance is accepted for Maryland clients only; Virginia sessions are self-pay.", required: false },
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

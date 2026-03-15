---
title: Groups
title_hidden: false
meta_title: "Group Therapy | Grey Wellness"
description: "Small-group therapy sessions at Grey Wellness. Evidence-based, therapist-led groups on specific topics. See current and upcoming offerings."
date: "git Last Modified"
date_hidden: true
layout: layouts/base.njk
hidden_from_nav: true
---

<p class="text-muted text-lg leading-relaxed">Group therapy offers something individual therapy cannot: the experience of working through something alongside people who truly get it. Groups at Grey Wellness are small, structured, and led by a licensed therapist.</p>

{% assign activeGroups = collections.groups %}

{% if activeGroups.size > 0 %}

<div class="not-prose mt-10 space-y-6">
  {% for group in activeGroups %}
  <div class="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">

    <!-- Header bar -->
    <div class="bg-[#31272d] px-8 py-6 flex items-start justify-between gap-4">
      <div class="flex items-center gap-4">
        {% if group.data.emoji %}
          <span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-2xl shrink-0">{{ group.data.emoji }}</span>
        {% endif %}
        <div>
          <p class="text-xs font-semibold text-white/50 uppercase tracking-widest mb-1">Group Program</p>
          <h2 class="text-xl font-bold text-white leading-tight">{{ group.data.title }}</h2>
          {% if group.data.tagline %}
            <p class="text-white/60 text-sm mt-1">{{ group.data.tagline }}</p>
          {% endif %}
        </div>
      </div>
    </div>

    <!-- Body -->
    <div class="px-8 py-5 flex items-center justify-between gap-6">
      <div class="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
        {% if group.data.start_date %}<span>📅 {{ group.data.start_date }}</span>{% endif %}
        {% if group.data.sessions %}<span>🗓 {{ group.data.sessions }} weeks</span>{% endif %}
        {% if group.data.format %}<span>💻 {{ group.data.format }}</span>{% endif %}
        {% if group.data.price %}<span>💰 {{ group.data.price }}</span>{% endif %}
      </div>
      <a href="{{ group.url | url }}" class="shrink-0 inline-block px-5 py-2.5 rounded-md bg-[#DBA20D] text-[#31272d] text-sm font-semibold tracking-wide uppercase hover:opacity-90 transition-opacity">
        Learn More →
      </a>
    </div>

  </div>
  {% endfor %}
</div>

{% else %}

<div class="not-prose mt-10 rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
  <span class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#DBA20D]/15 text-3xl mb-5">🌿</span>
  <h2 class="text-2xl font-bold text-foreground mb-3">No groups are running right now.</h2>
  <p class="text-muted leading-relaxed max-w-md mx-auto mb-6">New groups are offered periodically. Join the waitlist and we will reach out when something that might be a good fit becomes available.</p>
  <a href="{{ '/pages/contact/' | url }}" class="inline-block px-6 py-3 rounded-md bg-[#DBA20D] text-[#31272d] text-sm font-semibold tracking-wide uppercase hover:opacity-90 transition-opacity">
    Join the Waitlist
  </a>
</div>

{% endif %}

<div class="not-prose mt-14">
  <h2 class="text-xl font-bold text-foreground mb-6">What to expect from a group</h2>
  <div class="grid sm:grid-cols-2 gap-4">
    <div class="rounded-xl border border-border bg-card p-6 shadow-sm">
      <p class="font-semibold text-foreground mb-2">Small and intentional</p>
      <p class="text-sm text-muted leading-relaxed">Groups are kept small on purpose. You will have space to speak, to listen, and to actually know the people in the room.</p>
    </div>
    <div class="rounded-xl border border-border bg-card p-6 shadow-sm">
      <p class="font-semibold text-foreground mb-2">Therapist-led</p>
      <p class="text-sm text-muted leading-relaxed">Every session is facilitated by a licensed therapist. The group has structure and a clear focus, not just open conversation.</p>
    </div>
    <div class="rounded-xl border border-border bg-card p-6 shadow-sm">
      <p class="font-semibold text-foreground mb-2">Topic-focused</p>
      <p class="text-sm text-muted leading-relaxed">Each group centers on a specific theme. You will always know exactly what you are signing up for.</p>
    </div>
    <div class="rounded-xl border border-border bg-card p-6 shadow-sm">
      <p class="font-semibold text-foreground mb-2">Time-limited</p>
      <p class="text-sm text-muted leading-relaxed">Groups run for a set number of sessions with a clear beginning and end. No open-ended commitments.</p>
    </div>
  </div>
</div>

<div class="not-prose mt-16 rounded-2xl bg-[#31272d] px-8 py-10 text-center">
  <h3 class="text-2xl font-bold text-white mb-4">Questions about group therapy?</h3>
  <p class="text-white/70 mb-8 max-w-xl mx-auto">Not sure if group therapy is right for you? Reach out and we are happy to talk it through.</p>
  {% scheduleButton "Schedule Free Consultation" %}
</div>

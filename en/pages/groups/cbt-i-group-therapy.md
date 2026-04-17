---
layout: layouts/base.njk
title: CBT-I Group Therapy
title_hidden: true
no_prose: true
full_width: true
hidden_from_nav: true
description: CBT-I Group Therapy with Grey Wellness — a 6-week virtual program to overcome chronic insomnia without medication.
tagline: Overcome chronic insomnia without medication
start_date: "April 22, 2026"
schedule: "Wednesdays at 7:00 PM ET"
sessions: 8
format: Virtual
price: "$75 / session"
status: closed
emoji: "🌙"
topics:
  - Sleep restriction
  - Stimulus control
  - Sleep hygiene
  - Relaxation techniques
  - Cognitive restructuring
---

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,700;1,300&display=swap">

<style>
  .cbti-flyer {
    --plum:    #1b0d1d;
    --wine:    #6c3759;
    --lavender:#cbbed7;
    --light-bg:#f6f5f7;
    --border:  #e5e2e8;
    --gray-mid:#777777;
    --gray-lt: #aaaaaa;
    --body-txt: #444444;

    font-family: 'Nunito', sans-serif;
  }

  .cbti-flyer .page {
    max-width: 720px;
    margin: 0 auto;
    background: #ffffff;
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  }

  .cbti-flyer .tag {
    display: inline-block;
    border: 1px solid var(--wine);
    color: var(--wine);
    font-family: 'Nunito', sans-serif;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    padding: 4px 12px;
    border-radius: 20px;
    margin-bottom: 1.25rem;
    text-transform: uppercase;
    align-self: flex-start;
    white-space: nowrap;
  }

  .cbti-flyer .headline {
    font-family: 'Poppins', sans-serif;
    line-height: 1.0;
    margin-bottom: 0.75rem;
  }
  .cbti-flyer .line-plain {
    display: block;
    font-size: clamp(2rem, 8vw, 3.25rem);
    font-weight: 700;
    color: var(--plum);
  }
  .cbti-flyer .line-italic {
    display: block;
    font-size: clamp(1.6rem, 6.5vw, 2.6rem);
    font-weight: 300;
    font-style: italic;
    color: var(--wine);
    margin-top: 0.05rem;
  }

  .cbti-flyer .subhead {
    font-family: 'Poppins', sans-serif;
    font-size: 0.7rem;
    font-weight: 400;
    color: var(--gray-mid);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  .cbti-flyer .accent-rule {
    width: 32px;
    height: 2px;
    background: var(--wine);
    margin-bottom: 1.25rem;
  }

  .cbti-flyer .body-copy {
    font-size: 0.9rem;
    line-height: 1.65;
    color: var(--body-txt);
    margin-bottom: 1.25rem;
  }

  .cbti-flyer .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    margin-bottom: 1.25rem;
  }
  .cbti-flyer .card {
    background: var(--light-bg);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 0.6rem 0.75rem;
    display: flex;
    flex-direction: column;
    min-height: 4rem;
  }
  .cbti-flyer .card-label {
    font-size: 0.6rem;
    font-weight: 700;
    color: var(--gray-lt);
    letter-spacing: 0.10em;
    text-transform: uppercase;
    margin-bottom: 0.2rem;
  }
  .cbti-flyer .card-value {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: var(--plum);
    line-height: 1.15;
    flex: 1;
  }
  .cbti-flyer .card-sub {
    font-size: 0.75rem;
    color: var(--gray-mid);
    margin-top: 0.2rem;
  }
  .cbti-flyer .card-cal-link {
    display: inline-block;
    margin-top: 0.35rem;
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--wine);
    text-decoration: none;
    opacity: 0.8;
  }
  .cbti-flyer .card-cal-link:hover {
    opacity: 1;
  }

  .cbti-flyer .topics-label {
    font-size: 0.6rem;
    font-weight: 700;
    color: var(--gray-lt);
    letter-spacing: 0.10em;
    text-transform: uppercase;
    margin-bottom: 0.6rem;
  }
  .cbti-flyer .topics {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-bottom: 1.25rem;
  }
  .cbti-flyer .topic-pill {
    border: 1px solid var(--plum);
    color: var(--plum);
    font-size: 0.75rem;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 20px;
    white-space: nowrap;
  }

  .cbti-flyer .cta {
    background: var(--plum);
    border-radius: 10px;
    padding: 1rem 1.25rem;
    margin-bottom: 1.25rem;
  }
  .cbti-flyer .cta-eyebrow {
    font-size: 0.6rem;
    font-weight: 700;
    color: var(--gray-mid);
    letter-spacing: 0.10em;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
  }
  .cbti-flyer .cta-name {
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 0.4rem;
    line-height: 1.1;
  }
  .cbti-flyer .cta-contact {
    font-size: 0.875rem;
    color: var(--lavender);
    line-height: 1.75;
  }

  .cbti-flyer .footer {
    text-align: center;
    font-size: 0.75rem;
    color: var(--gray-lt);
    margin-top: auto;
    padding-top: 0.75rem;
  }

  .cbti-flyer .cta-email-btn {
    display: inline-block;
    margin-top: 0.75rem;
    padding: 8px 20px;
    background: var(--lavender);
    color: var(--plum);
    font-family: 'Poppins', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    border-radius: 6px;
    text-decoration: none;
    cursor: pointer;
  }
  .cbti-flyer .cta-email-btn:hover {
    opacity: 0.85;
  }
  .cbti-flyer .cta-also {
    margin-top: 0.75rem;
    font-size: 0.75rem;
    color: var(--lavender);
    opacity: 0.75;
    line-height: 1.7;
  }
  .cbti-flyer .cta-also-link {
    color: var(--lavender);
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  .cbti-flyer .cta-also-link:hover {
    opacity: 1;
  }

  @media print {
    .cbti-flyer {
      background: white;
      padding: 0;
    }
    .cbti-flyer .page {
      box-shadow: none;
    }
  }
</style>

<div class="cbti-flyer">
  <div class="page">

    <span class="tag">Virtual Group Program</span>

    <div class="headline">
      <span class="line-plain">Sleep</span>
      <span class="line-italic">Again,</span>
      <span class="line-plain">Deeply.</span>
    </div>

    <p class="subhead">CBT-I Group Therapy</p>
    <div class="accent-rule"></div>

    <p class="body-copy">
      CBT-I (Cognitive Behavioral Therapy for Insomnia) is the gold-standard,
      evidence-based approach to overcoming chronic sleep problems — without medication.
      Join a small virtual group and finally reclaim your rest.
    </p>

    <div class="cards">
      <div class="card">
        <div class="card-label">Starts</div>
        <div class="card-value">Wed, April 22</div>
        <div class="card-sub">7:00 PM ET</div>
        <a class="card-cal-link" href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=CBT-I+Group+Therapy+%E2%80%93+Grey+Wellness&dates=20260422T230000Z%2F20260423T000000Z&details=6-week+virtual+CBT-I+Group+Therapy+with+Grey+Wellness.%0A%0ARegister+%26+inquire%3A%0Acontact%40greywellness.com+%7C+240-203-8879%0A%0AMore+info%3A+https%3A%2F%2Fgreywellness.com%2Fen%2Fpages%2Fgroups%2Fcbt-i-group-therapy%2F&location=Virtual+%E2%80%93+Secure+Telehealth&recur=RRULE:FREQ%3DWEEKLY%3BCOUNT%3D6" target="_blank" rel="noopener noreferrer">+ Add to Calendar</a>
      </div>
      <div class="card">
        <div class="card-label">Program</div>
        <div class="card-value">8 Weeks</div>
        <div class="card-sub">Weekly virtual sessions</div>
      </div>
      <div class="card">
        <div class="card-label">Rates</div>
        <div class="card-value">$75 / session</div>
      </div>
      <div class="card">
        <div class="card-label">Format</div>
        <div class="card-value">Virtual</div>
        <div class="card-sub">Secure telehealth</div>
      </div>
    </div>

    <p class="topics-label">What you will work on</p>
    <div class="topics">
      <span class="topic-pill">Sleep restriction</span>
      <span class="topic-pill">Stimulus control</span>
      <span class="topic-pill">Sleep hygiene</span>
      <span class="topic-pill">Relaxation techniques</span>
      <span class="topic-pill">Cognitive restructuring</span>
    </div>

    <div class="cta">
      <p class="cta-eyebrow">Register &amp; Inquire</p>
      <p class="cta-name">Mónica Grey, LCPC</p>
      <a class="cta-email-btn" href="mailto:contact@greywellness.com?subject=CBT-i%20Group%20Therapy%20Registration">Register Now</a>
      <p class="cta-also">You can also reach me directly to register:<br>
        <a class="cta-also-link" href="mailto:contact@greywellness.com?subject=CBT-i%20Group%20Therapy%20Registration">contact@greywellness.com</a>
        &nbsp;·&nbsp;
        <a class="cta-also-link" href="tel:+12402038879">240-203-8879</a>
      </p>
    </div>

    <p class="footer">Space is limited &nbsp;·&nbsp; Small group format</p>

  </div>
</div>

<script>
  (() => {
    const flyer = document.querySelector('.cbti-flyer');
    if (!flyer || typeof gtag === 'undefined') return;

    flyer.querySelector('.card-cal-link')?.addEventListener('click', () => {
      gtag('event', 'add_to_calendar', {
        event_category: 'cbti_group_therapy',
        event_label: 'CBT-I Group Therapy – April 22'
      });
    });

    flyer.querySelector('.cta-email-btn')?.addEventListener('click', () => {
      gtag('event', 'contact_click', {
        event_category: 'cbti_group_therapy',
        event_label: 'Email Registration'
      });
    });
  })();
</script>

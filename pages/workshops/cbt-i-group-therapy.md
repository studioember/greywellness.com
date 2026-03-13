---
layout: layouts/base.njk
title: CBT-I Group Therapy
title_hidden: true
no_prose: true
full_width: true
hidden_from_nav: true
description: CBT-I Group Therapy with Grey Wellness — a 6-week virtual program to overcome chronic insomnia without medication.
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

    background: #ddd8e2;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 40px 16px 60px;
    font-family: 'Nunito', sans-serif;
  }

  .cbti-flyer .page {
    width: 8.5in;
    max-width: 100%;
    min-height: 11in;
    background: #ffffff;
    padding: 0.72in 0.75in;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 40px rgba(0,0,0,0.18);
  }

  .cbti-flyer .tag {
    display: inline-block;
    border: 1px solid var(--wine);
    color: var(--wine);
    font-family: 'Nunito', sans-serif;
    font-size: 7pt;
    font-weight: 700;
    letter-spacing: 0.08em;
    padding: 3px 12px;
    border-radius: 20px;
    margin-bottom: 0.22in;
    text-transform: uppercase;
    align-self: flex-start;
  }

  .cbti-flyer .headline {
    font-family: 'Poppins', sans-serif;
    line-height: 1.0;
    margin-bottom: 0.14in;
  }
  .cbti-flyer .line-plain {
    display: block;
    font-size: 42pt;
    font-weight: 700;
    color: var(--plum);
  }
  .cbti-flyer .line-italic {
    display: block;
    font-size: 34pt;
    font-weight: 300;
    font-style: italic;
    color: var(--wine);
    margin-top: 0.01in;
  }

  .cbti-flyer .subhead {
    font-family: 'Poppins', sans-serif;
    font-size: 9pt;
    font-weight: 400;
    color: var(--gray-mid);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 0.10in;
  }
  .cbti-flyer .accent-rule {
    width: 32px;
    height: 2px;
    background: var(--wine);
    margin-bottom: 0.26in;
  }

  .cbti-flyer .body-copy {
    font-size: 9.5pt;
    line-height: 1.65;
    color: var(--body-txt);
    margin-bottom: 0.26in;
  }

  .cbti-flyer .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.10in;
    margin-bottom: 0.26in;
  }
  .cbti-flyer .card {
    background: var(--light-bg);
    border: 0.75px solid var(--border);
    border-radius: 6px;
    padding: 0.10in 0.13in;
    display: flex;
    flex-direction: column;
    min-height: 0.72in;
  }
  .cbti-flyer .card-label {
    font-size: 6.5pt;
    font-weight: 700;
    color: var(--gray-lt);
    letter-spacing: 0.10em;
    text-transform: uppercase;
    margin-bottom: 0.04in;
  }
  .cbti-flyer .card-value {
    font-family: 'Poppins', sans-serif;
    font-size: 13pt;
    font-weight: 700;
    color: var(--plum);
    line-height: 1.15;
    flex: 1;
  }
  .cbti-flyer .card-sub {
    font-size: 8.5pt;
    color: var(--gray-mid);
    margin-top: 0.04in;
  }

  .cbti-flyer .topics-label {
    font-size: 6.5pt;
    font-weight: 700;
    color: var(--gray-lt);
    letter-spacing: 0.10em;
    text-transform: uppercase;
    margin-bottom: 0.12in;
  }
  .cbti-flyer .topics {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-bottom: 0.26in;
  }
  .cbti-flyer .topic-pill {
    border: 1px solid var(--plum);
    color: var(--plum);
    font-size: 8.5pt;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 20px;
    white-space: nowrap;
  }

  .cbti-flyer .cta {
    background: var(--plum);
    border-radius: 10px;
    padding: 0.17in 0.20in 0.18in;
    margin-bottom: 0.22in;
  }
  .cbti-flyer .cta-eyebrow {
    font-size: 6.5pt;
    font-weight: 700;
    color: var(--gray-mid);
    letter-spacing: 0.10em;
    text-transform: uppercase;
    margin-bottom: 0.07in;
  }
  .cbti-flyer .cta-name {
    font-family: 'Poppins', sans-serif;
    font-size: 16pt;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 0.08in;
    line-height: 1.1;
  }
  .cbti-flyer .cta-contact {
    font-size: 10pt;
    color: var(--lavender);
    line-height: 1.75;
  }

  .cbti-flyer .footer {
    text-align: center;
    font-size: 8pt;
    color: var(--gray-lt);
    margin-top: auto;
    padding-top: 0.10in;
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
        <div class="card-sub">7:00 PM</div>
      </div>
      <div class="card">
        <div class="card-label">Program</div>
        <div class="card-value">6 Weeks</div>
        <div class="card-sub">Weekly virtual sessions</div>
      </div>
      <div class="card">
        <div class="card-label">Investment</div>
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
      <div class="cta-contact">
        contact@greywellness.com<br>
        240-203-8879
      </div>
    </div>

    <p class="footer">Space is limited &nbsp;·&nbsp; Small group format</p>

  </div>
</div>

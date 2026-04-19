# Google Analytics & Ads Conversion Setup
### Contact Form → "contact_form_submitted" Conversion

This guide is specific to the Grey Wellness site. Both tracking tags are **already installed** in `_includes/layouts/base.njk`:

| Property | ID |
|---|---|
| GA4 Measurement ID | `G-4B4KP12KBL` |
| Google Ads Conversion ID | `AW-18020466610` |

The contact form macro (`_includes/macros/google-form.njk`) already fires `gtag()` on a successful submit. The conversion action in Google Ads (`contact_form_submitted`) already exists and is **sourced from GA4** — meaning Google Ads receives the signal through the GA4 account link, not through a separate tag. No conversion label exists and none is needed.

---

## Current status

| Step | Status |
|---|---|
| GA4 tag installed | ✅ Done — `G-4B4KP12KBL` in `base.njk` |
| Google Ads tag installed | ✅ Done — `AW-18020466610` in `base.njk` |
| Form fires `contact_form_submit` event | ✅ Done — `google-form.njk` macro |
| GA4 ↔ Google Ads accounts linked | ✅ Done — confirmed by GA4 import source |
| `contact_form_submitted` conversion action in Ads | ✅ Done — imported from GA4 |
| `adsConversion` param in contact form | ✅ Leave empty — not needed for GA4-imported conversions |

**The tracking pipeline is complete. No code changes are required.**

---

## How the conversion flow works

```
User submits contact form
  → google-form.njk fires: gtag('event', 'contact_form_submit', {...})
  → GA4 (G-4B4KP12KBL) records the event
  → Google Ads imports it via the linked GA4 property
  → Conversion "contact_form_submitted" is credited in Google Ads
```

GA4-imported conversions do not use a `send_to` label. The `adsConversion` parameter in the form macro is only needed if you create a separate **native website tag** conversion action in Google Ads. That is not necessary here.

---

## Part 1 — Confirm GA4 marks the event as a conversion

The form fires this event on every successful submit:
```js
gtag('event', 'contact_form_submit', {
  event_category: 'contact',
  event_label:    'contact_page_en'   // or 'contact_page_es' on the Spanish form
})
```

**Steps:**

1. Go to [analytics.google.com](https://analytics.google.com) → select the **Grey Wellness** property (`G-4B4KP12KBL`).
2. **Admin** (gear icon) → **Events** (under "Data display").
3. Find `contact_form_submit` in the list and confirm **Mark as conversion** is toggled ON.
   *(If the form has never been submitted on the live site, the event won't appear yet — submit a test entry first, then wait up to 24 hours.)*
4. In **Admin → Conversions**, confirm `contact_form_submit` is listed.

---

## Part 2 — Confirm the Google Ads conversion action

1. In Google Ads → **Goals** → **Conversions** → **Summary**.
2. Open `contact_form_submitted`.
3. Verify the settings match:

| Field | Expected value |
|---|---|
| Source | Google Analytics (GA4) |
| GA4 event | `contact_form_submit` |
| GA4 property name | Grey Wellness |
| Action optimization | Submit lead forms, Primary action |
| Count | One conversion |
| Attribution | Data-driven |

If the source says anything other than "Google Analytics (GA4)", the action was created as a native tag and will have a label — in that case see the appendix below.

---

## Part 3 — Verify it's working end-to-end

### Option A — GA4 DebugView (recommended)
1. Install the [**Google Analytics Debugger**](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) Chrome extension and enable it.
2. In GA4 → **Admin → DebugView**.
3. Submit the contact form on the live site (use a real email or a test entry).
4. Watch for `contact_form_submit` to appear in the event stream within seconds.
5. Click the event to confirm `event_category: contact` and `event_label: contact_page_en` are present.

### Option B — Google Tag Assistant
1. Go to [tagassistant.google.com](https://tagassistant.google.com) → **Add domain** → `https://greywellness.com`.
2. Navigate to the contact page and submit the form.
3. Confirm `G-4B4KP12KBL` fires a `contact_form_submit` event.

### Option C — Browser console
Open DevTools → Console on the contact page. After submitting the form, run:
```js
window.dataLayer
```
Look for an object with `event: 'contact_form_submit'`.

> **Note on Google Ads reporting lag:** GA4-imported conversions appear in Google Ads with a delay of up to 3 days. Don't expect to see a conversion credited in Ads within hours of a test submit.

---

## Part 4 — Set up a Google Ads Search campaign

Once you've confirmed the conversion fires in GA4:

1. **Google Ads** → **+ New campaign** → **Leads**.
2. **Conversion goal**: select `contact_form_submitted`.
3. **Campaign type**: Search.
4. **Bidding**: Start with **Maximize conversions**; switch to **Target CPA** once you have ≥ 30 conversions in 30 days.
5. **Budget**: Start with $15–25/day to gather data.
6. **Location**: Bethesda, MD + surrounding zip codes (20814, 20816, 20817, 20910) or a radius around the office address.
7. **Languages**: English + Spanish (to reach both `en/` and `es/` page visitors).
8. **Keywords** (match types to test):
   - `[CBT-I therapist bethesda]`
   - `[insomnia therapist near me]`
   - `"bilingual therapist bethesda"`
   - `"therapist bethesda anxiety"`
   - `therapy for insomnia maryland` (broad match — monitor closely)
9. **Ad copy** — lead with the free consultation:
   - **Headline 1**: Free 15-Min Consultation
   - **Headline 2**: CBT-I & Anxiety Therapy
   - **Headline 3**: English & Spanish · Bethesda
   - **Description**: Board-certified CBT-I therapist. Evidence-based care for sleep, anxiety & trauma. Book your free call today.
10. **Final URL**: `https://greywellness.com/en/pages/contact/`

### Negative keywords to add from day one
```
free therapy
free counseling
therapist jobs
therapy training
self help
cheap
```

---

## Quick-reference checklist

- [ ] GA4: `contact_form_submit` marked as conversion *(confirm toggle is ON)*
- [ ] Google Ads: `contact_form_submitted` action shows Source = Google Analytics (GA4)
- [ ] Submit a test form entry on the live site
- [ ] GA4 DebugView confirms `contact_form_submit` event fires
- [ ] Search campaign created with `contact_form_submitted` as the conversion goal
- [ ] Location targeting set to Bethesda radius
- [ ] Negative keyword list added

---

## Appendix — If you ever want a native Google Ads tag conversion

A native conversion action gives you a `send_to` label and fires immediately on submit (no GA4 import lag). You would only need this if the GA4-imported conversion stops working or you want redundant tracking.

1. Google Ads → **Goals → Conversions → + New conversion action → Website → Add manually**.
2. Set category to "Submit lead form", count "One".
3. After saving, copy the `send_to` value: `AW-18020466610/XXXXXXXXXXXX`.
4. In `en/pages/contact.md`, set `adsConversion="AW-18020466610/XXXXXXXXXXXX"`.
5. Do the same in `es/pages/contact.md`.
6. **Set the GA4-imported action to "Secondary"** in Google Ads to avoid double-counting.

# Provider referrals page

## Approved design and implementation plan

A separate PR from updated origin/main. Bilingual /en/for-providers/ and /es/for-providers/ pages use the existing site styling and a one-page print-friendly referral guide. Lead with adult CBT-I, anxiety, and trauma care in Maryland, Virginia, and Washington, DC. Insurance is Maryland-only; Virginia and DC are self-pay, as confirmed by the owner.

Use phone-first referral instructions and a fax placeholder, per the owner's request. Do not direct providers to send records to an unverified workflow. Patient self-referral is by phone. The existing portal is for established clients, not assumed to accept new patients or provider referrals.

No public patient-information form, analytics, advertising tags, third-party badge scripts, or remote fonts on either referral page. Add a no-referrer policy and restrictive page CSP. The public notice distinguishes this page from linked pages/services and ordinary hosting logs. Print and Save as PDF use the browser locally.

Implementation:
- [x] Add bilingual content and shared referral layout with fax placeholder, patient choice, care coordination, and practical privacy notice.
- [x] Add page-specific privacy controls, footer discovery link, and print styling.
- [x] Verify generated privacy boundaries, translations, printable output, and existing form checks; review and open a separate PR.

## Review focus

No analytics inherited through the base layout or footer; no remote resource loads through CSS; no implicit referral acceptance or guarantees; no fax number substituted for the requested placeholder; print output preserves phone, fax status, eligibility, and privacy cautions. The DC/SEO PR remains separate.

## Legal basis and operational limits

This page reduces information collection and sets conservative referral instructions; it is not a legal opinion or a HIPAA certification. The practice must still verify its actual fax/portal safeguards, applicable business associate agreements, record-release authority, recipient identity, and operational procedures before accepting records. Patient agreement to a referral does not automatically authorize every disclosure. Psychotherapy notes and certain other records can have additional protections. Providers are instructed to confirm applicable authorization before transfer rather than given a blanket legal rule.

Sources reviewed October 30, 2026:
- [Maryland counseling ethics, including confidentiality and referral remuneration](https://regs.maryland.gov/us/md/exec/comar/10.58.03/index.full.html)
- [Maryland Health-General §4-307, mental health records](https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=ghg&section=4-307)
- [Virginia counseling standards, 18VAC115-20-130](https://law.lis.virginia.gov/admincode/title18/agency115/chapter20/section130/)
- [DC Health professional counseling regulations](https://dchealth.dc.gov/publication/dc-municipal-regulations-professional-counseling)
- [HHS: authorization for psychotherapy notes](https://www.hhs.gov/hipaa/for-professionals/faq/does-hipaa-permit-a-covered-entity-to-disclose-psychotherapy-notes-to-an-hio/index.html)
- [HHS: tracking technologies](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html)

HHS notes a court vacated part of its unauthenticated-public-page tracking guidance. Disabling trackers here is a deliberate privacy safeguard, not a claim that all public healthcare-page tracking is inherently prohibited.

## Verification

- Production build and live form-schema verification passed with `FORMS_STRICT=1 yarn build`; no form submissions were sent.
- Generated-page tests cover both languages, no remote resources or tracker code, no data-entry elements, CSP/referrer policy, fax placeholder, footer discovery, sitemap inclusion, and canonical/language links.
- Chrome print preview verified **one page in English and Spanish**, Letter portrait, default scale/margins, with browser headers and footers enabled. The print version uses condensed copy and 10-point body text; paper size, scaling, and custom printer settings can alter pagination. No physical print job was sent.
- Independent read-only review found no blocking issues.
- The in-app browser displayed both the page content and print control, but its print dialog could not be inspected; print validation used Chrome.

The existing development server stays available at http://localhost:8080/en/for-providers/.

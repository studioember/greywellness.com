---
permalink: false
eleventyExcludeFromCollections: true
---

# Grey Wellness design verification

The design reference was the English homepage at commit `4582aaa` in `_includes/layouts/daylight.njk` and `assets/css/daylight.css`. I compared the original and revised homepage captures in the same in-app browser output at 1280 × 720 CSS pixels. The browser screenshots were displayed at viewport size. The desktop browser reported device pixel ratio 2, and the mobile overrides used device pixel ratio 1. The original homepage was the reference for the shared typography, palette, navigation, spacing, and image treatment. The live site supplied the routing and content reference. It has a different design.

| Capture in the browser activity | Preview path | Viewport and state |
| --- | --- | --- |
| Comparing the settled homepage and opening navigation | `/en/` | 1280 × 720, after the opening animation |
| Comparing the revised specialty hero and reading the built sitemap | `/en/pages/sleep/` | 1280 × 720, first viewport before and after the revision |
| Reviewing the Spanish specialty page and mobile menu | `/es/pages/sleep/` | 390 × 844, menu closed and open |
| Reviewing desktop blog and privacy-preserving referral layouts | `/en/blog/` and `/en/for-providers/` | 1280 × 720, light theme |
| Retesting the blog link and alternate-language article | `/en/blog/posts/cbti-vs-sleep-medication/` | 1280 × 720, dark theme |
| Checking the form’s keyboard focus and keeping the redesigned site open | `/es/pages/contact/#contact-form` | 390 × 844, dark theme with visible keyboard focus |

Georgia headings and Nunito body text carry the homepage hierarchy into the interior pages. The homepage retains its night photograph, logo animation, and dark-to-warm progression. The inside pages use a warm cream or plum reading surface, with darker photo overlays on specialty pages. The original clinician, specialty, and blog photos render in their new crops. The referral guides retain a local system font and made no third-party subresource requests. The expanded navigation and the always-visible language switch are intended differences from the homepage prototype.

## Findings and fixes

- The first desktop specialty header placed the consultation button below the initial viewport. Scaling down the title and vertical padding brought the button into view at 660 CSS pixels on the revised 720-pixel capture.
- A wrapped blog title had empty space inside its click target. Making the title link a block and retaining the linked photo fixed the click. The retest opened the Spanish article and switched to its matching English article URL.
- The archived Turnstile implementation requested a widget on localhost even though the form hid it. The preview now skips that request. The live contact page loaded its response field. The migrated form still requires the widget response on the production hostname and uses the compact widget when the form is narrower than 300 pixels.

## Verification

- The 57 indexed URLs and all 59 public HTML routes match production. The count includes the root redirect and the non-indexed Spanish group placeholder. The four printable PDFs match production byte for byte.
- The content comparison checked body text and link destinations against production on the restored routes. The Spanish placeholder omits the old build timestamp.
- The browser checked 58 content routes at 320, 390, and 1280 pixels. All had a single main heading, no document-width overflow, and no broken loaded images. The build checked local assets and language metadata.
- Browser tests covered the menu and Escape key, keyboard form focus, article and specialty language switching, diary calculations and bilingual persistence, CSV download, and the root redirect.
- The strict build verified the Google Forms schema on all 20 form pages and passed the referral privacy and print checks. Form verification made no submissions.


## Homepage alignment pass

The desktop comparison paired the existing homepage with the final sleep therapy hero at 1280 × 720. The therapy and group pages now use full-width photography, cream headings with lavender italics, and peach consultation buttons. The photo and title fade into the reading surface beneath the navigation. The interior transitions are static, while the homepage keeps its opening and scroll animations.

The services, methods, tools, FAQ, and blog archives now use ruled rows with wider editorial spacing. The profile and illustrated articles reuse the homepage’s arched photo crop. The contact and landing pages pair their main copy with the form at desktop widths. The screen styles preserve the referral guide’s local resources and separate print layout.

| Browser capture | Preview path | Viewport and state |
| --- | --- | --- |
| Verifying final spacing beneath the navigation on every route | `/en/` and `/en/pages/sleep/` | 1280 × 720, matching viewport |
| Reviewing the light theme and comparing the final article typography | `/en/pages/contact/`, `/es/pages/treatment/`, and `/en/blog/posts/waking-up-at-3am/` | 1280 × 720, light contact and services, dark article |
| Inspecting mobile specialty and FAQ pages and the consultation landing page | `/es/pages/sleep/`, `/es/pages/faq/`, and `/en/lp/insomnia/` | 390 × 844 mobile and 1280 × 720 desktop |
| Rechecking all 348 layouts after the mobile heading fix | `/es/posts/` | 320 × 844 after the title fit fix |

The first article comparison showed loose headline leading. A tighter line height brought it into the homepage’s typographic rhythm. The Spanish Updates page overflowed at 320 pixels in both themes. It now fits the viewport in both themes. The final specialty screenshot also rechecked that both lines of introductory text stay clear of the fixed navigation.

The final browser sweep checked all 58 content routes at 320, 390, and 1280 CSS pixels in both light and dark themes. It found no horizontal overflow, clipped main headings, broken loaded images, or shared mastheads that encroached on the fixed navigation. The Spanish FAQ opened from the keyboard, the sleep consultation button reached the form, the Spanish tools page opened the sleep diary, and the provider print button remained available. The strict build passed with the same route and Google Forms schema coverage as the migration build.

## Final result

passed

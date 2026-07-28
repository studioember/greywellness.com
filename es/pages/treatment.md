---
title: Lo Que Tratamos
title_hidden: false
meta_title: "Terapia para el Insomnio, el Trauma y la Ansiedad | Grey Wellness"
description: "Terapia bilingüe para el insomnio, el trauma y la ansiedad. Aprenda qué lleva a las personas a Grey Wellness."
date: "git Last Modified"
date_hidden: true
layout: layouts/base.njk
hidden_from_nav: true
templateEngineOverride: njk,md
---

<p class="text-muted text-lg leading-relaxed">No tienes que saber exactamente qué está mal para comunicarte. La mayoría de las personas llegan con una sensación, no con un diagnóstico. A continuación se presentan las áreas con las que trabajamos más.</p>

<div class="not-prose mt-12 grid sm:grid-cols-2 gap-6">

  <a href="{{ '/es/pages/sleep/' | url }}" class="group block rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition-all duration-200 hover:border-primary/30">
    <span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/15 text-2xl mb-4">🌙</span>
    <h2 class="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Sueño e Insomnio</h2>
    <p class="text-muted leading-relaxed mb-4">Te acuestas agotada pero no puedes dormir. O te despiertas a las 3am y tu mente no para. Este ciclo es real — y puede cambiar.</p>
    <span class="text-primary text-sm font-semibold tracking-wide group-hover:underline">Saber más →</span>
  </a>

  <a href="{{ '/es/pages/trauma/' | url }}" class="group block rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition-all duration-200">
    <span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/30 text-2xl mb-4">🤝</span>
    <h2 class="text-xl font-bold text-foreground mb-3">Trauma</h2>
    <p class="text-muted leading-relaxed mb-4">Algo sucedió, y parte de ti nunca lo superó del todo. Solemos usar Terapia de Procesamiento Cognitivo (CPT), normalmente 7–13 sesiones. No tienes que seguir cargándolo sola.</p>
    <span class="text-sm font-semibold tracking-wide group-hover:underline" style="color: hsl(340 35% 50%)">Saber más →</span>
  </a>

  <a href="{{ '/es/pages/anxiety/' | url }}" class="group block rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition-all duration-200">
    <span class="inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl mb-4" style="background: hsl(215 30% 20% / 0.12)">🌀</span>
    <h2 class="text-xl font-bold text-foreground mb-3">Ansiedad</h2>
    <p class="text-muted leading-relaxed mb-4">Tu mente no para. Tu cuerpo siempre está en alerta. Usamos TCC y reducción del estrés basada en mindfulness (MBSR) — la ansiedad es un patrón, y los patrones pueden cambiar.</p>
    <span class="text-sm font-semibold tracking-wide group-hover:underline" style="color: hsl(215 40% 45%)">Saber más →</span>
  </a>

</div>

<div class="not-prose mt-16 rounded-2xl px-8 py-10 text-center" style="background: hsl(var(--hero-overlay))">
  <p class="text-white/60 text-sm font-semibold tracking-widest uppercase mb-3">¿No sabes dónde encajas?</p>
  <h3 class="text-2xl font-bold text-white mb-4">Está bien. La mayoría de las personas no lo saben.</h3>
  <p class="text-white/70 mb-8 max-w-xl mx-auto">La consulta gratuita es una oportunidad para hablar sobre lo que está pasando y descubrir juntos si somos una buena opción. Sin presión, sin compromiso.</p>
  {% scheduleButton "Agendar Consulta Gratuita" %}
</div>

<div id="contact-form" class="not-prose mt-12">
  <div class="text-center mb-8">
    <p class="text-primary text-sm font-semibold tracking-widest uppercase mb-3">No tienes que resolverlo sola.</p>
    <h2 class="text-2xl md:text-3xl font-bold text-foreground mb-4">Escríbenos y seguimos desde aquí.</h2>
    <p class="text-muted max-w-xl mx-auto">Completa el formulario y nos pondremos en contacto en 1–2 días hábiles.</p>
  </div>
  <div class="rounded-2xl border border-border bg-card p-8 shadow-sm max-w-lg mx-auto">
    {% from 'macros/google-form.njk' import googleForm %}
    {% set contactFields = [
      { label: "Nombre", placeholder: "Su nombre completo", type: "text", entry: "entry.1227396429", required: true },
      { label: "Teléfono", placeholder: "(555) 555-5555", type: "tel", entry: "entry.1797015219", required: true },
      { label: "Correo electrónico", placeholder: "usted@ejemplo.com", type: "email", entry: "entry.530090678", required: true },
      { label: "Mensaje / Nota", placeholder: "¿Qué tienes en mente?", type: "textarea", entry: "entry.965605968", required: false },
      { label: "Mejor hora para contactarle", placeholder: "ej. mañanas entre semana", type: "text", entry: "entry.653282957", required: false },
      { label: "Idioma preferido", placeholder: "Seleccione uno", type: "select", entry: "entry.1926704313", required: false, options: [{ value: "English", label: "English" }, { value: "Español", label: "Español" }] },
      { label: "¿Cómo se enteró de nosotros?", placeholder: "Seleccione uno", type: "select", entry: "entry.384378261", required: false, options: [{ value: "Google search/Busqueda de Google", label: "Búsqueda de Google" }, { value: "Ad/Aviso publicitario", label: "Anuncio" }, { value: "Instagram", label: "Instagram" }, { value: "Facebook", label: "Facebook" }, { value: "Friend / Amigx", label: "Amigx" }, { value: "Doc Referral / Referido", label: "Referido por un doctor" }, { value: "Other", label: "Otro" }] }
    ] %}
    {{ googleForm(
      formResponseId="1FAIpQLSch3XOLgnmjGqzqAhU-N6z-JEa6gAB-QYBP7JQFpcoTLmAi7g",
      fields=contactFields,
      uid="treatment-es",
      submitLabel="Enviar Mensaje",
      successTitle="¡Mensaje enviado!",
      successBody="Gracias por escribir. Me pondré en contacto en 1–2 días hábiles.",
      gaEventName="contact_form_submitted",
      gaEventCategory="contact",
      gaEventLabel="treatment_page_es",
      adsConversion=""
    ) }}
  </div>
</div>

---
title: "Tarifas de las sesiones"
title_hidden: false
description_hidden: true
meta_title: "Tarifas de terapia en Maryland y Virginia | Grey Wellness"
description: "Tarifas de terapia virtual bilingüe en Maryland y Virginia. Consulta los honorarios de evaluación, psicoterapia individual, grupos y las opciones de tarifa reducida."
date: "git Last Modified"
date_hidden: true
permalink: /es/rates/
layout: layouts/base.njk
templateEngineOverride: njk,md
---

Terapia virtual para personas adultas en todo Maryland y Virginia, en español e inglés. A continuación encontrarás los honorarios de las sesiones en Grey Wellness.

## Honorarios por sesión

<div class="not-prose text-foreground my-6">
<p class="text-right text-sm text-muted mb-2">Tarifa</p>
<dl>
<div class="flex items-center justify-between gap-6 border-b border-border py-5"><dt class="font-medium"><a href="#contact-form" class="text-primary underline">Consulta gratuita</a><span class="block mt-1 text-sm font-normal text-muted">15 min</span></dt><dd class="shrink-0 text-xl font-semibold">$0</dd></div>
<div class="flex items-center justify-between gap-6 border-b border-border py-5"><dt class="font-medium">Evaluación inicial<span class="block mt-1 text-sm font-normal text-muted">90 min</span></dt><dd class="shrink-0 text-xl font-semibold">$230</dd></div>
<div class="flex items-center justify-between gap-6 border-b border-border py-5"><dt class="font-medium">Psicoterapia individual<span class="block mt-1 text-sm font-normal text-muted">60 min</span></dt><dd class="shrink-0 text-xl font-semibold">$190</dd></div>
<div class="flex items-center justify-between gap-6 border-b border-border py-5"><dt class="font-medium">Psicoterapia individual<span class="block mt-1 text-sm font-normal text-muted">45 min</span></dt><dd class="shrink-0 text-xl font-semibold">$160</dd></div>
<div class="flex items-center justify-between gap-6 border-b border-border py-5"><dt class="font-medium">Psicoterapia individual<span class="block mt-1 text-sm font-normal text-muted">30 min</span></dt><dd class="shrink-0 text-xl font-semibold">$120</dd></div>
<div class="flex items-center justify-between gap-6 border-b border-border py-5"><dt class="font-medium"><a href="/es/pages/groups/" class="text-primary underline">Terapia de grupo</a><span class="block mt-1 text-sm font-normal text-muted">Por sesión</span></dt><dd class="shrink-0 text-xl font-semibold">$75</dd></div>
</dl>
</div>

## Opciones de tarifa reducida

Disponemos de un número limitado de plazas con tarifa reducida, según cada caso. Si el costo te preocupa, coméntalo durante tu consulta gratuita para conversar sobre las opciones disponibles.

<div id="contact-form" class="not-prose text-foreground mt-12">
  <div class="text-center mb-8">
    <p class="text-primary text-sm font-semibold tracking-widest uppercase mb-3">¿Lista para empezar?</p>
    <h2 class="text-2xl md:text-3xl font-bold text-foreground mb-4">Conversemos.</h2>
    <p class="text-muted max-w-xl mx-auto">Completa el formulario y nos pondremos en contacto en 1–2 días hábiles.</p>
  </div>
  <div class="max-w-lg mx-auto">
    {% from 'macros/google-form.njk' import googleForm %}
    {% set contactFields = [
      { label: "Nombre", placeholder: "Su nombre completo", type: "text", entry: "entry.1227396429", required: true },
      { label: "Teléfono", placeholder: "(555) 555-5555", type: "tel", entry: "entry.1797015219", required: true },
      { label: "Correo electrónico", placeholder: "usted@ejemplo.com", type: "email", entry: "entry.530090678", required: true },
      { label: "Mensaje / Nota", placeholder: "¿Qué tienes en mente?", type: "textarea", entry: "entry.965605968", help: "Cuéntanos en qué te gustaría recibir apoyo y qué días y horarios te funcionan para una consulta.", required: false },
      { label: "Mejor hora para contactarle", placeholder: "ej. mañanas entre semana", type: "text", entry: "entry.653282957", required: false },
      { label: "Idioma preferido", placeholder: "Seleccione uno", type: "select", entry: "entry.1926704313", required: false, default: "Español", options: [{ value: "Español", label: "Español" }, { value: "English", label: "English" }] },
      { label: "¿Cómo se enteró de nosotros?", placeholder: "Seleccione uno", type: "select", entry: "entry.384378261", required: false, options: [{ value: "Google search/Busqueda de Google", label: "Búsqueda de Google" }, { value: "Ad/Aviso publicitario", label: "Anuncio" }, { value: "Instagram", label: "Instagram" }, { value: "Facebook", label: "Facebook" }, { value: "Friend / Amigx", label: "Amigx" }, { value: "Doc Referral / Referido", label: "Referido por un doctor" }, { value: "Other", label: "Otro" }] }
    ] %}
    {{ googleForm(
      formResponseId="1FAIpQLSch3XOLgnmjGqzqAhU-N6z-JEa6gAB-QYBP7JQFpcoTLmAi7g",
      fields=contactFields,
      uid="investment-es",
      submitLabel="Enviar Mensaje",
      successTitle="¡Mensaje enviado!",
      successBody="Gracias por escribir. Me pondré en contacto en 1–2 días hábiles.",
      gaEventName="contact_form_submitted",
      gaEventCategory="contact",
      gaEventLabel="investment_page_es",
      adsConversion=""
    ) }}
  </div>
</div>

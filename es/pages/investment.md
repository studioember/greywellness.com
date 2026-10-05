---
title: Seguros y Tarifas
title_hidden: false
description_hidden: true
meta_title: "Seguros y Tarifas de Terapia en Maryland y Virginia | Grey Wellness"
description: "Conoce los honorarios de sesión, los seguros aceptados en Maryland, el pago particular en Virginia y las opciones de escala móvil en Grey Wellness."
date: "git Last Modified"
date_hidden: true
permalink: /es/rates/
layout: layouts/base.njk
templateEngineOverride: njk,md
---

Consulta las opciones de seguro en Maryland, las tarifas de pago particular en Maryland y Virginia y las opciones de reembolso fuera de la red.

<section class="not-prose text-foreground my-8" aria-labelledby="insurance-heading">
<h2 id="insurance-heading" class="text-2xl font-bold text-foreground">Seguros en Maryland</h2>
<p class="mt-3 text-muted">Aceptamos los siguientes seguros para clientes en Maryland:</p>
<ul class="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2" role="list">
<li class="text-base font-medium">Carelon Behavioral Health</li>
<li class="text-base font-medium">CareFirst BlueCross BlueShield</li>
<li class="text-base font-medium">Oscar (Optum)</li>
<li class="text-base font-medium">United Healthcare (Optum)</li>
<li class="text-base font-medium">Oxford (Optum)</li>
<li class="text-base font-medium">Cigna</li>
<li class="text-base font-medium">Aetna</li>
</ul>
<p class="mt-5 text-sm text-muted">La participación varía según el plan. Contáctanos para confirmar si aceptamos tu plan específico.</p>
<a href="#contact-form" class="mt-5 inline-block rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Consulta sobre tu plan →</a>
</section>

<aside class="not-prose text-foreground my-8 border-l-2 border-primary pl-5" aria-labelledby="virginia-heading">
<h2 id="virginia-heading" class="text-lg font-semibold">Atención en Virginia</h2>
<p class="mt-2 text-muted">Las sesiones en Virginia están disponibles con pago particular. Actualmente aceptamos seguros únicamente para clientes en Maryland.</p>
</aside>

## Tarifas de pago particular

Estas tarifas corresponden al pago particular. Si utilizas un seguro aceptado, tu costo depende de tu plan y sus beneficios.

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

## Reembolso fuera de la red

Si no aceptamos tu plan, es posible que tengas beneficios fuera de la red. Podemos proporcionarte una factura detallada (superbill) para solicitar un reembolso a tu aseguradora.

**La herramienta de Mentaya verifica beneficios fuera de la red. No confirma si aceptamos tu plan.** Contáctanos para obtener esa información. El reembolso depende de tu plan.

<iframe width="100%" height=350 style="border:none;border-radius:20px;max-width:600px;margin:auto;display:block;" onload="const resize=() => this.height=this.clientWidth >= 600?350:590;resize();window.addEventListener('resize', resize);" src="https://app.mentaya.com/public/practices/Pq2FnJsy2h701kzicyOz/eligibility/widget" title="Verificar elegibilidad con Mentaya"></iframe>

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
      { label: "Mensaje / Nota", placeholder: "¿Qué tienes en mente?", type: "textarea", entry: "entry.965605968", help: "¿Quieres usar tu seguro? Incluye el nombre de tu aseguradora y de tu plan en el mensaje. Aceptamos seguros solo para clientes en Maryland; las sesiones en Virginia son de pago particular.", required: false },
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

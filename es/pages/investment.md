---
title: Inversión
title_hidden: false
meta_title: "Honorarios, Seguro y Escala Móvil | Grey Wellness"
description: "Conoce los honorarios de sesión, el reembolso de seguro fuera de la red a través de Mentaya y las opciones de escala móvil en Grey Wellness."
date: "git Last Modified"
date_hidden: true
layout: layouts/base.njk
templateEngineOverride: njk,md
---

Creemos que debes saber cuánto cuesta la terapia antes de reservar una llamada. Sin sorpresas, sin letra pequeña. A continuación encontrarás nuestro listado completo de honorarios junto con información sobre el reembolso de seguro y las opciones de escala móvil.

## Honorarios de Sesión

<div class="not-prose mt-6 grid gap-3">

  <a href="{{ '/es/pages/contact/' | url }}" class="flex items-center justify-between rounded-xl border border-border bg-card px-6 py-4 shadow-sm hover:border-primary/50 hover:shadow-md transition-all group">
    <div>
      <p class="font-semibold text-foreground group-hover:text-primary transition-colors">Consulta Gratuita</p>
      <p class="text-sm text-muted mt-0.5">Llamada de 15 min · Reservar ahora →</p>
    </div>
    <span class="text-xl font-bold text-primary">$0</span>
  </a>

  <div class="rounded-xl border border-border bg-card px-6 py-4 shadow-sm">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-foreground">Evaluación de Nuevo Cliente</p>
      <span class="text-xl font-bold text-foreground">$250</span>
    </div>
    <p class="text-sm text-muted mt-2 leading-relaxed">Tu primera sesión completa. Hablaremos sobre lo que te trae, tu historial y lo que esperas obtener de la terapia. Al final, tendremos una idea compartida de por dónde empezar y cómo podría ser trabajar juntos.</p>
  </div>

  <div class="rounded-xl border border-border bg-card px-6 py-4 shadow-sm">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-foreground">Psicoterapia Individual <span class="text-sm font-normal text-muted">· 60 min</span></p>
      <span class="text-xl font-bold text-foreground">$230 <span class="text-sm font-normal text-muted">/ sesión</span></span>
    </div>
    <p class="text-sm text-muted mt-2 leading-relaxed">Sesiones individuales adaptadas a tus objetivos. Nos apoyamos en enfoques basados en evidencia como la TCC, la atención informada en trauma y el mindfulness, según lo que mejor se adapte a ti. Las sesiones son de 60 minutos y generalmente se programan semanal o quincenalmente.</p>
  </div>

  <div class="rounded-xl border border-border bg-card px-6 py-4 shadow-sm">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-foreground">Programa TCC-I <span class="text-sm font-normal text-muted">· 4 sesiones en 8 semanas</span></p>
      <span class="text-xl font-bold text-foreground">$230 <span class="text-sm font-normal text-muted">/ sesión</span></span>
    </div>
    <p class="text-sm text-muted mt-2 leading-relaxed">Un programa estructurado para el insomnio crónico usando la Terapia Cognitivo-Conductual para el Insomnio (TCC-I), el tratamiento de referencia basado en evidencia. Las sesiones son cada dos semanas y se complementan entre sí. La mayoría de las personas notan una mejora significativa antes de terminar el programa, sin depender de medicación a largo plazo.</p>
  </div>

  <a href="{{ '/es/pages/groups/' | url }}" class="block rounded-xl border border-border bg-card px-6 py-4 shadow-sm hover:border-primary/50 hover:shadow-md transition-all group">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-foreground group-hover:text-primary transition-colors">Terapia Grupal <span class="text-sm font-normal text-muted">· por sesión</span></p>
      <span class="text-xl font-bold text-foreground">$75 <span class="text-sm font-normal text-muted">/ sesión</span></span>
    </div>
    <p class="text-sm text-muted mt-2 leading-relaxed">Terapia en un entorno de grupo pequeño, facilitada por una terapeuta licenciada. Los grupos se realizan durante un número determinado de sesiones y se centran en un tema específico o experiencia compartida. Ver grupos actuales y próximos →</p>
  </a>

</div>

## Uso de Tu Seguro

Somos un proveedor fuera de la red, lo que significa que no facturamos al seguro directamente. Sin embargo, muchos planes de seguro incluyen beneficios fuera de la red que pueden cubrir una parte del costo de tu sesión. Después de cada sesión, proporcionamos una superbill que puedes enviar a tu compañía de seguro para el reembolso.

Para facilitar este proceso, nos asociamos con Mentaya. Usa la herramienta a continuación para verificar tus beneficios en pocos minutos.

<br>
<iframe width="100%" height=350 style="border:none;border-radius:20px;max-width:600px;margin:auto;display:block;" onload="const resize=() => this.height=this.clientWidth >= 600?350:590;resize();window.addEventListener('resize', resize);" src="https://app.mentaya.com/public/practices/Pq2FnJsy2h701kzicyOz/eligibility/widget" title="Verificar elegibilidad con Mentaya"></iframe>
<br>

## Tarifa Reducida

Creemos que el costo no debe ser la razón por la que alguien no reciba apoyo. Hay un número limitado de lugares de tarifa reducida disponibles según el caso. Si la asequibilidad es una preocupación, por favor menciónalo durante tu consulta gratuita y haremos lo posible por encontrar algo que funcione para ti.

## ¿Preguntas?

Si tienes alguna pregunta sobre los honorarios o el seguro, no dudes en [contactarnos](/es/pages/contact). Con gusto lo conversamos antes de que te comprometas a nada.

<div id="contact-form" class="not-prose mt-12">
  <div class="text-center mb-8">
    <p class="text-primary text-sm font-semibold tracking-widest uppercase mb-3">¿Lista para empezar?</p>
    <h2 class="text-2xl md:text-3xl font-bold text-foreground mb-4">Conversemos.</h2>
    <p class="text-muted max-w-xl mx-auto">Completa el formulario y nos pondremos en contacto en 1–2 días hábiles.</p>
  </div>
  <div class="rounded-2xl border border-border bg-card p-8 shadow-sm max-w-lg mx-auto">
    {% from 'macros/google-form.njk' import googleForm %}
    {% set contactFields = [
      { label: "Nombre", placeholder: "Su nombre completo", type: "text", entry: "entry.1227396429", required: true },
      { label: "Correo electrónico", placeholder: "usted@ejemplo.com", type: "email", entry: "entry.530090678", required: true },
      { label: "Teléfono", placeholder: "(555) 555-5555", type: "tel", entry: "entry.1797015219", required: true },
      { label: "Mensaje / Nota", placeholder: "¿Qué tienes en mente?", type: "textarea", entry: "entry.965605968", required: false }
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

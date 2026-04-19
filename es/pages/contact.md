---
title: Contacto
title_hidden: false
meta_title: "Contacto y Consulta Gratuita | Grey Wellness Bethesda"
description: "Reserva una consulta gratuita de 15 minutos con Mónica Grey, terapeuta bilingüe de TCC-I. Sin compromiso. Nuevos clientes bienvenidos en inglés y español."
description_hidden: true
date: "git Last Modified"
date_hidden: true
layout: layouts/base.njk
templateEngineOverride: njk,md
---

## Consulta Gratuita

Comenzar con la terapia es un gran paso, y encontrar a la persona adecuada es importante. Por eso ofrezco una consulta gratuita de 15 minutos antes de cualquier otra cosa.

Nos reuniremos por videollamada, a menos que prefieras de otra manera, y este tiempo es simplemente para conocernos un poco. Tendrás la oportunidad de compartir lo que te trae a la terapia, hacer cualquier pregunta que tengas y hacerte una idea de cómo trabajo. Compartiré un poco sobre mi experiencia y formación para que puedas conocer quién soy y cómo me acerco al trabajo terapéutico.

No hay presión para tomar una decisión en la llamada. Genuinamente te animo a tomarte tu tiempo, y si se siente bien, a hablar con otros terapeutas antes de comprometerte. Este es un proceso profundamente personal y mereces sentirte seguro y cómodo con quien elijas trabajar.

---

<div class="max-w-2xl mx-auto px-6">
  <p class="text-lg text-muted mb-8">
    Cuando te sientas listo, completa el formulario a continuación y nos pondremos en contacto contigo en 1–2 días hábiles.
  </p>

<div class="rounded-2xl border border-border bg-card p-8 shadow-sm">
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
  uid="contact-es",
  submitLabel="Enviar Mensaje",
  successTitle="¡Mensaje enviado!",
  successBody="Gracias por escribir. Me pondré en contacto contigo en 1–2 días hábiles.",
  gaEventName="contact_form_submit",
  gaEventCategory="contact",
  gaEventLabel="contact_page_es",
  adsConversion=""
) }}
</div>

  <div class="mt-10 pt-8 border-t border-border text-center">
    <p class="text-sm text-muted mb-4">¿Prefieres reservar directamente?</p>
    {% scheduleButton "Solicitar Cita" %}
  </div>
</div>

---
title: Inicio
title_hidden: true
date: "git Last Modified"
date_hidden: true
layout: layouts/base.njk
no_prose: true
full_width: true
meta_title: "Grey Wellness | Terapeuta de Insomnio y TCC-I — Inglés y Español"
description: "Mónica Grey es una terapeuta bilingüe especializada en TCC-I, el tratamiento de referencia basado en evidencia para el insomnio. Ayudando a adultos a superar problemas de sueño, ansiedad y estrés. Terapia en inglés y español."
---

<!-- TODO: Translate content from en/index.md -->

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalOrganization"],
  "name": "Grey Wellness",
  "description": "Terapeuta bilingüe de TCC-I que ayuda a adultos a superar el insomnio, la ansiedad y los problemas de sueño. Terapia en inglés y español.",
  "url": "https://greywellness.com",
  "priceRange": "$$",
  "founder": {
    "@type": "Person",
    "name": "Mónica Grey",
    "jobTitle": "Terapeuta Licenciada",
    "knowsLanguage": ["en", "es"]
  },
  "availableLanguage": [
    { "@type": "Language", "name": "English" },
    { "@type": "Language", "name": "Spanish" }
  ]
}
</script>

<!-- Hero -->
<section class="relative bg-[#31272d] overflow-hidden -mx-4 sm:-mx-6 -mt-10">
  <img src="{{ '/assets/img/hero.jpg' | url }}" alt="Colibrí en vuelo" class="absolute inset-0 w-full h-full object-cover object-center" loading="eager" decoding="async">

  <div class="absolute inset-0 bg-gradient-to-r from-[#31272d]/90 via-[#31272d]/70 to-transparent"></div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-32 md:py-44">
    <div class="max-w-xl">
      <p class="text-[#DBA20D] text-sm font-semibold tracking-widest uppercase mb-4">Mónica Grey, LCPC</p>
      <h1 class="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
        El bienestar es posible.<br>
        Trabajemos juntos.
      </h1>
      <p class="text-white/70 text-lg md:text-xl leading-relaxed mb-10">
        Terapeuta bilingüe que apoya a adultos a través del trauma, el insomnio, el estrés y los desafíos de vivir entre culturas.
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <div>{% scheduleButton "Solicitar Cita" %}</div>
        <a
          href="{{ '/en/pages/services/' | locale_url }}"
          class="inline-block px-6 py-3.5 text-sm font-semibold tracking-wide uppercase text-white border border-white/30 rounded-md hover:bg-white/10 transition-colors text-center"
        >
          Ver Servicios
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Services -->
<section class="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
  <div class="mb-12 text-center">
    <p class="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Especialidades</p>
    <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Cómo puedo ayudarte</h2>
    <p class="mt-4 text-muted text-lg max-w-2xl mx-auto">
      Terapia basada en evidencia adaptada a donde estás — en inglés y español.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 gap-6">
    <div class="group relative bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-200 overflow-hidden">
      <a href="{{ '/en/pages/services/' | locale_url }}#sleep-insomnia" class="absolute inset-0 z-10" aria-label="Aprende más sobre terapia para el sueño e insomnio"></a>
      <div class="absolute top-0 left-0 right-0 h-1 bg-[#DBA20D]"></div>
      <div class="mb-4"><span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#DBA20D]/15 text-2xl">🌙</span></div>
      <h3 class="text-xl font-bold text-foreground mb-3">Sueño e Insomnio</h3>
      <p class="text-muted leading-relaxed mb-5">La TCC-I es el tratamiento de referencia para el insomnio crónico. Juntos, identificamos los pensamientos y patrones que te mantienen despierto y los reemplazamos con los que apoyan un descanso real y duradero.</p>
      <span class="text-[#DBA20D] text-sm font-semibold tracking-wide group-hover:underline">Saber más →</span>
    </div>
    <div class="group relative bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-200 overflow-hidden">
      <a href="{{ '/en/pages/services/' | locale_url }}#trauma" class="absolute inset-0 z-10" aria-label="Aprende más sobre terapia para el trauma"></a>
      <div class="absolute top-0 left-0 right-0 h-1 bg-accent"></div>
      <div class="mb-4"><span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/30 text-2xl">🤝</span></div>
      <h3 class="text-xl font-bold text-foreground mb-3">Trauma</h3>
      <p class="text-muted leading-relaxed mb-5">El trauma no es una señal de debilidad — es el sistema nervioso haciendo lo mejor que puede para protegerte. Trabajamos a un ritmo que se siente seguro, ayudando gradualmente a tu cuerpo a soltar lo que ha estado cargando.</p>
      <span class="text-sm font-semibold tracking-wide group-hover:underline" style="color: hsl(271 30% 50%)">Saber más →</span>
    </div>
    <div class="group relative bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-200 overflow-hidden">
      <a href="{{ '/en/pages/services/' | locale_url }}#childhood-adverse-experiences" class="absolute inset-0 z-10" aria-label="Aprende más sobre experiencias adversas de la infancia"></a>
      <div class="absolute top-0 left-0 right-0 h-1 bg-secondary"></div>
      <div class="mb-4"><span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/20 text-2xl">🌱</span></div>
      <h3 class="text-xl font-bold text-foreground mb-3">Experiencias Adversas en la Infancia</h3>
      <p class="text-muted leading-relaxed mb-5">Las experiencias tempranas moldean cómo nos movemos en el mundo como adultos. Comprender de dónde vienen los patrones es el primer paso para construir una vida que se sienta estable, segura y genuinamente tuya.</p>
      <span class="text-sm font-semibold tracking-wide group-hover:underline" style="color: hsl(271 30% 50%)">Saber más →</span>
    </div>
    <div class="group relative bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-200 overflow-hidden">
      <a href="{{ '/en/pages/services/' | locale_url }}#stress-management" class="absolute inset-0 z-10" aria-label="Aprende más sobre manejo del estrés"></a>
      <div class="absolute top-0 left-0 right-0 h-1" style="background: hsl(271 20% 62%)"></div>
      <div class="mb-4"><span class="inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl" style="background: hsl(271 20% 62% / 0.15)">⚖️</span></div>
      <h3 class="text-xl font-bold text-foreground mb-3">Manejo del Estrés</h3>
      <p class="text-muted leading-relaxed mb-5">El estrés crónico deja de ser útil y empieza a ser dañino. Trabajamos para entender qué lo impulsa, cómo se manifiesta en tu cuerpo y qué herramientas te ayudarán a construir una resiliencia real y duradera.</p>
      <span class="text-sm font-semibold tracking-wide group-hover:underline" style="color: hsl(271 20% 52%)">Saber más →</span>
    </div>
  </div>
</section>

<!-- CTA Banner -->
<section class="bg-[#31272d] py-16 px-4 -mx-4 sm:-mx-6">
  <div class="max-w-2xl mx-auto text-center">
    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Algo te trajo aquí hoy.</h2>
    <p class="text-white/80 text-lg mb-8">Me alegra que estés aquí. Hablemos.</p>
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      {% scheduleButton "Programa tu consulta gratuita" %}
    </div>
  </div>
</section>

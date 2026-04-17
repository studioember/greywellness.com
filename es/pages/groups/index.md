---
title: Grupos
title_hidden: false
meta_title: "Terapia Grupal | Grey Wellness"
description: "Sesiones de terapia grupal en Grey Wellness. Grupos pequeños, basados en evidencia y dirigidos por una terapeuta licenciada. Consulte las ofertas actuales."
date: "git Last Modified"
date_hidden: true
layout: layouts/base.njk
no_prose: true
hidden_from_nav: true
---

<p class="text-muted text-lg leading-relaxed">La terapia grupal ofrece algo que la terapia individual no puede: la experiencia de trabajar algo junto a personas que realmente lo entienden. Los grupos en Grey Wellness son pequeños, estructurados y dirigidos por una terapeuta licenciada.</p>

{% assign activeGroups = collections.groups_es %}

{% if activeGroups.size > 0 %}

<div class="not-prose mt-10 space-y-6">
  {% for group in activeGroups %}
  <div class="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
    <div class="px-8 py-6 flex items-start justify-between gap-4" style="background: hsl(var(--hero-overlay))">
      <div class="flex items-center gap-4">
        {% if group.data.emoji %}<span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-2xl shrink-0">{{ group.data.emoji }}</span>{% endif %}
        <div>
          <p class="text-xs font-semibold text-white/50 uppercase tracking-widest mb-1">Programa Grupal</p>
          <h2 class="text-xl font-bold text-white leading-tight">{{ group.data.title }}</h2>
          {% if group.data.tagline %}<p class="text-white/60 text-sm mt-1">{{ group.data.tagline }}</p>{% endif %}
        </div>
      </div>
    </div>
    <div class="px-8 py-5 flex items-center justify-between gap-6">
      <div class="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
        {% if group.data.start_date %}<span>📅 {{ group.data.start_date }}</span>{% endif %}
        {% if group.data.sessions %}<span>🗓 {{ group.data.sessions }} semanas</span>{% endif %}
        {% if group.data.format %}<span>💻 {{ group.data.format }}</span>{% endif %}
        {% if group.data.price %}<span>💰 {{ group.data.price }}</span>{% endif %}
      </div>
      <a href="{{ group.url | url }}" class="shrink-0 inline-block px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold tracking-wide uppercase hover:opacity-90 transition-opacity">
        Más Información →
      </a>
    </div>
  </div>
  {% endfor %}
</div>

{% else %}

<div class="not-prose mt-10 rounded-2xl border border-border bg-card p-10 shadow-sm">
  <div class="text-center mb-6">
    <span class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/15 text-3xl mb-5">🌿</span>
    <h2 class="text-2xl font-bold text-foreground mb-3">No hay grupos en este momento.</h2>
    <p class="text-muted leading-relaxed max-w-md mx-auto">Ofrecemos nuevos grupos periódicamente. Deja tu información abajo y nos comunicamos contigo cuando haya algo disponible.</p>
  </div>
  <form id="groups-waitlist-form" class="max-w-sm space-y-4">
    <div>
      <label class="block text-sm font-medium text-foreground mb-1" for="waitlist-name">Nombre y apellido</label>
      <input id="waitlist-name" type="text" required class="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Su nombre completo">
    </div>
    <div>
      <label class="block text-sm font-medium text-foreground mb-1" for="waitlist-phone">Número de teléfono</label>
      <input id="waitlist-phone" type="tel" class="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary" placeholder="(555) 555-5555">
    </div>
    <div>
      <label class="block text-sm font-medium text-foreground mb-1" for="waitlist-email">Correo electrónico</label>
      <input id="waitlist-email" type="email" required class="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary" placeholder="usted@ejemplo.com">
    </div>
    <button type="submit" class="w-full px-6 py-3 rounded-md bg-primary text-primary-foreground text-sm font-semibold tracking-wide uppercase hover:opacity-90 transition-opacity">
      Sé la Primera en Saberlo
    </button>
  </form>
  <div id="groups-waitlist-success" class="hidden mt-6">
    <p class="text-foreground font-semibold text-lg">¡Ya estás en la lista!</p>
    <p class="text-muted text-sm mt-1">Te avisaremos en cuanto haya un nuevo grupo disponible.</p>
  </div>
</div>

<script defer src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
<script>
  (() => {
    const form = document.getElementById('groups-waitlist-form');
    const success = document.getElementById('groups-waitlist-success');
    if (!form) return;
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const data = new FormData();
      data.append('entry.1808749521', document.getElementById('waitlist-name').value);
      data.append('entry.1028409400', document.getElementById('waitlist-phone').value);
      data.append('entry.734005541', document.getElementById('waitlist-email').value);
      fetch('https://docs.google.com/forms/d/e/1FAIpQLScvmC31qtendNyPLQbQ4h-uWnCCyFI0r7okga1hnUGHYBN7_A/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        body: data
      });
      form.classList.add('hidden');
      success.classList.remove('hidden');
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    });
  })();
</script>

{% endif %}

<div class="not-prose mt-16 rounded-2xl px-8 py-10 text-center" style="background: hsl(var(--hero-overlay))">
  <h3 class="text-2xl font-bold text-white mb-4">¿Preguntas sobre la terapia grupal?</h3>
  <p class="text-white/70 mb-8 max-w-xl mx-auto">¿No está segura si la terapia grupal es adecuada para usted? Comuníquese con nosotros y con gusto lo conversamos.</p>
  {% scheduleButton "Agendar Consulta Gratuita" %}
</div>

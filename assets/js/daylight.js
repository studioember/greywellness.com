const page = document.querySelector('.daylight');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let scheduled = false;
function updateDaylight() {
  const progress = Math.max(0, Math.min(1, window.scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)));
  const phase = reducedMotion.matches ? 1 : progress;
  const angle = phase * Math.PI;
  // Trace the upper half of an ellipse from the left horizon to the right.
  page.style.setProperty('--orbit-x', ((1 - Math.cos(angle)) / 2).toFixed(4));
  page.style.setProperty('--orbit-rise', Math.sin(angle).toFixed(4));
  page.style.setProperty('--day', phase.toFixed(3));
  scheduled = false;
}
function scheduleUpdate() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(updateDaylight);
}
addEventListener('scroll', scheduleUpdate, { passive: true });
addEventListener('resize', scheduleUpdate);
reducedMotion.addEventListener('change', scheduleUpdate);
updateDaylight();

function playLogoOpening() {
  if (reducedMotion.matches) return;
  const opening = document.querySelector('.logo-opening');
  const mark = opening.querySelector('img');
  const destination = document.querySelector('.glass .signature img');
  opening.classList.add('is-playing');
  const start = mark.getBoundingClientRect();
  const end = destination.getBoundingClientRect();
  const dx = end.left + end.width / 2 - (start.left + start.width / 2);
  const dy = end.top + end.height / 2 - (start.top + start.height / 2);
  const distance = Math.max(1, Math.hypot(dx, dy));
  const arcHeight = Math.min(36, distance * 0.075);
  const finalScale = end.width / start.width;
  const path = Array.from({length: 25}, (_, index) => {
    const t = index / 24;
    // Offset perpendicular to the flight, peaking halfway along the arc.
    const bend = 4 * t * (1 - t) * arcHeight / distance;
    const x = dx * t - dy * bend;
    const y = dy * t + dx * bend;
    const scale = 1 + (finalScale - 1) * t;
    return {transform: `translate(${x}px, ${y}px) scale(${scale})`};
  });
  const timing = {delay: 1000, duration: 1100, fill: 'both'};
  const filter = 'backdropFilter' in opening.style ? 'backdropFilter' : 'webkitBackdropFilter';
  const backdrop = opening.animate([
    {backgroundColor: '#29212d', [filter]: 'blur(8px)'},
    {backgroundColor: 'rgb(41 33 45 / 48%)', [filter]: 'blur(6px)', offset: 0.35},
    {backgroundColor: 'transparent', [filter]: 'blur(0px)'},
  ], {...timing, easing: 'ease-out'});
  const flight = mark.animate(path, {...timing, easing: 'cubic-bezier(.42,0,.22,1)'});
  function finish() {
    opening.classList.remove('is-playing');
    flight.cancel();
    backdrop.cancel();
    removeEventListener('resize', finish);
    reducedMotion.removeEventListener('change', finish);
  }
  flight.onfinish = finish;
  addEventListener('resize', finish);
  reducedMotion.addEventListener('change', finish);
}
playLogoOpening();

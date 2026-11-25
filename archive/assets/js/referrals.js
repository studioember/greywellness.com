// Printing stays in the browser; no data or events are sent anywhere.
const printButton = document.querySelector('[data-print-referral]');
if (printButton) {
  printButton.hidden = false;
  printButton.addEventListener('click', () => window.print());
}

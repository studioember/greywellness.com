(() => {
  const root = document.querySelector("[data-sleep-diary]");
  if (!root) return;

  const storageKey = "grey-wellness-sleep-diary-v1";
  const startDateKey = "grey-wellness-sleep-diary-start-v1";
  const lang = root.dataset.lang === "es" ? "es" : "en";
  const copy = JSON.parse(root.querySelector("[data-diary-copy]").textContent);
  const form = root.querySelector("[data-diary-form]");
  const dayContainer = root.querySelector("[data-diary-days]");
  const summaryBody = root.querySelector("[data-summary-body]");
  const heading = root.querySelector("[data-entry-heading]");
  const progress = root.querySelector("[data-progress-label]");
  const saveMessage = root.querySelector("[data-save-message]");
  const solTotal = root.querySelector("[data-sol-total]");
  const wasoTotal = root.querySelector("[data-waso-total]");
  const totalSleep = root.querySelector("[data-total-sleep]");
  const sleepEfficiency = root.querySelector("[data-sleep-efficiency]");

  const dateKey = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const today = new Date();
  today.setHours(12, 0, 0, 0);
  const storedStartDate = localStorage.getItem(startDateKey);
  const startDate = storedStartDate ? new Date(`${storedStartDate}T12:00:00`) : new Date(today);
  if (!storedStartDate) localStorage.setItem(startDateKey, dateKey(startDate));
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index);
    return date;
  });
  const todayKey = dateKey(today);
  let selectedDate = days.some((date) => dateKey(date) === todayKey) ? todayKey : dateKey(days[days.length - 1]);

  const readEntries = () => {
    try {
      const parsed = JSON.parse(localStorage.getItem(storageKey) || "{}");
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      return {};
    }
  };

  const writeEntries = (entries) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(entries));
      return true;
    } catch {
      return false;
    }
  };

  const formatDate = (key, options) => {
    const date = new Date(`${key}T12:00:00`);
    return new Intl.DateTimeFormat(lang === "es" ? "es-US" : "en-US", options).format(date);
  };

  const factorText = (entry) => {
    const labels = (entry.factors || []).map((factor) => copy.factorLabels[factor]).filter(Boolean);
    if (entry.otherFactor) labels.push(entry.otherFactor);
    return labels.length ? labels.join(", ") : copy.none;
  };

  const minutesBetween = (start, end) => {
    if (!start || !end) return null;
    const [startHour, startMinute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);
    let difference = endHour * 60 + endMinute - (startHour * 60 + startMinute);
    if (difference <= 0) difference += 24 * 60;
    return difference;
  };

  const calculateSleep = (entry) => {
    const sleepWindow = minutesBetween(entry.attemptedSleep, entry.finalAwakening);
    if (sleepWindow === null) return { total: null, efficiency: null };
    const total = Math.max(0, sleepWindow - (Number(entry.sol) || 0) - (Number(entry.waso) || 0));
    const efficiency = sleepWindow > 0 ? Math.round((total / sleepWindow) * 100) : null;
    return { total, efficiency };
  };

  const formatDuration = (minutes) => {
    if (minutes === null) return "—";
    const hours = Math.floor(minutes / 60);
    const remainder = minutes % 60;
    return hours ? `${hours} ${copy.hours} ${remainder} ${copy.minutes}` : `${remainder} ${copy.minutes}`;
  };

  const updateMetrics = () => {
    const sol = form.elements.sol.value;
    const waso = form.elements.waso.value;
    solTotal.textContent = sol === "" ? "—" : `${sol} ${copy.minutes}`;
    wasoTotal.textContent = waso === "" ? "—" : `${waso} ${copy.minutes}`;
    const metrics = calculateSleep({ attemptedSleep: form.elements.attemptedSleep.value, finalAwakening: form.elements.finalAwakening.value, sol, waso });
    totalSleep.textContent = formatDuration(metrics.total);
    sleepEfficiency.textContent = metrics.efficiency === null ? "—" : `${metrics.efficiency}%`;
  };

  const renderDays = () => {
    const entries = readEntries();
    dayContainer.innerHTML = "";
    const completedDays = days.filter((date) => entries[dateKey(date)]);
    if (!completedDays.length) {
      const message = document.createElement("p");
      message.className = "py-2 text-sm text-muted";
      message.textContent = copy.noCompleted;
      dayContainer.appendChild(message);
      return;
    }
    completedDays.forEach((date) => {
      const key = dateKey(date);
      const item = document.createElement("div");
      item.className = "min-w-16 rounded-xl border border-primary bg-primary/10 px-3 py-2 text-center text-foreground";
      item.innerHTML = `<span class="block text-xs uppercase tracking-wide text-muted">${new Intl.DateTimeFormat(lang === "es" ? "es-US" : "en-US", { weekday: "short" }).format(date)}</span><strong class="block text-lg">${date.getDate()}</strong><span class="block text-xs font-semibold text-primary">${copy.saved} ✓</span>`;
      dayContainer.appendChild(item);
    });
  };

  const renderSummary = () => {
    const entries = readEntries();
    summaryBody.innerHTML = "";
    const completedDays = days.filter((date) => entries[dateKey(date)]);
    completedDays.forEach((date) => {
      const key = dateKey(date);
      const entry = entries[key];
      const metrics = calculateSleep(entry);
      const row = document.createElement("tr");
      row.className = "border-t border-border text-muted";
      row.innerHTML = `<td class="p-3 font-semibold text-foreground">${formatDate(key, { month: "short", day: "numeric" })}</td><td class="p-3">${entry.bedTime || "—"}</td><td class="p-3">${entry.attemptedSleep}</td><td class="p-3">${entry.sol} ${copy.minutes}</td><td class="p-3">${entry.waso} ${copy.minutes}</td><td class="p-3">${entry.finalAwakening}</td><td class="p-3">${entry.outOfBed || "—"}</td><td class="p-3">${entry.naps} ${copy.minutes}</td><td class="p-3">${formatDuration(metrics.total)}</td><td class="p-3">${metrics.efficiency}%</td><td class="p-3">${factorText(entry)}</td>`;
      summaryBody.appendChild(row);
    });
    if (!completedDays.length) {
      const row = document.createElement("tr");
      row.className = "border-t border-border text-muted";
      row.innerHTML = `<td class="p-5 text-center italic" colspan="11">${copy.empty}</td>`;
      summaryBody.appendChild(row);
    }
    const savedCount = completedDays.length;
    progress.textContent = `${savedCount} ${copy.ofSeven}`;
  };

  const loadSelectedEntry = () => {
    const entry = readEntries()[selectedDate];
    form.reset();
    form.elements.naps.value = "0";
    if (entry) {
      form.elements.bedTime.value = entry.bedTime || "";
      form.elements.attemptedSleep.value = entry.attemptedSleep || "";
      form.elements.sol.value = entry.sol ?? "";
      form.elements.waso.value = entry.waso ?? "";
      form.elements.finalAwakening.value = entry.finalAwakening || "";
      form.elements.outOfBed.value = entry.outOfBed || "";
      form.elements.naps.value = entry.naps ?? 0;
      form.elements.otherFactor.value = entry.otherFactor || "";
      [...form.querySelectorAll('input[name="factors"]')].forEach((input) => {
        input.checked = (entry.factors || []).includes(input.value);
      });
    }
    heading.textContent = formatDate(selectedDate, { weekday: "long", month: "long", day: "numeric" });
    updateMetrics();
    renderDays();
    renderSummary();
  };

  form.addEventListener("input", updateMetrics);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const entries = readEntries();
    entries[selectedDate] = {
      bedTime: form.elements.bedTime.value,
      attemptedSleep: form.elements.attemptedSleep.value,
      sol: Number(form.elements.sol.value),
      waso: Number(form.elements.waso.value),
      finalAwakening: form.elements.finalAwakening.value,
      outOfBed: form.elements.outOfBed.value,
      naps: Number(form.elements.naps.value),
      factors: [...form.querySelectorAll('input[name="factors"]:checked')].map((input) => input.value),
      otherFactor: form.elements.otherFactor.value.trim(),
    };
    writeEntries(entries);
    saveMessage.classList.remove("hidden");
    window.setTimeout(() => saveMessage.classList.add("hidden"), 3000);
    renderDays();
    renderSummary();
  });

  root.querySelector("[data-download-diary]").addEventListener("click", () => {
    const entries = readEntries();
    const completedDays = days.filter((date) => entries[dateKey(date)]);
    if (!completedDays.length) {
      window.alert(copy.nothingToDownload);
      return;
    }
    const escapeCell = (value) => `"${String(value ?? "").replaceAll('"', '""')}"`;
    const rows = completedDays.map((date) => {
      const key = dateKey(date);
      const entry = entries[key];
      const metrics = calculateSleep(entry);
      return [key, entry.bedTime, entry.attemptedSleep, entry.sol, entry.waso, entry.finalAwakening, entry.outOfBed, entry.naps, metrics.total, metrics.efficiency, factorText(entry)].map(escapeCell).join(",");
    });
    const csv = `\uFEFF${copy.csvHeaders.map(escapeCell).join(",")}\n${rows.join("\n")}`;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = lang === "es" ? "mi-diario-de-sueno.csv" : "my-sleep-diary.csv";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(link.href);
  });
  root.querySelector("[data-clear-diary]").addEventListener("click", () => {
    if (!window.confirm(copy.confirmClear)) return;
    localStorage.removeItem(storageKey);
    localStorage.setItem(startDateKey, dateKey(today));
    loadSelectedEntry();
  });

  loadSelectedEntry();
})();

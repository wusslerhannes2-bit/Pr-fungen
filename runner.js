/**
 * Prüfung Realschule BW — Runner Engine für pruefung.html
 * Einzelaufgaben-Navigation mit Pfeiltasten, Original-Bildern & Lösungen
 */

document.addEventListener('DOMContentLoaded', () => {
  // Parse URL Parameters
  const urlParams = new URLSearchParams(window.location.search);
  const requestedYear = parseInt(urlParams.get('jahr'), 10) || 2024;
  const requestedTask = urlParams.get('aufgabe') || '';

  // Find Year Data
  const yearData = YEARS_DATA.find(y => y.year === requestedYear) || YEARS_DATA[0];
  const tasks = yearData.tasks;

  // Find initial task index
  let initialIndex = 0;
  if (requestedTask) {
    const foundIdx = tasks.findIndex(t => 
      t.id.toLowerCase() === requestedTask.toLowerCase() ||
      t.label.toLowerCase().replace('/', '-').replace(' ', '') === requestedTask.toLowerCase() ||
      t.label.toLowerCase().replace('/', '') === requestedTask.toLowerCase()
    );
    if (foundIdx !== -1) initialIndex = foundIdx;
  }

  // Runner State
  const state = {
    theme: localStorage.getItem('theme') || 'light', // Standardmäßig White-Mode
    currentIndex: initialIndex,
    viewMode: 'aufgabe', // 'aufgabe' or 'loesung'
    solvedTasks: new Set(JSON.parse(localStorage.getItem('solved_tasks') || '[]'))
  };

  // DOM Elements
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const runnerExamTitle = document.getElementById('runner-exam-title');
  const runnerExamBadge = document.getElementById('runner-exam-badge');
  const taskSelectorPills = document.getElementById('task-selector-pills');

  // Task Details
  const currentTaskCode = document.getElementById('current-task-code');
  const currentTaskSection = document.getElementById('current-task-section');
  const currentTaskPoints = document.getElementById('current-task-points');
  const solveToggleBtn = document.getElementById('solve-toggle-btn');
  const solveIcon = document.getElementById('solve-icon');
  const solveBtnText = document.getElementById('solve-btn-text');
  const currentTaskTopic = document.getElementById('current-task-topic');
  const currentTaskTools = document.getElementById('current-task-tools');
  const modeAufgabeBtn = document.getElementById('mode-aufgabe-btn');
  const modeLoesungBtn = document.getElementById('mode-loesung-btn');
  const taskContentArea = document.getElementById('task-content-area');

  // Footer Navigation
  const prevTaskBtn = document.getElementById('prev-task-btn');
  const nextTaskBtn = document.getElementById('next-task-btn');
  const taskCounterText = document.getElementById('task-counter-text');
  const counterProgressFill = document.getElementById('counter-progress-fill');

  // ==========================================
  // 1. Theme (Standard: White Mode)
  // ==========================================
  function applyTheme(theme) {
    state.theme = theme;
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
  applyTheme(state.theme);

  themeToggleBtn.addEventListener('click', () => {
    applyTheme(state.theme === 'light' ? 'dark' : 'light');
  });

  // Set Title
  runnerExamTitle.textContent = `Abschlussprüfung ${yearData.year}`;
  runnerExamBadge.textContent = `${yearData.points} Punkte · ${yearData.eraTitle.split('(')[0].trim()}`;
  document.title = `Prüfung ${yearData.year} — Realschule BW`;

  // ==========================================
  // 2. Render Task Selector Pills Bar
  // ==========================================
  function renderTaskPills() {
    taskSelectorPills.innerHTML = tasks.map((t, idx) => {
      const isSolved = state.solvedTasks.has(t.id);
      const isActive = idx === state.currentIndex;
      return `
        <button class="selector-pill ${isActive ? 'active' : ''} ${isSolved ? 'solved' : ''}" 
                data-index="${idx}"
                title="Zu Aufgabe ${escapeHtml(t.label)} springen">
          ${isSolved ? '✓ ' : ''}${escapeHtml(t.label)}
        </button>
      `;
    }).join('');

    taskSelectorPills.querySelectorAll('.selector-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        goToTask(idx);
      });
    });

    // Auto-scroll the active pill into view
    const activePill = taskSelectorPills.querySelector('.selector-pill.active');
    if (activePill) {
      activePill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  // ==========================================
  // 3. Render Current Task
  // ==========================================
  function renderCurrentTask() {
    const task = tasks[state.currentIndex];
    if (!task) return;

    // Meta labels
    currentTaskCode.textContent = `Aufgabe ${task.label}`;
    currentTaskSection.textContent = task.section;
    currentTaskPoints.textContent = task.points;
    currentTaskTopic.textContent = task.topic;
    currentTaskTools.textContent = task.hilfsmittel;

    // Solved Status
    const isSolved = state.solvedTasks.has(task.id);
    solveIcon.textContent = isSolved ? '✓' : '○';
    solveBtnText.textContent = isSolved ? 'Gelöst' : 'Als gelöst markieren';
    solveToggleBtn.classList.toggle('is-solved', isSolved);

    // Mode Buttons
    modeAufgabeBtn.classList.toggle('active', state.viewMode === 'aufgabe');
    modeLoesungBtn.classList.toggle('active', state.viewMode === 'loesung');

    // Build Images and Content
    renderContentArea(task);

    // Update Bottom Navigation & Progress
    prevTaskBtn.disabled = state.currentIndex === 0;
    nextTaskBtn.disabled = state.currentIndex === tasks.length - 1;

    taskCounterText.textContent = `Aufgabe ${state.currentIndex + 1} von ${tasks.length}`;
    const pct = Math.round(((state.currentIndex + 1) / tasks.length) * 100);
    counterProgressFill.style.width = `${pct}%`;

    // Update Pills
    renderTaskPills();

    // Update URL hash/query without reload
    const newUrl = `pruefung.html?jahr=${yearData.year}&aufgabe=${encodeURIComponent(task.label.replace('/', '-'))}`;
    window.history.replaceState({ path: newUrl }, '', newUrl);
  }

  // ==========================================
  // 4. Content Area: Walter Bauer Images & Notes
  // ==========================================
  function renderContentArea(task) {
    if (state.viewMode === 'aufgabe') {
      // Build images list
      const imagesList = task.images || [];
      const imagesHtml = imagesList.length > 0 ? `
        <div class="task-images-gallery">
          <div class="gallery-title">Original-Grafiken & Aufgabenstellung (Walter Bauer):</div>
          <div class="images-flex">
            ${imagesList.map(img => `
              <div class="wb-image-frame">
                <img src="https://images.weserv.nl/?url=www.walterbauer.net/${img}" 
                     alt="Aufgaben-Grafik ${task.label}" 
                     loading="lazy"
                     onerror="this.onerror=null; this.src='http://www.walterbauer.net/${img}';">
              </div>
            `).join('')}
          </div>
        </div>
      ` : `
        <div class="task-no-img-note">
          <p>Für diese Aufgabe liegen keine separaten Grafik-Dateien vor. Die Aufgabe wird über die mathematischen Formeln und Angaben gelöst.</p>
        </div>
      `;

      taskContentArea.innerHTML = `
        <div class="task-aufgabe-view">
          ${imagesHtml}

          <div class="task-guidance-card">
            <div class="guidance-header">
              <span class="guidance-icon">📌</span>
              <strong>Hinweise & Lösungstipps zu dieser Aufgabe</strong>
            </div>
            <p class="guidance-text">${escapeHtml(task.tipp)}</p>
            <div class="guidance-meta">
              <span>Hilfsmittel-Vorgabe: <strong>${escapeHtml(task.hilfsmittel)}</strong></span>
            </div>
          </div>
        </div>
      `;
    } else {
      // Solution Mode (Musterlösung)
      taskContentArea.innerHTML = `
        <div class="task-loesung-view">
          <div class="loesung-header-banner">
            <span class="loesung-badge">Musterlösung & Rechenweg</span>
            <h3 class="loesung-title">Lösungsansatz zu Aufgabe ${escapeHtml(task.label)}</h3>
          </div>

          <div class="loesung-guidance-card">
            <div class="guidance-header">
              <span class="guidance-icon">💡</span>
              <strong>Schritt-für-Schritt Rechenschritte:</strong>
            </div>
            <p class="guidance-text">${escapeHtml(task.tipp)}</p>
          </div>

          <div class="original-solution-box">
            <div class="solution-note-left">
              <strong>Vollständiges handschriftliches Lösungsblatt:</strong>
              <p>Walter Bauer hat für jede Prüfungsaufgabe eine detaillierte, handschriftlich durchgerechnete Lösung mit Skizzen erstellt.</p>
            </div>
            <a href="${escapeHtml(task.solutionUrl)}" target="_blank" rel="noopener" class="primary-btn-clean">
              <span>Original-Lösungsblatt anzeigen ↗</span>
            </a>
          </div>
        </div>
      `;
    }
  }

  // ==========================================
  // 5. Navigation Actions
  // ==========================================
  function goToTask(index) {
    if (index >= 0 && index < tasks.length) {
      state.currentIndex = index;
      renderCurrentTask();
      window.scrollTo({ top: document.querySelector('.runner-header').offsetHeight, behavior: 'smooth' });
    }
  }

  prevTaskBtn.addEventListener('click', () => {
    goToTask(state.currentIndex - 1);
  });

  nextTaskBtn.addEventListener('click', () => {
    goToTask(state.currentIndex + 1);
  });

  // Keyboard navigation (Pfeiltaste Links & Rechts)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      goToTask(state.currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      goToTask(state.currentIndex + 1);
    }
  });

  // Mode Switchers
  modeAufgabeBtn.addEventListener('click', () => {
    state.viewMode = 'aufgabe';
    renderCurrentTask();
  });

  modeLoesungBtn.addEventListener('click', () => {
    state.viewMode = 'loesung';
    renderCurrentTask();
  });

  // Toggle Solved
  solveToggleBtn.addEventListener('click', () => {
    const task = tasks[state.currentIndex];
    if (state.solvedTasks.has(task.id)) {
      state.solvedTasks.delete(task.id);
    } else {
      state.solvedTasks.add(task.id);
    }
    localStorage.setItem('solved_tasks', JSON.stringify(Array.from(state.solvedTasks)));
    renderCurrentTask();
  });

  // Helper
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Initial Run
  renderCurrentTask();
});

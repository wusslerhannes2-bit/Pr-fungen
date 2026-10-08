/**
 * Prüfung Realschule BW — Interactive Logic & Application Engine
 * Mathematische Abschlussprüfungen 1990–2024 (walterbauer.net)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    theme: localStorage.getItem('theme') || 'dark',
    currentTab: 'tab-jahre',
    searchQuery: '',
    eraFilter: 'all',
    topicCategoryFilter: 'all',
    selectedRandomTopic: 'all',
    openTopics: new Set()
  };

  // DOM Elements
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const originalMenuBtn = document.getElementById('original-menu-btn');
  const originalMenuContainer = document.querySelector('.original-links-menu');
  const globalSearchInput = document.getElementById('global-search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const searchShortcuts = document.getElementById('search-shortcuts');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const eraFilterContainer = document.getElementById('era-filter-container');
  const yearsGrid = document.getElementById('years-grid-container');
  const yearsCountBadge = document.getElementById('years-count-badge');
  const topicCategoryFilter = document.getElementById('topic-category-filter');
  const topicsAccordion = document.getElementById('topics-accordion-container');
  const reformsContainer = document.getElementById('reforms-timeline-container');
  const formulasContainer = document.getElementById('formulas-grid-container');
  const randomTopicSelect = document.getElementById('random-topic-select');
  const rollRandomBtn = document.getElementById('roll-random-btn');
  const randomTaskDisplay = document.getElementById('random-task-display');
  const taskModal = document.getElementById('task-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBodyContent = document.getElementById('modal-body-content');

  // Points Calculator inputs
  const calcA1 = document.getElementById('calc-a1');
  const calcA2 = document.getElementById('calc-a2');
  const calcB = document.getElementById('calc-b');
  const calcA1Val = document.getElementById('calc-a1-val');
  const calcA2Val = document.getElementById('calc-a2-val');
  const calcBVal = document.getElementById('calc-b-val');
  const calcTotalPoints = document.getElementById('calc-total-points');
  const calcGrade = document.getElementById('calc-grade');

  // ==========================================
  // 1. Theme Management
  // ==========================================
  function applyTheme(theme) {
    state.theme = theme;
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
  applyTheme(state.theme);

  themeToggleBtn.addEventListener('click', () => {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  });

  // ==========================================
  // 2. Dropdown & Navigation
  // ==========================================
  originalMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    originalMenuContainer.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!originalMenuContainer.contains(e.target)) {
      originalMenuContainer.classList.remove('open');
    }
  });

  // Tab Switching
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      switchTab(targetId);
    });
  });

  function switchTab(targetId) {
    state.currentTab = targetId;
    tabButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-target') === targetId));
    tabPanes.forEach(p => p.classList.toggle('active', p.id === targetId));
    window.scrollTo({ top: document.querySelector('.tabs-sticky-wrapper').offsetTop - 80, behavior: 'smooth' });
  }

  // Footer nav links
  document.querySelectorAll('.footer-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = link.getAttribute('data-tab');
      if (tabId) switchTab(tabId);
    });
  });

  // ==========================================
  // 3. Search Engine
  // ==========================================
  globalSearchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    clearSearchBtn.style.display = state.searchQuery ? 'flex' : 'none';
    renderYearsGrid();
    renderTopicsAccordion();
  });

  clearSearchBtn.addEventListener('click', () => {
    globalSearchInput.value = '';
    state.searchQuery = '';
    clearSearchBtn.style.display = 'none';
    globalSearchInput.focus();
    renderYearsGrid();
    renderTopicsAccordion();
  });

  searchShortcuts.querySelectorAll('.quick-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const q = chip.getAttribute('data-query');
      globalSearchInput.value = q;
      state.searchQuery = q.toLowerCase();
      clearSearchBtn.style.display = 'flex';
      renderYearsGrid();
      renderTopicsAccordion();
    });
  });

  // Era filter buttons
  eraFilterContainer.querySelectorAll('.era-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      eraFilterContainer.querySelectorAll('.era-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.eraFilter = pill.getAttribute('data-era');
      renderYearsGrid();
    });
  });

  // ==========================================
  // 4. Render Years Grid
  // ==========================================
  function renderYearsGrid() {
    const q = state.searchQuery;
    const era = state.eraFilter;

    const filtered = YEARS_DATA.filter(item => {
      // Era check
      if (era !== 'all' && item.eraId !== era) return false;

      // Query check
      if (!q) return true;
      if (item.year.toString().includes(q)) return true;
      if (item.eraTitle.toLowerCase().includes(q)) return true;
      if (item.structure.toLowerCase().includes(q)) return true;
      if (item.tasks.some(t => t.label.toLowerCase().includes(q))) return true;

      return false;
    });

    yearsCountBadge.textContent = filtered.length;

    if (filtered.length === 0) {
      yearsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <p style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">Keine Prüfungsjahrgänge gefunden</p>
          <p>Für die Suchanfrage "${escapeHtml(q)}" wurden keine Treffer erzielt.</p>
        </div>
      `;
      return;
    }

    yearsGrid.innerHTML = filtered.map(yearData => {
      const tasksHtml = yearData.tasks.map(task => {
        let chipClass = '';
        if (task.type === 'pflicht-a1') chipClass = 'chip-pflicht-a1';
        else if (task.type === 'pflicht-a2') chipClass = 'chip-pflicht-a2';
        else if (task.type === 'wahl-b') chipClass = 'chip-wahl-b';

        return `
          <button class="task-chip ${chipClass}" 
                  data-year="${yearData.year}" 
                  data-label="${escapeHtml(task.label)}"
                  data-taskurl="${escapeHtml(task.taskUrl)}"
                  data-loesungurl="${escapeHtml(task.loesungUrl)}"
                  data-pageurl="${escapeHtml(task.pageUrl)}"
                  title="Aufgabe ${escapeHtml(task.label)} anzeigen">
            ${escapeHtml(task.label)}
          </button>
        `;
      }).join('');

      return `
        <article class="year-card" data-year="${yearData.year}">
          <div class="year-card-header">
            <div class="year-title-group">
              <span class="year-number">${yearData.year}</span>
              <span class="year-points-badge">${yearData.points} Pkt</span>
            </div>
            <span class="year-era-tag tag-${yearData.badgeColor}">
              ${escapeHtml(yearData.eraTitle.split('(')[0].trim())}
            </span>
          </div>

          <p class="year-structure-info">${escapeHtml(yearData.structure)}</p>

          <div class="year-tasks-container">
            <div class="tasks-label">Aufgabenübersicht (${yearData.taskCount} Aufgaben):</div>
            <div class="tasks-chip-grid">
              ${tasksHtml || '<span style="color:var(--text-muted);font-size:0.8rem;">Keine Teilaufgaben hinterlegt</span>'}
            </div>
          </div>

          <div class="year-card-footer">
            <a href="${escapeHtml(yearData.uebersichtUrl)}" target="_blank" rel="noopener" class="card-btn primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              <span>Gesamtübersicht</span>
            </a>
            <a href="${escapeHtml(yearData.sourceYearUrl)}" target="_blank" rel="noopener" class="card-btn secondary" title="Originalseite von Walter Bauer aufrufen">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              <span>Original</span>
            </a>
          </div>
        </article>
      `;
    }).join('');

    // Attach click listeners to task chips
    yearsGrid.querySelectorAll('.task-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        openTaskModal({
          year: chip.getAttribute('data-year'),
          label: chip.getAttribute('data-label'),
          taskUrl: chip.getAttribute('data-taskurl'),
          loesungUrl: chip.getAttribute('data-loesungurl'),
          pageUrl: chip.getAttribute('data-pageurl')
        });
      });
    });
  }

  // ==========================================
  // 5. Render Topics Accordion
  // ==========================================
  function renderTopicsAccordion() {
    const q = state.searchQuery;
    const cat = state.topicCategoryFilter;

    const filtered = TOPICS_DATA.filter(topic => {
      if (cat !== 'all' && topic.category !== cat) return false;

      if (!q) return true;
      if (topic.title.toLowerCase().includes(q)) return true;
      if (topic.category.toLowerCase().includes(q)) return true;
      if (topic.description.toLowerCase().includes(q)) return true;
      if (topic.tasks.some(t => t.label.toLowerCase().includes(q) || t.year.toString().includes(q))) return true;

      return false;
    });

    if (filtered.length === 0) {
      topicsAccordion.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <p style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">Keine Stoffgebiete gefunden</p>
          <p>Für die Suchanfrage "${escapeHtml(q)}" wurden keine mathematischen Themen gefunden.</p>
        </div>
      `;
      return;
    }

    topicsAccordion.innerHTML = filtered.map(topic => {
      const isOpen = state.openTopics.has(topic.id) || (q.length > 0);

      const tasksHtml = topic.tasks.map(task => `
        <div class="topic-task-card">
          <div class="task-matrix-left">
            <span class="matrix-year">${task.year}</span>
            <span class="matrix-label">${escapeHtml(task.label)}</span>
          </div>
          <div class="task-matrix-actions">
            <a href="${escapeHtml(task.aufgabeUrl)}" target="_blank" rel="noopener" class="matrix-action-btn" title="Aufgabenblatt öffnen">
              Aufgabe
            </a>
            <a href="${escapeHtml(task.loesungUrl)}" target="_blank" rel="noopener" class="matrix-action-btn" title="Musterlösung öffnen">
              Lösung
            </a>
          </div>
        </div>
      `).join('');

      return `
        <div class="topic-item ${isOpen ? 'open' : ''}" id="${topic.id}">
          <div class="topic-header" data-id="${topic.id}">
            <div class="topic-title-group">
              <div class="topic-meta-row">
                <span class="topic-category-tag">${escapeHtml(topic.category)}</span>
                <span class="topic-tasks-count">${topic.taskCount} Prüfungsaufgaben</span>
              </div>
              <h3 class="topic-name">${escapeHtml(topic.title)}</h3>
              <p class="topic-description">${escapeHtml(topic.description)}</p>
            </div>
            <div class="topic-chevron">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
          <div class="topic-body">
            <div class="topic-matrix-grid">
              ${tasksHtml || '<span style="color:var(--text-muted);font-size:0.85rem;">Keine spezifischen Aufgaben erfasst</span>'}
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Accordion toggle listeners
    topicsAccordion.querySelectorAll('.topic-header').forEach(header => {
      header.addEventListener('click', () => {
        const id = header.getAttribute('data-id');
        const parent = document.getElementById(id);
        if (state.openTopics.has(id)) {
          state.openTopics.delete(id);
          parent.classList.remove('open');
        } else {
          state.openTopics.add(id);
          parent.classList.add('open');
        }
      });
    });
  }

  topicCategoryFilter.addEventListener('change', (e) => {
    state.topicCategoryFilter = e.target.value;
    renderTopicsAccordion();
  });

  // ==========================================
  // 6. Render Reforms Timeline
  // ==========================================
  function renderReformsTimeline() {
    reformsContainer.innerHTML = REFORMS_DATA.map(item => `
      <article class="reform-card ${item.active ? 'active-reform' : ''}">
        <div class="reform-header">
          <span class="reform-year">${item.year}</span>
          <span class="year-points-badge">${item.points} Punkte</span>
        </div>
        <h3 class="reform-title">${escapeHtml(item.title)}</h3>
        <p class="reform-highlight">${escapeHtml(item.highlight)}</p>
        <ul class="reform-details-list">
          ${item.details.map(d => `<li>${d}</li>`).join('')}
        </ul>
      </article>
    `).join('');
  }

  // ==========================================
  // 7. Points Calculator
  // ==========================================
  function updatePointsCalculator() {
    const a1 = parseFloat(calcA1.value) || 0;
    const a2 = parseFloat(calcA2.value) || 0;
    const b = parseFloat(calcB.value) || 0;

    calcA1Val.textContent = a1.toFixed(1);
    calcA2Val.textContent = a2.toFixed(1);
    calcBVal.textContent = b.toFixed(1);

    const total = Math.min(50, Math.max(0, a1 + a2 + b));
    calcTotalPoints.textContent = total.toFixed(1);

    // Official Baden-Württemberg grading scale for Realschule Abschlussprüfung (50 points maximum):
    // Note 1 (Sehr gut): 46 - 50 Pkt
    // Note 2 (Gut): 37.5 - 45.5 Pkt
    // Note 3 (Befriedigend): 29 - 37 Pkt
    // Note 4 (Ausreichend): 20 - 28.5 Pkt
    // Note 5 (Mangelhaft): 10 - 19.5 Pkt
    // Note 6 (Ungenügend): 0 - 9.5 Pkt
    let gradeText = '';
    let gradeColor = '#10b981';

    if (total >= 46) {
      gradeText = 'Note 1 (Sehr gut)';
      gradeColor = '#10b981';
    } else if (total >= 37.5) {
      gradeText = 'Note 2 (Gut)';
      gradeColor = '#34d399';
    } else if (total >= 29) {
      gradeText = 'Note 3 (Befriedigend)';
      gradeColor = '#60a5fa';
    } else if (total >= 20) {
      gradeText = 'Note 4 (Ausreichend — Bestanden)';
      gradeColor = '#f59e0b';
    } else if (total >= 10) {
      gradeText = 'Note 5 (Mangelhaft)';
      gradeColor = '#f97316';
    } else {
      gradeText = 'Note 6 (Ungenügend)';
      gradeColor = '#ef4444';
    }

    calcGrade.textContent = gradeText;
    calcGrade.style.color = gradeColor;
  }

  [calcA1, calcA2, calcB].forEach(input => {
    input.addEventListener('input', updatePointsCalculator);
  });
  updatePointsCalculator();

  // ==========================================
  // 8. Render Formulas Grid
  // ==========================================
  function renderFormulas() {
    formulasContainer.innerHTML = FORMULAS_DATA.map(cat => `
      <div class="formula-category-card">
        <h3 class="formula-cat-title">${escapeHtml(cat.category)}</h3>
        <div class="formula-items-list">
          ${cat.items.map(item => `
            <div class="formula-item">
              <div class="formula-name">${escapeHtml(item.name)}</div>
              <div class="formula-code">${escapeHtml(item.formula)}</div>
              <div class="formula-note">${escapeHtml(item.note)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // ==========================================
  // 9. Random Task Generator
  // ==========================================
  function initRandomTaskGenerator() {
    // Populate select
    TOPICS_DATA.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t.id;
      opt.textContent = `${t.title} (${t.taskCount} Aufgaben)`;
      randomTopicSelect.appendChild(opt);
    });

    // Default display
    drawRandomTask();

    rollRandomBtn.addEventListener('click', () => {
      drawRandomTask();
    });
  }

  function drawRandomTask() {
    const selected = randomTopicSelect.value;
    let pool = [];

    if (selected === 'all') {
      TOPICS_DATA.forEach(t => {
        t.tasks.forEach(task => {
          pool.push({ ...task, topicTitle: t.title, topicCat: t.category });
        });
      });
    } else {
      const topic = TOPICS_DATA.find(t => t.id === selected);
      if (topic) {
        topic.tasks.forEach(task => {
          pool.push({ ...task, topicTitle: topic.title, topicCat: topic.category });
        });
      }
    }

    if (pool.length === 0) {
      randomTaskDisplay.innerHTML = `<div class="random-empty-state">Keine Aufgaben für diesen Filter gefunden.</div>`;
      return;
    }

    const randomItem = pool[Math.floor(Math.random() * pool.length)];

    randomTaskDisplay.innerHTML = `
      <div class="drawn-task-year">Prüfung ${randomItem.year}</div>
      <div class="drawn-task-label">Aufgabe ${escapeHtml(randomItem.label)}</div>
      <div class="drawn-task-topic">Stoffgebiet: <strong>${escapeHtml(randomItem.topicTitle)}</strong> (${escapeHtml(randomItem.topicCat)})</div>
      <div class="drawn-task-actions">
        <a href="${escapeHtml(randomItem.aufgabeUrl)}" target="_blank" rel="noopener" class="card-btn primary">
          Aufgabenblatt öffnen ↗
        </a>
        <a href="${escapeHtml(randomItem.loesungUrl)}" target="_blank" rel="noopener" class="card-btn secondary">
          Musterlösung ansehen ↗
        </a>
      </div>
    `;
  }

  // ==========================================
  // 10. Modal Drawer
  // ==========================================
  function openTaskModal(task) {
    modalBodyContent.innerHTML = `
      <span class="modal-header-tag">Realschulprüfung Baden-Württemberg</span>
      <h2 class="modal-title">Jahrgang ${task.year} · Aufgabe ${escapeHtml(task.label)}</h2>
      <p class="modal-subtitle">Wähle die gewünschte Ansicht auf walterbauer.net:</p>

      <div class="modal-action-buttons">
        <a href="${escapeHtml(task.taskUrl)}" target="_blank" rel="noopener" class="modal-link-card">
          <div class="modal-link-left">
            <div class="modal-icon-badge">📄</div>
            <div class="modal-link-text">
              <span class="modal-link-title">Aufgabenstellung (Aufgabe ${escapeHtml(task.label)})</span>
              <span class="modal-link-desc">Offizieller Aufgabentext mit Zeichnungen & Maßangaben</span>
            </div>
          </div>
          <span style="font-weight:700;color:var(--accent-primary);">Öffnen ↗</span>
        </a>

        <a href="${escapeHtml(task.loesungUrl)}" target="_blank" rel="noopener" class="modal-link-card">
          <div class="modal-link-left">
            <div class="modal-icon-badge" style="background:rgba(16,185,129,0.15);color:#10b981;">💡</div>
            <div class="modal-link-text">
              <span class="modal-link-title">Ausführliche Musterlösung</span>
              <span class="modal-link-desc">Schritt-für-Schritt Rechenweg & Lösungsskizze</span>
            </div>
          </div>
          <span style="font-weight:700;color:#10b981;">Öffnen ↗</span>
        </a>

        <a href="${escapeHtml(task.pageUrl)}" target="_blank" rel="noopener" class="modal-link-card">
          <div class="modal-link-left">
            <div class="modal-icon-badge" style="background:rgba(245,158,11,0.15);color:#f59e0b;">🧭</div>
            <div class="modal-link-text">
              <span class="modal-link-title">Aufgaben-Navigationsseite</span>
              <span class="modal-link-desc">Direktseite der Teilaufgabe auf walterbauer.net</span>
            </div>
          </div>
          <span style="font-weight:700;color:#f59e0b;">Öffnen ↗</span>
        </a>

        <a href="http://www.walterbauer.net/${task.year}_uebersicht.html" target="_blank" rel="noopener" class="modal-link-card">
          <div class="modal-link-left">
            <div class="modal-icon-badge" style="background:rgba(148,163,184,0.15);color:#94a3b8;">📚</div>
            <div class="modal-link-text">
              <span class="modal-link-title">Komplette Prüfung ${task.year} (Übersicht)</span>
              <span class="modal-link-desc">Alle Pflicht- und Wahlaufgaben des Prüfungsjahrgangs</span>
            </div>
          </div>
          <span style="font-weight:700;color:var(--text-secondary);">Öffnen ↗</span>
        </a>
      </div>
    `;

    taskModal.style.display = 'flex';
  }

  function closeTaskModal() {
    taskModal.style.display = 'none';
  }

  modalCloseBtn.addEventListener('click', closeTaskModal);
  taskModal.addEventListener('click', (e) => {
    if (e.target === taskModal) closeTaskModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeTaskModal();
  });

  // ==========================================
  // Helper functions
  // ==========================================
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Initial Renders
  renderYearsGrid();
  renderTopicsAccordion();
  renderReformsTimeline();
  renderFormulas();
  initRandomTaskGenerator();
});

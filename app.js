/**
 * Prüfung Realschule BW — 100% In-Page Navigation & Application Engine
 * Alle Prüfungen (1990–2024) öffnen direkt auf dieser Seite.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    theme: localStorage.getItem('theme') || 'dark',
    currentTab: 'tab-jahre',
    searchQuery: '',
    eraFilter: 'all',
    topicCategoryFilter: 'all',
    openTopics: new Set(),
    activeExamYear: null,
    targetTaskId: null,
    solvedTasks: new Set(JSON.parse(localStorage.getItem('solved_tasks') || '[]'))
  };

  // DOM Elements
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const brandHomeLink = document.getElementById('brand-home-link');
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

  // In-Page Exam Viewer elements
  const inpageExamView = document.getElementById('inpage-exam-view');
  const closeInpageViewBtn = document.getElementById('close-inpage-view-btn');
  const examHeaderBanner = document.getElementById('exam-header-banner');
  const examTasksList = document.getElementById('exam-tasks-list');
  const examProgressLabel = document.getElementById('exam-progress-label');
  const examProgressBar = document.getElementById('exam-progress-bar');

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

  // Home Link returns to default view
  brandHomeLink.addEventListener('click', (e) => {
    e.preventDefault();
    closeInpageExamView();
    switchTab('tab-jahre');
  });

  // ==========================================
  // 2. Tab Navigation
  // ==========================================
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      switchTab(targetId);
    });
  });

  function switchTab(targetId) {
    state.currentTab = targetId;
    closeInpageExamView(false); // Close in-page viewer when navigating away
    tabButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-target') === targetId));
    tabPanes.forEach(p => p.classList.toggle('active', p.id === targetId));
    window.scrollTo({ top: document.querySelector('.tabs-sticky-wrapper').offsetTop - 68, behavior: 'smooth' });
  }

  // ==========================================
  // 3. Search Engine
  // ==========================================
  globalSearchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    clearSearchBtn.style.display = state.searchQuery ? 'flex' : 'none';
    closeInpageExamView(false);
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
      closeInpageExamView(false);
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
      closeInpageExamView(false);
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
      if (era !== 'all' && item.eraId !== era) return false;
      if (!q) return true;
      if (item.year.toString().includes(q)) return true;
      if (item.eraTitle.toLowerCase().includes(q)) return true;
      if (item.structure.toLowerCase().includes(q)) return true;
      if (item.tasks.some(t => t.label.toLowerCase().includes(q) || t.topic.toLowerCase().includes(q))) return true;
      return false;
    });

    yearsCountBadge.textContent = filtered.length;

    if (filtered.length === 0) {
      yearsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <p style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.35rem;">Keine Prüfungen gefunden</p>
          <p>Für "${escapeHtml(q)}" wurden keine Prüfungen gefunden.</p>
        </div>
      `;
      return;
    }

    yearsGrid.innerHTML = filtered.map(yearData => {
      const tasksHtml = yearData.tasks.map(task => {
        const isSolved = state.solvedTasks.has(task.id);
        return `
          <button class="task-chip ${isSolved ? 'chip-solved' : ''}" 
                  data-year="${yearData.year}" 
                  data-taskid="${task.id}"
                  title="Aufgabe ${escapeHtml(task.label)} direkt öffnen">
            ${isSolved ? '✓ ' : ''}${escapeHtml(task.label)}
          </button>
        `;
      }).join('');

      return `
        <article class="year-card" data-year="${yearData.year}">
          <div class="year-card-header">
            <div class="year-title-group">
              <span class="year-number">${yearData.year}</span>
              <span class="year-points-badge">${yearData.points} P</span>
            </div>
            <span class="year-era-tag tag-${yearData.badgeColor}">
              ${escapeHtml(yearData.eraTitle.split('(')[0].trim())}
            </span>
          </div>

          <p class="year-structure-info">${escapeHtml(yearData.structure)}</p>

          <div class="year-tasks-container">
            <div class="tasks-label">Aufgaben (${yearData.taskCount}):</div>
            <div class="tasks-chip-grid">
              ${tasksHtml || '<span style="color:var(--text-muted);font-size:0.8rem;">Keine Aufgaben</span>'}
            </div>
          </div>

          <button class="open-exam-btn" data-year="${yearData.year}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Prüfung ${yearData.year} auf der Seite öffnen</span>
          </button>
        </article>
      `;
    }).join('');

    // Attach click listeners to open the exam directly on the page
    yearsGrid.querySelectorAll('.open-exam-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const yr = parseInt(btn.getAttribute('data-year'), 10);
        openInpageExamView(yr);
      });
    });

    yearsGrid.querySelectorAll('.task-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const yr = parseInt(chip.getAttribute('data-year'), 10);
        const taskId = chip.getAttribute('data-taskid');
        openInpageExamView(yr, taskId);
      });
    });
  }

  // ==========================================
  // 5. IN-PAGE EXAM & TASK VIEWER (Direkt im Browser)
  // ==========================================
  function openInpageExamView(year, targetTaskId = null) {
    const yearData = YEARS_DATA.find(y => y.year === year);
    if (!yearData) return;

    state.activeExamYear = year;
    state.targetTaskId = targetTaskId;

    // Header Banner
    examHeaderBanner.innerHTML = `
      <div class="exam-banner-card">
        <div class="banner-title-group">
          <span class="year-era-tag tag-${yearData.badgeColor}" style="align-self: flex-start; margin-bottom: 0.35rem;">
            ${escapeHtml(yearData.eraTitle)}
          </span>
          <h2 class="banner-year-title">Mathematik Abschlussprüfung ${yearData.year}</h2>
          <p class="banner-subtitle">Realschule Baden-Württemberg · Haupttermin</p>
        </div>
        <div class="banner-meta-badges">
          <div class="banner-badge badge-points">Gesamt: ${yearData.points} Punkte</div>
          <div class="banner-badge">Dauer: ${escapeHtml(yearData.duration)}</div>
          <div class="banner-badge badge-tools">${escapeHtml(yearData.structure.split('·')[0].trim())}</div>
        </div>
      </div>
    `;

    // Tasks List
    examTasksList.innerHTML = yearData.tasks.map(task => {
      const isSolved = state.solvedTasks.has(task.id);
      return `
        <article class="exam-task-card ${isSolved ? 'task-completed' : ''}" id="task-card-${task.id}">
          <div class="task-card-header">
            <div class="task-header-left">
              <span class="task-badge-label">Aufgabe ${escapeHtml(task.label)}</span>
              <span class="task-section-name">${escapeHtml(task.section)}</span>
              <span class="task-points-pill">${task.points}</span>
            </div>
            <button class="task-complete-btn" data-taskid="${task.id}">
              <span class="btn-check-icon">${isSolved ? '✓' : '○'}</span>
              <span>${isSolved ? 'Als gelöst markiert' : 'Als gelöst abhaken'}</span>
            </button>
          </div>

          <div class="task-topic-box">
            <h3 class="task-topic-title">${escapeHtml(task.topic)}</h3>
            <span class="task-tools-rule">Regel: <strong>${escapeHtml(task.hilfsmittel)}</strong></span>
          </div>

          <div class="task-guidance-box">
            <div class="guidance-title">Lösungsansatz & mathematische Hinweise</div>
            <p>${escapeHtml(task.tipp)}</p>
          </div>
        </article>
      `;
    }).join('');

    // Attach checkbox listeners
    examTasksList.querySelectorAll('.task-complete-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const taskId = btn.getAttribute('data-taskid');
        toggleTaskSolved(taskId);
      });
    });

    updateExamProgress();

    // Show in-page view, hide years grid
    inpageExamView.style.display = 'block';
    document.getElementById('tab-jahre').style.display = 'none';

    // Smooth scroll to top of in-page viewer or target task
    if (targetTaskId) {
      setTimeout(() => {
        const el = document.getElementById(`task-card-${targetTaskId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('highlight-target');
          setTimeout(() => el.classList.remove('highlight-target'), 2500);
        }
      }, 50);
    } else {
      inpageExamView.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function closeInpageExamView(smoothScroll = true) {
    inpageExamView.style.display = 'none';
    const tabJahre = document.getElementById('tab-jahre');
    if (state.currentTab === 'tab-jahre') {
      tabJahre.style.display = 'block';
    }
    state.activeExamYear = null;
    state.targetTaskId = null;
    if (smoothScroll) {
      window.scrollTo({ top: document.querySelector('.tabs-sticky-wrapper').offsetTop - 68, behavior: 'smooth' });
    }
  }

  closeInpageViewBtn.addEventListener('click', () => {
    closeInpageExamView(true);
  });

  function toggleTaskSolved(taskId) {
    if (state.solvedTasks.has(taskId)) {
      state.solvedTasks.delete(taskId);
    } else {
      state.solvedTasks.add(taskId);
    }
    localStorage.setItem('solved_tasks', JSON.stringify(Array.from(state.solvedTasks)));

    // Re-render task card state
    const card = document.getElementById(`task-card-${taskId}`);
    if (card) {
      const isSolved = state.solvedTasks.has(taskId);
      card.classList.toggle('task-completed', isSolved);
      const btn = card.querySelector('.task-complete-btn');
      if (btn) {
        btn.querySelector('.btn-check-icon').textContent = isSolved ? '✓' : '○';
        btn.querySelector('span:last-child').textContent = isSolved ? 'Als gelöst markiert' : 'Als gelöst abhaken';
      }
    }

    updateExamProgress();
    renderYearsGrid(); // Update checkmarks on year cards
  }

  function updateExamProgress() {
    if (!state.activeExamYear) return;
    const yearData = YEARS_DATA.find(y => y.year === state.activeExamYear);
    if (!yearData) return;

    const total = yearData.tasks.length;
    const solved = yearData.tasks.filter(t => state.solvedTasks.has(t.id)).length;
    const pct = total > 0 ? Math.round((solved / total) * 100) : 0;

    examProgressLabel.textContent = `${solved} / ${total} gelöst (${pct}%)`;
    examProgressBar.style.width = `${pct}%`;
  }

  // ==========================================
  // 6. Topics Accordion
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
          <p style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.35rem;">Keine Stoffgebiete gefunden</p>
          <p>Für "${escapeHtml(q)}" wurden keine Treffer erzielt.</p>
        </div>
      `;
      return;
    }

    topicsAccordion.innerHTML = filtered.map(topic => {
      const isOpen = state.openTopics.has(topic.id) || (q.length > 0);

      const tasksHtml = topic.tasks.map(task => {
        const taskId = `${task.year}-${task.label.replace('/', '-')}`;
        const isSolved = state.solvedTasks.has(taskId);

        return `
          <div class="topic-task-card" data-year="${task.year}" data-taskid="${taskId}">
            <div class="task-matrix-left">
              <span style="font-weight: 800; font-size: 0.95rem; margin-right: 0.5rem;">${task.year}</span>
              <span style="font-family: var(--font-mono); font-weight: 700; color: var(--accent-primary);">${isSolved ? '✓ ' : ''}${escapeHtml(task.label)}</span>
            </div>
            <span style="font-size: 0.78rem; font-weight: 600; color: var(--text-muted);">Auf der Seite öffnen ↗</span>
          </div>
        `;
      }).join('');

      return `
        <div class="topic-item ${isOpen ? 'open' : ''}" id="${topic.id}">
          <div class="topic-header" data-id="${topic.id}">
            <div class="topic-title-group">
              <div class="topic-meta-row">
                <span class="topic-category-tag">${escapeHtml(topic.category)}</span>
                <span class="topic-tasks-count">${topic.taskCount} Aufgaben</span>
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
              ${tasksHtml || '<span style="color:var(--text-muted);font-size:0.85rem;">Keine Aufgaben erfasst</span>'}
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Toggle accordion
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

    // Clicking a task inside a topic opens that year & task directly on the page!
    topicsAccordion.querySelectorAll('.topic-task-card').forEach(card => {
      card.addEventListener('click', () => {
        const yr = parseInt(card.getAttribute('data-year'), 10);
        const taskId = card.getAttribute('data-taskid');
        switchTab('tab-jahre');
        openInpageExamView(yr, taskId);
      });
    });
  }

  topicCategoryFilter.addEventListener('change', (e) => {
    state.topicCategoryFilter = e.target.value;
    renderTopicsAccordion();
  });

  // ==========================================
  // 7. Reforms Timeline
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
  // 8. Points Calculator
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
  // 9. Formulas Grid
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
  // 10. Random Task Generator
  // ==========================================
  function initRandomTaskGenerator() {
    TOPICS_DATA.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t.id;
      opt.textContent = `${t.title} (${t.taskCount} Aufgaben)`;
      randomTopicSelect.appendChild(opt);
    });

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
      randomTaskDisplay.innerHTML = `<div style="color:var(--text-muted);">Keine Aufgaben für diesen Filter vorhanden.</div>`;
      return;
    }

    const randomItem = pool[Math.floor(Math.random() * pool.length)];
    const taskId = `${randomItem.year}-${randomItem.label.replace('/', '-')}`;

    randomTaskDisplay.innerHTML = `
      <div class="drawn-task-year">Prüfung ${randomItem.year}</div>
      <div class="drawn-task-label">Aufgabe ${escapeHtml(randomItem.label)}</div>
      <div class="drawn-task-topic">Stoffgebiet: <strong>${escapeHtml(randomItem.topicTitle)}</strong></div>
      <button class="primary-btn" id="open-random-inpage-btn" style="margin-top: 1rem;">
        Aufgabe direkt auf der Seite öffnen ↗
      </button>
    `;

    document.getElementById('open-random-inpage-btn').addEventListener('click', () => {
      switchTab('tab-jahre');
      openInpageExamView(randomItem.year, taskId);
    });
  }

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

  // Initial Renders
  renderYearsGrid();
  renderTopicsAccordion();
  renderReformsTimeline();
  renderFormulas();
  initRandomTaskGenerator();
});

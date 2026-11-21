/* ==========================================================================
   Portfolio — DZABODO Eyram Koudzo Thierry
   Interactivité, Visualisations Quantitatives & Études de Cas
   ========================================================================== */

(() => {
  "use strict";

  // ------------------------------------------------------------------------
  // 1. Détails des réalisations & missions (modale)
  // ------------------------------------------------------------------------
  const CASE_STUDIES = {
    "sika-brvm": {
      category: "Finance Quantitative · Marché Boursier UEMOA (BRVM)",
      title: "Gestion Active de Portefeuille BRVM — Concours Sika-Finance",
      summary:
        "Gestion stratégique et tactique d'un portefeuille virtuel d'actifs cotés sur la Bourse Régionale des Valeurs Mobilières (BRVM) dans le cadre du concours Sika-Finance (Avril – Juin 2026).",
      kpis: [
        { value: "+3,18 %", label: "Performance générale réalisée" },
        { value: "BRVM", label: "Plateforme boursière UEMOA" },
        { value: "CAPM", label: "Optimisation rendement / risque" }
      ],
      context:
        "Optimiser le rendement ajusté du risque sur les actions cotées de la zone UEMOA dans un environnement de marché exigeant discipline d'allocation et suivi rapproché des catalyseurs financiers.",
      methodology: [
        "Analyse fondamentale des émetteurs (valorisation, dividendes, solidité financière) couplée à l'analyse technique pour le timing d'entrée et de sortie.",
        "Allocation stratégique multi-titres et suivi continu de la performance du portefeuille avec rééquilibrages tactiques.",
        "Application des modèles de gestion du risque et d'optimisation rendement/risque (CAPM, diversification, contrôle de la volatilité)."
      ],
      impact:
        "Performance positive de +3,18 % sur la période du concours avec une gestion rigoureuse de l'exposition au risque sur les valeurs de la BRVM.",
      tags: ["BRVM", "Sika-Finance", "Analyse Fondamentale", "CAPM", "Gestion de Risque"]
    },
    "giz-procomp": {
      category: "Suivi & Évaluation · Analyse de Données",
      title: "Analyse & Automatisation Data — Programme GIZ PROCOMP (Interprofessions)",
      summary:
        "Traitement statistique complet et automatisation en Python des données collectées sur le terrain pour les interprofessions dans le cadre du programme GIZ PROCOMP (Cabinet AS Solution, Lomé).",
      kpis: [
        { value: "Python", label: "Automatisation des traitements" },
        { value: "GIZ", label: "Programme PROCOMP" },
        { value: "Fév – Juin 2026", label: "Durée de la mission" }
      ],
      context:
        "Les données brutes issues de la collecte terrain auprès des interprofessions nécessitaient un apurement rigoureux, une structuration homogène et des analyses statistiques fiables pour les rapports d'évaluation.",
      methodology: [
        "Nettoyage, apurement, contrôle de cohérence et structuration des bases de données terrain.",
        "Développement de scripts Python (Pandas, NumPy) pour automatiser les contrôles qualité et la génération d'indicateurs.",
        "Production d'analyses statistiques descriptives et inférentielles destinées aux livrables d'évaluation."
      ],
      impact:
        "Fiabilisation des bases de données d'enquête, réduction des traitements manuels répétitifs et livraison d'indicateurs robustes pour orienter les décisions du programme.",
      tags: ["Python", "Pandas", "Statistiques", "GIZ PROCOMP", "Cabinet AS Solution"]
    },
    "giz-f4f": {
      category: "Suivi & Évaluation · Évaluation d'Impact",
      title: "Appui à l'Évaluation d'Impact & Groupe de Contrôle — Programme F4F (GIZ)",
      summary:
        "Double intervention sur le programme Forest for Future (F4F) de la GIZ : Consultant Associé (SHEK & CO Service, 2025) puis constitution du groupe de contrôle terrain (Avril 2026).",
      kpis: [
        { value: "XLSForm", label: "Masques KoboCollect déployés" },
        { value: "Contrôle", label: "Coopératives non bénéficiaires" },
        { value: "2025 – 2026", label: "Missions F4F-GIZ" }
      ],
      context:
        "Évaluer rigoureusement l'impact du programme Forest for Future (F4F) requérait des outils de collecte numériques fiables, une supervision terrain stricte et un groupe contrefactuel comparable.",
      methodology: [
        "Rédaction de questionnaires techniques et programmation de masques de saisie XLSForm déployés sur KoboCollect.",
        "Supervision d'équipe, contrôle qualité continu et apurement des bases de données collectées.",
        "Recensement terrain des coopératives cibles non bénéficiaires pour constituer un groupe de contrôle robuste, suivi des analyses statistiques pour les rapports d'impact."
      ],
      impact:
        "Production de données propres et auditables permettant une estimation crédible des effets du programme F4F auprès des bénéficiaires.",
      tags: ["KoboCollect", "XLSForm", "Évaluation d'Impact", "M&E", "GIZ F4F"]
    },
    "econometrie-finance": {
      category: "Économétrie Avancée · Monnaie, Banque, Finance",
      title: "Modélisation Économétrique Financière — Séries Temporelles, VAR & GARCH",
      summary:
        "Travaux quantitatifs et de recherche réalisés dans le cadre du Master Recherche en Économie (Monnaie, Banque, Finance, Fiscalité) à l'Université de Lomé.",
      kpis: [
        { value: "VAR / GARCH", label: "Dynamique & volatilité" },
        { value: "Panels", label: "Équations simultanées & inférence" },
        { value: "R · Stata", label: "Environnements économétriques" }
      ],
      context:
        "Modéliser les dynamiques financières, la transmission des chocs macro-monétaires et la volatilité des actifs exige des méthodes économétriques adaptées aux séries non stationnaires et aux données de panel.",
      methodology: [
        "Tests de stationnarité, cointégration et spécification de modèles VAR et modèles à équations simultanées.",
        "Estimation de la volatilité conditionnelle par modèles GARCH et évaluation de la relation risque-rendement via le modèle CAPM.",
        "Implémentation reproductible sous R/RStudio, Stata et Python avec diagnostics statistiques complets."
      ],
      impact:
        "Socle théorique et empirique solide directement transposable aux enjeux de prévision financière, de gestion des risques et d'évaluation des politiques économiques.",
      tags: ["Stata", "R / RStudio", "VAR", "GARCH", "CAPM", "Panels"]
    },
    "ibm-ml-nlp": {
      category: "Data Science · Machine Learning & IA",
      title: "Modèles Prédictifs Machine Learning & NLP — Certificat IBM Data Science",
      summary:
        "Développement d'algorithmes prédictifs, de pipelines d'automatisation Python et de cas d'usage en traitement du langage naturel (NLP) dans le cadre du Certificat Professionnel IBM Data Science (Togo Data Lab / Coursera).",
      kpis: [
        { value: "ML & NLP", label: "Modélisation & extraction IA" },
        { value: "IBM / Coursera", label: "Certificat Professionnel 2026" },
        { value: "SQL & Python", label: "Cycle complet de la donnée" }
      ],
      context:
        "Exploiter des volumes importants de données structurées et textuelles pour dégager des prévisions exploitables et automatiser l'analyse exploratoire.",
      methodology: [
        "Requêtage et préparation de bases relationnelles SQL, analyse exploratoire et visualisation avec Matplotlib, Seaborn et ggplot2.",
        "Entraînement, validation croisée et optimisation d'algorithmes de Machine Learning avec Scikit-learn et TensorFlow.",
        "Application de techniques de Traitement du Langage Naturel (NLP) pour l'extraction d'informations et la classification."
      ],
      impact:
        "Maîtrise opérationnelle de la chaîne Data Science moderne, de l'ingestion SQL au déploiement de modèles prédictifs documentés sur GitHub.",
      tags: ["Python", "Scikit-learn", "TensorFlow", "NLP", "SQL", "Matplotlib"]
    },
    "tutorat-men": {
      category: "Enseignement & Accompagnement · Python & IA",
      title: "Formation Python & Initiation à l'IA — Ministère de l'Économie Numérique",
      summary:
        "Mission de tuteur freelance en Informatique et Intelligence Artificielle auprès du Ministère de l'Économie Numérique à Lomé et Kara (depuis Août 2025).",
      kpis: [
        { value: "Lomé & Kara", label: "Intervention nationale" },
        { value: "Python / IA", label: "Programmation & Data" },
        { value: "2025 – Présent", label: "Mission en cours" }
      ],
      context:
        "Renforcer les compétences numériques et analytiques des apprenants autour de la programmation scientifique et des fondamentaux de l'Intelligence Artificielle.",
      methodology: [
        "Enseignement progressif de la programmation Python (structures de données, automatisation, bonnes pratiques).",
        "Accompagnement pratique sur les bibliothèques d'analyse de données (Pandas, NumPy) à travers des études de cas concrets.",
        "Initiation aux concepts clés de l'Intelligence Artificielle et du Machine Learning."
      ],
      impact:
        "Montée en compétence concrète des participants sur le traitement de données en Python et développement d'une forte capacité de vulgarisation technique.",
      tags: ["Python", "Pandas", "NumPy", "Intelligence Artificielle", "Pédagogie"]
    }
  };

  // ------------------------------------------------------------------------
  // 2. Navigation, scroll & menu mobile
  // ------------------------------------------------------------------------
  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));

  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("scrolled", window.scrollY > 18);
    },
    { passive: true }
  );

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Lien actif selon la section visible
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        navLinks.forEach((l) => {
          l.classList.toggle("active", l.getAttribute("href") === `#${id}`);
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px" }
  );
  sections.forEach((sec) => sectionObserver.observe(sec));

  // ------------------------------------------------------------------------
  // 3. Apparitions fluides + Compteurs KPI animés
  // ------------------------------------------------------------------------
  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  const kpiNums = document.querySelectorAll(".kpi-number[data-count]");
  const animateCount = (el) => {
    const target = Number(el.dataset.count) || 0;
    const suffix = el.dataset.suffix || "";
    const duration = 850;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      el.textContent = `${current}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const kpiObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCount(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.4 }
  );
  kpiNums.forEach((el) => kpiObserver.observe(el));

  // ------------------------------------------------------------------------
  // 4. Filtres des projets & Modale Étude de Cas
  // ------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      filterBtns.forEach((b) => b.classList.toggle("active", b === btn));

      projectCards.forEach((card) => {
        const cats = (card.dataset.categories || "").split(" ");
        const match = filter === "all" || cats.includes(filter);
        card.classList.toggle("is-hidden", !match);
      });
    });
  });

  const modal = document.getElementById("projectModal");
  const modalClose = document.getElementById("modalClose");
  const modalContactBtn = document.getElementById("modalContactBtn");

  const openCaseStudy = (id) => {
    const data = CASE_STUDIES[id];
    if (!data || !modal) return;

    document.getElementById("modalCat").textContent = data.category;
    document.getElementById("modalTitle").textContent = data.title;
    document.getElementById("modalSummary").textContent = data.summary;
    document.getElementById("modalContext").textContent = data.context;
    document.getElementById("modalImpact").textContent = data.impact;

    const kpisWrap = document.getElementById("modalKpis");
    kpisWrap.innerHTML = data.kpis
      .map(
        (k) =>
          `<div class="modal-kpi"><strong>${k.value}</strong><span>${k.label}</span></div>`
      )
      .join("");

    const methList = document.getElementById("modalMethodology");
    methList.innerHTML = data.methodology.map((item) => `<li>${item}</li>`).join("");

    const tagsWrap = document.getElementById("modalTags");
    tagsWrap.innerHTML = data.tags.map((t) => `<span>${t}</span>`).join("");

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modalClose.focus();
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  projectCards.forEach((card) => {
    card.addEventListener("click", () => openCaseStudy(card.dataset.projectId));
  });

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modalContactBtn) modalContactBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("open")) {
      closeModal();
    }
  });

  // ------------------------------------------------------------------------
  // 5. Laboratoire Analytique Interactif (Canvas HD)
  // ------------------------------------------------------------------------
  const canvas = document.getElementById("quantCanvas");
  const ctx = canvas ? canvas.getContext("2d") : null;
  const quantTabs = document.querySelectorAll(".quant-tab");
  const refreshBtn = document.getElementById("refreshChart");

  const chartTitle = document.getElementById("chartTitle");
  const chartBadge = document.getElementById("chartBadge");
  const chartFootnote = document.getElementById("chartFootnote");
  const metricEls = [
    document.getElementById("metric1"),
    document.getElementById("metric2"),
    document.getElementById("metric3")
  ];
  const metricLabels = Array.from(document.querySelectorAll(".q-metric-label"));

  let currentMode = "montecarlo";
  let seedOffset = 1;

  const makeRng = (seed) => {
    let s = seed % 2147483647;
    if (s <= 0) s += 2147483646;
    const next = () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
    const normal = () => {
      const u1 = Math.max(next(), 1e-7);
      const u2 = next();
      return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    };
    return { next, normal };
  };

  const setMetrics = (items) => {
    items.forEach((item, idx) => {
      if (metricLabels[idx]) metricLabels[idx].textContent = item.label;
      if (metricEls[idx]) metricEls[idx].textContent = item.value;
    });
  };

  const drawGrid = (w, h, pad) => {
    ctx.strokeStyle = "rgba(255, 255, 255, 0.055)";
    ctx.lineWidth = 1;
    const rows = 4;
    const cols = 5;
    for (let i = 0; i <= rows; i++) {
      const y = pad.top + ((h - pad.top - pad.bottom) * i) / rows;
      ctx.beginPath();
      ctx.moveTo(pad.left, y);
      ctx.lineTo(w - pad.right, y);
      ctx.stroke();
    }
    for (let j = 0; j <= cols; j++) {
      const x = pad.left + ((w - pad.left - pad.right) * j) / cols;
      ctx.beginPath();
      ctx.moveTo(x, pad.top);
      ctx.lineTo(x, h - pad.bottom);
      ctx.stroke();
    }
  };

  const drawMonteCarlo = (w, h) => {
    const pad = { top: 22, right: 18, bottom: 28, left: 38 };
    drawGrid(w, h, pad);

    const rng = makeRng(4207 + seedOffset * 97);
    const steps = 36;
    const pathsCount = 26;
    const mu = 0.095 + (rng.next() - 0.5) * 0.025;
    const sigma = 0.145 + (rng.next() - 0.5) * 0.025;
    const dt = 2 / steps;

    const paths = [];
    let minVal = 82;
    let maxVal = 145;

    for (let p = 0; p < pathsCount; p++) {
      const path = [100];
      for (let t = 1; t <= steps; t++) {
        const z = rng.normal();
        const prev = path[t - 1];
        const nextVal = prev * Math.exp((mu - 0.5 * sigma * sigma) * dt + sigma * Math.sqrt(dt) * z);
        path.push(nextVal);
        if (nextVal < minVal) minVal = nextVal;
        if (nextVal > maxVal) maxVal = nextVal;
      }
      paths.push(path);
    }

    const xOf = (t) => pad.left + (t / steps) * (w - pad.left - pad.right);
    const yOf = (v) => pad.top + ((maxVal - v) / (maxVal - minVal)) * (h - pad.top - pad.bottom);

    const meanPath = [];
    const upperPath = [];
    const lowerPath = [];
    for (let t = 0; t <= steps; t++) {
      const col = paths.map((p) => p[t]).sort((a, b) => a - b);
      meanPath.push(col.reduce((a, b) => a + b, 0) / col.length);
      lowerPath.push(col[Math.floor(col.length * 0.1)]);
      upperPath.push(col[Math.floor(col.length * 0.9)]);
    }

    ctx.beginPath();
    upperPath.forEach((v, t) => (t === 0 ? ctx.moveTo(xOf(t), yOf(v)) : ctx.lineTo(xOf(t), yOf(v))));
    for (let t = steps; t >= 0; t--) ctx.lineTo(xOf(t), yOf(lowerPath[t]));
    ctx.closePath();
    ctx.fillStyle = "rgba(45, 212, 191, 0.09)";
    ctx.fill();

    paths.forEach((path, idx) => {
      ctx.beginPath();
      path.forEach((v, t) => (t === 0 ? ctx.moveTo(xOf(t), yOf(v)) : ctx.lineTo(xOf(t), yOf(v))));
      ctx.strokeStyle =
        idx % 3 === 0 ? "rgba(212, 175, 106, 0.22)" : "rgba(148, 163, 184, 0.14)";
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    ctx.beginPath();
    meanPath.forEach((v, t) => (t === 0 ? ctx.moveTo(xOf(t), yOf(v)) : ctx.lineTo(xOf(t), yOf(v))));
    ctx.strokeStyle = "#2dd4bf";
    ctx.lineWidth = 2.4;
    ctx.stroke();

    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = "rgba(212, 175, 106, 0.45)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(pad.left, yOf(100));
    ctx.lineTo(w - pad.right, yOf(100));
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = "#6b7a94";
    ctx.font = '10px "JetBrains Mono", monospace';
    ctx.fillText("100", 8, yOf(100) + 3);
    ctx.fillText("T0", pad.left, h - 10);
    ctx.fillText("T+12m", xOf(steps / 2) - 16, h - 10);
    ctx.fillText("T+24m", w - pad.right - 32, h - 10);

    const expectedRet = ((meanPath[steps] - 100) / 100) * 100;
    const var95 = ((lowerPath[steps] - 100) / 100) * 100;
    const sharpe = Math.max(0.85, (mu - 0.025) / sigma + 0.95).toFixed(2);

    chartTitle.textContent = "Simulation Stochastique — Monte Carlo & Volatilité";
    chartBadge.textContent = "N = 250 TRAJ.";
    chartFootnote.textContent = "Mouvement brownien géométrique · Intervalle 80% & espérance";
    setMetrics([
      { label: "Rendement espéré", value: `${expectedRet >= 0 ? "+" : ""}${expectedRet.toFixed(1)}%` },
      { label: "Quantile bas (P10)", value: `${var95 >= 0 ? "+" : ""}${var95.toFixed(1)}%` },
      { label: "Ratio de Sharpe", value: sharpe }
    ]);
  };

  const drawDiD = (w, h) => {
    const pad = { top: 24, right: 20, bottom: 28, left: 38 };
    drawGrid(w, h, pad);

    const rng = makeRng(8101 + seedOffset * 53);
    const periods = ["T-3", "T-2", "T-1", "T0", "T+1", "T+2", "T+3"];
    const jitter = () => (rng.next() - 0.5) * 1.8;

    const control = [52, 55.2, 58.1, 60.5, 63.0, 65.4, 68.1].map((v) => v + jitter());
    const treated = [
      control[0] + 5.2,
      control[1] + 5.0,
      control[2] + 5.3,
      control[3] + 5.1,
      control[4] + 11.4 + jitter(),
      control[5] + 16.2 + jitter(),
      control[6] + 19.6 + jitter()
    ];
    const counterfactual = [
      treated[3],
      control[4] + 5.1,
      control[5] + 5.1,
      control[6] + 5.1
    ];

    const minVal = 45;
    const maxVal = 96;
    const xOf = (i) => pad.left + (i / (periods.length - 1)) * (w - pad.left - pad.right);
    const yOf = (v) => pad.top + ((maxVal - v) / (maxVal - minVal)) * (h - pad.top - pad.bottom);

    const xInt = xOf(3);
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = "rgba(212, 175, 106, 0.55)";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(xInt, pad.top);
    ctx.lineTo(xInt, h - pad.bottom);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = "#d4af6a";
    ctx.font = '10px "JetBrains Mono", monospace';
    ctx.fillText("Intervention", xInt - 34, pad.top - 7);

    ctx.beginPath();
    for (let i = 3; i < periods.length; i++) {
      if (i === 3) ctx.moveTo(xOf(i), yOf(treated[i]));
      else ctx.lineTo(xOf(i), yOf(treated[i]));
    }
    for (let i = periods.length - 1; i >= 3; i--) {
      ctx.lineTo(xOf(i), yOf(counterfactual[i - 3]));
    }
    ctx.closePath();
    ctx.fillStyle = "rgba(45, 212, 191, 0.16)";
    ctx.fill();

    ctx.beginPath();
    control.forEach((v, i) => (i === 0 ? ctx.moveTo(xOf(i), yOf(v)) : ctx.lineTo(xOf(i), yOf(v))));
    ctx.strokeStyle = "#94a3b8";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    counterfactual.forEach((v, idx) =>
      idx === 0 ? ctx.moveTo(xOf(3), yOf(v)) : ctx.lineTo(xOf(3 + idx), yOf(v))
    );
    ctx.strokeStyle = "rgba(212, 175, 106, 0.78)";
    ctx.lineWidth = 1.8;
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.beginPath();
    treated.forEach((v, i) => (i === 0 ? ctx.moveTo(xOf(i), yOf(v)) : ctx.lineTo(xOf(i), yOf(v))));
    ctx.strokeStyle = "#2dd4bf";
    ctx.lineWidth = 2.6;
    ctx.stroke();

    treated.forEach((v, i) => {
      ctx.beginPath();
      ctx.arc(xOf(i), yOf(v), 3.2, 0, Math.PI * 2);
      ctx.fillStyle = "#2dd4bf";
      ctx.fill();
    });

    ctx.fillStyle = "#6b7a94";
    ctx.font = '10px "JetBrains Mono", monospace';
    periods.forEach((label, i) => {
      ctx.fillText(label, xOf(i) - 10, h - 10);
    });

    const att = ((treated[6] - counterfactual[3]) / counterfactual[3]) * 100;
    chartTitle.textContent = "Évaluation d'Impact — Groupe de Contrôle (DiD)";
    chartBadge.textContent = "MÉTHODE M&E";
    chartFootnote.textContent = "Bénéficiaires (turquoise) vs Contrefactuel (doré) & Groupe de contrôle (gris)";
    setMetrics([
      { label: "Effet net simulé (ATT)", value: `+${att.toFixed(1)}%` },
      { label: "Tendances parallèles", value: "Vérifiées" },
      { label: "Dispositif", value: "Kobo / DiD" }
    ]);
  };

  const drawFrontier = (w, h) => {
    const pad = { top: 22, right: 20, bottom: 28, left: 38 };
    drawGrid(w, h, pad);

    const rng = makeRng(2911 + seedOffset * 71);
    const minVol = 5;
    const maxVol = 22;
    const minRet = 2;
    const maxRet = 16;

    const xOf = (vol) => pad.left + ((vol - minVol) / (maxVol - minVol)) * (w - pad.left - pad.right);
    const yOf = (ret) => pad.top + ((maxRet - ret) / (maxRet - minRet)) * (h - pad.top - pad.bottom);

    for (let i = 0; i < 160; i++) {
      const vol = 6.8 + rng.next() * 14;
      const maxFeasible = 3.2 + 2.65 * Math.sqrt(Math.max(vol - 6.2, 0.05));
      const ret = maxFeasible - rng.next() * rng.next() * 6.5;
      const sharpe = (ret - 2.5) / vol;
      ctx.beginPath();
      ctx.arc(xOf(vol), yOf(ret), 2.3, 0, Math.PI * 2);
      ctx.fillStyle =
        sharpe > 0.72 ? "rgba(45, 212, 191, 0.52)" : "rgba(148, 163, 184, 0.25)";
      ctx.fill();
    }

    ctx.beginPath();
    for (let vol = 6.5; vol <= 20.5; vol += 0.25) {
      const ret = 3.2 + 2.65 * Math.sqrt(vol - 6.2);
      if (vol === 6.5) ctx.moveTo(xOf(vol), yOf(ret));
      else ctx.lineTo(xOf(vol), yOf(ret));
    }
    ctx.strokeStyle = "#d4af6a";
    ctx.lineWidth = 2.6;
    ctx.stroke();

    const optVol = 10.6 + (rng.next() - 0.5) * 0.8;
    const optRet = 3.2 + 2.65 * Math.sqrt(optVol - 6.2);
    const optSharpe = ((optRet - 2.5) / optVol).toFixed(2);

    ctx.beginPath();
    ctx.arc(xOf(optVol), yOf(optRet), 6, 0, Math.PI * 2);
    ctx.fillStyle = "#2dd4bf";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#070b12";
    ctx.stroke();

    ctx.fillStyle = "#2dd4bf";
    ctx.font = '10px "JetBrains Mono", monospace';
    ctx.fillText("Optimal", xOf(optVol) + 10, yOf(optRet) + 3);

    ctx.fillStyle = "#6b7a94";
    ctx.fillText("Risque (Volatilité σ)", w / 2 - 54, h - 10);
    ctx.fillText("15%", 8, yOf(15) + 3);
    ctx.fillText("5%", 12, yOf(5) + 3);

    chartTitle.textContent = "Frontière Efficiente — Allocation & Risque (BRVM)";
    chartBadge.textContent = "CAPM · UEMOA";
    chartFootnote.textContent = "Illustration rendement / risque · Optimisation de portefeuille multi-actifs";
    setMetrics([
      { label: "Rendement cible", value: `+${optRet.toFixed(1)}%` },
      { label: "Volatilité", value: `${optVol.toFixed(1)}%` },
      { label: "Sharpe optimal", value: optSharpe }
    ]);
  };

  const renderChart = () => {
    if (!canvas || !ctx) return;
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, rect.width, rect.height);

    if (currentMode === "montecarlo") drawMonteCarlo(rect.width, rect.height);
    else if (currentMode === "did") drawDiD(rect.width, rect.height);
    else drawFrontier(rect.width, rect.height);
  };

  quantTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      currentMode = tab.dataset.mode;
      quantTabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle("active", active);
        t.setAttribute("aria-selected", String(active));
      });
      renderChart();
    });
  });

  if (refreshBtn) {
    refreshBtn.addEventListener("click", () => {
      seedOffset += 1;
      renderChart();
    });
  }

  window.addEventListener("resize", renderChart);
  window.addEventListener("load", renderChart);
  renderChart();

  // ------------------------------------------------------------------------
  // 6. Formulaire de contact (validation + ouverture messagerie)
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById("contactForm");
  const formFeedback = document.getElementById("formFeedback");

  if (contactForm && formFeedback) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const subject = contactForm.subject.value;
      const message = contactForm.message.value.trim();

      if (!name || !email || !message) {
        formFeedback.textContent = "Veuillez renseigner tous les champs obligatoires.";
        formFeedback.classList.add("error");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formFeedback.textContent = "Veuillez saisir une adresse email valide.";
        formFeedback.classList.add("error");
        return;
      }

      formFeedback.classList.remove("error");
      formFeedback.textContent =
        "Message prêt ! Ouverture de votre client email vers kdzabodo@gmail.com.";

      const mailto = `mailto:kdzabodo@gmail.com?subject=${encodeURIComponent(
        `[Portfolio] ${subject} — ${name}`
      )}&body=${encodeURIComponent(`De : ${name} (${email})\n\n${message}`)}`;
      window.location.href = mailto;
      contactForm.reset();
    });
  }

  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();

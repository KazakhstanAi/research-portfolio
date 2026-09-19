export type Locale = "en" | "ru";

export const content = {
  en: {
    meta: {
      title: "Kazakhstan AI — Research for Central Asia",
      description:
        "Two research initiatives built around Central Asia: geospatial intelligence and Kazakh–Russian speech intelligence.",
    },
    nav: {
      projects: "Projects",
      approach: "Approach",
      about: "About",
      language: "Русский",
      languageHref: "/ru",
      menu: "Menu",
    },
    hero: {
      eyebrow: "Independent research initiative · Kazakhstan",
      titleLead: ["Research for the", "places"],
      titleAccent: ["generic AI", "overlooks."],
      text: "Two focused research programmes, built around the region’s own landscapes, languages, risks, and data realities.",
      primary: "Explore the projects",
      secondary: "GitHub organisation",
      signal: "Research stage",
      location: "Kazakhstan / Central Asia",
    },
    metrics: [
      { value: "02", label: "independent research tracks" },
      { value: "01", label: "region-first point of view" },
      { value: "∞", label: "room to grow responsibly" },
    ],
    intro: {
      eyebrow: "The portfolio",
      title: "One regional mission. Two testable proposals.",
      text: "Each project has a narrow first milestone, a measurable research question, and a path from reproducible experiments to a useful system.",
    },
    geo: {
      number: "01",
      category: "Earth intelligence",
      title: "Central Asia GeoAI",
      summary:
        "A shared geospatial platform with specialised models for the natural and industrial systems of Central Asia.",
      mvpLabel: "First research module",
      mvp: "GeoRisk · Tailings monitoring",
      questionLabel: "Research question",
      question:
        "Can spatiotemporal machine learning improve anomaly detection in satellite InSAR deformation time series for tailings facility screening?",
      points: [
        "Sentinel-1 SLC and reproducible InSAR processing",
        "3–5 Kazakhstan facilities in the pilot cohort",
        "Rules vs change detection vs classical ML vs temporal models",
        "Traceable API and interactive geospatial map",
      ],
      tags: ["InSAR", "GeoAI", "Anomaly detection", "Earth observation"],
      repo: "View research repository",
      note:
        "A screening tool for engineering review — not a deterministic failure predictor or safety certification system.",
    },
    speech: {
      number: "02",
      category: "Speech intelligence",
      title: "Kazakh–Russian Speech Intelligence",
      summary:
        "A regional speech research programme for real code-switching and robust synthetic-audio detection.",
      mvpLabel: "Two connected tracks",
      mvp: "Code-switching ASR · Voice anti-spoofing",
      questionLabel: "Research focus",
      question:
        "How can speech models represent Kazakh–Russian switching accurately while detecting synthetic audio across unseen generators, codecs, and channels?",
      points: [
        "Language-aware WER/CER and switch-boundary analysis",
        "Speaker-disjoint, auditable evaluation",
        "Unseen-attack and channel-robust anti-spoof testing",
        "Consent, provenance, and privacy built into the data pipeline",
      ],
      tags: ["ASR", "Code-switching", "Anti-spoofing", "Audio AI"],
      repo: "View research repository",
      note:
        "Detector outputs are research signals — not proof of fraud, authorship, or identity.",
    },
    approach: {
      eyebrow: "How we work",
      title: "Ambitious architecture. Disciplined first steps.",
      text: "We separate the long-term platform vision from what can be tested honestly in the next research cycle.",
      items: [
        {
          index: "01",
          title: "Start with a falsifiable question",
          text: "Every module begins with a comparison, a baseline, a protected test set, and an outcome that can fail.",
        },
        {
          index: "02",
          title: "Build for the region",
          text: "Seasonality, sparse observations, Kazakh–Russian switching, local institutions, and data access are design inputs — not edge cases.",
        },
        {
          index: "03",
          title: "Make uncertainty visible",
          text: "Quality, coverage, confidence, limitations, and abstention travel with every model output.",
        },
        {
          index: "04",
          title: "Turn research into infrastructure",
          text: "Versioned data, reproducible experiments, APIs, and interfaces make results reviewable and reusable.",
        },
      ],
    },
    path: {
      eyebrow: "Near-term path",
      title: "From question to credible demonstration.",
      stages: [
        { phase: "01", title: "Scope", text: "Cohort, datasets, governance, baselines" },
        { phase: "02", title: "Experiment", text: "Models, ablations, protected evaluation" },
        { phase: "03", title: "Demonstrate", text: "API, interface, model and data cards" },
      ],
    },
    about: {
      eyebrow: "Why this exists",
      title: "Central Asia should not be an afterthought in AI research.",
      text: "Kazakhstan AI is building an independent research portfolio around problems where regional context changes the technical answer. The goal is not to attach AI to everything. It is to choose consequential questions, run careful experiments, and create foundations others can inspect and extend.",
      cta: "Follow the work on GitHub",
    },
    footer: {
      line: "Regional intelligence. Research-grade evidence.",
      rights: "Kazakhstan AI · 2026",
      top: "Back to top",
    },
  },
  ru: {
    meta: {
      title: "Kazakhstan AI — исследования для Центральной Азии",
      description:
        "Два исследовательских направления для Центральной Азии: геопространственный интеллект и казахско-русские речевые технологии.",
    },
    nav: {
      projects: "Проекты",
      approach: "Подход",
      about: "О нас",
      language: "English",
      languageHref: "/",
      menu: "Меню",
    },
    hero: {
      eyebrow: "Независимая исследовательская инициатива · Казахстан",
      titleLead: ["Исследования", "для задач,"],
      titleAccent: ["которые generic AI", "не замечает."],
      text: "Две сфокусированные программы, построенные вокруг ландшафта, языков, рисков и реальных данных нашего региона.",
      primary: "Смотреть проекты",
      secondary: "Организация на GitHub",
      signal: "Стадия исследования",
      location: "Казахстан / Центральная Азия",
    },
    metrics: [
      { value: "02", label: "самостоятельных направления" },
      { value: "01", label: "регион в центре внимания" },
      { value: "∞", label: "пространство для ответственного роста" },
    ],
    intro: {
      eyebrow: "Портфолио",
      title: "Одна региональная миссия. Два проверяемых proposal.",
      text: "У каждого проекта есть узкий первый результат, измеримый исследовательский вопрос и путь от воспроизводимого эксперимента к полезной системе.",
    },
    geo: {
      number: "01",
      category: "Геопространственный интеллект",
      title: "Central Asia GeoAI",
      summary:
        "Единая геопространственная платформа со специализированными моделями для природных и промышленных систем Центральной Азии.",
      mvpLabel: "Первый исследовательский модуль",
      mvp: "GeoRisk · Мониторинг хвостохранилищ",
      questionLabel: "Исследовательский вопрос",
      question:
        "Может ли spatiotemporal machine learning улучшить поиск аномалий во временных рядах InSAR-деформаций для скрининга хвостохранилищ?",
      points: [
        "Sentinel-1 SLC и воспроизводимый InSAR-процессинг",
        "Пилотная выборка из 3–5 объектов Казахстана",
        "Сравнение правил, change detection, классического ML и temporal-моделей",
        "Трассируемый API и интерактивная геопространственная карта",
      ],
      tags: ["InSAR", "GeoAI", "Поиск аномалий", "Earth observation"],
      repo: "Открыть research-репозиторий",
      note:
        "Инструмент скрининга для инженерной проверки — не система предсказания даты аварии и не сертификация безопасности.",
    },
    speech: {
      number: "02",
      category: "Речевой интеллект",
      title: "Kazakh–Russian Speech Intelligence",
      summary:
        "Региональная программа для распознавания реального переключения языков и устойчивого обнаружения синтетической речи.",
      mvpLabel: "Два связанных направления",
      mvp: "Code-switching ASR · Voice anti-spoofing",
      questionLabel: "Фокус исследования",
      question:
        "Как точно распознавать казахско-русское переключение и обнаруживать синтетическую речь от неизвестных генераторов в разных кодеках и каналах?",
      points: [
        "Language-aware WER/CER и анализ границ переключения",
        "Аудируемая speaker-disjoint оценка",
        "Проверка anti-spoof на неизвестных атаках и каналах",
        "Согласие, происхождение и приватность внутри data pipeline",
      ],
      tags: ["ASR", "Code-switching", "Anti-spoofing", "Audio AI"],
      repo: "Открыть research-репозиторий",
      note:
        "Оценка детектора — исследовательский сигнал, а не доказательство мошенничества, авторства или личности.",
    },
    approach: {
      eyebrow: "Как мы работаем",
      title: "Амбициозная архитектура. Дисциплинированные первые шаги.",
      text: "Мы отделяем долгосрочное видение платформы от того, что можно честно проверить в ближайшем исследовательском цикле.",
      items: [
        {
          index: "01",
          title: "Начинаем с опровержимого вопроса",
          text: "У каждого модуля есть сравнение, baseline, защищённая тестовая выборка и результат, который может оказаться отрицательным.",
        },
        {
          index: "02",
          title: "Проектируем для региона",
          text: "Сезонность, редкие наблюдения, казахско-русская речь, местные институты и доступ к данным — исходные условия, а не edge cases.",
        },
        {
          index: "03",
          title: "Показываем неопределённость",
          text: "Качество, покрытие, уверенность, ограничения и право модели воздержаться сопровождают каждый результат.",
        },
        {
          index: "04",
          title: "Превращаем research в инфраструктуру",
          text: "Версионированные данные, воспроизводимые эксперименты, API и интерфейсы делают результаты проверяемыми и переиспользуемыми.",
        },
      ],
    },
    path: {
      eyebrow: "Ближайший путь",
      title: "От вопроса к убедительной демонстрации.",
      stages: [
        { phase: "01", title: "Рамки", text: "Выборка, данные, governance, baselines" },
        { phase: "02", title: "Эксперимент", text: "Модели, ablations, защищённая оценка" },
        { phase: "03", title: "Демонстрация", text: "API, интерфейс, model и data cards" },
      ],
    },
    about: {
      eyebrow: "Зачем это нужно",
      title: "Центральная Азия не должна быть послесловием в AI-исследованиях.",
      text: "Kazakhstan AI создаёт независимое исследовательское портфолио вокруг задач, где региональный контекст меняет технический ответ. Наша цель — не добавить AI ко всему. Мы выбираем значимые вопросы, проводим аккуратные эксперименты и создаём основу, которую другие смогут проверить и развить.",
      cta: "Следить за работой на GitHub",
    },
    footer: {
      line: "Региональный контекст. Исследовательская строгость.",
      rights: "Kazakhstan AI · 2026",
      top: "Наверх",
    },
  },
} as const;

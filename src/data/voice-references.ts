export const voiceReferences = [
  {
    "id": "asvspoof",
    "title": "ASVspoof 2021: Towards Spoofed and Deepfake Speech Detection in the Wild",
    "authors": "Liu et al.",
    "year": "2023",
    "venue": "IEEE/ACM TASLP",
    "type": [
      "Challenge analysis",
      "Анализ соревнования"
    ],
    "url": "https://arxiv.org/abs/2210.02437",
    "finding": [
      "Reveals generalization gaps across deepfake source datasets and real replay environments.",
      "Выявляет проблемы переноса между deepfake-датасетами и реальными условиями replay."
    ],
    "meaning": [
      "A core evaluation reference, not evidence that our detector already works in KZ/RU conditions.",
      "Основной ориентир для оценки, не доказательство работы нашего детектора в KZ/RU-условиях."
    ]
  },
  {
    "id": "aasist",
    "title": "AASIST: Audio Anti-Spoofing using Integrated Spectro-Temporal Graph Attention Networks",
    "authors": "Jung et al.",
    "year": "2022",
    "venue": "ICASSP 2022",
    "type": [
      "Detection architecture",
      "Архитектура детектора"
    ],
    "url": "https://arxiv.org/abs/2110.01200",
    "finding": [
      "Models spectro-temporal relationships for audio anti-spoofing; an official implementation is available.",
      "Моделирует спектрально-временные связи для audio anti-spoofing; доступна авторская реализация."
    ],
    "meaning": [
      "A reproducible baseline candidate. Its original benchmark results do not establish robustness to our languages or new generators.",
      "Кандидат для воспроизводимого baseline. Исходные результаты не доказывают устойчивость на наших языках или новых генераторах."
    ]
  },
  {
    "id": "generalization",
    "title": "Does Audio Deepfake Detection Generalize?",
    "authors": "Müller et al.",
    "year": "2022",
    "venue": "Interspeech 2022",
    "type": [
      "Cross-dataset study",
      "Исследование междатасетного переноса"
    ],
    "url": "https://www.isca-archive.org/interspeech_2022/muller22_interspeech.html",
    "finding": [
      "Finds substantial degradation when existing detectors are evaluated on collected in-the-wild audio.",
      "Обнаруживает существенное ухудшение детекторов при оценке на собранном аудио из реальных условий."
    ],
    "meaning": [
      "Motivates held-out domains and matched preprocessing. Publicly accessible recordings still require a data-use review.",
      "Обосновывает отложенные домены и сопоставимый препроцессинг. Доступность записей не заменяет проверку прав использования."
    ]
  },
  {
    "id": "asvspoof5",
    "title": "ASVspoof 5: Design, Collection and Validation of Resources for Spoofing, Deepfake, and Adversarial Attack Detection Using Crowdsourced Speech",
    "authors": "Wang et al.",
    "year": "2025",
    "venue": "arXiv:2502.08857 · resource paper",
    "type": [
      "Dataset and protocol",
      "Датасет и протокол"
    ],
    "url": "https://arxiv.org/abs/2502.08857",
    "finding": [
      "Introduces diverse acoustic data, multiple attack algorithms and speaker-disjoint partitions.",
      "Предлагает разнообразные акустические данные, несколько семейств атак и разделение без пересечения дикторов."
    ],
    "meaning": [
      "An additional benchmark/protocol reference. We must separately test unseen generators and codecs in KZ/RU, rather than transfer published scores.",
      "Дополнительный ориентир для benchmark и протокола. Новые генераторы и кодеки в KZ/RU проверяются отдельно, без переноса чужих чисел."
    ]
  },
  {
    "id": "ksc2",
    "title": "KSC2: An Industrial-Scale Open-Source Kazakh Speech Corpus",
    "authors": "Mussakhojayeva, Khassanov & Varol",
    "year": "2022",
    "venue": "Interspeech 2022",
    "type": [
      "Regional speech corpus",
      "Региональный речевой корпус"
    ],
    "url": "https://www.isca-archive.org/interspeech_2022/mussakhojayeva22_interspeech.html",
    "finding": [
      "Includes transcribed Kazakh speech and Kazakh–Russian code-switching.",
      "Содержит транскрибированную казахскую речь и казахско-русское переключение языков."
    ],
    "meaning": [
      "A corpus reference for local speech coverage, not ready-made real/synthetic labels. Audit provenance and licences before selecting genuine-speech samples.",
      "Ориентир для локального речевого покрытия, не готовая разметка real/synthetic. Перед отбором реальной речи проверить происхождение и лицензии."
    ]
  },
  {
    "id": "nisqa",
    "title": "NISQA: A Deep CNN-Self-Attention Model for Multidimensional Speech Quality Prediction with Crowdsourced Datasets",
    "authors": "Mittag et al.",
    "year": "2021",
    "venue": "Interspeech 2021",
    "type": [
      "Supporting quality metric",
      "Вспомогательная метрика качества"
    ],
    "url": "https://www.isca-archive.org/interspeech_2021/mittag21_interspeech.html",
    "finding": [
      "Predicts perceived speech quality and communication-channel distortions.",
      "Предсказывает воспринимаемое качество речи и искажения канала связи."
    ],
    "meaning": [
      "Optional quality-control reference, not a synthetic-speech detector or calibrated authenticity score.",
      "Вспомогательный контроль качества, не детектор синтетической речи и не калиброванная оценка подлинности."
    ]
  }
] as const;

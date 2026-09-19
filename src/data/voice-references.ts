export const voiceReferences = [
  {
    "id": "ksc2",
    "title": "KSC2: An Industrial-Scale Open-Source Kazakh Speech Corpus",
    "authors": "Mussakhojayeva, Khassanov & Varol",
    "year": "2022",
    "venue": "Interspeech 2022",
    "type": [
      "Peer-reviewed corpus paper",
      "Рецензируемая статья о корпусе"
    ],
    "url": "https://www.isca-archive.org/interspeech_2022/mussakhojayeva22_interspeech.html",
    "finding": [
      "KSC2 includes transcribed Kazakh speech and Kazakh–Russian code-switching.",
      "KSC2 содержит транскрибированную казахскую речь и казахско-русское переключение языков."
    ],
    "meaning": [
      "A starting point for local ASR evaluation, not a complete enterprise-call benchmark. Check licensing and domain coverage.",
      "Отправная точка для локальной оценки ASR, не готовый benchmark корпоративных звонков. Нужна проверка лицензий и покрытия домена."
    ]
  },
  {
    "id": "tau",
    "title": "τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains",
    "authors": "Yao, Shinn, Razavi & Narasimhan",
    "year": "2025",
    "venue": "ICLR 2025 · preprint 2024",
    "type": [
      "Peer-reviewed benchmark",
      "Рецензируемый benchmark"
    ],
    "url": "https://openreview.net/pdf?id=roNSXZpUDN",
    "finding": [
      "Evaluates tool-using agents against goal states and checks consistency over repeated interactions.",
      "Оценивает агентов с инструментами по итоговому состоянию задачи и устойчивости повторных взаимодействий."
    ],
    "meaning": [
      "A basis for task and tool checks. It does not validate audio latency, Kazakh speech or our implementation.",
      "Основа проверок задач и инструментов. Работа не валидирует задержку аудио, казахскую речь или нашу реализацию."
    ]
  },
  {
    "id": "voicebench",
    "title": "VoiceBench: Benchmarking LLM-Based Voice Assistants",
    "authors": "Chen et al.",
    "year": "2026",
    "venue": "TACL 14, 378–398",
    "type": [
      "Peer-reviewed benchmark",
      "Рецензируемый benchmark"
    ],
    "url": "https://aclanthology.org/2026.tacl-1.18/",
    "finding": [
      "Evaluates spoken instructions under speaker, environment and content variations, beyond transcription alone.",
      "Оценивает устные инструкции при изменении диктора, среды и содержания, выходя за рамки транскрипции."
    ],
    "meaning": [
      "Supports end-to-end evaluation. This external academic VoiceBench is not the planned VAIS VoiceBench module; no affiliation is implied.",
      "Обосновывает сквозную оценку. Внешний академический VoiceBench не является планируемым модулем VAIS VoiceBench; связи между проектами нет."
    ]
  },
  {
    "id": "ihbench",
    "title": "IHBench: Evaluating Post-Interruption Recovery in Voice Agents with Structured Workflows",
    "authors": "Salimi et al.",
    "year": "2026",
    "venue": "arXiv:2606.19595",
    "type": [
      "Preprint",
      "Препринт"
    ],
    "url": "https://arxiv.org/abs/2606.19595",
    "finding": [
      "Separately evaluates task fulfillment and recovery after interruptions in structured workflows.",
      "Отдельно оценивает выполнение задачи и восстановление после перебиваний в структурированных сценариях."
    ],
    "meaning": [
      "Motivates recovery tests, not just barge-in timing. Local-language transfer remains unverified.",
      "Мотивирует проверку восстановления, а не только момента перебивания. Перенос на локальные языки не проверен."
    ]
  },
  {
    "id": "asvspoof",
    "title": "ASVspoof 2021: Towards Spoofed and Deepfake Speech Detection in the Wild",
    "authors": "Liu et al.",
    "year": "2023",
    "venue": "IEEE/ACM TASLP · DOI 10.1109/TASLP.2023.3285283",
    "type": [
      "Peer-reviewed challenge analysis",
      "Рецензируемый анализ соревнования"
    ],
    "url": "https://arxiv.org/abs/2210.02437",
    "finding": [
      "Reports limitations across real replay environments and deepfake source datasets.",
      "Выявляет ограничения переноса между реальными условиями replay и датасетами deepfake-аудио."
    ],
    "meaning": [
      "VoiceGuard needs unseen-generator and channel tests. A score is not proof of fraud or a calibrated probability by default.",
      "VoiceGuard требует тестов на новых генераторах и каналах. Score сам по себе не доказывает мошенничество и не является калиброванной вероятностью."
    ]
  },
  {
    "id": "nisqa",
    "title": "NISQA: A Deep CNN-Self-Attention Model for Multidimensional Speech Quality Prediction with Crowdsourced Datasets",
    "authors": "Mittag, Naderi, Chehadi & Möller",
    "year": "2021",
    "venue": "Interspeech 2021",
    "type": [
      "Peer-reviewed methods paper",
      "Рецензируемая методическая статья"
    ],
    "url": "https://www.isca-archive.org/interspeech_2021/mittag21_interspeech.html",
    "finding": [
      "Predicts perceptual quality and several distortion dimensions for communication audio.",
      "Предсказывает воспринимаемое качество и несколько видов искажений аудио в каналах связи."
    ],
    "meaning": [
      "Useful as a candidate acoustic metric, not a substitute for native-speaker TTS listening tests or factual correctness.",
      "Кандидат для акустических метрик, не замена оценке TTS носителями языка и проверке фактической корректности."
    ]
  },
  {
    "id": "judges",
    "title": "Benchmarking LLM Judges for Voice-Agent Evaluation: Reliability, Calibration, and Human Oversight",
    "authors": "Purwar, Singh & Srivastava",
    "year": "2026",
    "venue": "arXiv:2608.24314",
    "type": [
      "Preprint",
      "Препринт"
    ],
    "url": "https://arxiv.org/abs/2608.24314",
    "finding": [
      "Finds that agreement between human and LLM judges depends on metric and evaluation configuration.",
      "Показывает зависимость согласия людей и LLM-судей от метрики и конфигурации оценки."
    ],
    "meaning": [
      "Validate automated rubrics with bilingual reviewers; retain human review for ambiguous or high-impact failures.",
      "Проверять автоматические рубрики двуязычными экспертами; спорные и критичные ошибки отправлять человеку."
    ]
  }
] as const;


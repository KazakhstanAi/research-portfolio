export const references = [
  {
    "id": "review",
    "title": "Monitoring tailings storage facilities with multi-temporal DInSAR: A systematic review",
    "authors": "Navarro Sánchez et al.",
    "year": "2026",
    "venue": "Science of the Total Environment, 1011, 181161",
    "type": [
      "Systematic review",
      "Систематический обзор"
    ],
    "url": "https://doi.org/10.1016/j.scitotenv.2025.181161",
    "finding": [
      "The review covers 23 publications and 18 facilities. It supports deformation monitoring with MT-DInSAR, while finding that only 21.74% of studies validated results with ground measurements.",
      "Обзор охватывает 23 публикации и 18 объектов. Он поддерживает применение MT-DInSAR для мониторинга деформаций, но лишь 21,74% рассмотренных работ проверяли результаты наземными измерениями."
    ],
    "meaning": [
      "Use quality-controlled time series and seek independent validation. Evidence across case studies does not establish a universal warning threshold.",
      "Нужны контроль качества временных рядов и независимая проверка. Набор кейсов не обосновывает универсальный порог тревоги."
    ]
  },
  {
    "id": "cadia",
    "title": "Deep learning-based early warning of tailings storage facility instability using Sentinel-1 and Radarsat-2 InSAR calibrated with a geomechanical model",
    "authors": "Bayaraa, Sheil & Rossi",
    "year": "2026",
    "venue": "Scientific Reports, 16, 22693",
    "type": [
      "Peer-reviewed case study",
      "Рецензируемое исследование случая"
    ],
    "url": "https://doi.org/10.1038/s41598-026-51005-z",
    "finding": [
      "The Cadia study combines InSAR, geomechanical modelling and deep learning to identify anomalous deformation. Results depend on sensor, observation geometry and correction of phase ambiguities.",
      "В кейсе Cadia объединены InSAR, геомеханическое моделирование и deep learning для поиска аномальных деформаций. Результат зависит от сенсора, геометрии наблюдений и коррекции фазовых неоднозначностей."
    ],
    "meaning": [
      "A close methodological precedent for the pilot. Its results cannot be transferred directly to Sentinel-1-only monitoring in Kazakhstan.",
      "Близкий методический ориентир для пилота. Результаты нельзя напрямую переносить на мониторинг в Казахстане только по Sentinel-1."
    ]
  },
  {
    "id": "spectral",
    "title": "Monitoring the risk of a tailings dam collapse through spectral analysis of satellite InSAR time-series data",
    "authors": "Das, Priyadarshana & Grebby",
    "year": "2023",
    "venue": "arXiv:2302.00781v2",
    "type": [
      "Preprint · retrospective case study",
      "Препринт · ретроспективный кейс"
    ],
    "url": "https://arxiv.org/abs/2302.00781v2",
    "finding": [
      "A spectral statistical method finds precursory changes at Brumadinho retrospectively. The authors report an indication at least five months before collapse.",
      "Спектральный статистический метод ретроспективно обнаруживает изменения на Brumadinho. Авторы сообщают о сигнале как минимум за пять месяцев до обрушения."
    ],
    "meaning": [
      "A reason to include strong statistical baselines. The reported lead time is a result from one retrospective case, not an operational guarantee.",
      "Основание включить сильные статистические baseline-методы. Указанное время — результат одного ретроспективного кейса, а не эксплуатационная гарантия."
    ]
  },
  {
    "id": "mintpy",
    "title": "Small baseline InSAR time series analysis: Unwrapping error correction and noise reduction",
    "authors": "Yunjun, Fattahi & Amelung",
    "year": "2019",
    "venue": "Computers & Geosciences, 133, 104331",
    "type": [
      "Methods and open-source software",
      "Методика и открытое ПО"
    ],
    "url": "https://doi.org/10.1016/j.cageo.2019.104331",
    "extra": "https://yunjunz.github.io/files/Yunjun-2019-mintpy.pdf",
    "finding": [
      "The paper presents the MintPy workflow for small-baseline time-series analysis, including unwrapping-error correction and noise reduction.",
      "Работа представляет MintPy: обработку временных рядов по короткобазовым интерферограммам, коррекцию ошибок развёртки фазы и уменьшение шума."
    ],
    "meaning": [
      "A reproducible processing foundation. MintPy operates on interferogram stacks; it is neither a complete SLC preprocessing chain nor a failure detector.",
      "Основа воспроизводимого процессинга. MintPy работает со стеками интерферограмм; это не полный препроцессинг SLC и не детектор аварий."
    ]
  },
  {
    "id": "kazakhstan",
    "title": "Mine Tailings Facilities in Kazakhstan: Public Databases, Management Practices, and Extreme Weather Events",
    "authors": "Atakhanova, Baigaliyeva & Kairat",
    "year": "2026",
    "venue": "Sustainability, 18(13), 6479",
    "type": [
      "Regional study",
      "Региональное исследование"
    ],
    "url": "https://www.mdpi.com/2071-1050/18/13/6479",
    "finding": [
      "The study examines Kazakhstan's inventories and weather exposure. It distinguishes 118 database entries from a report citing 121 facilities in the 2017–2019 inventory.",
      "Работа рассматривает реестры Казахстана и погодные воздействия. В инвентаризации 2017–2019 годов авторы различают 118 записей базы и 121 объект в отчёте."
    ],
    "meaning": [
      "Evidence for regional relevance and inventory work. These historical counts are not a verified 2026 census or evidence of our model's accuracy.",
      "Обоснование региональной актуальности и работы с реестром. Исторические числа не являются проверенной переписью на 2026 год или доказательством точности нашей модели."
    ]
  },
  {
    "id": "sentinel",
    "title": "Sentinel-1 product documentation",
    "authors": "Copernicus Data Space Ecosystem",
    "year": "Technical documentation",
    "venue": "Level-1 Single Look Complex (SLC)",
    "type": [
      "Official sensor documentation",
      "Официальная документация сенсора"
    ],
    "url": "https://documentation.dataspace.copernicus.eu/Data/Sentinel1.html",
    "finding": [
      "SLC products retain complex amplitude and phase. Phase information is essential for the proposed interferometric processing.",
      "Продукты SLC сохраняют комплексную амплитуду и фазу. Фазовая информация необходима для предлагаемого интерферометрического процессинга."
    ],
    "meaning": [
      "Select SLC acquisitions with compatible geometry. GRD intensity products cannot substitute for this phase information.",
      "Выбирать SLC-съёмки с совместимой геометрией. Интенсивностные продукты GRD не заменяют фазовую информацию."
    ]
  }
] as const;

export const analogs = [
  {
    "name": "TRE ALTAMIRA / TREmaps",
    "url": "https://site.tre-altamira.com/",
    "kind": [
      "Commercial service",
      "Коммерческий сервис"
    ],
    "desc": [
      "Ground-motion monitoring and a web platform for mining assets.",
      "Мониторинг смещений и веб-платформа для горнопромышленных объектов."
    ],
    "lesson": [
      "An example of a mature delivery workflow; not a measured comparison against our future model.",
      "Пример зрелого рабочего процесса; сравнения точности с нашей будущей моделью пока нет."
    ]
  },
  {
    "name": "SkyGeo",
    "url": "https://www.skygeo.com/insar-for-the-mining-industry",
    "kind": [
      "Commercial service",
      "Коммерческий сервис"
    ],
    "desc": [
      "InSAR interpretation for pits, tailings and surrounding infrastructure, with engineering context.",
      "Интерпретация InSAR для карьеров, хвостохранилищ и инфраструктуры с инженерным контекстом."
    ],
    "lesson": [
      "A reference for quality review and escalation. Vendor descriptions do not independently validate detector performance.",
      "Ориентир для проверки качества и передачи на инженерную оценку. Описание поставщика не является независимой валидацией детектора."
    ]
  },
  {
    "name": "Copernicus EGMS",
    "url": "https://land.copernicus.eu/en/products/european-ground-motion-service/egms-basic",
    "kind": [
      "Public European service",
      "Публичный европейский сервис"
    ],
    "desc": [
      "A regional ground-motion service with displacement products and a map viewer.",
      "Региональный сервис смещений поверхности с продуктами наблюдений и картой."
    ],
    "lesson": [
      "An infrastructure reference, not a ready source of Kazakhstan coverage or a specialised tailings-failure detector.",
      "Ориентир по инфраструктуре, а не готовое покрытие Казахстана или специализированный детектор аварий хвостохранилищ."
    ]
  }
] as const;


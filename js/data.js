const dictionaryData = {
    "HBM": {
        "def": "High Bandwidth Memory. 여러 개의 DRAM을 수직으로 쌓아 데이터 처리 속도를 혁신적으로 높인 고성능 메모리입니다. AI 서버 및 GPU에 필수적으로 사용됩니다.",
        "category": "Memory"
    },
    "GAA": {
        "def": "Gate-All-Around. 채널의 4면을 게이트가 감싸는 구조로, 기존 FinFET보다 세밀한 전류 조절이 가능한 차세대 트랜지스터 기술입니다.",
        "category": "Logic"
    },
    "EUV": {
        "def": "Extreme Ultraviolet. 극자외선 노광 장비. 매우 짧은 파장의 빛을 사용하여 반도체 회로를 더 미세하게 그릴 수 있게 해주는 핵심 장비입니다.",
        "category": "Lithography"
    },
    "ALD": {
        "def": "Atomic Layer Deposition. 원자층 증착. 원자 단위의 매우 얇고 균일한 막을 입히는 공정 기술입니다.",
        "category": "Deposition"
    },
    "CMP": {
        "def": "Chemical Mechanical Polishing. 화학적/기계적 연마. 웨이퍼 표면을 평탄하게 갈아내는 공정입니다.",
        "category": "Planarization"
    },
    "Lithography": {
        "def": "노광 공정. 빛을 이용하여 웨이퍼 위에 회로 패턴을 그리는 반도체 제조의 핵심 공정입니다.",
        "category": "Process"
    },
    "Etching": {
        "def": "식각 공정. 회로 패턴을 제외한 불필요한 부분을 깎아내는 공정입니다.",
        "category": "Process"
    },
    "Packaging": {
        "def": "패키징. 가공이 끝난 웨이퍼를 개별 칩으로 자르고 외부와 연결할 수 있게 포장하는 공정입니다.",
        "category": "Back-end"
    }
};

const quizData = [
    {
        "q": "다음 중 미세 회로 패턴을 그리기 위해 극자외선을 사용하는 공정은?",
        "options": ["식각(Etching)", "노광(Lithography)", "증착(Deposition)", "이온주입(Ion Implantation)"],
        "answer": 1,
        "category": "Lithography",
        "explanation": "노광(Lithography) 공정은 빛(EUV 등)을 이용해 웨이퍼에 회로를 그리는 공정입니다."
    },
    {
        "q": "여러 개의 DRAM을 수직으로 쌓아 대역폭을 높인 AI 전용 메모리는?",
        "options": ["DDR5", "LPDDR5X", "HBM", "GDDR6"],
        "answer": 2,
        "category": "Memory",
        "explanation": "HBM(High Bandwidth Memory)은 수직 적층을 통해 대역폭을 극대화한 메모리입니다."
    },
    {
        "q": "웨이퍼 표면을 화학적, 기계적으로 평탄화하는 공정은?",
        "options": ["CMP", "ALD", "PVD", "CVD"],
        "answer": 0,
        "category": "CMP",
        "explanation": "CMP는 Chemical Mechanical Polishing의 약자로 평탄화 공정을 의미합니다."
    },
    {
        "q": "차세대 트랜지스터 구조로 채널의 4면을 게이트가 감싸는 방식은?",
        "options": ["Planar FET", "FinFET", "GAA", "MBCFET"],
        "answer": 2,
        "category": "Device",
        "explanation": "GAA(Gate-All-Around)는 채널 4면을 감싸 제어력을 높인 구조입니다."
    },
    {
        "q": "원자 단위로 매우 얇고 균일한 박막을 증착하는 기술은?",
        "options": ["Sputtering", "CVD", "ALD", "Evaporation"],
        "answer": 2,
        "category": "Deposition",
        "explanation": "ALD(Atomic Layer Deposition)는 원자층 단위의 정밀한 증착이 가능합니다."
    }
];

const careerData = {
    "Design": {
        "title": "설계 (Design)",
        "icon": "architecture",
        "description": "반도체의 논리 회로 및 물리적 구조를 설계합니다.",
        "skills": ["Verilog/VHDL", "Digital Logic", "Computer Architecture", "Python/Tcl Scripting"],
        "resources": [
            { "name": "Computer Organization and Design (Patterson & Hennessy)", "link": "#" },
            { "name": "Digital Integrated Circuits (Rabaey)", "link": "#" }
        ]
    },
    "Process": {
        "title": "공정 (Process)",
        "icon": "settings_input_component",
        "description": "8대 공정을 통해 실제 웨이퍼에 회로를 구현합니다.",
        "skills": ["Semiconductor Physics", "Chemistry", "Plasma Physics", "Statistical Process Control"],
        "resources": [
            { "name": "Silicon VLSI Technology (Plummer)", "link": "#" },
            { "name": "반도체 8대 공정 기술 입문", "link": "#" }
        ]
    },
    "Equipment": {
        "title": "설비 (Equipment)",
        "icon": "precision_manufacturing",
        "description": "반도체 장비의 유지보수 및 최적화를 담당합니다.",
        "skills": ["Mechanical Engineering", "Electronics", "Control Systems", "Vacuum Technology"],
        "resources": [
            { "name": "Introduction to Semiconductor Manufacturing (Hong Xiao)", "link": "#" },
            { "name": "진공 기술 기초", "link": "#" }
        ]
    },
    "Sales": {
        "title": "영업/마케팅 (Sales/Marketing)",
        "icon": "trending_up",
        "description": "기술적 이해를 바탕으로 고객사와 비즈니스를 수행합니다.",
        "skills": ["Technical Communication", "Market Analysis", "Project Management", "Semiconductor Ecosystem"],
        "resources": [
            { "name": "Semiconductor Industry Insights", "link": "#" },
            { "name": "Global Supply Chain Management", "link": "#" }
        ]
    }
};

const newsData = [
    {
        "id": "samsung-hbm4-bonding",
        "title": "삼성전자, HBM4에 하이브리드 본딩(Hybrid Bonding) 최초 적용 선언... 수율 확보가 관건",
        "date": "2026.05.06",
        "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        "source": "디일렉",
        "summary": [
            "삼성전자가 차세대 HBM4 16단 제품부터 하이브리드 본딩 기술을 공식 적용하기로 결정",
            "솔더볼 없이 구리를 직접 연결하여 데이터 전송 효율을 높이고 칩 두께를 획기적으로 축소",
            "적층 단수 증가에 따른 물리적 높이 한계를 극복하기 위한 필연적 선택으로 분석"
        ],
        "commentary": "하이브리드 본딩은 기존 TC-NCF나 MR-MUF 방식과 달리 칩 사이에 범프(Bump)가 없어 열 저항을 낮추고 배선 밀도를 높일 수 있습니다. 하지만 극도의 청정도와 나노미터 단위의 정렬(Alignment) 정밀도가 요구됩니다.",
        "points": {
            "Process": "CMP(화학적 기계적 연마) 공정의 평탄도 제어와 구리 계면 산화 방지가 수율의 핵심입니다.",
            "Design": "범프리스 구조에 최적화된 I/O 배치 및 TSV(실리콘 관통 전극) 설계 최적화가 필요합니다.",
            "Equipment": "다이 투 웨이퍼(D/W) 본더의 생산성(UPH) 향상 및 하이브리드 본딩 전용 세정 장비의 역할이 증대됩니다."
        },
        "interviewGuide": {
            "question": "하이브리드 본딩 도입 시 공정 엔지니어가 겪을 수 있는 가장 큰 어려움과 해결 아이디어는?",
            "tip": "핵심 키워드는 '본딩 저항'과 '파티클 제어'입니다. 답변 시 '나노미터 단위의 미세 파티클 하나가 전체 본딩 계면의 보이드(Void)를 유발할 수 있으므로, 세정 공정의 고도화와 실시간 파티클 모니터링 시스템 구축이 필수적'임을 강조하세요."
        }
    },
    {
        "id": "tsmc-2nm-a16",
        "title": "TSMC, 2nm A16 공정 로드맵 앞당겨... 인텔·삼성과의 점유율 격차 확대 전략",
        "date": "2026.05.06",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        "source": "SemiEngineering",
        "summary": [
            "TSMC가 후면 전력 공급(BSPDN) 기술을 적용한 A16 공정 도입 시기를 2026년 하반기로 전격 단축",
            "신호 배선과 전력 배선을 분리하여 전력 소모를 15% 이상 줄이고 성능을 10% 향상",
            "NVIDIA 및 Apple의 차세대 AI 칩 수주를 확정하며 파운드리 시장 독주 체제 강화"
        ],
        "commentary": "A16 공정의 핵심인 Super PowerRail 기술은 웨이퍼 후면을 얇게 갈아내고 직접 전력을 공급합니다. 이는 데이터 전송 신호의 간섭을 줄여 클럭 속도를 높이는 데 결정적인 역할을 합니다.",
        "points": {
            "Process": "웨이퍼 박막화(Grinding) 공정 중 발생하는 웨이퍼 휨(Warpage) 현상 제어가 관건입니다.",
            "Design": "전력 전달망(PDN) 설계의 복잡도 증가에 따른 전압 강하(IR Drop) 최적화가 필수적입니다.",
            "Equipment": "후면 배선을 위한 나노 시트 식각 장비 및 정밀 Grinding 장비의 정밀도가 요구됩니다."
        },
        "interviewGuide": {
            "question": "후면 전력 공급(BSPDN) 기술이 AI 칩의 전성비(전력 대비 성능)를 어떻게 개선하는지 설명하시오.",
            "tip": "핵심 키워드는 '신호 무결성(Signal Integrity)'과 '배선 혼잡도 감소'입니다. '전력망을 후면으로 옮기면 전면 배선 공간이 확보되어 데이터 신호 경로를 짧게 설계할 수 있고, 이는 저항 감소와 고속 동작으로 이어진다'는 논리로 답변하세요."
        }
    },
    {
        "id": "sk-hynix-glass-substrate",
        "title": "SK하이닉스-엔비디아, 차세대 AI 반도체용 유리기판(Glass Substrate) 공동 테스트 착수",
        "date": "2026.05.06",
        "image": "https://images.unsplash.com/photo-1591444029514-996ff69d30f1?auto=format&fit=crop&q=80&w=800",
        "source": "전자신문",
        "summary": [
            "기존 유기 기판(FC-BGA)의 물리적 한계를 넘기 위해 유리기판을 적용한 차세대 패키징 테스트 진행",
            "유리기판은 표면이 매끄러워 미세 회로 구현에 유리하며, 고온 환경에서도 열 팽창이 적어 변형이 거의 없음",
            "대면적 패키징이 가능해져 AI 가속기에 더 많은 HBM과 로직 칩을 통합할 수 있는 발판 마련"
        ],
        "commentary": "유리기판은 실리콘 중간층(Interposer) 없이도 미세 배선이 가능하여 패키징 두께를 줄이고 성능을 높일 수 있는 '게임 체인저'입니다. 다만 유리 특유의 취성(Brittle)으로 인한 파손 방지 기술이 중요합니다.",
        "points": {
            "Process": "유리 기판 관통 홀(TGV) 형성 공정의 속도와 수직 정렬 정밀도가 생산성을 결정합니다.",
            "Design": "대면적 기판에서의 열 응력 분산 설계 및 초고속 신호 손실(Insertion Loss) 최소화 기술이 요구됩니다.",
            "Equipment": "유리 전용 레이저 드릴링 장비 및 대면적 노광 장비(Stepper)의 신규 수요가 예상됩니다."
        },
        "interviewGuide": {
            "question": "유리기판 상용화 시 AI 서버 시장에 가져올 파급력은 무엇이라고 생각합니까?",
            "tip": "핵심 키워드는 '시스템 성능의 한계 돌파'와 'HBM 집적도'입니다. '유리기판은 대면적화가 용이하여 단일 패키지에 더 많은 칩을 탑재할 수 있게 하므로, AI 연산 능력의 기하급수적 향상을 가능케 한다'는 비전을 제시하세요."
        }
    }
];

window.semiData = {
    dictionary: dictionaryData,
    quiz: quizData,
    careers: careerData,
    news: newsData
};

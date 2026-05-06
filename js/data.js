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

window.semiData = {
    dictionary: dictionaryData,
    quiz: quizData,
    careers: careerData
};

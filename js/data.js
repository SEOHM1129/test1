/**
 * SemiWiki Personal Portfolio Data Template
 * 
 * 이 파일을 수정하여 본인의 프로젝트와 학습 내용을 관리하세요.
 */

const projectData = [
    {
        "id": "project-1",
        "title": "[프로젝트 제목을 입력하세요]",
        "summary": "프로젝트의 핵심 목표와 역할을 한 문장으로 요약하세요.",
        "approach": "문제를 해결하기 위해 적용한 기술적 접근 방식과 프로세스를 작성하세요.",
        "result": "수치화된 성과나 정성적인 학습 결과를 작성하세요.",
        "techStack": ["기술1", "기술2"],
        "detailDescription": "여기에 프로젝트의 상세한 진행 과정, 트러블슈팅 경험, 그리고 본인이 기여한 구체적인 내용을 작성하세요. 마크다운 형식이나 HTML 태그를 활용할 수 있습니다."
    },
    {
        "id": "project-2",
        "title": "[두 번째 프로젝트 제목]",
        "summary": "간략한 요약 내용",
        "approach": "사용한 툴 및 방법론",
        "result": "도출된 결과물",
        "techStack": ["MATLAB", "PSpice"],
        "detailDescription": "상세 설명이 들어가는 자리입니다."
    }
];

const knowledgeData = [
    {
        "id": "know-1",
        "category": "공정",
        "title": "[학습 주제: 예 - EUV 노광 공정의 이해]",
        "date": "2026.06.06",
        "description": "학습한 내용의 핵심 요약을 작성하세요.",
        "tags": ["EUV", "Lithography"],
        "content": "상세한 공부 기록을 여기에 작성하세요. 이론적인 배경부터 실무적용 가능성까지 본인의 통찰력을 담는 것이 좋습니다."
    },
    {
        "id": "know-2",
        "category": "장비",
        "title": "[학습 주제: 예 - 진공 펌프의 원리와 유지보수]",
        "date": "2026.06.05",
        "description": "장비 CS 직무 관련 학습 내용 요약.",
        "tags": ["Vacuum", "Pump"],
        "content": "장비 구성 요소와 동작 원리에 대한 상세 기록."
    },
    {
        "id": "know-3",
        "category": "소자",
        "title": "[학습 주제: 예 - Next-gen Transistor (GAA)]",
        "date": "2026.06.04",
        "description": "차세대 소자 구조에 대한 학습 기록.",
        "tags": ["GAA", "FinFET"],
        "content": "GAA와 FinFET의 차이점 및 장점 분석."
    }
];

window.portfolioData = {
    projects: projectData,
    knowledge: knowledgeData
};

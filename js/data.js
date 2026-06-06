/**
 * SemiWiki Personal Portfolio Data Template
 * 
 * 이 파일을 수정하여 본인의 프로젝트와 학습 내용을 관리하세요.
 */

window.portfolioData = {
  projects: [
    {
      id: "project-1",
      title: "UCI-SECOM 공정 데이터 기반 불량 패턴 식별 및 예지보전",
      summary: "센서 데이터 복합 분석을 통한 공정 개선안 도출",
      approach: "센서 간 상관관계 분석(Heatmap) 및 Power BI를 활용한 시계열 다변량 패턴 모니터링",
      result: "19시 특정 시간대 센서 조합(59, 103, 510번)에 따른 불량 발생 패턴 규명 및 SOP 가이드라인 수립",
      techStack: ["Python", "Pandas", "Seaborn", "Power BI"],
      detailDescription: `
  <section class="project-insight" style="background: #2a2a2a; color: #e0e0e0; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
    <h3>💡 엔지니어의 통찰 (Key Insight)</h3>
    <p><em>"단일 센서 분석으로는 불량을 설명할 수 없었습니다. 그래서 상관계수가 높은 센서들을 조합해 3차원 분산 분석을 시도했고, 19시라는 특정 시간대에 센서 값이 복합적으로 변하는 지점을 찾았습니다. 단순 통계 분석이 아닌, 설비 관리자가 즉시 활용 가능한 실현 가능한 개선안을 도출했다는 점에 의미가 있습니다."</em></p>
  </section>

  <h3>1. 프로젝트 배경 및 목적</h3>
  <p>반도체 제조 공정의 UCI-SECOM 데이터셋을 활용하여, 복잡한 다변량 센서 데이터 속에 숨겨진 불량(Target)의 핵심 원인 인자(Root Cause)를 규명하고, 이를 기반으로 공정 개선 가이드라인을 수립하였습니다.</p>

  <h3>2. 핵심 분석 단계 및 데이터 시각화</h3>
  
  <p><strong>Step 1: 데이터 정제 및 코드 구현</strong></p>
  <img src="images/data_cleaning_code.png" alt="데이터 정제 코드" style="width:100%; border-radius:4px; margin-bottom:15px;">
  <p>분석 효율을 위해 원본 데이터를 Unpivot 기법을 적용하여 시계열 분석이 용이한 Long-format으로 전처리하였습니다.</p>

  <p><strong>Step 2: 상관관계 분석</strong></p>
  <img src="images/secom_heatmap.png" alt="히트맵 분석" style="width:100%; border-radius:4px; margin-bottom:15px;">
  <img src="images/heatmap_code.png" alt="히트맵 코드" style="width:100%; border-radius:4px; margin-bottom:15px;">
  <p>파이썬(Seaborn) 히트맵을 통해 불량과 유의미한 상관관계를 가지는 핵심 센서 3종(59, 103, 510번)을 선별하였습니다.</p>

  <p><strong>Step 3: 다변량 패턴 및 시간대별 모니터링</strong></p>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
    <img src="images/powerbi_analysis_18h.png" alt="18시 분석">
    <img src="images/powerbi_analysis_19h.png" alt="19시 분석">
  </div>
  <p>Power BI를 활용하여 18시-19시 구간의 공정 데이터 전이를 추적하였으며, 특히 19시 구간에서 불량 이상치(Outlier)를 포착하였습니다.</p>

  <h3>3. 핵심 인사이트 및 결론</h3>
  <p>특정 시간대(19시)에 센서 59번(~54), 103번(~0), 510번(1) 조합이 동시 발생할 때 불량률이 급격히 증가함을 확인하였습니다.</p>

  <h3>4. 실무 적용을 위한 후속 조치 (Action Plan)</h3>
  <ul>
    <li><strong>이상 감지 임계값 설정:</strong> 선별된 센서 조합을 '불량 예보 알람' 로직으로 도입합니다.</li>
    <li><strong>공정 최적화:</strong> 센서 59번 수치가 50을 넘지 않도록 표준 운전 가이드라인(SOP)을 재정립합니다.</li>
  </ul>
`,
      image: "images/project1.png"
    }
  ],
  knowledge: []
};
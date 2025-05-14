# **FinSight**

<aside>
🍑

**목차**

0. [프로젝트 구성]
1. [기술스택 (Tech Stack)](#기술스택-tech-stack)
2. [설계 (Design)](#설계-design)
3. [기여방법 (How to Contribute)](#기여방법-how-to-contribute)
4. [메뉴구성 (Menu Structure)](#메뉴구성-menu-structure)

</aside>


---


## **0. 프로젝트 구성**

finsight/
├── backend/ # Spring Boot 기반 REST API
├── frontend/ # Vite + React 기반 프론트엔드
├── .gitignore
└── README.md


---


## **1. 기술스택 (Tech Stack)**

## ⚙️ 기술 스택

| 영역       | 기술                           |
|------------|--------------------------------|
| Frontend  | React, Vite, JavaScript (ES2020), Axios |
| Backend   | Spring Boot, Java 21, Spring Web, MySQL |
| Build     | Maven, npm                     |
| 기타      | GitHub, RESTful API, Monorepo 구조 |


---


## **2. 설계 (Design)**

### **UI/UX**
- **메인 페이지**: 사용자 친화적이고 직관적인 대시보드 디자인.
- **차트**: KOSPI/KOSDAQ 지수, 거래대금 및 상승/하락 종목 등의 시각화.
- **반응형**: 모바일, 태블릿, 데스크탑 등 다양한 화면 크기 대응.

### **데이터 흐름**
- **API 호출**: REST API를 사용하여 데이터를 실시간으로 받아옴.
- **상태 관리**: Redux로 전역 상태 관리.


---


## **3. 기여방법 (How to Contribute)**

1. **Fork** 이 저장소.
2. 로컬에서 변경 사항을 적용합니다.
3. 변경 사항을 커밋한 후 **Pull Request**를 생성합니다.
4. PR을 제출하고 변경 사항을 리뷰받습니다.


---


## **4. 메뉴구성 (Menu Structure)**

1. **시장 현황 요약 (Overview)**
   - KOSPI/KOSDAQ 지수
   - 상승/하락 종목 수 (도넛 차트)
   - 거래대금 총합 및 시가총액 상위 5종목

2. **시장 트렌드 (Market Trends)**
   - KOSPI/KOSDAQ 지수 추이
   - 거래대금 상위 종목
   - 등락률 상위/하위 종목 TOP 10

3. **산업 분석 (Sector Analysis)**
   - 업종별 시가총액 변화
   - 업종별 상승률/하락률 순위
   - 테마별 자금 유입/유출 흐름

4. **수급 분석 (Flow Analysis)**
   - 외국인/기관 순매수 상위 종목
   - 수급 변화 추이

5. **관심 종목 센터 (Favorite Stocks)**
   - 사용자가 선택한 종목 모니터링
   - 실시간 변동률 강조
   - 알림 조건 설정

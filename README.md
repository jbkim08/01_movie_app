# 영화 검색 앱

간단한 React 기반 영화 검색 앱입니다. Vite로 빠르게 개발하고, Bootstrap 스타일과 OMDb API를 사용해 화면에 결과를 보여줍니다.

## 주요 기능

- 검색어 입력으로 OMDb API에서 영화 검색
- 검색 결과 영화 목록 표시
- 좋아요한 영화를 `localStorage`에 저장
- 저장된 영화는 내 선호작 목록으로 다시 보기
- `react-indiana-drag-scroll`로 가로 스크롤 가능 화면 구성

## 사용 기술

- React 19
- Vite
- Bootstrap 5
- OMDb API
- localStorage
- react-indiana-drag-scroll

## 파일 구조

- `src/App.jsx`: 앱의 메인 로직, 검색어 상태와 즐겨찾기 관리
- `src/components/MovieList.jsx`: 영화 카드 리스트 렌더링
- `src/components/SearchBox.jsx`: 검색 입력창
- `src/components/MovieListHeading.jsx`: 섹션 제목
- `src/App.css`: 사용자 정의 스타일

## 실행 방법

1. 패키지 설치

```bash
npm install
```

2. 개발 서버 실행

```bash
npm run dev
```

3. 빌드

```bash
npm run build
```

4. 미리보기

```bash
npm run preview
```

## 참고

- 검색어가 3자 이상일 때만 API 요청을 보냅니다.
- 동일한 영화를 중복으로 즐겨찾기에 추가할 수 없습니다.
- 선호작은 브라우저 `localStorage`에 저장되어 새로고침 후에도 유지됩니다.

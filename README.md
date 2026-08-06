# 최아영 · 작업치료사 포트폴리오

작업치료사(감각통합치료) 최아영의 이력 · 치료 사례 · 후기 페이지입니다.
빌드 도구 없이 `index.html` 한 파일로 동작하는 정적 사이트입니다.

## 배포 방법

저장소에 푸시한 뒤 아래 둘 중 **하나만** 설정하면 됩니다.

**A. GitHub Actions (이 저장소에 포함된 워크플로 사용)**

1. 저장소 **Settings → Pages** 이동
2. **Build and deployment → Source** 를 `GitHub Actions` 로 선택
3. 푸시하면 `.github/workflows/pages.yml` 이 자동으로 배포합니다

**B. 브랜치에서 바로 배포**

1. **Settings → Pages → Source** 를 `Deploy from a branch` 로 선택
2. 브랜치는 배포할 브랜치, 폴더는 `/ (root)` 선택

주소는 `https://<사용자명>.github.io/choi-a-young-resume/` 입니다.
`<사용자명>.github.io` 로 쓰고 싶다면 저장소 이름을 그대로 `<사용자명>.github.io` 로 만들어 옮기면 됩니다.

## 로컬에서 확인

```bash
python3 -m http.server 8000
# http://localhost:8000
```

`index.html` 을 브라우저로 바로 열어도 됩니다.

## 내용 수정 안내

- **연락처** — `index.html` 맨 아래 `<footer id="contact">` 안의 이메일/전화번호 두 곳(링크 `href` 와 화면 표시 텍스트)을 함께 수정
- **사진 · 영상** — `class="slot"` 인 회색 점선 박스가 자리표시자입니다. 파일을 넣으려면 박스 안에 태그를 넣으면 자동으로 꽉 채워집니다.
  ```html
  <!-- 사진 -->
  <div class="slot" style="width:100%;height:clamp(240px,42vw,330px)">
    <img src="images/portrait.jpg" alt="프로필 사진">
  </div>

  <!-- 유튜브 영상 -->
  <div class="slot" style="flex:0 0 auto;width:100%;height:190px">
    <iframe src="https://www.youtube.com/embed/영상ID" title="스윙 활동" allowfullscreen></iframe>
  </div>

  <!-- 직접 올린 영상 파일 -->
  <div class="slot" style="flex:0 0 auto;width:100%;height:190px">
    <video src="videos/swing.mp4" controls playsinline></video>
  </div>
  ```
- **치료 사례 추가** — `사례 01` 의 `<article>` 을 복사해 내용을 바꾸고, 그 아래 `사례 02 · 03` 점선 박스를 지우면 됩니다.

# 최아영 · 작업치료사 포트폴리오

작업치료사(감각통합치료) 최아영의 이력 · 치료 사례 · 후기 페이지입니다.
빌드 도구 없이 `index.html` 한 파일로 동작하는 정적 사이트입니다.

## 배포

주소: <https://san9w9n.github.io/choi-a-young-resume/>

`.github/workflows/pages.yml` 이 푸시될 때마다 자동으로 배포합니다.
Pages 활성화도 워크플로의 `enablement: true` 가 처리하므로 Settings 를 건드릴 필요가 없습니다.

**저장소는 public 이어야 합니다.** 무료 플랜에서 Pages 는 public 저장소만 지원하며,
private 로 되돌리면 배포가 `Resource not accessible by integration` 오류로 실패합니다.
private 를 유지하려면 GitHub Pro 이상이 필요합니다.

`san9w9n.github.io` 처럼 짧은 주소를 쓰려면 저장소 이름 자체를 `san9w9n.github.io` 로
만들어 파일을 옮기면 됩니다.

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

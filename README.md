# 최아영 · 작업치료사 포트폴리오

작업치료사(감각통합치료) 최아영의 이력 · 치료 사례 · 후기 페이지입니다.
빌드 도구 없이 `index.html` 한 파일로 동작하는 정적 사이트입니다.

## 배포

주소: <https://san9w9n.github.io/choi-a-young-resume/>

`.github/workflows/pages.yml` 이 푸시될 때마다 자동으로 배포합니다.

**최초 1회만 수동 설정이 필요합니다** — **Settings → Pages → Build and deployment →
Source** 를 `GitHub Actions` 로 지정하세요. 워크플로에 `enablement: true` 가 있지만
Pages 사이트를 **새로 만드는** API 는 저장소 admin 권한을 요구하는 반면
워크플로의 `GITHUB_TOKEN` 은 admin 이 아니라서
`Create Pages site failed. Resource not accessible by integration` 으로 거부됩니다.
한 번 켜 두면 그다음부터는 `enablement` 가 기존 사이트를 찾아 그대로 진행합니다.

**저장소는 public 이어야 합니다.** 무료 플랜에서 Pages 는 public 저장소만 지원합니다.
private 를 유지하려면 GitHub Pro 이상이 필요합니다.

그래도 실패한다면 **Settings → Actions → General → Workflow permissions** 가
`Read and write permissions` 인지 확인하세요.

`san9w9n.github.io` 처럼 짧은 주소를 쓰려면 저장소 이름 자체를 `san9w9n.github.io` 로
만들어 파일을 옮기면 됩니다.

## 로컬에서 확인

```bash
python3 -m http.server 8000
# http://localhost:8000
```

`index.html` 을 브라우저로 바로 열어도 됩니다.

## 파일 구조

`index.html` 한 파일이며, 위쪽 `<style>` 블록에 모든 스타일이 있습니다.
색·여백은 맨 위 `:root` 의 변수로 모아 두었으니 톤을 바꾸려면 그 값만 고치면 됩니다.

색은 **무채색 바탕 + 포인트 한 가지** 구성입니다. 넓은 면은 전부 회색 계열이고,
테라코타(`--accent`)는 라벨과 작은 글자에만 씁니다 — 포인트를 넓은 면에 쓰면
이 균형이 깨지니 주의하세요.

```css
--bg:#fafaf9;        /* 배경 */
--surface:#ffffff;   /* 카드 */
--band:#232322;      /* 짙은 띠(치료 접근) · 문의 버튼 */
--tint:#f4f3f1;      /* 옅은 채움 — 배지 · 인용 상자 · 사진칸 */
--accent:#b0522c;    /* 포인트 — 라벨, 작은 글자에만 */
--gutter:...;        /* 좌우 여백 */
--maxw:1240px;       /* 본문 최대 폭 */
```

본문 색은 `--ink`(진함) → `--ink-mid` → `--ink-soft` → `--ink-muted`(옅음) 순이며,
가장 옅은 값도 배경 대비 4.5:1 이상이 되도록 잡았습니다.

반응형 분기는 세 곳입니다 — 헤더 900px, 히어로 860px, 표 형태 목록 680~780px.

## 내용 수정 안내

- **연락처** — `index.html` 맨 아래 `<footer id="contact">` 안의 이메일/전화번호 두 곳(링크 `href` 와 화면 표시 텍스트)을 함께 수정
- **프로필 사진** — 히어로의 회색 점선 박스(`class="slot portrait"`)가 자리표시자입니다.
  크기는 클래스가 정하므로 박스 안에 태그만 넣으면 자동으로 꽉 채워집니다.
  ```html
  <div class="slot portrait">
    <img src="images/portrait.jpg" alt="프로필 사진">
  </div>
  ```
  `<video>` 나 `<iframe>` 을 넣어도 같은 방식으로 채워집니다.
- **치료 사례 추가** — `사례 01` 의 `<article class="case">` 를 복사해 내용을 바꾸고, 그 아래 `<ul class="pending">` 의 점선 박스를 지우면 됩니다.
- **인쇄 / PDF** — 브라우저 인쇄를 하면 내비게이션·사진칸·준비 중 항목이 빠지고 흑백으로 정리된 이력서 형태로 출력됩니다.

## 파비콘

제공받은 로고(네이비 바탕에 흰 인물 심벌 + 세이지색 원 3개)를 세 가지 크기로 구워 뒀습니다.

| 파일 | 크기 | 용도 |
|---|---|---|
| `favicon-32.png` | 32×32 | 브라우저 탭 |
| `favicon-96.png` | 96×96 | 고해상도 탭 · 북마크 |
| `apple-touch-icon.png` | 180×180 | iOS 홈 화면 (모서리는 iOS 가 깎으므로 각진 정사각형) |

로고를 바꾸려면 같은 이름으로 정사각형 이미지를 덮어쓰면 됩니다.
`<head>` 의 `<link rel="icon">` 경로는 그대로 두면 됩니다.

# 📝 My Todo App

> **AWS EC2 위에서 Claude Code + Telegram 바이브 코딩으로 탄생한 React 앱**

## 🌐 배포 주소

**http://54.180.132.174**

---

## 🤖 개발 방식: Telegram 바이브 코딩

이 프로젝트는 단 한 줄의 코드도 개발자가 직접 타이핑하지 않았습니다.
**스마트폰 Telegram 앱에서 Claude AI에게 지시만 내려 완성**한 프로젝트입니다.

### 개발 흐름

```
스마트폰 Telegram
      ↓  "리액트로 간단한 웹앱 만들어봐"
AWS EC2 (Claude Code)
      ↓  코드 작성 + 빌드 + 배포 자동 실행
      ↓  결과 스크린샷 → Telegram으로 전송
스마트폰에서 결과 확인
      ↓  "EC2 공개 배포해줘"
배포 완료 🎉
```

### 사용된 도구

| 도구 | 역할 |
|------|------|
| **Telegram** | 개발자 ↔ AI 소통 채널 (바이브 코딩 인터페이스) |
| **Claude Code (claude-sonnet-4-6)** | 실제 코드 작성, 빌드, 배포 실행 |
| **AWS EC2** | Claude Code가 실행되는 서버 환경 |
| **Playwright** | 배포 결과를 스크린샷으로 캡처해 Telegram 전송 |
| **Nginx** | React 빌드 파일을 외부에 서빙 |
| **Vite + React** | 프론트엔드 프레임워크 |
| **GitHub** | 소스코드 관리 (Claude가 직접 push) |

---

## 🛠️ 기술 스택

- **Frontend**: React 18 + Vite 7
- **스타일링**: Inline CSS (Tailwind 없이 순수 CSS-in-JS)
- **서버**: AWS EC2 (Ubuntu) + Nginx
- **CI/CD**: Claude Code가 직접 빌드 → `/var/www/html` 복사 → Nginx 서빙

---

## ✨ 앱 기능

- 할 일 추가 / 삭제
- 체크박스로 완료 처리
- 전체 / 진행중 / 완료 필터
- 진행률 바 (완료 비율 시각화)
- 보라색 그라디언트 디자인

---

## 🚀 배포 과정

### 1. 프로젝트 생성
```bash
npm create vite@latest myapp -- --template react
cd myapp && npm install
```

### 2. 코드 작성
Claude Code가 `src/App.jsx`를 직접 작성

### 3. 빌드
```bash
npm run build
# dist/ 폴더에 정적 파일 생성
```

### 4. Nginx 설치 및 설정
```bash
sudo apt-get install -y nginx
sudo cp -r dist/* /var/www/html/
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 5. AWS 보안 그룹
EC2 인바운드 규칙에 **HTTP (포트 80)** 추가 → 외부 접속 허용

### 6. GitHub Push
```bash
git init && git add . && git commit -m "Initial commit"
git remote add origin https://github.com/waterfirst/my-todo-app.git
git push -u origin main
```

---

## 💡 바이브 코딩이란?

> "코드를 직접 짜는 것이 아니라, AI에게 의도(vibe)를 전달하고 결과물을 받는 새로운 개발 패러다임"

기존 개발: `개발자 → 코드 작성 → 실행 → 디버그`

바이브 코딩: `개발자 → 의도 전달 → AI가 코드 작성+실행+디버그 → 결과 확인`

이 프로젝트는 **스마트폰만으로** 아이디어를 실제 배포된 서비스로 만들 수 있음을 증명합니다.

---

## 📱 개발 환경

- **개발자 디바이스**: 스마트폰 (Telegram 앱)
- **서버**: AWS EC2 (Ubuntu 24.04, ap-northeast-2 서울 리전)
- **AI**: Claude Sonnet 4.6 (Anthropic)
- **개발 시간**: 약 10분

---

*Made with 🤖 Claude Code via Telegram Vibe Coding*

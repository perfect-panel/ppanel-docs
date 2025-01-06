---
title: 사용자端 - 구성 설명
order: 4
group: 
  title: 프론트엔드 배포
  order: 3
toc: content
---

# **PPanel 배포 가이드**

이 가이드는 Docker, Vercel, PM2 및 Node.js 또는 Bun을 직접 사용하는 다양한 배포 방법을 포함하여 PPanel 사용자 단말기를 배포하는 방법을 자세히 설명합니다.

---

## **1. 환경 준비**

배포 전에 다음 도구가 설치되어 있는지 확인하십시오:

- **Node.js** (NVM을 통해 설치하는 것이 권장되며, 버전 >= 22)
- **Bun** (빠른 JavaScript 런타임)
- **PM2** (효율적인 서비스 관리를 위한 프로세스 관리 도구)
- **Docker** (컨테이너화 배포를 위한 도구)

---

## **2. 환경 변수 구성**

배포 전에 다음 환경 변수를 구성해야 합니다:

```env
# 애플리케이션 구성
NEXT_PUBLIC_DEFAULT_LANGUAGE=ko-KR
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# 기본 사용자
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---


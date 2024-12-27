---
title: 빠른 배포
order: 1
nav:
  title: 가이드
  order: 1
group:
  title: 배포
  order: 1
toc: content
---

# 빠른 배포 가이드

> **배포 전 주의 사항**
>
> - **관리자 포트는 기본적으로 8080입니다**: 도메인 해상도를 미리 설정하거나 사용 가능한 IP 주소가 있는지 확인하여 관리자와 사용자 측의 설치를 원활하게 진행하세요.
> - 서버 측: 더 많은 정보는 [서버 측](/guide/server)을 참조하세요.
> - 관리자 측: 더 많은 정보는 [관리자 측](/guide/admin)을 참조하세요.
> - 사용자 측: 더 많은 정보는 [사용자 측](/guide/user)을 참조하세요.

## 원클릭 배포

다음의 명령어 중 하나를 사용하여 PPanel을 원클릭으로 배포할 수 있습니다. 여기에는 서버 측, 관리자 측 및 사용자 측이 포함됩니다.

### 옵션 1: `curl` 사용

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### 옵션 2: `wget` 사용

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```


1주차 Part 04~06 실습을 위한 GitTest 브랜치입니다.

## 24.08.16 - [Part 06] 포트폴리오 / 협업 환경 구성 (4)

1. GitTest 브랜치 생성

2. GitTest 브랜치를 base로 하여 `feature/login` 브랜치와 `feature/select-product` 브랜치 생성

  <img width="466" alt="스크린샷 2024-08-20 오후 8 38 18" src="https://github.com/user-attachments/assets/20ca78f8-101b-44a9-9ee0-65f041e80e2e">

4. 각 브랜치를 로컬에서 수정 후 원격 브랜치에 `push` 한다.

5. GitTest에서 `feature/login`를 `pull request`와 `merge`한 후 삭제한다.

6. `feature/select-product` 브랜치에도 동일한 작업을 수행한다.
   > ‼️ 이때 충돌이 발생하는데, `resolve conflicts`로 두 코드 중 하나를 선택해 `pull request`와 `merge`한 후 삭제한다.
   > 
   > 로컬에서도 원격 저장소와 동기화한 후 로컬 브랜치를 삭제한다.

### 결과

<img width="313" alt="스크린샷 2024-08-20 오후 8 34 27" src="https://github.com/user-attachments/assets/e7332c54-7961-420c-84ea-72588af67b4f">

`GitTest`에 `feature/login` 브랜치와 `feature/select-product` 브랜치 병합 완료

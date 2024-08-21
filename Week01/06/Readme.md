### 24.08.16.금
# 포트폴리오 / 협업 환경 구성 (4)

<blockquote>
🌟 Today 요약

1. 깃 브랜치 병합 전략: `fast forward`, `3-way`
2. 병합: `pull request`, `merge`
3. 충돌 해결: `resolve conflict`

</blockquote>

<details>
  <summary>What Emoji means</summary>
  <ul>
    <li>⭐ 중요</li>
    <li>📌 Pin Point, Tips</li>
    <li>🔑 Key Point</li>
    <li>✅ Check Point</li>
    <li>💬 강사의 말(인용)</li>
    <li>🚨 주의</li>
    <li>🚫 금지</li>
    <li>⛔ 여기서 잠깐!!</li>
    <li>🔖 잠깐 알아보기, 참고</li>
    <li>🙋‍♀️ 질문 있어요</li>
    <li>‼ 오류 발생</li>
    <li>❗ 문제 해결, Notice</li>
    <li>❓ 궁금한 점</li>
    <li>⁉ Why? 이유 설명</li>
    <li>❌⭕ Yes, No</li>
    <li>💡 깨달은 점, 생각해볼 점, 알아둘 것</li>
    <li>🔎 더 알아보기</li>
    <li>📖 개념 정리</li>
    <li>🚩 학습 목표, 방향, 배울 내용</li>
    <li>➡ 결론</li>
    <li>✏ 요점 정리</li>
    <li>🗂 내용 요약</li>
    <li>📢 공지</li>
    <li>⚙ 환경설정</li>
    <li>🔗 링크</li>
  </ul>
</details>

## *What I did?*

> 1 주차 Part 6
> 
- [x]  강의 수강

> 오늘 배운 내용까지 학습한 내용 개인 블로그 또는 개인 노션에 정리해서 제출
❗️필수 포함 내용 : 커밋 히스토리 화면 캡쳐, pr&merge 실습 화면 캡쳐
> 
- [x]  TIL 작성

> Git 프로젝트에 브랜치를 생성한 뒤 브랜치 생성 결과를 정리하여 링크로 공유 하시오.
> 
- [x]  [과제] Git 프로젝트 내 브랜치 생성 후 결과 업로드

## *What I Learned?*

# Part 3. 깃허브로 협업하기

## Chapter 7. 브랜치 이름 규칙과 테스트

### 깃 브랜치 이름 규칙

`master` → `main` 브랜치: 사용자들이 사용하는 실제 버전 `ex.` `v 1.2.0`

- 기능 개발: `ex.` `feature/login`, `feature/select-product`
- 출시 준비: `ex.` `release-1.3`, `release-1.4`
- 긴급 수정: `ex.` `hotfix-1.2.1`

<blockquote>
🔖 브랜치 삭제: `git branch -d <브랜치 이름>`

현재 브랜치에서 `main` 브랜치로 돌아가기: `git checkout -`

</blockquote>

### 커밋해야 그때부터 브랜치!

<blockquote>
🚨 커밋하면 되돌릴 수 없으니 브랜치를 잘 확인하고 커밋할 것!

</blockquote>

## Chapter 8. 깃허브 브랜치 실습

### 원격 브랜치 실습

<img width="922" alt="01" src="https://github.com/user-attachments/assets/5e40ac50-7d22-4b69-abed-66d101447f8a">

- `git branch -r`: 원격에 있는 브랜치 확인
- 깃허브에 브랜치 생성하고 깃 브랜치 복제하기
    - 깃에 만들어둔 브랜치를 원격 브랜치로 복제
    - `git push <깃허브 저장소 별칭> <깃브랜치명>`

## Chapter 9. 깃 브랜치 전략

<blockquote>
🚩 학습 목표

- 어떤 단위로 브랜치를 만들 것인지
- 이름을 어떻게 만들 것인지
- 언제 합칠 것인지
</blockquote>

### 깃 브랜치 전략이란?

- 깃 플로우라고도 부른다.

<blockquote>
🔎 Git 브랜치 전략은 팀이 소프트웨어 개발 과정에서 브랜치를 효율적으로 관리하고, 코드 변경 사항을 효과적으로 통합하기 위한 규칙과 방법론을 의미한다. 다양한 브랜치 전략이 존재하며, 프로젝트의 성격, 팀의 규모, 개발 속도 등에 따라 적합한 전략을 선택해야 한다.

- 종류
    
    1. Git Flow
    
    Git Flow는 매우 구조화된 브랜치 전략으로, Vincent Driessen이 제안한 방법론이다. 이 전략은 대규모 프로젝트에 적합하며, 다음과 같은 브랜치들을 사용한다.
    
    - Main 브랜치 (`main` 또는 `master`): 항상 배포 가능한 상태를 유지하는 브랜치입니다. 최종적인 제품 버전이 여기에 존재합니다.
    - Develop 브랜치 (`develop`): 새로운 기능 개발이 이루어지는 기본 브랜치로, 모든 기능 브랜치가 여기로 병합됩니다. 안정적인 테스트 빌드를 유지합니다.
    - Feature 브랜치 (`feature/*`): 특정 기능이나 변경 사항을 개발하는 브랜치입니다. 이 브랜치는 `develop`에서 생성되고, 개발이 완료되면 다시 `develop`으로 병합됩니다.
    - Release 브랜치 (`release/*`): 배포 준비를 위해 생성되는 브랜치입니다. 마지막 버그 수정 및 테스트가 이뤄지며, 완료되면 `main`과 `develop`에 병합됩니다.
    - Hotfix 브랜치 (`hotfix/*`): 배포된 버전에서 긴급하게 수정해야 할 사항이 있을 때 사용됩니다. `main`에서 생성되고, 수정이 완료되면 `main`과 `develop`에 병합된다.
    
    장점: 명확한 구조와 각 브랜치의 역할이 분명하여, 대규모 프로젝트에서 효과적이다.
    
    단점: 브랜치가 많아지고 관리가 복잡해질 수 있으며, 작은 프로젝트나 속도가 중요한 프로젝트에서는 비효율적일 수 있다.
    
    2. GitHub Flow
    
    GitHub Flow는 GitHub에서 주로 사용하는 간단한 브랜치 전략으로, 상대적으로 작은 프로젝트나 빠른 배포 주기를 가진 프로젝트에 적합하다.
    
    - Main 브랜치 (`main`): 배포 가능한 상태를 유지하는 브랜치이다.
    - Feature 브랜치: 새로운 기능, 버그 수정 등 작업할 때마다 `main`에서 브랜치를 생성한다.
    - Pull Request: 작업이 완료되면 Feature 브랜치를 `main`에 병합하기 위해 Pull Request를 생성하고 코드 리뷰를 거친다.
    - 배포: PR이 승인되고 Feature 브랜치가 `main`에 병합되면, 코드는 자동 또는 수동으로 배포된다.
    
    장점: 간단하고, CI/CD 파이프라인과 결합하면 빠른 개발과 배포가 가능하다.
    
    단점: 구조화가 덜 되어 있어, 복잡한 프로젝트에서는 비효율적일 수 있다.
    
    3. GitLab Flow
    
    GitLab Flow는 Git Flow와 GitHub Flow의 중간에 위치한 전략으로, 다양한 워크플로우를 지원한다. 다음과 같은 브랜치를 사용한다.
    
    - Main 브랜치 (`main`): 배포 가능한 상태를 유지하는 브랜치이다.
    - Feature 브랜치: 새로운 기능을 개발할 때 사용된다.
    - 환경별 브랜치 (`production`, `staging`, `pre-production` 등): 코드가 배포되는 다양한 환경을 위한 브랜치이다. `main`에서 특정 환경으로 코드가 병합되어 배포된다.
    
    장점: 다양한 배포 환경을 지원하면서도 단순성을 유지할 수 있다.
    
    단점: 환경에 따라 브랜치가 복잡해질 수 있다.
    
    4. Trunk-Based Development
    
    Trunk-Based Development는 모든 개발자가 `main` 브랜치(또는 `trunk`)에 자주 병합하는 전략이다. 브랜치가 많지 않으며, 병합할 때마다 자주 통합 테스트가 이루어진다.
    
    - Main 브랜치 (`main` 또는 `trunk`): 모든 개발자들이 자주 병합하는 브랜치이다.
    - Short-lived Feature 브랜치: 필요에 따라 짧게 사용하는 브랜치로, 하루나 이틀 안에 병합하는 것이 일반적이다.
    
    장점: 간단한 구조와 빠른 피드백 루프가 가능하며, CI/CD와 잘 어울린다.
    
    단점: 브랜치가 짧게 유지되므로, 빈번한 병합이 필요하고 대규모 기능 개발에는 부적합할 수 있다.
    
    요약
    
    각 브랜치 전략은 프로젝트의 특성과 팀의 요구에 따라 선택되어야 한다. Git Flow는 복잡한 프로젝트에, GitHub Flow는 단순한 프로젝트에, GitLab Flow는 다양한 환경을 지원하는 프로젝트에, Trunk-Based Development는 빠른 배포 주기를 가진 프로젝트에 적합하다. 선택한 전략은 팀의 협업 방식과 배포 주기에 큰 영향을 미치므로, 신중하게 고려해야 한다.
    
</blockquote>

### 깃 브랜치 병합 전략

1. `fast forward` 전략

`main` branch에서 `feature/login` branch를 생성한 시점부터,

- `main` branch에서는 추가 구현을 하지 않고
- `feature/login` branch에서만 추가 구현한 뒤

```markdown
A---B---C  (main)
     \
      D---E---F  (feature)
```

`feature/login` branch와 `main` branch를 합지면 → `main` branch에 그냥 `feature/login` branch가 붙으면 끝남

```markdown
A---B---C---D---E---F  (main)
```

<blockquote>
❗ 실제로는 자주 일어나는 상황이 ❌

</blockquote>

1. `3-way` 전략

일반적으로 많이 사용하는 전략

`main` branch에서 `feature/login` branch를 생성한 시점부터,

- `main` branch도 추가 구현을 하고
- `feature/login` branch도 추가 구현을 하고

```markdown
A---B---C---D  (main)
     \
      E---F---G  (feature)
```

`feature/login` branch와 `main` branch를 합치면 → `main` branch와 `feature/login` branch가 서로 비교하여 바뀐 것을 정리하여 합치는 전략

```markdown
A---B---C---D---M  (main)
     \       /
      E---F---G  (feature)
```

<blockquote>
➡️ 3-way 전략 + fast-forward

일반적으로는 둘 중에 하나만 사용하는 것이 아니라 두 방법 모두 사용하게 됨

</blockquote>

## Chapter 10. 병합과 충돌

### merge된 깃허브 → 깃에 동기화하기

1. pull request
    <img width="911" alt="02" src="https://github.com/user-attachments/assets/8e82ff88-fd61-4582-b861-88064df77448">
    <img width="925" alt="03" src="https://github.com/user-attachments/assets/b8b571bd-f36e-4d4f-bcd9-50e0ecb6e13f">

    또는
    <img width="1201" alt="04" src="https://github.com/user-attachments/assets/c54179ef-a1a5-47d1-aca6-8c68dcedb405">
    
    <blockquote>
    🚨 PR하기 전 주의사항
    
    - main에 protection rule 추가
      
    <img width="781" alt="05" src="https://github.com/user-attachments/assets/53f4579e-741a-429a-9de1-b0264a3fbb10">

    <img width="785" alt="06" src="https://github.com/user-attachments/assets/5b03d7a8-4f8c-4641-a20c-12eab4109539">

    <img width="915" alt="07" src="https://github.com/user-attachments/assets/e13a49ea-4dfb-4c96-98c8-ae0182e40331">

    
    </blockquote>
    
2. 메시지 작성
   
    <img width="925" alt="08" src="https://github.com/user-attachments/assets/7526fdf7-7120-4dd1-86c9-8eb2904ecbc5">
    
    <blockquote>
    📌 마크다운 언어 가능!!!
    
    - 주요 구현 내용과 이슈 등 적기
    </blockquote>
    
4. Commit merge → Delete branch

    <img width="922" alt="09" src="https://github.com/user-attachments/assets/e08084a4-a52c-4db7-9a35-db3e6bb93ae6">

    
    - `Revert`: 병합 되돌리기
    - `Delete branch`: merge가 끝난 브랜치는 삭제

### 병합이란?

- 브랜치를 생성한다는 건, “협업”을 위한 것이다.
- 그래서 우리는 주로 브랜치 병합(추가 가지 → base 가지)을 “깃허브”에서
    - main 브랜치 보호 필요
    - 추가 브랜치를 메인 브랜치 방향으로 병합 시켜줘 = Pull Request
    - 충돌 여부를 깃허브에서 자동을 확인해줌
        
        <blockquote>
        📌 PR 메시지 신경 써서 쓰자!
        
        </blockquote>
        
    - merge: merge commit
    - branch 삭제

### 충돌 해결하기

1. 브랜치가 최신 상태인지 확인

<img width="533" alt="10" src="https://github.com/user-attachments/assets/766f58e1-4aa8-424e-9207-53d69fc2581e">


- `git branch`
- `git branch -r`
- `git log`
- `git pull origin <브랜치명>`
1. 깃허브에서 새로운 브랜치 생성
    
    <blockquote>
    🔖 깃 브랜치 삭제
    
    `git checkout <main>` → `git pull origin <main>`→ `git branch -d <feature/login>`
    
    </blockquote>
    
    <img width="921" alt="11" src="https://github.com/user-attachments/assets/731bc3c3-6c05-415a-adc8-91571b651f14">
    
    - 특정 브랜치를 선택하면 해당 브랜치를 기준으로 새로운 브랜치를 생성할 수 있음
    - 존재하지 않는 브랜치명을 입력하면 새로운 브랜치를 생성할 수 있음
2. 깃 동기화
    - 원격 저장소 동기화
        
        `git fetch -p` 로 깃허브 브랜치 목록 동기화
      
        <img width="554" alt="12" src="https://github.com/user-attachments/assets/aa73dea3-a153-4cd0-ad56-4cb0137124b5">

        <blockquote>
        🔎 `git fetch -p`는 원격 브랜치가 삭제되었을 때, 로컬에 남아있는 해당 브랜치의 원격 추적 브랜치를 정리해준다.
        `git branch`에는 영향을 주지 않으며, `git branch -r` 명령어의 출력 결과에 영향을 미친다.
        
        </blockquote>
        
    - 로컬 저장소 동기화
        - `git branch`로 확인해보면, 아직 로컬 저장소 브랜치는 동기화되지 않았다
          
            <img width="534" alt="13" src="https://github.com/user-attachments/assets/1665f686-d4e1-46e1-96b3-0081007b6c57">

            
        - ➡️ `git checkout -t <remote-branch>`로 로컬에 새로운 브랜치를 생성한다.
          
            <img width="527" alt="14" src="https://github.com/user-attachments/assets/c8432c7d-f770-4e94-80cb-d98a17b4dbae">
            
            <blockquote>
            🔎 `git checkout -t <remote-branch>`는 특정 브랜치를 체크아웃하면서 동시에 해당 브랜치를 로컬에 새로 생성할 때 사용한다. 이 명령어는 `-t` 옵션을 통해 추적(tracking) 브랜치를 자동으로 설정한다.
            
            </blockquote>
            
        - ➡️ `git branch`로 다시 확인해보면, 새로운 브랜치가 생성되었음을 확인할 수 있다.
          
            <img width="534" alt="15" src="https://github.com/user-attachments/assets/9c4d9b61-8e2c-4590-b9fd-467c85b5643e">

3. 각 브랜치에서 파일 수정 후 add, push → 깃허브에서 `Create pull request` → `feature/login` 브랜치를 우선 `GitTest`(base) 브랜치에 `merge` 후 원격 저장소와 로컬 저장소에서 모두 삭제 → `feature/select-product` 브랜치에 대해서도 같은 작업 수행 → 💥이때, 충돌이 발생하게 된다💥

- `feature/login`
    - add, push

        <img width="473" alt="16" src="https://github.com/user-attachments/assets/492bd70b-0074-4f30-9d2f-c344926dc32c">

    - 원격 저장소에서 변경 내용 확인

        <img width="301" alt="17" src="https://github.com/user-attachments/assets/2bb164d2-e9cc-4ee8-84b7-53e6108256ac">
        
    - pull request

        <img width="918" alt="18" src="https://github.com/user-attachments/assets/606fc3c5-d604-4375-aab9-3dd9ba5cf588">


        <img width="937" alt="19" src="https://github.com/user-attachments/assets/6e0831eb-d613-455a-9c06-1276c7bd44a8">

        
    - 원격 저장소에서 base 브랜치에 merge 후 삭제
      
        <img width="918" alt="20" src="https://github.com/user-attachments/assets/c1d654bb-efe0-4102-ac0e-70dcd3c32ae4">

        <img width="914" alt="21" src="https://github.com/user-attachments/assets/0b7cb3d1-398d-43d4-93c8-c3fe5bfefb68">

        <img width="916" alt="22" src="https://github.com/user-attachments/assets/6b026202-3b89-4202-83f3-2dc200833a4a">

    - 로컬 저장소에서도 동기화
        - `git branch -r`로 원격 저장소 확인 → `fetch`로 동기화 → `git branch -r`로 원격 저장소 재확인
          
            <img width="483" alt="23" src="https://github.com/user-attachments/assets/b1697953-89dc-43d0-8e77-1cf81e796b68">
            
        - 로컬 저장소에서 `git checkout`으로 base 브랜치로 이동 후 `feature/login` 브랜치 삭제
          
            <img width="583" alt="24" src="https://github.com/user-attachments/assets/aeeb2f38-6661-4da2-9aec-632f37676061">

- `feature/select-product`
    - add, push
      
        <img width="560" alt="25" src="https://github.com/user-attachments/assets/4ffbea93-e33c-4062-8b2c-0846d6ca9e3f">
        
    - 원격 저장소에서 변경 내용 확인
      
        <img width="486" alt="26" src="https://github.com/user-attachments/assets/72636047-929b-4c96-8d98-9f4f3e69bcd0">
        
    - pull request
        
        <blockquote>
        ‼️ `Can't automatically merge` 경고 발생
        
        </blockquote>
        
        <img width="925" alt="27" src="https://github.com/user-attachments/assets/488f81c2-db8b-4b01-965b-0a3c7792e743">
        
    - 경고를 무시하고 pull request 진행하면
        
        <blockquote>
        ‼️ 충돌 발생
      
        <img width="922" alt="28" src="https://github.com/user-attachments/assets/40b02ede-eb50-4c12-bf3c-b27df8c232cc">
        
        </blockquote>
        
1. `Resolve conflicts`
    
    <blockquote>
    ❗ `Resolve conflicts` > 충돌 내용 확인 후 > 변경할 내용 결정 후 수정 > `Mark as resolved` > `Commit merge`
   
    <img width="809" alt="29" src="https://github.com/user-attachments/assets/7efcc0d0-0367-407a-b659-95069cc06844">

    <img width="1399" alt="30" src="https://github.com/user-attachments/assets/70338e85-9604-40f8-a050-3b95af762eb7">

    <img width="1419" alt="31" src="https://github.com/user-attachments/assets/9b76cba1-0d47-4b7c-a179-f71355d8adfb">

    </blockquote>
    
2. 원격 저장소에서 base 브랜치에 `feature/select-product` 브랜치 merge 후 삭제
   
    <img width="919" alt="32" src="https://github.com/user-attachments/assets/e802e8e1-d2ee-4204-9515-1f2ee20ea541">

    <img width="920" alt="33" src="https://github.com/user-attachments/assets/3ee757bd-b064-404e-bc18-8f146c046b79">

    <img width="916" alt="34" src="https://github.com/user-attachments/assets/4c990514-494f-4f56-8d19-0302d888abe3">
    
    <blockquote>
    ➡️ `feature/login` 브랜치와 `feature/select-product` 브랜치가 모두 삭제되고, `GitTest` 브랜치에는 최종적으로 선택한 코드(`feature/select-product` 브랜치)만 남게 됨
      
    <img width="649" alt="35" src="https://github.com/user-attachments/assets/b2c4cb4c-6837-4f3a-96b9-0614373a3b2c">
    
    </blockquote>
    
4. 로컬 저장소 동기화
    - `feature/select-product` 였던 로컬 저장소 동기화
      
        <img width="621" alt="36" src="https://github.com/user-attachments/assets/38023b7e-e6ac-4001-a74c-cf48b34f0c7a">
        
    - `feature/login` 였던 로컬 저장소 다시 동기화
        <img width="570" alt="37" src="https://github.com/user-attachments/assets/ca788eb0-0b6f-4d44-b448-d66dc818c92a">

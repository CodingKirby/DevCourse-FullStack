### 24.08.13.화
# 포트폴리오 / 협업 환경 구성 (2)

> 🌟 **Today 요약**
>
> 1. Git 설치
> 2. Git에서 자주 사용하는 명령어: ls, cd, mkdir, init, status, add, commit, log
> 3. 깃허브 소개

<details>
  <summary><strong>What Emoji means</strong></summary>
  <ul>
    <li>⭐ 중요</li>
    <li>📌 Pin Point, Tips</li>
    <li>🔑 Key Point</li>
    <li>✅ Check Point</li>
    <li>💬 강사의 말(인용)</li>
    <li>🚨 주의</li>
    <li>🚫 금지</li>
    <li>⛔ 여기서 잠깐!!</li>
    <li>🏷 잠깐 알아보기, 참고</li>
    <li>🙋‍♀️ 질문 있어요</li>
    <li>‼ 오류 발생</li>
    <li>❗ 문제 해결</li>
    <li>❓</li>
    <li>⁉ Why? 이유 설명</li>
    <li>❌⭕ Yes, No</li>
    <li>💡 깨달은 점, 생각해볼 점</li>
    <li>🔎 더 알아보기</li>
    <li>📖 개념 정리</li>
    <li>🚩 학습 목표, 방향, 배울 내용</li>
    <li>➡ 결론</li>
    <li>✏ 학습 내용 잠깐 정리</li>
    <li>🗂 학습 내용 총 정리(요약)</li>
    <li>📢 알아둘 것</li>
    <li>⚙ 환경설정</li>
    <li>🔗 링크</li>
  </ul>
</details>

---

## *What I did?*

> **1주차 Part3**
> 
- [x]  강의 수강
- [x]  오늘의 과제 제출

---

## *What I Learned?*

# Part2. 깃 처음 만나기

## Chapter4. 깃 기본 이론

### Section1. 깃은 00식 버전 관리 시스템입니다.

- 분산식: 중앙집중식보다 더 안정적이고 편하게 수정 및 복구 가능
- 깃은 로컬(내 컴퓨터에) 설치되는 시스템이다.
    - 깃허브는 원격으로 중앙에서 우리 프로젝트를 백업하고, 버전 관리 하고, 협업도 하게 해주는 시스템

> ✏️ 깃에서 각자 버전 관리를 하고, 중앙에서 깃들을 연결해주는 것이 깃허브
>
> - 깃은 내 컴퓨터 안에서 버전을 관리해주는 시스템이자, 깃허브와 소통하는 시스템
> - 깃허브는 원격 컴퓨터에서 백업을 담당하는 시스템이자, 내 컴퓨터와 별도로 버전 관리해주는 시스템
> - 내 컴퓨터에 깃이 설치되어 있으면, 버전 관리를 로컬에서 할 수 있을 뿐만 아니라, 깃허브와 소통(백업, 복구…) 할 수 있다.
> - 다른 컴퓨터에도 깃이 설치되어 있으면, 깃허브를 통해서 소통(다운로드, 복제, 백업…) 할 수 있다. ⇒ **“협업”**

### Section2. 내 컴퓨터에 깃 설치하기

> 📎 [Git 설치하기](https://git-scm.com/) ◀ 설치하러 가기  
> [참고 문서](https://git-scm.com/book/ko/v2/시작하기-버전-관리란%3F)

1. 각 OS에 맞게 설치
2. 성공적으로 설치된 경우 `git --version` 으로 확인 가능
   
    ![01](https://github.com/user-attachments/assets/64738ba3-0e88-43dc-9ee3-3442a9d69eec)

## Chapter5. 깃과 친해지기

### Section1. CLI vs GUI

명령을 하는 방법

- **CLI**: 커맨드 라인 인터페이스 ; 명령줄 인터페이스
    - 셸(이라는 프로그램 ; 창)에서 글자를 입력해서 컴퓨터에게 명령을 내리는 것
    - cf. 셸…? shell ; 조개
    - ex. MS DOS, 명령 프롬프트(cmd), 파워셸, 배쉬, 터미널…
    
- **GUI**: 그래픽 유저 인터페이스
    - 그래픽으로 컴퓨터에게 명령을 내릴 수 있도록, 사용자에게 화면을 제공

### Section2-1. 자주 쓰이는 명령어는? ls, cd, mkdir

- `ls` ; list segmentation
    - 디렉터리 안의 파일 목록을 보여주는 명령어
    - 디렉터리 안에 아무 파일도 존재하지 않는 경우: 출력 결과 없음

      ![02](https://github.com/user-attachments/assets/354b9999-c8f5-4f42-9054-a54f44e72fef)

    - 디렉터리 안에 파일이 존재하는 경우: 파일에 대한 리스트 출력
    
      ![03](https://github.com/user-attachments/assets/2c05c117-b278-4f5d-9bd0-f3d96d452cd9)

    - `ls -a` : 더 자세하게 출력
        > 🔎 **더 알아보기**
        
        > ‼️ **오류 발생: Get-ChildItem : 매개 변수 이름 'a'이(가) 모호하므로 매개 변수를 처리할 수 없습니다.**
        >
        > ![04](https://github.com/user-attachments/assets/08cb3ea0-aad9-4ecb-8ee7-8bf7ab4dee53)
        >
        > - 처음부터 -a 옵션을 사용한 것처럼 자세하게 나옴
        > - -a 옵션을 사용할 수 없다는 오류
        
        > ❗ **첫 번째 시도한 해결 방법**
        >
        > 📎 [참고 링크](https://jy-tblog.tistory.com/8)
        >
        > ![05](https://github.com/user-attachments/assets/2812b4de-4f59-4df1-9928-84360babe9c0)
        >
        > 1. Windows Power Shell을 관리자 권한으로 실행
        > 2. `Set-ExecutionPolicy RemoteSigned` 입력
        > `A` 입력
        >
        > 하지만 여전히 같은 오류 출력…
        
        > ❗ **두 번째 시도한 해결 방법**
        >
        > 오류를 다시 읽고 생각해보니 `Command Promt`에서 실행해야 하는데 `Power Shell` 에서 실행해서 문제가 생기는 것 같았다
        >
        > 그래서 터미널을 cmd로 바꿔서 해봤다.
        >
        > ![06](https://github.com/user-attachments/assets/7e0531f5-491e-4093-a06e-eada002544a0)
        >
        > 하지만 문제는 그게 아니었고… 오히려 cmd에서 `ls` 명령어를 사용하면 다음과 같은 오류 발생
        >
        > ![07](https://github.com/user-attachments/assets/bfb20dc0-5784-4800-b2ca-b2b4d9b4663d)
        >
        > 그래서 또 찾아보니 **`ls` 는 리눅스 명령어**이기 때문에 생기는 문제였다.
        > **윈도우에는 `dir` 이라는 명령어를 사용**한다.
        >
        > ![08](https://github.com/user-attachments/assets/95d7f5eb-bd69-4a3c-844f-3897d2a2e876)

        >
        > ~~정처기할 때도 배웠었는데 까먹은;~~
        >
        > 만약 그럼에도 윈도우에서 `ls` 명령어를 사용하고 싶다면?
        >
        > 📎 [참고 링크](https://barrer.tistory.com/87)
        >
        > `doskey ls = dir` 을 입력하여 ls를 dir에 매핑해주면 된다.
        >
        > ![09](https://github.com/user-attachments/assets/0892c195-43fd-4b4e-97a5-4223644fa687)

        
        > ➡️ **결론**
        >
        > 📎 [참고 링크](https://velog.io/@beyond-developer/Windows-PowerShell에서-ls-a-명령어가-작동하지-않는-이유)
        >
        > - `ls`는 리눅스 명령어이며, 맥에서 사용 가능
        > - `cmd`에서는 `dir` 명령어 사용
        > - `Powershell`에서는 `Get-Item .` 명령어 사용
        >   - 단, Powershell에서는 유닉스 및 리눅스 사용자들을 위하여 ls에 대한 별칭을 제공하여 사용 가능
        
- `mkdir` ; make directory
    - 새로운 디렉터리를 만드는 명령어
    - `mkdir 새로운 디렉터리명`과 같이 사용
      
        ![10](https://github.com/user-attachments/assets/ac38ce35-36c7-4262-9985-79951cd3f8b0)
        
        ![11](https://github.com/user-attachments/assets/9eb39959-8422-4848-b4dc-8fb48ea8d199)

- `cd` ; change directory
    - 디렉터리를 이동하는 명령어
    - `cd 디렉터리명` 과 같이 사용
    - `cd ..` 를 입력하면 상위 디렉터리로 이동 가능
      
        ![12](https://github.com/user-attachments/assets/026002f3-d648-40b5-807e-d1ca41597946)

### Section2-2. 자주 쓰이는 명령어는? init, status

- `init` ; initialize
    - `git init`과 같이 사용
      
        ![13](https://github.com/user-attachments/assets/c83acef5-6680-417f-99e3-bc2d0b3cd401)
      
        실행하고 나면 `.git` 이라는 보이지 않는 디렉터리가 생성됨
        
- `status`
    - `git status` 와 같이 사용
    - init 하기 전에 실행하면 오류 출력
    - `Untracked files`
      
        ![14](https://github.com/user-attachments/assets/c44c9549-99ad-43a3-9dd0-fe3e74329cc6)
       
        > ⁉️ **Why?**
        >
        > Git에서는 버전 관리를 보수적으로 하기 때문이다. 현재는 디렉터리 안의 파일은 git에게 알리지 않았음.
        

### Section2-3. 자주 쓰이는 명령어는? add

- `add`
    - git에게 추적(tracking)을 요청하는 명령어이다.
        
        ; git은 시작부터 모든 파일을 추적하지 않는다.
        
    - `git add 파일명` 과 같이 사용
        
        ![15](https://github.com/user-attachments/assets/2252ba7a-31cf-46ad-af93-793cbe810dbc)

        add 후 status를 실행하면 해당 파일이 잘 트래킹되고 있는 것을 확인 할 수 있음
        
    > 🏷️ `git add .` 으로 모든 파일을 추가할 수 있다.
    
    > 📢 Mac에서는 .DS_Store 라는 파일이 생기는데, 삭제해도 무방하다.
    
    > 📌 **Tips**
    >
    > 방향키 🔼🔽를 이용하여 이전에 입력한 커맨드를 재사용할 수 있다.
    

### Section2-4. 자주 쓰이는 명령어는? commit, log

- `commit`
    - 깃에 저장하는 명령어이다.
    - `git commit -m 메시지` 과 같이 사용
        
        > 📌 **사용 방법**
        >
        > 1. `git commit`
        >     
        >     ![16](https://github.com/user-attachments/assets/820b9c07-5b77-4f88-830e-90c3f1f5107f)
        >     
        > 2. `cc`
        >     
        >     ![17](https://github.com/user-attachments/assets/5ecc2f0a-dede-42f3-9120-b50cdbab3836)
        >     
        > 3. 메시지 내용 입력
        > 4. `esc` → `:` → `wq` 입력
        >     
        >    ![18](https://github.com/user-attachments/assets/7bb34d48-c0e7-4adf-be48-8c545e60829e)
        >     
        > 5. 결과
        >     
        >     ![19](https://github.com/user-attachments/assets/804c2bd3-131f-40b5-badf-b0b51545794f)

        

> 🏷️ **add와 commit의 차이?**
>
> - **`add`: commit의 전단계, 변경사항 저장**
>     
>     파일들이 커밋(commit)되기 전에 스테이징(staging) 영역에 잠시 보관하는 것으로, 어떤 파일이 다음 커밋에 포함될지를 결정한다. 커밋 하고자 하는 파일들은 커밋하기 전에 add를 해줘야 커밋할 수 있다. 
>     
>     untracked ➡️ tracked 파일로 변경
>     
> - `commit`: **로컬 저장소에 저장, 변경사항 확정**
> 스테이징 영역에 있는 파일의 스냅샷을 찍어 로컬 저장소에 저장하는 것으로 이 스냅샷은 특정한 버전으로 기록된다.
> **`git commit`을 통해 기록된 변경 사항들은 Git의 버전 관리 기록에 남아, 이후에 언제든지 조회하거나 되돌릴 수 있다.**

- `log`
    - 커밋 히스토리를 조회하는 데 사용되는 명령어
    - `git log`와 같이 사용
        
        ![20](https://github.com/user-attachments/assets/7fabc427-4303-42f6-a5ae-eda048cd7585)
      

### Section3-1. GUI로 init, add, commit

- init
  
    ![21](https://github.com/user-attachments/assets/e67ffb58-ec40-41b3-9546-f2e10e1deeca)

- add
  
    ![22](https://github.com/user-attachments/assets/aa8cebfe-1914-40ff-afec-b8f0c0278db5)

- commit
    
    커밋 → 메시지 입력하고 `ctrl+s`로 저장 → ✅
  
    ![23](https://github.com/user-attachments/assets/d39a3430-4702-453f-b79d-1280da302467)


### Section3-2. 깃 히스토리 설치하기

확장프로그램 `Git History` 설치

![24](https://github.com/user-attachments/assets/31b31574-23c6-449b-9298-19fd00129223)

`Source Control`에서 확인

![25](https://github.com/user-attachments/assets/fa7a3511-0c20-4447-8ab0-f8ab10950187)

# Part3. 깃허브로 협업하기

## Chapter6. 깃허브 연동하기

### Section1. git remote -v, 깃허브 소개

- `git remote`
    - `git remote -v`
    - 아직 아무런 일도 일어나지 않는다!!
- 깃허브?
    
    개발자들 사에에서 중요한 **“공유, 협업”** 문화… ⇒ 이를 위해 등장한 마이크로소프트에서 제공하는 웹 기반의 버전 관리 및 협업 플랫폼으로, 오픈소스 문화에 중요한 발판이 된다.
    

---

## 오늘의 과제

> 오늘 배운 내용까지 학습한 내용 개인 블로그 또는 개인 노션에 정리해서 제출  
> ❗️필수 포함 내용 : VSCODE에 test.txt 파일이 아닌 본인이름 (ex :duna.txt) 파일 생성하여 터미널에 git 명령어 실습한 화면 캡쳐, 깃 히스토리 설치된 실습 화면 캡쳐
> 
- [x]  TIL 작성

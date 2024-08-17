> 🌟 **Today 요약**
>
> 1. 깃허브에 파일 올리기: add > commit > push
> 2. 깃허브에서 파일 받기: clone > pull
> 3. 깃허브 브랜치: branch, checkout

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

> **1 주차 Part 4**
> 
- [x]  강의 수강
- [x]  오늘의 과제 제출
- [x]  [과제] Github 계정 생성 및 공유

---

## *What I Learned?*

# Part 3. 깃허브로 협업하기

## Chapter 6. 깃허브 연동하기

### Section 1-1. 깃허브 가입

https://github.com/CodingKirby

### Section 1-2. 깃허브 레포지토리 create

![01](https://github.com/user-attachments/assets/3777e1b2-9b68-4718-88b8-33fcf580f19d)

- Repository name: 레포지토리 이름
- Description(optional): 선택 사항, 레포지토리에 대한 설명
- Public/Private: 공개/비공개
- Add a README file: 선택 사항, 리드미 파일 생성

![02](https://github.com/user-attachments/assets/832e6da1-c35f-4ea7-9312-e42aeceda880)

- [생성한 레포지토리](https://github.com/CodingKirby/KDT)

### Section 1-3. 깃허브에 내 로컬 프로젝트 업로드 하기

- 깃허브 연동하기 - 새로운 레포지토리 만들어서
    1. 깃허브에 새로운 레포지토리 생성
    2. `remote add`: 깃허브 레포지토리 연결시키기
        - `git remote add <원격 저장소 별칭(깃허브 레포지토리)> <원격 저장소 URL>`
          
            ![03](https://github.com/user-attachments/assets/10050891-620c-4359-9e5a-b89a4727b421)

            - `fetch`: 서버에 있는 코드를 가져올 때 사용하는 명령어
            - `push`: 원격 저장소에 로컬 컴퓨터에 있는 코드를 업로드할 때 사용하는 명령어
            
            ➡ 연동은 됐지만 아직 코드는 올리지 않은 상태
       
    3. `push` :깃허브 레포지토리에 로컬 소스 코드 올리기
       - `git push <원격 저장소 별칭> <원격 저장소 레포지토리명>`

         `ex.` git push origin master

         ![04](https://github.com/user-attachments/assets/ecec3497-1df0-47ff-995e-63792dacf693)

         > ❓ 빈 폴더에서 작업하지 않아서 그런가 강의에서는 `main` 으로 나오는데, 나는 `master`로 되어 있었다…
                  
         ![05](https://github.com/user-attachments/assets/e71ca080-12bf-4220-b69c-43fb46fc4239)
                
         push 결과 main 이외에 master라는 브랜치가 새로 생성됨
                
### Section 1-4. 토큰 생성

- VSCode에서 처음 push 하는 경우, Github 로그인 필요
    
    ➡ 보안을 위해서 일반 비밀번호가 아닌 `access token`이 필요하다.
    
- 깃허브 사이트 > 우측 상단 프로필 > Settings > Developer Settings > Personal access tokens > Tokens(classic) > Generate new token

    ![06](https://github.com/user-attachments/assets/6a78673e-3b5b-4b41-8920-de16f8fedfc3)

    - Note: 토큰 이름
    - Expiration: 토큰 만료 기간
    - Select scopes: 토큰 사용처
        - repo, workflow, write:packages, delete:packages, delete_repo, copilot, project

### Section 2-1. CLI clone

- 깃허브 연동하기 - 기존 깃허브 레포지토리를 로컬로 받아오기
    1. 깃허브 레포지토리 연결시키기
    2. 소스 코드 받아오기
        - `git clone <원격 저장소 URL>`

            ![07](https://github.com/user-attachments/assets/bcfbc3bd-4f20-4fbe-b05e-89cdafbabe5c)

            <blockquote>
            📌 <strong>원격 저장소 URL 찾는 법</strong>
            
            ![08](https://github.com/user-attachments/assets/57f73b14-fd84-4221-9ae2-04e79b1b0ac8)

            </blockquote>
            
            <blockquote>
            🔎 <strong>특정 branch를 clone 하기</strong>
            
            <code>git clone --branch <branchname> <remote-repo-url></code>
          
            ![09](https://github.com/user-attachments/assets/e6607d6b-05de-4354-992f-41368e103228)
     
            </blockquote>
            

### Section 2-2-1. pull 하다 안되어서 git remote remove origin

- 수정된 코드 올리고,
    1. 소스 코드 수정
    2. `add` > `commit` > `push`
        - `add`, `commit`
          
            ![10](https://github.com/user-attachments/assets/a14513fd-ba2a-4fba-8eb6-f1b44f86f53b)

            ![11](https://github.com/user-attachments/assets/0df92648-245e-46b1-b67c-45410c5995f4)

        - `push`

            ![12](https://github.com/user-attachments/assets/b405a982-fd2d-4372-997d-707ebecb80d3)
            
    3. 이력 확인

        ![13](https://github.com/user-attachments/assets/6e818124-13cd-47c1-8481-21dd8195bfe1)

        ![14](https://github.com/user-attachments/assets/a17ef28d-a3ab-4a90-a336-7761dc5c57ed)

        ![15](https://github.com/user-attachments/assets/49cc41f2-16a8-4d74-b505-357d5dfa4e7d)
 
- 수정된 코드 받아오기  
    1. `git pull origin <원격 저장소의 이름> <브랜치 이름>`

        ![16](https://github.com/user-attachments/assets/f3ed78da-4d79-41a6-a2a6-4f07bb125789)
 
        <blockquote>
        ‼️ <strong>오류 발생</strong>
        
        강의와는 다른 오류가 발생했다… ▶ [🔗 **해결 방법](https://www.notion.so/3-5d5788a64e8940d389041c2c23df4318?pvs=21)**

        ![17](https://github.com/user-attachments/assets/ef53e201-8b98-4274-a74b-40e8ec24582a)

        강의에서는 해당 파일이 레포지토리가 아니기 때문에 발생한 오류였다.
        
        </blockquote>
        
    3. 연결 해제 후 재연동
        
        `git remote remove origin`
       
        ![18](https://github.com/user-attachments/assets/c3e36f24-a50f-4163-99ec-1438816f7ea4)
 
        <blockquote>
        🚩 왜 여전히 디렉터리 안에 새로운 프로젝트 파일을 만들어서 받아오는 걸까??
        
        </blockquote>
        

### Section 2-2-2. GUI로 clone하면 사실 맞게 했다는 걸 알게 됨

<blockquote>
➡️ clone을 할 때는 폴더를 미리 만드는 것이 아니라, 처음부터 깃허브에 있는 프로젝트를 받아오는 것이 좋다.

</blockquote>

- 레포지토리 복제 > URL 입력 > clone할 파일 선택
    
    ![19](https://github.com/user-attachments/assets/82e4ed29-1fe0-4989-ad49-79003f2d206d)


<blockquote>
✅ 둘 다 똑같은 방법이며, Focusing의 차이이다.

</blockquote>

### Section 2-3-1. 깃허브에 올린 프로젝트 내려받기

앞선 절차들은 다 똑같고,

- `cd <디렉터리명>` 으로 해당 프로젝트 파일로 이동 후
`git pull origin <branch>` 를 입력하면 pull이 잘 된다.

![20](https://github.com/user-attachments/assets/99a5f1bc-69a5-4daf-843d-643f40e531fe)

### Section 2-3-2. 거꾸로 업로드하고 내려받기

1. 클론한 파일 수정 후 add > commit > push

    ![21](https://github.com/user-attachments/assets/74f4d4ee-26b8-4e6f-b604-2a69e7fe1543)

3. 원본 디렉터리에서 pull
   
    ![22](https://github.com/user-attachments/assets/27301e99-0497-4cb2-8535-6c3269f99d0d)

<blockquote>
📌 <strong>GUI로 Push하기</strong>

- add > 메시지 입력 > commit

    ![23](https://github.com/user-attachments/assets/1dae8ffd-bd16-428e-b454-8a46ad2e5de2)
    
- 변경 내용 동기화

    ![24](https://github.com/user-attachments/assets/3aa04e8b-2f45-4507-a880-b6e58c464984)
    
</blockquote>

<blockquote>
📌 <code>git log</code> 후 quit하기

 

![25](https://github.com/user-attachments/assets/b3655782-2631-44f8-b165-1d4b500ed7d3)

이와 같은 상태일 때,ㅡ `q`를 누르면 원래의 커맨드 라인으로 돌아갈 수 있다.

</blockquote>

### Section 3-1. 브랜치란?

각 기능을 병행적으로 개발하다가 완성 후 하나의 프로젝트로 병합하기 위해 제공하는 기능이다.

<blockquote>
📖 <code>브랜치</code> ; <code>branch</code>

GitHub에서 브랜치는 독립적인 작업 공간을 제공하여 개발자들이 서로 간섭하지 않고 작업할 수 있게 해준다. 브랜치는 새로운 기능 개발, 버그 수정, 실험적 작업 등 다양한 용도로 활용되며, 작업이 완료된 후에는 메인 브랜치에 `병합`되어 프로젝트에 반영된다. 브랜치를 통해 개발 작업을 더 체계적이고 효율적으로 관리할 수 있다.

</blockquote>

### Section 3-2. 브랜치 실습

- <code>git branch</code>
    - 브랜치 확인

        ![26](https://github.com/user-attachments/assets/e62a90ea-d3bb-4e7f-8e54-16d844fa650c)

        `*` 은 현재 위치한 브랜치
        
    - <code>git branch <브랜치명></code> 으로 새로운 브랜치 생성

        ![27](https://github.com/user-attachments/assets/61711e8d-16fa-4234-ae33-7481239e1678)

    - <code>git checkout <브랜치명></code>으로 새로운 브랜치로 이동
      
        ![28](https://github.com/user-attachments/assets/f11e048a-ff18-4e8b-9c87-fcc6aea5ba92)


---

## 오늘의 과제

> 오늘 배운 내용까지 학습한 내용 개인 블로그 또는 개인 노션에 정리해서 제출
> 
> 
> ❗️필수 포함 내용 : 깃허브 레포지토리 생성 화면 캡쳐, 깃허브 실습 화면 2~3개 캡쳐
> 
- [x]  TIL 작성

> Github 계정을 생성한 뒤 계정 링크를 공유 하시오.
> 
- [x]  [과제] Github 계정 생성 및 공유

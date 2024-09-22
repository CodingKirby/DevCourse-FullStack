### 24.08.21.수
# 웹 서비스의 이해: 웹 생태계부터 웹 브라우저, 그리고 데이터베이스까지 (2)

<blockquote>
🌟 Today 요약

1. CSS의 이해
    - CSS란?
    HTML 요소를 꾸며주는 언어.
    - CSS 적용 방법
        - 인라인: HTML 태그 안에 직접 CSS 스타일을 작성.
        - 내부 스타일 시트: HTML 문서 내의 `<style>` 태그 안에 CSS를 작성.
        - 외부 스타일 시트: 별도의 CSS 파일에 작성하고 HTML 파일에서 `<link>`로 연결.
    - CSS 선택자
        - 요소 선택자: 특정 HTML 태그에 스타일을 적용 (`h1 { ... }`).
        - 클래스 선택자: 클래스 이름을 기준으로 스타일을 적용 (`.classname { ... }`).
        - 아이디 선택자: 특정 아이디를 가진 요소에 스타일을 적용 (`#idname { ... }`).
2. JavaScript의 이해
    - JavaScript란?
    HTML 요소를 제어하고 상호작용을 추가하는 스크립트 언어.
    - JavaScript 적용 방법
        - 인라인: 특정 이벤트에 반응하는 JavaScript 코드를 HTML 태그 안에 직접 작성 (`onclick="alert('clicked!')"`).
        - 내부 스크립트: HTML 문서 내의 `<script>` 태그 안에 JavaScript 코드를 작성.
        - 외부 스크립트: 별도의 JavaScript 파일에 코드를 작성하고 `<script src="파일명.js">`로 HTML 파일에 연결.
    - JavaScript에서의 함수
        - 함수는 특정 작업을 수행하는 코드 블록.
        - 정의: `function 함수이름() { ... }`
        - 호출: `함수이름()`
    - DOM 요소 접근
        - id로 찾기: `document.getElementById('아이디')`
    - 조건문 (if 문)
        - 조건에 따라 다른 결과를 실행하는 코드 구조.
        - `if (조건) { ... } else { ... }`
    - 변수 선언
        - `var`: 재할당 가능, 중복 선언 가능, 함수 스코프 (거의 사용하지 않음).
        - `let`: 재할당 가능, 중복 선언 불가, 블록 스코프.
        - `const`: 재할당 불가, 중복 선언 불가, 블록 스코프.
</blockquote>


## *What I did?*

> 2 주차 Part 3
> 
- [x]  강의 수강

> 오늘 학습한 내용 개인 블로그 또는 개인 노션에 정리해서 제출
> 
> 
> ❗️필수 포함 내용 : myFunction() 코드 화면 캡쳐, ID입력값에 본인이름 보이도록 팝업 띄운 화면 캡쳐
> 
- [x]  오늘의 과제 제출

> [KDT] CSS 객관식 문제 1, 2, 3
> 
- [x]  [문제] CSS 객관식 문제

> 금일 학습한 함수 생성 및 호출 결과 코드를 업로드 한 뒤 링크를 공유 하시오.
> 
- [x]  [과제] 함수 생성 및 호출 결과 코드 업로드

## *What I Learned?*

> 웹 서비스 개발의 이해와 실습
> 

# Part 2. 프론트엔드

## Chapter 6. [예제로 배우는] CSS의 이해

### CSS란?

`Cascading Style Sheets`의 약자로, HTML을 꾸며주는 언어이다.

문자를 통째로 한번에 꾸며주는 것이 아니라, HTML 태그를 하나하나 꾸며준다.

- HTML에 CSS를 적용하는 방법 3가지
    - 인라인(inline): HTML 태그 안에 같이 작성
    - 내부 스타일 시트 (internal style sheet): HTML 문서 안에 같이 작성
    - 외부 스타일 시트 (external style sheet): HTML 문서 밖에 작성하고 연결

<blockquote>
💡 HTML 태그 한쌍(<태그>텍스트</태그>) 또는 하나(<태그/>)를 우리는 element라고 부른다.

</blockquote>

<img width="686" alt="스크린샷 2024-08-21 오후 3 11 53" src="https://github.com/user-attachments/assets/431afc88-4ce2-427a-95f1-c5f02408f454">


### 인라인 스타일 시트

<blockquote>
🚨 style의 각 속성의 끝에 `;`로 끝을 알려야 한다.

</blockquote>

`login.html`

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>LOGIN</title>
</head>
<body>
    <h1 style="color: rgb(173, 6, 6); text-align: center">Login</h1>
    <form>
        ID :
        <input type="text" style="font-size: 25px;">
        <br>
        PW : 
        <input type="password"style="font-size: 25px;">
        <br>
        <input type="button" value="login"
        style="font-size: 25px; width: 100px; height: 30px;">
    </form>
</body>
</html>
```

- `color: rgb(173, 6, 6);`: 이 속성은 텍스트의 색상을 지정한다. `rgb` 속성는 색상을 빨강(R), 초록(G), 파랑(B) 값으로 지정하며, 각각 0에서 255까지의 값을 가질 수 있다. 이 경우, 빨강 값이 173으로 가장 크기 때문에 색이 빨간색으로 나타난다.
- `text-align: center;`: 이 속성은 텍스트를 중앙에 정렬한다. `<h1>` 태그 안의 텍스트, 즉 "Login"이 페이지의 중앙에 배치된다.
- `font-size: 25px;`: 이 속성은 입력 필드 안의 텍스트 크기를 픽셀 단위로 지정한다.
- `width: 100px;`: 버튼의 너비를 100픽셀로 지정한다.
- `height: 30px;`: 버튼의 높이를 30픽셀로 지정한다.

### 내부 스타일 시트

<blockquote>
💡 각각 어떤 엘리먼트를 꾸미는지 지정해야 한다.

</blockquote>

`login.html`

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>LOGIN</title>
    <style>
        /*<요소 선택자>*/
        h1 {
            color: rgb(173, 6, 6);
            text-align: center;
        }
        
        /*<클래스 선택자>*/
        .login_inputs {
            font-size: 25px;
        }

        /*<아이디 선택자>*/
        #btn_login {
            font-size: 25px;
            width: 100px;
            height: 30px;
        }
    </style>
</head>
<body>
    <h1>Login</h1>
    <form>
        ID :
        <input class="login_inputs" type="text">
        <br>
        PW : 
        <input class="login_inputs" type="password">
        <br>
        <input id="btn_login" type="button" value="login">
    </form>
</body>
</html>
```

- `<style>` 태그
    
    HTML 문서의 `<head>` 섹션에 위치하며, 문서 내에서 사용될 CSS 스타일을 정의한다. 여기서 정의된 스타일은 문서의 특정 HTML 요소에 적용된다.
    
    - `요소 선택자` `태그명`
    특정 HTML 태그 이름을 사용하여 해당 태그에 스타일을 적용한다.
    - `클래스 선택자`  `.클래스명`
    특정 HTML 요소에 `class` 속성을 사용하여 스타일을 적용한다. 클래스 선택자는 마침표(`.`)로 시작하며, 여러 요소에 동일한 스타일을 적용할 수 있다.
    - `ID 선택자` `#아이디명`
    HTML 요소의 `id` 속성을 사용하여 스타일을 적용한다. ID 선택자는 `#` 기호로 시작하며, 문서 내에서 한 번만 사용되는 고유한 스타일을 지정할 때 사용된다.

### 외부 스타일 시트

<blockquote>
💡 코드가 분리되어 가독성이 좋아지고 유지보수가 쉬워짐

</blockquote>

<blockquote>
📌 주석

- HTML: `<!-- -->`
- CSS: `/* */`
</blockquote>

`login.html`

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>LOGIN</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <h1>Login</h1>
    <form>
        ID :
        <input class="login_inputs" type="text">
        <br>
        PW : 
        <input class="login_inputs" type="password">
        <br>
        <input id="btn_login" type="button" value="login">
    </form>
</body>
</html>
```

`login.css`

```css
h1 { /* 요소 선택자 */
    color: rgb(173, 6, 6);
    text-align: center;
}

.login_inputs { /* 클래스 선택자 */
    font-size: 25px;
}

#btn_login { /* 아이디 선택자 */
    font-size: 25px;
    width: 100px;
    height: 30px;
}
```

- `<link rel="stylesheet" href="파일명.css">`
    - 이 줄은 HTML 문서와 외부 CSS 파일(`login.css`)을 연결한다.
    - `rel="stylesheet"`는 연결된 파일이 스타일 시트임을 나타내며, `href="login.css"`는 연결할 CSS 파일의 경로를 지정한다.

## Chapter 7. [예제로 배우는] JavaScript의 이해

### Javascript란?

Javascript는 특정 HTML 요소를 선택하여 제어할 수 있는 스크립트 언어이다.

최근에는 백엔드 언어로도 각광받고 있다.

- `ex`
    - 글자 바꾸기
    - 버튼 비활성화
    - 버튼의 색상 변경

<blockquote>
📖 스크립트 언어란?

독립적인 프로그램을 개발할 수 있는 프로그래밍 언어가 아닌 “(프로그램 내부의 구성 요소 중 하나로) 프로그램을 제어하는 스크립트 역할을 하는 언어”

최근 빠르게 발전하는 런타임 환경 덕분에 스크립트 언어 만으로도 충분히 프로그래밍이 가능해져, 역할이 확장되고 있다.

</blockquote>

- HTML에 Javascript를 적용하는 방법
    - 인라인(inline): 사용자와의 상호작용이 있을 때만 가능하다. 예를 들어, 버튼을 클릭하거나, 키보드를 누른 경우.
    - 내부 스크립트(internal script): HTML 문서 안에 같이 작성
    - 외부 스크립트(external script): HTML 문서 밖에 작성하고 연결

### 인라인 스크립트

`login.html`

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>LOGIN</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <h1>Login</h1>
    <form>
        ID :
        <input class="login_inputs" type="text">
        <br>
        PW : 
        <input class="login_inputs" type="password">
        <br>
        <input id="btn_login" type="button" value="login"
        onclick="alert('clicked!')">
    </form>
</body>
</html>
```

<img width="686" alt="스크린샷 2024-08-21 오후 3 40 51" src="https://github.com/user-attachments/assets/746599ee-8869-43e8-8b85-c25e75fa25a5">

- 사용자가 로그인 버튼을 클릭하면, `onclick` 이벤트에 의해 `alert('clicked!')` 코드가 실행되고, 그 결과로 브라우저에서 알림 팝업이 뜬다.
    - `onclick`: JavaScript에서 사용하는 이벤트 속성 중 하나로, 사용자가 해당 요소를 클릭할 때 실행될 코드를 지정한다.
    - `alert()` : JavaScript에서 제공하는 기본 함수 중 하나로, 작은 팝업 창을 통해 메시지를 사용자에게 보여준다.

### 내부 스크립트

> 함수
> 

함수란, 특정 기능을 수행하는 코드 덩어리로, 다음과 같이 정의한다.

```jsx
function 함수이름() {
	/* 이 공간에 함수가 할 일을
	코드로 작성한다. */
}
```

<blockquote>
🚨 `함수이름()`과 같은 형태로 호출한다. `()` 잊지 말자!!!

</blockquote>

> 나만의 함수 만들고, 버튼 클릭하면 함수 호출하기
> 

`login.html`

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>LOGIN</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <h1>Login</h1>
    <form>
        ID :
        <input class="login_inputs" type="text">
        <br>
        PW : 
        <input class="login_inputs" type="password">
        <br>
        <input id="btn_login" type="button" value="login"
        onclick="myFunction()">
    </form>

    <script>
        /* 나만의 함수 만들고, 버튼 클릭하면 호출하기 */
        function myFunction() {
            alert('1');
            alert('2');
            alert('3');
        }
    </script>
</body>
</html>
```

<img width="686" alt="스크린샷 2024-08-21 오후 3 52 12" src="https://github.com/user-attachments/assets/63379faf-4178-4547-821f-f63f11a940c2">
<img width="686" alt="스크린샷 2024-08-21 오후 3 52 19" src="https://github.com/user-attachments/assets/d3931734-1511-45fd-9753-2fcfa59367fe">
<img width="686" alt="스크린샷 2024-08-21 오후 3 52 27" src="https://github.com/user-attachments/assets/eda2e3f5-1352-438f-b2a1-abec2bd658ad">

- `onclick="myFunction()"`
    - `onclick`은 HTML 요소에 사용되는 이벤트 속성 중 하나로, 사용자가 해당 요소를 클릭할 때 실행될 JavaScript 코드를 지정한다.
    - 이 예제에서는 로그인 버튼이 클릭될 때 `myFunction()`이라는 함수가 호출된다.
- `<script>` 태그
    
    <blockquote>
    ✅ 이때, `<script>` 태그는 `<body>` 태그의 끝에 위치해야 한다. → 이유는 나중에…
    
    </blockquote>
    
    - `<script>` 태그는 HTML 문서에서 JavaScript 코드를 포함하기 위해 사용된다.
    - 이 태그 안에 정의된 JavaScript 코드는 페이지가 로드될 때 브라우저에 의해 해석되고 실행될 준비가 된다.
- `myFunction` 함수
    - `function myFunction()`: JavaScript에서 `myFunction`이라는 이름의 새로운 함수를 정의. 이름을 사용하여 호출할 수 있다.
    - `alert('1');`, `alert('2');`, `alert('3');` : `alert` 함수는 작은 팝업 창을 띄워 사용자에게 메시지를 보여준다. 이 함수는 호출될 때 순차적으로 세 개의 알림 창을 표시하며, 각각 "1", "2", "3"이라는 메시지를 보여준다.

> 특정 태그(element)를 찾는 방법
> 

Javascript에서는 특정 태그를 찾을 때 다음과 같은 기능을 이용한다.

- id로 찾기: document.getElementById(’아이디’)
    - `.`: ~중에서, ~의(of)
    - 문서(document) 중에서(.) 요소(Element)를 아이디로(ById) 갖고온다(get)는 의미이다.
- class 이름으로 찾기: document.getElementsByClassName(’클래스 이름’)
- tag 이름으로 찾기: document.getElementsByTagName(’태그 이름’)

> 아이디 입력 값 팝업 띄우기!
> 

<blockquote>
✏️ `getElementById`
특정 HTML 요소에 접근하고, 그 값을 JavaScript로 가져오기 위한 메서드이다.

</blockquote>

`login.html`

```html
<script>
function popId() {
	alert(document.getElementById('txt_id').value);
}
</script>
```

<img width="864" alt="스크린샷 2024-08-21 오후 5 56 46" src="https://github.com/user-attachments/assets/0191fc74-5bf8-49ec-a6dc-80a895f25cac">

- `popId` 함수
    - `function popId()`로 시작하며, `popId`라는 이름의 함수를 정의한다.
    - 이 함수는 로그인 버튼이 클릭될 때 호출된다.
- `document.getElementById('txt_id')`
    - `document` 객체는 현재 웹 페이지를 의미하며, HTML 문서의 모든 요소에 접근할 수 있다.
    - `getElementById('txt_id')`는 HTML 문서에서 `id="txt_id"`인 요소를 찾아 반환한다. 여기서는 ID 입력 필드를 가리킨다.
- `.value`
    - `value`는 해당 요소의 값, 즉 사용자가 입력한 텍스트를 가져온다.
        
        <blockquote>
        ❓ `.value` 없이 `alert(document.getElementById('txt_id'));`를 사용한다면 어떻게 될까?
        
        → 팝업 창에는 ID 입력 필드 자체의 객체에 대한 정보를 문자열로 변환한 내용이 표시된다.
      
        <img width="686" alt="스크린샷 2024-08-21 오후 4 26 09" src="https://github.com/user-attachments/assets/861001d6-8b76-468f-b4cf-2f2597c80cc0">
  
        이는 `document.getElementById('txt_id')`로 반환된 객체가 `HTMLInputElement`라는 객체임을 나타내는 문자열이다.
        
        </blockquote>
        
- `alert(...)`
    - `alert()` 함수는 팝업 창을 띄워 사용자에게 메시지를 표시한다.
    - 여기서는 `document.getElementById('txt_id').value`로 얻은 ID 입력 값을 팝업 창에 표시한다.

> if문
> 

조건에 따라 다른 결과를 선택할 수 있게 한다. 이를 `조건문`이라 한다.

만약 아이디 칸이 비어있다면, 아이디를 입력해달라고 팝업창에 띄운다.
아니라면, (= 칸에 값이 있다면) 입력된 아이디를 팝업창에 띄운다.

```jsx
if (아이디 칸이 비어있다면) {
	아이디를 입력해달라고 팝업창에 띄운다.
}
else {
	입력된 아이디를 팝업창에 띄운다.
}
```

`login.html`

```html
<script>
function popId() {
	if (!document.getElementById('txt_id').value) {
	// = document.getElementById('txt_id').value == ''
		alert('아이디를 입력해주세요.');
		return;
	}
	else {
		alert(document.getElementById('txt_id').value);
	}
}
</script>
```

<img width="686" alt="스크린샷 2024-08-21 오후 4 35 35" src="https://github.com/user-attachments/assets/2b619fbe-3699-478e-9c04-0de78b269933">

<img width="686" alt="스크린샷 2024-08-21 오후 4 35 48" src="https://github.com/user-attachments/assets/fc283400-b13b-4d80-9a0f-d6f5738f299c">

- `if (!document.getElementById('txt_id').value)`
    
    `!document.getElementById('txt_id').value`는 값이 비어 있으면 `true`가 된다. 즉, 입력 필드에 아무것도 입력되지 않았을 경우를 확인한다. `document.getElementById('txt_id').value == ''`와 같은 표현이다.
    
    - `alert('아이디를 입력해주세요.');`
        
        ID 입력 필드가 비어 있을 때 호출된다. 사용자가 아무것도 입력하지 않고 로그인 버튼을 클릭하면 이 경고 메시지가 팝업 창으로 표시된다.
        
    - `return;`
        
        `if` 조건이 참일 때, 즉 입력 필드가 비어 있을 때 함수는 `return`을 통해 종료된다. 이로 인해 이후의 코드가 실행되지 않는다.
        
- `else`
    - ID 입력 필드에 값이 있는 경우 실행된다.
    - `alert(document.getElementById('txt_id').value);`는 입력된 값을 팝업 창으로 표시한다.

> 변수
> 

<blockquote>
🚩 좋은 코딩은 중복을 없애는 것이다. → 변수 이용

</blockquote>

다음과 같이 변수를 정의하고 사용할 수 있다.

`let 변수명 = 변수에 담을 데이터(숫자, 문제, element, ...);`

`login.html`

```html
<script>
function popId() {
	let userId = document.getElementById('txt_id').value;
	if (!userId) { // = userId == ''
		alert('아이디를 입력해주세요.');
		return;
	}
	else {
		alert(userId);
	}
}
</script>
```

<blockquote>
💡 `var` vs `let` vs `const`

- `var`
    - 중복 선언 가능. 재할당 가능. 함수 스코프.
    - 원래는 let과 const의 역할을 모두 하고 있었으나, ES6부터 let과 const가 추가되어 잘 사용하지 않는다.

```jsx
function compareVariable() {
	let num1 = 10;
	const num2 = 30;
	
	num1 = 20; // 먼저 들어간 값을 빼고 이 값을 넣는다.
	// num2 = 10; // 상수이기 때문에 값을 바꿀 수 없다. ‼️오류 발생‼️ -> 아무런 동작도 하지 않는다.
	
	alert('num1: ' + num1); // 20
	alert('num2: ' + num2); // 10
}
```

- `let`
    - 중복선언 불가. 재할당 가능. 블록 스코프.
- `const`
    - 중복선언 불가. 재할당 불가. 블록 스코프.
</blockquote>

### 외부 스크립트

`login.html`

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>LOGIN</title>
    <link rel="stylesheet" href="login.css">
    <script type="text/javascript" src="login.js"></script>
</head>
<body>
    <h1>Login</h1>
    <form>
        ID :
        <input id="txt_id" class="login_inputs" type="text">
        <br>
        PW : 
        <input class="login_inputs" type="password">
        <br>
        <input id="btn_login" type="button" value="login"
        onclick="popId()">
    </form>
</body>
</html>
```

`login.js`

```jsx
/* var vs let vs const */
// var: 원래는 let과 const의 역할을 모두 하고 있었으나, let과 const가 추가되어 잘 사용하지 않는다.

function compareVariable() {
    let num1 = 10;
    const num2 = 30; // 상수로 선언하면 값을 바꿀 수 없다.

    num1 = 20; // 먼저 들어간 값을 빼고 이 값을 넣는다.
    num2 = 10; // 상수이기 때문에 값을 바꿀 수 없다. 오류가 발생한다.
    
    alert('num1: ' + num1); // 20
    alert('num2: ' + num2); // 10
}

/* ID 란에 입력된 값을 팝업창에 띄우기 */
function popId() {
    let userId = document.getElementById('txt_id').value;
    if (!userId) {
        // = userId == ''
        alert('아이디를 입력해주세요.');
        return;
    }
    else {
        alert(userId);
    }
}

/* 나만의 함수 만들고, 버튼 클릭하면 호출하기 */
function myFunction() {
    alert('1');
    alert('2');
    alert('3');
}
```

- `<script>` 태그: HTML 문서에 JavaScript 코드를 포함하거나 외부 JavaScript 파일을 불러오는 데 사용된다.
- `type="text/javascript"`: 이 속성은 스크립트의 MIME 타입을 지정한다. 기본값이 `text/javascript`이기 때문에 명시하지 않아도 동작한다. 최신 HTML에서는 이 속성을 생략해도 무방하다.
- `src="login.js"`: `src` 속성은 외부 JavaScript 파일의 경로를 지정한다. 이 예제에서는 `login.js` 파일을 로드하여, 해당 파일에 정의된 JavaScript 코드를 실행할 수 있게 한다.

# CSS 객관식 문제

`객관식 1`

다음 코드는 CSS가 적용되지 않습니다. 오류가 나는 코드는 어느 부분인가요?

```html
<style>
    .login_inputs {
        font-size: 25px;
     }
</style>
```

- [ ]  `.login_inputs`
- [ ]  `id=”login_inputs”`
- [x]  `type=”text”`
- [ ]  `font-size: 25px`

<blockquote>
  
🙋‍♀️ 일단 내 환경에서 문제가 제대로 보이질 않았다… (슬랙을 보니 다른 사람들도 마찬가지)
  
<img width="1435" alt="스크린샷 2024-08-21 오후 8 22 30" src="https://github.com/user-attachments/assets/a54d580e-7cab-4f55-837b-272bdc049905">

개발자 도구로 확인해보니, 코드는 다음과 같았다.

```html
<style>
<br>
    .login_inputs {
        font-size: 25px;
     }
</style>
```

문제는 이것만으로는 문제를 풀 수 없다는 것이다… 정답 또한 문제 의도를 생각했을 때, 1번 또는 2번(클래스 선택자와 아이디 선택자)이 정답이 되는 것이 맞는 것 같다.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>LOGIN</title>
    <style>
        /*클래스 선택자*/
        .login_inputs {
            font-size: 25px;
        }
    </style>
</head>
<body>
    <h1>Login</h1>
    <form>
        <input id="login_inputs" type="text">
    </form>
</body>
</html>
```

원코드는 이렇고, 답은 2번이 아니었을까 싶다.

</blockquote>

`객관식 2`

다음 중 CSS 외부 스타일시트를 HTML 문서에 연결하는 올바른 방법을 고르시오.

- [ ]  `<style src="styles.css"></style>`
- [x]  `<link rel="stylesheet" href="styles.css">`
- [ ]  `<css href="styles.css"></css>`
- [ ]  `<link src="styles.css"></link>`

`객관식 3`

다음 중 CSS 내부 스타일시트를 HTML 문서에 연결하는 올바른 방법을 고르시오.

- [ ]  `<style href="styles.css"></style>`
- [ ]  `<link rel="stylesheet">body { background-color: blue; }</link>`
- [x]  `<style>body { background-color: blue; }</style>`
- [ ]  `<css>body { background-color: blue; }</css>`

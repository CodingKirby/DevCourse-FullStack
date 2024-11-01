import React from 'react';
import logo from './logo.svg';
import './App.css';

// JSX를 사용한 코드
function App() {
  // 변수 선언
  let name = '리액트';
  
  // style 객체 선언
  const style = {
    backgroundColor: '#61dafb',
    color: '#282c34',
    fontSize: '2rem',
    fontWeight: 'bold',
    borderRadius: 16,
    padding: 16
  };

  return (
    <div className="container">
      {/* 주석 작성 방법 */}
      {/*
        작성자: 코딩커비
        작성일: 2024년 10월 30일
        내용: 기능에 대한 내용 
      */}
      <header className="hello">
        <h1>Hello, {
        name === '리액트' ? ('YES') : ('NO')
        }!!</h1>

        {/* 인라인 스타일링: JSX에서는 style을 객체 형태로 작성 */}
        <p style={{
          backgroundColor: '#61dafb',
          color: '#282c34',
          fontSize: '2rem',
          fontWeight: 'bold',
          borderRadius: 16,
          padding: 16
        }}>안녕하세요.</p>
        <p style={style}>{name}</p>

        {/* self-closing tag */}
        <br />
        <p>반갑습니다.</p>
      </header>
    </div>
    // <div></div> // 오류 발생: JSX는 하나의 최상위 부모 태그로 감싸져 있어야 함
  );
}

// JSX를 사용하지 않고 React.createElement를 사용한 코드
// function App() {
//   return React.createElement('div', {className: 'App'},
//     React.createElement('header', {className: 'App-header'},
//       React.createElement('h1', null, 'Hello, 리액트!'),
//       React.createElement('p', null, '반갑습니다.')
//     )
//   );
// }

// undefined 처리
// function App() {
//   const port = undefined;
  
//   return (
//     <div>
//       {
//         port || <h1>포트가 없습니다.</h1>
//       }
//     </div>
//   );
// }

export default App;

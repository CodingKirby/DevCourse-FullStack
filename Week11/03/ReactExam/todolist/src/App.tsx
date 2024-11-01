import React from 'react';
import logo from './logo.svg';
import './App.css';

// JSX를 사용한 코드
function App() {
  let name = '리액트';
  const stlye = {
    // css 문법과는 다르게 camelCase를 사용한다. = background-color가 허용되지 않는다.
    
  }

  return (
    <div style={
      {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: '20px'
      }
    }>
      <header className="hello">
        <h1>Hello, {
        name === '리액트' ? (<h1>YES</h1>) : (<h1>NO</h1>)
        }!!</h1>
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

export default App;

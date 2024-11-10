import './App.css'
import { appContainer, board, buttons } from './App.css'

function App() {
  return (
    <div className={ appContainer }>
        <div className={board}>
        
        </div>
        <div className={buttons}>
          <button>
            이 게시판 삭제하기
          </button>
          <button>
            게시판 추가하기
          </button>
        </div>
    </div>
  )
}

export default App
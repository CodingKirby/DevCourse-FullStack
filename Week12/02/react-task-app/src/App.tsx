import { useState } from 'react'
import './App.css.ts'
import { appContainer, board, buttons } from './App.css'
import BoardList from './components/BoardList/BoardList'
import ListsContainer from './components/ListsContainer/ListsContainer.tsx'
import { useTypedSelector } from './hooks/redux.ts'

function App() {
  const [activeBoardId, setActiveBoardId] = useState('board-0');
  const boards = useTypedSelector(state => state.boards.boardArray);
  const getActiveBoard = boards.filter(board => board.boardId === activeBoardId)[0];
  const lists = getActiveBoard.lists;

  return (
    <div className={ appContainer }>
        <BoardList
          activeBoardId={activeBoardId}
          setActiveBoardId={setActiveBoardId}
        />
        <div className={board}>
          <ListsContainer
          boardId={getActiveBoard.boardId}
          lists={lists}
          />
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
  );
}

export default App

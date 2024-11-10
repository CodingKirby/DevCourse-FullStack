import React, { FC } from 'react'
import { FiCheck } from 'react-icons/fi';
import { icon, input, sideForm } from './SideForm.css';
import { useTypedDispatch } from '../../../hooks/redux';
import { v4 as uuidv4 } from 'uuid';
import { addBoard } from '../../../store/slicer/boardSlicer';
import { addLog } from '../../../store/slicer/loggerSlicer';

type TSideFormProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideForm: FC<TSideFormProps> = ({
  // inputRef,
  setIsFormOpen
}) => {
  const [inputText, setInputText] = React.useState('');
  const disptch = useTypedDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }

  const handleOnBlur = () => {
    setIsFormOpen(false);
  }

  const handleClick = () => {
    if (inputText){
      disptch(
        addBoard({
          board: {
            boardId: uuidv4(),
            boardName: inputText,
            lists: []
          }
        })
      );
    }

    disptch(addLog({
      logId: uuidv4(),
      logMessage: `게시판 등록: ${inputText}`,
      logAuthor: 'User',
      logTimestamp: String(Date.now()),
    }));
  }

  return (
    <div className={sideForm}>
      <input
        // ref={inputRef}
        autoFocus
        className={input}
        type="text"
        placeholder='새로운 게시판 등록하기'
        value={inputText}
        onChange={handleChange}
        onBlur={handleOnBlur}
      />
      <FiCheck className={icon} onMouseDown={handleClick} />
      {/*
      이벤트 순서: onBlur -> onMouseDown -> onMouseUp -> onClick
      */}
    </div>
  );
}

export default SideForm
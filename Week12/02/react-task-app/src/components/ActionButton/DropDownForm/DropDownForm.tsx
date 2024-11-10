import React, { ChangeEvent, FC, useState } from 'react'
import { FiX } from 'react-icons/fi';
import { v4 } from 'uuid';
import { useTypedDispatch } from '../../../hooks/redux';
import { addList, addTask } from '../../../store/slicer/boardSlicer';
import { addLog } from '../../../store/slicer/loggerSlicer';
import { listForm, taskForm, input, buttons, button, close } from './DropDownForm.css';

type TDropDownFormProps = {
  setIsFormOpen: (value: boolean) => void;
  list?: boolean;
  boardId: string;
  listId: string;
}

const DropDownForm: FC<TDropDownFormProps> = ({
  setIsFormOpen,
  list,
  boardId,
  listId
}) => {
  const dispatch = useTypedDispatch();
  const [text, setText] = useState('');
  const formPlaceholder = list ? '리스트 제목을 입력하세요' : '일의 제목을 입력하세요';
  const buttonTitle = list ? '리스트 추가하기' : '일 추가하기';

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  }

  const hanldeButtonClick = () => {
    if (text) {
      if (list) {
        dispatch(addList({
          boardId,
          list: {
            listId: v4(),
            listName: text,
            tasks: []
          }
        }));
        dispatch(addLog({
          logId: v4(),
          logMessage: `리스트 추가하기: ${text}`,
          logAuthor: 'User',
          logTimestamp: String(Date.now())
        }));
      }
      else {
        dispatch(addTask({
          boardId,
          listId,
          task: {
            taskId: v4(),
            taskName: text,
            taskDescription: '',
            taskOwner: ''
          }
        }));
        dispatch(addLog({
          logId: v4(),
          logMessage: `일 추가하기: ${text}`,
          logAuthor: 'User',
          logTimestamp: String(Date.now())
        }));
      }
    }
  }

  return (
    <div className={list ? listForm : taskForm}>
      <textarea
        className={input}
        autoFocus
        value={text}
        placeholder={formPlaceholder}
        onChange={handleTextChange}
        onBlur={() => setIsFormOpen(false)}
      />
      <div className={buttons}>
        <button
          className={button}
          onMouseDown={hanldeButtonClick}
        >
        {buttonTitle}
        </button>
        <FiX className={close} />
      </div>
    </div>
  )
}

export default DropDownForm
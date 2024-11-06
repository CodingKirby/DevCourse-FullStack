import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

type TBoardState = {
    modalActive: boolean;
    boardArray: IBoard[];
};

const initialState: TBoardState = { // type도 나중에 추가
    modalActive: false,
    boardArray: [
        {
            boardId: 'board-0',
            boardName: '첫 번째 게시물',
            lists: [
                {
                    listId: 'list-0',
                    listName: 'List 1',
                    tasks: [
                        {
                            taskId: 'task-0',
                            taskName: 'Task 1',
                            taskDescription: 'Task 1 Description',
                            taskOwner: 'Task 1 Owner'
                        },
                        {
                            taskId: 'task-1',
                            taskName: 'Task 2',
                            taskDescription: 'Task 2 Description',
                            taskOwner: 'Task 2 Owner'
                        }
                    ]
                },
                {
                    listId: 'list-1',
                    listName: 'List 2',
                    tasks: [
                        {
                            taskId: 'task-2',
                            taskName: 'Task 3',
                            taskDescription: 'Task 3 Description',
                            taskOwner: 'Task 3 Owner'
                        }
                    ]
                }
            ]
        }
    ]
};

const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        
    }
});

export const boardReducer = boardSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../../types';

type TSetModalDataAction = {
    boardId: string;
    listId: string;
    task: ITask;
}

type TModalState = {
    boardId: string;
    listId: string;
    task: ITask;
}

const initialState: TModalState = {
    boardId: "board-0",
    listId: "list-0",
    task: {
        taskId: "task-0",
        taskName: "Task 1",
        taskDescription: "Task 1 Description",
        taskOwner: "Task 1 Owner",
    }
}

const modalSlice = createSlice({
    name: 'modal',
    initialState, // === initialState: initialState
    reducers: {
        setModalData: (state, {payload}: PayloadAction<TSetModalDataAction>) => {
            state.boardId = payload.boardId;
            state.listId = payload.listId;
            state.task = payload.task;
        }
    },
});

export const { setModalData } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
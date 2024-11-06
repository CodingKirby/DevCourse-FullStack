import { createSlice } from '@reduxjs/toolkit';
import { ITask } from '../../types';

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
        
    },
});

export const modalReducer = modalSlice.reducer;
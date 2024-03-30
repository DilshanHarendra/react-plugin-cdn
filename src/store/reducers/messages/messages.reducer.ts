import { createSlice } from '@reduxjs/toolkit';
import { MessageReducerType } from './types';

const initialState: MessageReducerType = {
    messages: [
        {
            id: 1,
            me: true,
            message: 'hi',
            createAt: '12:06 PM',
        },
        {
            id: 2,
            me: false,
            message: 'hello',
            createAt: '12:06 PM',
        },
    ],
};

const messageSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        reset: () => initialState,
    },
});

export const {} = messageSlice.actions;

export default messageSlice.reducer;

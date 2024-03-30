import { combineReducers } from '@reduxjs/toolkit';
import messages from './messages/messages.reducer';

const rootReducer = combineReducers({
    messages,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

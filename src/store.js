

import {configureStore} from '@reduxjs/toolkit';
import { addToDoReducer } from './reducers/ToDoReducers';



const store= configureStore({
    reducer: addToDoReducer
})

export default store;
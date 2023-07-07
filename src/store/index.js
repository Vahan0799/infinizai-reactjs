import {configureStore} from '@reduxjs/toolkit';
import HeaderSlice from './slices/HeaderSlice';

export default configureStore({
    reducer: {
        header: HeaderSlice
    }
})

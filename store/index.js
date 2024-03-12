import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/category'; // Import reducer từ slice của bạn

const store = configureStore({
    reducer: {
        Category: categoryReducer
    }
});

export default store;

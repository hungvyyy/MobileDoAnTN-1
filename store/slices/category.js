import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import categoryService from '../../services/category';

export const fetchCategory = createAsyncThunk(
    'category/fetchCategory', // Đổi 'users/fetchCategory' thành 'category/fetchCategory'
    async (data, thunkAPI) => {
        const response = await categoryService.getCategory();
        console.log(response.data);
    }
);

const categorySlice = createSlice({
    name: 'category', // Đổi 'Post' thành 'category'
    initialState: {
        category: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            console.log('fetchCategory.fulfilled');
        });
    },
});

export const { } = categorySlice.actions;
export default categorySlice.reducer; 
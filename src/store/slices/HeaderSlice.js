import {createSlice} from '@reduxjs/toolkit';

export const HeaderSlice = createSlice({
    name: 'header',
    initialState: {
        isNavOpen: false,
        isAtTop: true,
        isHeaderSticky: false
    },

    reducers: {
        toggleNav: (state) => {
            state.isNavOpen = !state.isNavOpen;
        },

        atTop: (state, action) => {
            state.isAtTop = action.payload;
        },

        stickHeader: (state, action) => {
            state.isHeaderSticky = action.payload;
        }
    }
})

export const {toggleNav, atTop, stickHeader} = HeaderSlice.actions;

export default HeaderSlice.reducer;
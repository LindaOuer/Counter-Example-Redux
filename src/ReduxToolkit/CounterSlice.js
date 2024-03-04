import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "Counter",
    initialState: { value: 0 },
    reducers: {
        increment: (state, action) => {
            // action { type: "Counter/increment", payload: step }
            state.value += action.payload;
        },
        decrement: (state, action) => {
            state.value -= action.payload;
        },
    },
});

export default counterSlice.reducer;

export const { increment, decrement } = counterSlice.actions;

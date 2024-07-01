import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export const offsetSlice = createSlice({
    name: "offset",
    initialState: 0,
    reducers: {
        setOffset(state, action: PayloadAction<number | undefined>) {
            if(action.payload === undefined) {
                return state;
            }
            return action.payload;
        }
    }
})

export const {setOffset} = offsetSlice.actions; 
export default offsetSlice.reducer;
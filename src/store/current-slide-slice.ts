import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum Slides {
    Favorites = "ИЗБРАННОЕ",
    Actions = "ПРОФИЛЬ АКЦИИ",
    Subscriptions = "ПОДПИСКИ",
    Map = "КАРТА",
    List = "МОЯ ЛЕНТА",
} 

export const currentSlideSlice = createSlice({
    name: "currentSlide",
    initialState: Slides.Actions,
    reducers: {
        setCurrentSlide: (_state, action: PayloadAction<Slides>) => {
            return action.payload;
        }
    }
})

export const {setCurrentSlide} = currentSlideSlice.actions;
export default currentSlideSlice.reducer;
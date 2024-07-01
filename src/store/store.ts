import { configureStore } from '@reduxjs/toolkit'
import currentSlideReducer from './current-slide-slice';
import offsetReducer from './offsetSlice';

export const store = configureStore({
  reducer: {
    currentSlide: currentSlideReducer,
    offset: offsetReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
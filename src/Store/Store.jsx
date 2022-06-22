import {configureStore} from '@reduxjs/toolkit';
import { RemoveSlice } from './RemoveSlice';

export const store = configureStore({reducer: {remove : RemoveSlice.reducer}})


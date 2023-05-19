'use client';
    
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import answersReducer from './features/answers/answersSlice'
import React from "react";
    
const store = configureStore({
    reducer: {
      answers: answersReducer,
    },
  }) 
  
export function Providers({ children }) {
    return (
    <Provider store={store}>
        {children}
    </Provider>
    );
}
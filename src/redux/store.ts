import { configureStore } from '@reduxjs/toolkit'


//! We will not do this
//! This is a global variable so we will avoid this
// const store = configureStore({});
export const makeStore = () => {
  return configureStore({
    reducer: {},
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
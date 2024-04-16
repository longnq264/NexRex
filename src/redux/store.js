import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import authSlice from "./features/auth/authSlice";
// import { postsApi } from "./features/posts/postSlice";

// export const store = () => {
//   return configureStore({
//     reducer: {
//       theme: themeReducer,
//     },
//   });
// };

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authSlice,
  },
});

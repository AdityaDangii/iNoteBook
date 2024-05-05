import { cryptoNewsApi } from "../services/cryptoNewsApi"
import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";

export default configureStore({
  reducer:{
      [cryptoApi.reducerPath]:cryptoApi.reducer,
      [cryptoNewsApi.reducerPath]:cryptoApi.reducer
  },
  middleware: (getDefaultMiddleware) =>(
      getDefaultMiddleware().concat(cryptoApi.middleware),
       getDefaultMiddleware().concat(cryptoNewsApi.middleware))

})
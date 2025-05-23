import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import adminProductsReducer from "./admin/products-slice";
import shopProductsReducer from "./shop/products-slice";
import commonFeatureReducer from "./common-slice";
import brandsReducer from "./admin/brands-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductsReducer,
    shopProducts: shopProductsReducer,
    commonFeature: commonFeatureReducer,
    brands: brandsReducer,
  },
}); 
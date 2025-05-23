import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  brandList: [],
};

export const getBrands = createAsyncThunk(
  "/admin/getBrands",
  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASEURL_FOR_SERVER}/api/admin/brands/get`
    );
    return response.data;
  }
);

export const addBrand = createAsyncThunk(
  "/admin/addBrand",
  async ({ name, image }) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BASEURL_FOR_SERVER}/api/admin/brands/add`,
      { name, image }
    );
    return response.data;
  }
);

export const deleteBrand = createAsyncThunk(
  "/admin/deleteBrand",
  async (id) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_BASEURL_FOR_SERVER}/api/admin/brands/delete/${id}`
    );
    return response.data;
  }
);

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.brandList = action.payload.data;
      })
      .addCase(getBrands.rejected, (state) => {
        state.isLoading = false;
        state.brandList = [];
      });
  },
});

export default brandsSlice.reducer; 
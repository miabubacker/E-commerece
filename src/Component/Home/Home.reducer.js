import { handleActions } from "redux-actions";
import { ACTION_TYPES } from "../Dashboard/Dashboard.constant";
import { produce } from "immer";

const initialState = {
  DashboardProductData: [],
  loading: false,
  productDetails: [],
  addCart: [],
details:[]
};

export default handleActions(
  {
    [ACTION_TYPES.SET_REQUESTED_FEATURES_LOADING]: (state, { data } = {}) =>
      produce(state, (draft) => {
        draft.loading = true;
      }),

    [ACTION_TYPES.SET_REQUESTED_FEATURES]: (state, { data } = {}) =>
      produce(state, (draft) => {
        draft.loading = false;
       data.products.forEach((data)=>{data.count=1})
        draft.DashboardProductData = data.products || [];
         draft.productDetails=data.products
      }),
    [ACTION_TYPES.PRODUCTDETAIL]: (state, { data } = {}) =>
      produce(state, (draft) => {
        draft.productDetails = data || {};
      }),
    [ACTION_TYPES.ADD_TO_CART]: (state, { data } = {}) =>
      produce(state, (draft) => {
        draft.addCart = data || {};
      }),
      [ACTION_TYPES.DELETE_PRODUCT_CART]: (state, { data } = {}) =>
      produce(state, (draft) => {
        draft.addCart = data || {};
      }),
    [ACTION_TYPES.SEARCH]: (state, { data } = {}) =>
      produce(state, (draft) => {
        draft.DashboardProductData = data
      }),
      [ACTION_TYPES.COUNT_TOTAL]: (state, { data }= {}) =>
      produce(state, (draft) => {
        draft.addCart = data
      }),
  
      [ACTION_TYPES.DETAILS]: (state, { data }= {}) =>
      produce(state, (draft) => {
        draft.details = [...state.details,data]
      }),
  },
  initialState
);

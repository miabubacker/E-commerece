
// import { handleActions } from 'redux-actions';
// import { ACTION_TYPES } from './Dashboard.constant';
// import { produce } from 'immer';

// const initialState = {
//   DashboardProductData: [],
//    loading:false,
//    productDetails:{},
// };

// export default handleActions({
//     [ACTION_TYPES.SET_REQUESTED_FEATURES_LOADING]: (state, { data} = {}) =>produce(state, (draft) => {
//         draft.loading =true
//       }),
    
//   [ACTION_TYPES.SET_REQUESTED_FEATURES]: (state, { data} = {}) =>produce(state, (draft) => {
//      data.loading=false;
//     draft.DashboardProductData =data.products ||[];
//   }),
//   [ACTION_TYPES.PRODUCTDETAIL]: (state, { data} = {}) =>produce(state, (draft) => {
//     draft.productDetails =data||{};
//   }),

// }, initialState);

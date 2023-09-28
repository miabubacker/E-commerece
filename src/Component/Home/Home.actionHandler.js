// // import { toaster } from 'tcomponents/organisms/NotificationWrapper';
import { ACTION_TYPES } from '../Dashboard/Dashboard.constant';
import {
  getRequestedFeatures,
} from '../../Api';
import HomeReducer from './Home.reducer';

 export const fetchRequestedFeatures = payload => (dispatch) => {
    dispatch({ type: ACTION_TYPES.SET_REQUESTED_FEATURES_LOADING, data: true });
  getRequestedFeatures().then((data) => {
    dispatch({ type: ACTION_TYPES.SET_REQUESTED_FEATURES, data });
    dispatch({ type: ACTION_TYPES.SET_REQUESTED_FEATURES_LOADING, data: false });
  }, () => {
  });
       
};
//  export const productDetailsView=(payload)=>(dispatch)=>{
//   dispatch({ type: ACTION_TYPES.PRODUCTDETAIL, data: payload });
//  }
 export const addtoCart=(payload)=>(dispatch)=>{
  dispatch({ type: ACTION_TYPES.ADD_TO_CART, data: payload });
 }
 export const deleteProduct=(payload)=>(dispatch)=>{
  dispatch({ type: ACTION_TYPES.DELETE_PRODUCT_CART, data: payload });
 }
 export const searchProduct=(payload)=>(dispatch,getState)=>{
   const {HomeReducer:{DashboardProductData}   }=getState()
  dispatch({ type: ACTION_TYPES.SEARCH, data: payload });
 }
  
 export const CountAndTotal=(payload)=>(dispatch,getState)=>{
  dispatch({ type: ACTION_TYPES.COUNT_TOTAL, data: payload });
 }
  
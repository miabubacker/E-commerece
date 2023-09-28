// // // import { toaster } from 'tcomponents/organisms/NotificationWrapper';
// import { ACTION_TYPES } from './Dashboard.constant';
// import {
//   getRequestedFeatures,
// } from '../../Api';
// // // import Utility from '../../../utils/Utility';

// // // const getSectionName = () => {
// // //   const { section } = Utility.getQueryParamsAsObject();
// // //   return section;
// // // };

//  export const fetchRequestedFeatures = payload => (dispatch) => {
//     dispatch({ type: ACTION_TYPES.SET_REQUESTED_FEATURES_LOADING, data: true });
//   getRequestedFeatures().then((data) => {
//     dispatch({ type: ACTION_TYPES.SET_REQUESTED_FEATURES, data });
//     dispatch({ type: ACTION_TYPES.SET_REQUESTED_FEATURES_LOADING, data: false });
//   }, () => {
//     // dispatch({ type: ACTION_TYPES.SET_REQUESTED_FEATURES_LOADING, data: false });
//     // toaster('error', 'Error fetching requested features');
//   });
       
// };
// //  export const productDetailsView=(payload)=>(dispatch)=>{
// //   dispatch({ type: ACTION_TYPES.PRODUCTDETAIL, data: payload });
// //  }

// // // export const editFeatureRequest = ({ payload, feature_id, popUpType }, successCallback) => (dispatch) => {
// // //   dispatch({ type: ACTION_TYPES.SET_REQUESTED_FEATURES_LOADING, data: true });
// // //   editFeature(payload, feature_id).then(({ msg, status }) => {
// // //     if (status === 'Not Ok') {
// // //       if (!msg) toaster('error', 'Error Occurred. Please try again later');
// // //       else toaster('info', msg);
// // //       return;
// // //     }
// // //     if (popUpType) toaster('success', `Feature marked as ${popUpType} successfully`);
// // //     else toaster('success', 'Feature edited successfully');
// // //     successCallback();
// // //   }, () => {
// // //     dispatch({ type: ACTION_TYPES.SET_REQUESTED_FEATURES_LOADING, data: false });
// // //     if (popUpType) toaster('error', `Unable to mark feature as ${popUpType}`);
// // //     else toaster('error', 'Error Occurred while editing a feature request');
// // //   });
// // // };

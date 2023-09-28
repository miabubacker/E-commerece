import { combineReducers } from 'redux';
import DasboardReducer from '../Component/Dashboard/Dashboard.reducer';
 import HomeReducer from '../Component/Home/Home.reducer';
// import ticketDetailsReducer from '../pages/AccountManagementStatus/TicketsContainer/TicketsContainer.reducer';
export const defaultReducers = {
  DasboardReducer,
  HomeReducer
};

export const rootReducer = combineReducers(defaultReducers);

export default {
  defaultReducers,
  rootReducer,
};

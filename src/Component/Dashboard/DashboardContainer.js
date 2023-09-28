// import {connect} from 'react-redux';
// import { defaultMemoize } from 'reselect';
// import { bindActionCreators } from 'redux';
// import * as TicketsActions from './Dashboard.actionHandler';
// import _get from 'lodash/get';
// import Dashboard from './Dashboard';
// import { compose } from 'recompose';
// import Home from '../Home';
// import App from '../../App';

// const ticketDetailsActions = defaultMemoize(dispatch => bindActionCreators({ ...TicketsActions }, dispatch));

// const mapDispatchToProps = dispatch => ({
//     ticketsActions: ticketDetailsActions(dispatch),
// });

// const mapStateToProps = ({
//     DasboardReducer,
// }) => ({
//     DashboardProductData: _get(DasboardReducer, 'DashboardProductData'),
//     loading: _get(DasboardReducer, 'loading'),
//     productDetails: _get(DasboardReducer, 'productDetails')

// //   totalRequestedFeaures: _get(ticketsReducer, 'totalRequestedFeaures'),
// //   featureDropdownOptions: _get(ticketsReducer, 'featureDropdownOptions'),
// //   dealerUserOptions: _get(ticketsReducer, 'dealerUserOptions'),
// //   loadingRequestedFeatures: _get(ticketsReducer, 'loadingRequestedFeatures'),
// //   amDealersOption: _get(ticketsReducer, 'amDealersOption'),
// //   allUsersList: _get(usersReducer, 'allUsersList'),
// });

// export default compose(
//   connect(mapStateToProps, mapDispatchToProps))(Dashboard);

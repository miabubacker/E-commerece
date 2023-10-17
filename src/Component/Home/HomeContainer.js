import {connect} from 'react-redux';
import { defaultMemoize } from 'reselect';
import { bindActionCreators } from 'redux';
import * as TicketsActions from './Home.actionHandler';
import _get from 'lodash/get';
import Home from './Home';
import { compose } from 'recompose';



const ticketDetailsActions = defaultMemoize(dispatch => bindActionCreators({ ...TicketsActions }, dispatch));

const mapDispatchToProps = dispatch => ({
    ticketsActions: ticketDetailsActions(dispatch),
});

const mapStateToProps = ({
    HomeReducer,
}) => ({
    DashboardProductData: _get(HomeReducer, 'DashboardProductData'),
    loading: _get(HomeReducer, 'loading'),
    productDetails: _get(HomeReducer, 'productDetails'),
    addCart:_get(HomeReducer, 'addCart'),
    details:_get(HomeReducer,'details')
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps))(Home);

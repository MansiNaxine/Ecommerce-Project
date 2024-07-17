import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import {thunk} from 'redux-thunk'
import { authReducer } from './Auth/Reducer'
import customerProductReducer from './Product/Reducer';
import { cartReducer } from './Cart/Reducer';
import { orderReducer } from './Order/Reducer';
import adminOrderReducer from './Admin/Order/Reducer';
import ReviewReducer from './Review/Reducer';

const rootReducers=combineReducers(
    {
        // Customer
        auth:authReducer,
        customersProduct:customerProductReducer,
        cart:cartReducer,
        order:orderReducer,
        review:ReviewReducer,

        // Admin
        adminOrder:adminOrderReducer

    }
);

export const store=legacy_createStore(rootReducers,applyMiddleware(thunk))

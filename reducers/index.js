// import {combineReducers} from 'redux';

// import AdsReducer from './AdsReducer';

// const rootReducer = combineReducers({
// 	adsList: AdsReducer,
// })

// export default rootReducer;
import {combineReducers} from 'redux';
import MainReducer from './AdsReducer';
const rootReducer =combineReducers({MainReducer});
export default rootReducer;
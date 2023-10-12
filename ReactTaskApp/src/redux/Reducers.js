import { combineReducers } from "redux";
import DashboardReducer from "../screens/Dashboard/reducer";


const appReducer = combineReducers({
    dashboard: DashboardReducer,

});

const rootReducer = (state, action) => {
    return appReducer(state, action)
};

export default rootReducer;
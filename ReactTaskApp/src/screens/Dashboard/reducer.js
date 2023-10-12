import { INIT_CHINPZ, SET_CHINPZ } from './action';

const initialState = {
    chinpzList: []
}

const DashboardReducer = (state = initialState, action) => {

    switch (action.type) {
        case INIT_CHINPZ:
            return {
                ...state,
                chinpzList: []
            }
        case SET_CHINPZ:
            return {
                ...state,
                chinpzList: action.payload
            }
        default:
            return state

    }
}

export default DashboardReducer

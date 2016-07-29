import { LOAD_DATE_RANKING_TYPE, LOAD_MARK_RANKING_TYPE } from '../action/rankings';

const DEFAULT_STATE = {
    rankings: {
        date: [],
        mark: []
    }
};

const rankingsReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case LOAD_DATE_RANKING_TYPE:
            return { ...state, rankings: { ...state.rankings, date: action.payload }};
        case LOAD_MARK_RANKING_TYPE:
            return { ...state, rankings: { ...state.rankings, mark: action.payload }};
        default:
            return state;
    }
};

export default rankingsReducer;

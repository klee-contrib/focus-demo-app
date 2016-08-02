import {loadDateRankingTypes, loadMarkRankingTypes} from '../action/rankings';

const DEFAULT_STATE = {
    date: [],
    mark: []
};

//TODO : Ajouter les cas de chargement et d'erreur.

const rankingsReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case loadDateRankingTypes.RESPONSE_LOAD_RANKING_DATE:
            return { ...state, date: action.payload };
        case loadMarkRankingTypes.RESPONSE_LOAD_RANKING_MARK:
            return { ...state, mark: action.payload };
        default:
            return state;
    }
};

export default rankingsReducer;

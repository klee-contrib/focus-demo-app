import React, {Component} from 'react';
import DateRanking from './date';
import MarkRanking from './mark';
import {loadDateRankingAction, loadMarkRankingAction} from '../../../action/rankings';
import {compose} from 'redux';
import {connect as connectToStore} from 'react-redux';
import { rankingSelector } from '../../../reducer';



class Rankings extends Component {
    componentWillMount() {
        const { loadDateRanking, loadMarkRanking } = this.props;
        loadDateRanking();
        loadMarkRanking();
    }

    render() {
        const { date, mark } = this.props;
        return (
            <div>
                <DateRanking dateRanking={date} />
                <MarkRanking markRanking={mark} />
            </div>
        );
    }
}
Rankings.displayName = 'Rankings';



export default connectToStore(
    rankingSelector,
    dispatch => ({
        loadDateRanking: () => dispatch(loadDateRankingAction()),
        loadMarkRanking: () => dispatch(loadMarkRankingAction())
    })
)(Rankings);

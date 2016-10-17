import React, {Component} from 'react';
import MovieCardList from '../../movie/components/movie-card-list';
import i18next from 'i18next';

const DateRanking = ({dateRanking}) => (
    <div>
        <h1>{i18next.t('view.movie.rankings.latest.title')}</h1>
        <MovieCardList movies={dateRanking} />
    </div>
);

export default DateRanking;

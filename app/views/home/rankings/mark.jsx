import React, {Component} from 'react';
import MovieCardList from '../../movie/components/movie-card-list';
import i18next from 'i18next';

const MarkRanking = ({markRanking}) => (
    <div>
        <h1>{i18next.t('view.movie.rankings.best.title')}</h1>
        <MovieCardList movies={markRanking} />
    </div>
);

export default MarkRanking;

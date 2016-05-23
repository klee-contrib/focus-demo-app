import application from 'focus-core/application';
import {getRouterFunction} from 'focus-core/router/router';
import MovieDetailView from '../views/movie/detail';

export default getRouterFunction().extend({
    log: true,
    beforeRoute() {
        application.changeRoute('movies');
    },
    routes: {
        'movies(/:id)': 'movies'
    },
    movies(id) {
        this._pageContent(MovieDetailView, {props: {id : +id}});
    }
});

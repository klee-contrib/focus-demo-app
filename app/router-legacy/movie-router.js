import application from 'focus-core/application';
import router from 'focus-core/router';
import MovieDetailView from '../views/movie/detail';

export default router.extend({
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

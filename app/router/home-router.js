import application from 'focus-core/application';
import router from 'focus-core/router';
import HomeView from '../views/home';
import ExampleView from '../views/example';
export default router.extend({
    log: true,
    beforeRoute() {
        application.changeRoute('home');
    },
    routes: {
        '': 'home',
        home: 'home',
        example: 'example'
    },
    home() {
        this._pageContent(HomeView);
    },
    example(){
      this._pageContent(ExampleView)
    }
});

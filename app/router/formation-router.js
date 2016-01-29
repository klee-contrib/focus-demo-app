import React from 'react';
import application from 'focus-core/application';
import router from 'focus-core/router';

function MonComposant(props){
  return <div>Test</div>;
}

const MonComposant2 = React.createClass({
  render(){
    const {id, name} = this.props;
    return <h2>Test2 mon id {id} et mon nom: {name}</h2>;
  }
});

export default router.extend({
    log: true,
    beforeRoute() {
        application.changeRoute('demo');
    },
    routes: {
        '': 'demoRouteHandler',
        'demo': 'demoRouteHandler',
        'demo/:id': 'detailDemoHandler'
    },
    demoRouteHandler() {
        console.log('ROUTER: DEMO');
        //Page content vient du router
        this._pageContent(MonComposant2);
    },
    detailDemoHandler(id){
        this._pageContent(MonComposant2, {props: {id: id, name: 'Pierre'}});
        // <MonComposant2  id={id}/>
    }
});

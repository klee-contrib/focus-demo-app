import application from 'focus-core/application';
import {getRouterFunction} from 'focus-core/router/router';
import MasterdataTemplate from '../views/masterdata';
import MasterdataCountries from '../views/masterdata/country';

export default getRouterFunction().extend({
    log: true,
    beforeRoute() {
        application.changeRoute('admin');
    },
    routes: {
        'admin/masterdata(/:reference)': 'masterdata'
    },
    masterdata(reference) {
        let ReferenceComponent;
        switch (reference) {
            case 'countries':
                ReferenceComponent = MasterdataCountries;
                break;
            default:
                ReferenceComponent = undefined;
                //throw new Error(`[ROUTER] unknown route 'admin/masterdata/${reference}'...`);
        }
        this._pageContent(MasterdataTemplate, {props: {reference, ReferenceComponent}});
    }
});

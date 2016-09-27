import React, {PropTypes, Component} from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as MetadataProvider } from 'focus-graph/behaviours/metadata';
import { Provider as FieldHelpersProvider } from 'focus-graph/behaviours/field';
import { Provider as MasterdataProvider } from 'focus-graph/behaviours/master-data';
import { Provider as SearchProvider } from 'focus-search/behaviours/search';

import routes from './router/routes';
import definitions from './config/entity-definitions';
import domains from './config/domains';
import masterdatas from './config/master-datas'

//to make hot reload work, we have to write Application as a Component.
class Application extends Component {
    render() {
        const {history, store} = this.props;
        return (
            <StoreProvider store={store}>
                <MetadataProvider definitions={definitions} domains={domains}>
                    <FieldHelpersProvider>
                        <MasterdataProvider configuration={masterdatas}>
                            <SearchProvider store={store} searchMetadata={{getListMetadata : _getListMetadata,
                                    scopes:[{value: 'all', label:'All', selected:false}, {value: 'scope', label: 'Scope 01', selected:true}, {value: 'scope2', label:'Scope 02', selected:false}]
                                }}>
                                <Router history={history} routes={routes} />
                            </SearchProvider>
                        </MasterdataProvider>
                    </FieldHelpersProvider>
                </MetadataProvider>
            </StoreProvider>
        );
    }
}

//Application.propTypes = propTypes;
Application.displayName = 'Application';
Application.propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};
export default Application;


const _getListMetadata = (contentType, listData) => {
    switch (contentType) {
        case 'DonDiegoType':
            return {
                LineComponent: props => {
                    const color = props.isSelected ? 'orange' : 'blue'
                    return (
                        <div>
                            <div>Line DonDiegoType {JSON.stringify(props)}</div>
                        </div>
                    )
                },
                actionsLine: [
                    {label: 'Yo', icon: 'print', action: () => {console.log('action')}},
                    {label: 'La', icon: 'print', action: () => {console.log('action')}}

                ],
                sortList : [
                    'ouuuuaaa',
                    'trrropo',
                    'lalal'
                ],
                groupList: [
                    'lala',
                    'lulu',
                    'lolo'
                ]
            };
            break;
        case 'DonRicardoType':
            return {
                LineComponent: props => <div>Line DonRicardoType {JSON.stringify(props)}</div>,
                sortList : [
                    'lala',
                    'lolo',
                    'lulu'
                ],

                groupList: [
                    'lala',
                    'lulu'
                ]
            };
            break;
        default:
            return {
                LineComponent: props => <div>Bien le bonsoir</div>,
                sortList : [],
                groupList: []
            };
    }
};

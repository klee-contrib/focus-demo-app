import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from '../views/home';
import MasterdataTemplate from '../views/masterdata';
import MasterdataCountries from '../views/masterdata/country';
import ErorView from '../views/test/error';
import MovieDetailView from '../views/movie/detail';

// Gotta do a function to get the case as the first router does
const MasterdataTemplateCountry = React.createClass({
    render() {
        return(
            <div>
                <MasterdataTemplate reference='countries' ReferenceComponent={MasterdataCountries}/>
            </div>
        );
    }
});

const MasterdataTemplateMovie = React.createClass({
    render() {
        return(
            <div>
                <MasterdataTemplate reference='movietype' />
            </div>
        );
    }
});

const MasterdataTemplateGender = React.createClass({
    render() {
        return(
            <div>
                <MasterdataTemplate reference='gender' />
            </div>
        );
    }
});

// const MasterdataTemplateRender = React.createClass({
//     render() {
//         const path = window.location.pathname;
//         let ref;
//         let ReferenceComponent;
//
//         switch (path) {
//             case '/admin/masterdata/countries':
//                 ref = 'countries';
//                 ReferenceComponent = MasterdataCountries;
//                 break;
//             case '/admin/masterdata/movietype':
//                 ref = 'movietype';
//                 ReferenceComponent = undefined;
//                 break;
//             case '/admin/masterdata/gender':
//                 ref = 'gender';
//                 ReferenceComponent = undefined;
//                 break;
//             default:
//                 ReferenceComponent = undefined;
//         };
//
//         return(
//             <div>
//                 <MasterdataTemplate reference={ref} ReferenceComponent={ReferenceComponent}/>
//             </div>
//         );
//     }
// });

module.exports = (
    <div>
        <Route path='/' component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path='/admin/masterdata' component={MasterdataTemplate}/>
        <Route path='/admin/masterdata/countries' component={MasterdataTemplateCountry}/>
        <Route path='/admin/masterdata/movietype' component={MasterdataTemplateMovie}/>
        <Route path='/admin/masterdata/gender' component={MasterdataTemplateGender}/>
        <Route path='movies/:id' component={MovieDetailView}/>
    </div>
);

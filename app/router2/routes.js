import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from '../views/home';
import MasterdataTemplate from '../views/masterdata';
import MasterdataCountries from '../views/masterdata/country';


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

module.exports = (
    <div>
        <Route path='/' component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path='/admin/masterdata' component={MasterdataTemplate}/>
        <Route path='/admin/masterdata/countries' component={MasterdataTemplateCountry}/>
        <Route path='/admin/masterdata/movietype' component={MasterdataTemplateMovie}/>
        <Route path='/admin/masterdata/gender' component={MasterdataTemplateGender}/>
    </div>
);

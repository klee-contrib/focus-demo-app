import React from 'react';
import PersonDetailView from '../views/person/detail';

const route = [
    {
        path: 'persons/:id',
        component: (props) => (<PersonDetailView id={parseInt(props.params.id)} {...props}/>)
    }
];

export default route;

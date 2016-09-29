import React, {PropTypes} from 'react';
import defaultMetadatas from './default-metadatas';
import movieMetadatas from './movie-metadatas';
import personMetadatas from './person-metadatas';
import scopes from './scopes';



const listMetadata = (listType, list) => {
    switch (listType) {
        case 'MovieIndex':
            return movieMetadatas;
        case 'PersonIndex':
            return personMetadatas;
        default:
            return defaultMetadatas;
    };
};


export default {
    getListMetadata: listMetadata,
    scopes: scopes
};

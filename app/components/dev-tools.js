import React from 'react';
import CoreStore from 'focus-core/store/CoreStore';
import FocusDevTools from 'focus-devtools';
const DevTools = props => {
    return (
      <FocusDevTools
        isPanel={true} /* If you want to embed the component in a DOck */
        toggleVisibilityKey='ctrl-m'  /*How do you want to display the dev tool*/
        routes={window.Backbone.history.handlers}  /* A list of all your routes (`focus-core/router/history`)*/
        getStores={() => CoreStore.prototype._instances} /* A list of all your stores (`focus-core/CoreStore._instances`)*/
        isDebugDevTools={false} /* If you want to display the dev tools props (not usefull for the projects)*/
        />
    );
}

DevTools.displayName = 'DevTools';

export default DevTools;

import React, {Component} from 'react';

const HelpCenter = () => {
    return(
        <div data-focus='help-center'>
            <iframe data-focus='help-iframe' height='85%' width='100%' src='http://localhost:1234/extension.html' style={{border: 'none'}}>
            </iframe>
        </div>
    );
};

export default HelpCenter;
import React, {Component} from 'react';
// Comments
import FocusComments from 'focus-comments';
// Components
import Panel from 'focus-components/components/panel';

import ComponentBaseBehaviour from 'focus-components/behaviours/component-base';

const texts = {
    placeholder: 'components.comments.placeholder',
    send: 'components.comments.send',
    cancel: 'components.comments.cancel',
    title: 'components.comments.title',
    singleComment: 'components.comments.singleComment',
    comments: 'components.comments.multipleComments',
    lastUpdate: 'components.comments.lastUpdate',
    loading: 'components.comments.loading',
    empty: 'components.comments.empty'
}

@ComponentBaseBehaviour
export class Comments extends Component {

    translateTexts() {
        let data = {};
        let textsKeys = Object.keys(texts), textsValues = Object.values(texts);
        for(let i = 0; i < textsKeys.length; i++) {
            data[textsKeys[i]] = this.i18n(textsValues[i]);
        }
        return data;
    }

    render() {
        console.log('HEY', this);
        return(
            <Panel title='components.comments.title'>
                <FocusComments showAvatar={true} apiRootUrl={`http://localhost:9999/x/comment`} texts={this.translateTexts()} concept='fakeConcept' conceptId='fakeConceptId' currentUserId='me'/>
            </Panel>
        );
    }
}

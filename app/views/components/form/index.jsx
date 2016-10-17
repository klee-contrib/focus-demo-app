import React, {PropTypes} from 'react';
import { render } from 'react-dom';

const propTypes = {
    editing: PropTypes.bool.isRequired,
    loading: PropTypes.bool
}

const defaultProps = {
    editing: false,
    loading: false
}

const consultFormComponent = (children, loading) => (
     <div data-focus='form' data-mode='consult' data-loading={loading}>{children}</div>
);

const editFormComponent = (children, loading, otherProps) => (
    <form className='form-horizontal' data-focus='form' data-mode='edit' data-loading={loading} noValidate>
        <fieldset>
            {children}
        </fieldset>
    </form>
);

const formComponent = ({children, editing, loading, onSubmit, ...otherProps}) => editing ? editFormComponent(children, loading, onSubmit, otherProps) : consultFormComponent(children, loading);

formComponent.displayName = 'Form';
formComponent.propTypes = propTypes;
formComponent.defaultProps = defaultProps;
export default formComponent;

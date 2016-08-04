import React, {PropTypes, PureComponent} from 'react';
import Translation from 'focus-components/behaviours/translation';
import includes from 'lodash/includes';
import uniqueId from 'lodash/uniqueId';

const defaultProps = {
    buttonsPosition: 'top'
};

const propTypes = {
    Buttons: PropTypes.element,
    buttonsPosition: PropTypes.oneOf(['both', 'bottom', 'top']).isRequired,
    title: PropTypes.string
};

/**
* Panel.
*/
@Translation
class Panel extends PureComponent {
    constructor(props) {
        super(props);
        this.spyId = uniqueId('panel2_');
    }

    /**
    * Render the a block container and the cild content of the block.
    * @return {DOM} React DOM element
    */
    render() {
        const {Buttons, buttonsPosition, children, title, ...otherProps} = this.props;
        const shouldDisplayActionsTop = Buttons && includes(['both', 'top'], buttonsPosition);
        const shouldDisplayActionsBottom = Buttons && includes(['both', 'bottom'], buttonsPosition);
        return (
            <div className='mdl-card mdl-card--border mdl-shadow--4dp' data-spy={this.spyId} data-focus='panel' {...otherProps}>
                <div className='mdl-card__title mdl-card--border' data-focus='panel-title'>
                    {title &&
                        <h3 data-spy-title>{this.i18n(title)}</h3>
                    }
                    {shouldDisplayActionsTop &&
                        <div className='actions'>{Buttons}</div>
                    }
                </div>
                <div className='mdl-card__supporting-text' data-focus='panel-content'>
                    {children}
                </div>
                {shouldDisplayActionsBottom &&
                    <div className='mdl-card__actions mdl-card--border' data-focus='panel-actions'>
                        <div className='actions'>{Buttons}</div>
                    </div>
                }
            </div>
        );
    }
}

//Static props.
Panel.displayName = 'Panel';
Panel.defaultProps = defaultProps;
Panel.propTypes = propTypes;

export default Panel;

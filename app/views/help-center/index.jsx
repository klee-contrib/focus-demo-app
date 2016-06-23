import React, {Component, PropTypes} from 'react';
import './help-center.scss';
import {translate} from 'focus-core/translation';

export default class HelpCenter extends Component {

    state = {
        xPos: 0,
        yPos: 0,
        xElem: 0,
        yElem: 0,
        selected: null
    };

    static propTypes = {
        onCloseClick: PropTypes.func.isRequired,
        onNewTabClick: PropTypes.func
    };

    dragInit(e) {
        this.refs.helpFrame.style.boxShadow = '0 24px 28px rgba(0,0,0,0.25), 0 15px 15px rgba(0,0,0,0.22)';
        e.preventDefault();
        document.onmousemove = this.moveElem.bind(this);
        document.onmouseup = this.destroy.bind(this);
        const {selected, xPos, yPos, xElem, yElem} = this.state;
        this.setState(
            {
                xPos: e.pageX,
                yPos: e.pageY,
                selected: this.refs.helpFrame,
                xElem: e.pageX - this.refs.helpFrame.offsetLeft,
                yElem: e.pageY - this.refs.helpFrame.offsetTop
            }
        );
        return false;
    }

    moveElem(e) {
        const {xPos, yPos, xElem, yElem, selected} = this.state;
        this.setState(
            {
                xPos: document.all ? window.e.clientX : e.pageX,
                yPos: document.all ? window.e.clientY : e.pageY
            }
        )

        if (selected !== null) {
            selected.style.left = (xPos - xElem) + 'px';
            selected.style.top = (yPos - yElem) + 'px';
            const diff = window.innerWidth - 340;
            const left = xPos - xElem;
            selected.style.right = (diff - left) + 'px';
        }
    }

    destroy(e) {
        this.refs.helpFrame.style.boxShadow = '0 6px 6px rgba(0,0,0,0.23)';
        e.preventDefault();
        document.onmousemove = null;
        document.onmouseup = null;
        this.setState({ selected: null });
    }

    newTabIconClickHandler() {
        window.open('http://localhost:9999');
    }

    render() {
        const {xPos, yPos, xElem, yElem, selected} = this.state;
        const {onNewTabClick, onCloseClick} = this.props;
        return (
            <div  
                id='helpFrame'
                onMouseDown={this.dragInit.bind(this)}
                ref='helpFrame'
            >
                <span className='help-center-title'>{translate('view.help-center.title')}</span>
                <div className='mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect' id='closeIcon' onClick={onCloseClick}>
                    <i className='material-icons'>close</i>
                </div><br/>
                <iframe  
                    frameBorder={0} 
                    height='530'
                    src='http://localhost:1234/extension.html'
                    width='330'
                >
                </iframe>
            </div>
        );
    }
}

HelpCenter.displayName = 'HelpCenter';
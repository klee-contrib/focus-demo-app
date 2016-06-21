import React, {Component, PropTypes} from 'react';
import './help-center.scss';

export default class HelpeCenter extends Component {

    state = {
        xPos: 0,
        yPos: 0,
        xElem: 0,
        yElem: 0,
        selected: null
    }

    dragInit(e) {
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
            selected.style.left = (xPos/* - xElem*/) + 'px';
            selected.style.top = (yPos/* - yElem*/) + 'px';
        }
    }

    destroy(e) {
        e.preventDefault();
        document.onmousemove = null;
        document.onmouseup = null;
        this.setState({ selected: null });
    }

    render() {
        const {xPos, yPos, xElem, yElem, selected} = this.state;
        return (
            <div id='helpCenter'>
                <iframe ref='helpFrame' frameBorder={0} id='helpFrame' height='500' width='300' src='http://localhost:1234/extension.html' onMouseDown={this.dragInit.bind(this)} >
                </iframe>
            </div>
        );
    }
}

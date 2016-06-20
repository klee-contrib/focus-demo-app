import React, {Component, PropTypes} from 'react';

export default class HelpeCenter extends Component {

    state = {
        xPos: 0,
        yPos: 0,
        selected: null
    }


    dragInit(e) {
        e.preventDefault();
        document.onmousemove = this.moveElem.bind(this);
        document.onmouseup = this.destroy.bind(this);
        const {selected} = this.state;
        this.setState(
            {
                selected: this.refs.helpFrame
            }
        );
        return false;
    }

    moveElem(e) {
        const {xPos, yPos, xElem, yElem, selected} = this.state;
        this.setState(
            {
                xPos: document.all ? window.event.clientX : e.pageX,
                yPos: document.all ? window.event.clientY : e.pageY
            }
        )

        if (selected !== null) {
            selected.style.left = (xPos) + 'px';
            selected.style.top = (yPos) + 'px';
        }
    }

    destroy(e) {
        e.preventDefault();
        document.onmousemove = null;
        document.onmouseup = null;
        this.setState({ selected: null });
    }

    render() {
        return (
            <div data-focus='help-center'>
                <iframe ref='helpFrame' height='450' width='250' src='http://localhost:1234/extension.html' onMouseDown={this.dragInit.bind(this)}  style={{ cursor: 'move', paddingTop: '20px', zIndex: '999', display: 'none', position: 'absolute', right: '100px', backgroundColor: '#757575' }} >
                </iframe>
            </div>
        );
    }
}

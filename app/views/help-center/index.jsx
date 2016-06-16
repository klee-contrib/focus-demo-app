import React, {Component} from 'react';

export default class HelpeCenter extends Component {

    state = {
        movable: false
    }

    mouseUp(e) {
        this.setState({movable: false})
        window.removeEventListener('mousemove', this.move.bind(this), true);
    }

    mouseDown(e) {
        e.preventDefault();
        this.setState({movable: true});
        window.addEventListener('mousemove', this.move.bind(this), true);
    }

    move(e) {
        const {helpFrame} = this.refs
        if(this.state.movable) {
            helpFrame.style.position = 'absolute';
            helpFrame.style.top = `${+e.clientY}px`;
            helpFrame.style.left = `${+e.clientX}px`;
        }
    }

    render() {
        return (
            <div data-focus='help-center'>
                <iframe ref='helpFrame' height='450' width='250' src='http://localhost:1234/extension.html' onMouseDown={this.mouseDown.bind(this)} onMouseUp={this.mouseUp.bind(this)} style={{cursor: 'move', paddingTop: '20px', zIndex: '999', display: 'none', position: 'absolute', right: '100px', backgroundColor: '#757575'}} >
                </iframe>
            </div>
        );
    }
}

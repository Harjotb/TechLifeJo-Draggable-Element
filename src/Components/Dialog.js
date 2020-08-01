import React, { Component } from 'react';
import './Dialog.css';

export default class Dialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            diffX: 0,
            diffY: 0,
            dragging: false,
            styles: {}
        }

        this._dragStart = this._dragStart.bind(this);
        this._dragging = this._dragging.bind(this);
        this._dragEnd = this._dragEnd.bind(this);
    }

    _dragStart(e) {
        this.setState({
            diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
            diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
            dragging: true
        });
    }

    _dragging(e) {

        if(this.state.dragging) {
            var left = e.screenX - this.state.diffX;
            var top = e.screenY - this.state.diffY;
    
            this.setState({
                styles: {
                    left: left,
                    top: top
                }
            });
        }
    }    

    _dragEnd() {
        this.setState({
            dragging: false
        });
    }

    render() {
        var classes = this.props.show ? 'Dialog' : 'Dialog hidden';
        return (
            <div className={classes} style={this.state.styles} onMouseDown={this._dragStart} onMouseMove={this._dragging} onMouseUp={this._dragEnd}>
                <div className='DialogTitle'>My Dialog</div>
                <div className='Contents'>
                    Contents of the Dialog: 
                        - one
                        - two
                        - three 
                </div>
                <div className='closeButton' onClick={this.props.onClose}>
                    Close
                </div>
            </div>
        );
    }
}
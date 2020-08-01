import React, { Component } from 'react';
import './MainApp.css';
import Dialog from '../Components/Dialog';


export default class MainApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDialog: false
        }
    }

    _showDialog() {
        this.setState({showDialog: !this.state.showDialog});
    }
	
	render() {
        
		return (
			<div className='MainApp'>
                <div className='Title'>Example Dialog Popper</div>
				<div className='button' onClick={this._showDialog.bind(this)}> Show Dialog </div>
                <Dialog onClose={this._showDialog.bind(this)} show={this.state.showDialog}/>
			</div>

		);
	}
} 


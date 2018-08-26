import React, { Component } from 'react';


class InputSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
	}

	inputHandler(event) {
		this.setState({
			term: event.target.value
		})
		console.log('this is term ', this.state.term)
	}

	render() {
		return (
			<div className='search-bar'>
				<input 
					onChange={(event) => {this.inputHandler(event)}}
					value={this.state.term}
				/>
			</div>
		)
	}
}

export default InputSearch;
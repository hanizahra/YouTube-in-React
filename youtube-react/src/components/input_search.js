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
		this.props.searched(event.target.value)
	}

	render() {
		return (
			<div className='search-bar'>
				<input 
					value={this.state.term}
					onChange={(event) => {this.inputHandler(event)}}
				/>
			</div>
		)
	}
}

export default InputSearch;
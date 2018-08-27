import React from 'react';


const InputSearch = (props) => {
	
	const inputHandler = (event) => {
		props.searched(event.target.value)
	}

	return (
		<div className='search-bar'>
			<input 
				onChange={(event) => {inputHandler(event)}}
			/>
		</div>
	)
}

export default InputSearch;
import React, { useState } from 'react';
// import PropTypes from 'prop-types';

export default function TextForm(props) {
	const handleUpClick = () => {
		// console.log('Uppercase was Clicked');
		setText(text.toUpperCase());
		props.showAlert('Converted to Uppercase', 'success');
	};

	const handleLowClick = () => {
		// console.log('Lower was Clicked');
		setText(text.toLowerCase());
		props.showAlert('Converted to Lowercase', 'success');
	};

	const handleClearClick = () => {
		// console.log('Lower was Clicked');
		setText('');
		props.showAlert('Text Cleared', 'success');
	};

	const handleCapitalizedClick = () => {
		// console.log('Lower was Clicked');
		let newText = text.toLowerCase();
		// console.log('LowerCase: ', newText);
		newText = newText.split(' ');
		// console.log('After Split:', newText);

		let newTextLength = newText.length;
		for (let i = 0; i < newTextLength; i++) {
			newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
			// console.log(newText[i]);
		}
		// console.log(newText.join(' '));
		setText(newText.join(' '));
		props.showAlert('Converted to Capitalized Form', 'success');
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(text);
		props.showAlert('Copied to clipboard', 'success');
	};

	const handleExtraSpaces = () => {
		let textSpace = text.split(/[ ]+/);
		setText(textSpace.join(' '));
		props.showAlert('Removed Extra spaces', 'success');
	};

	const handleOnChange = (event) => {
		// console.log('OnChange');
		setText(event.target.value);
	};

	const [text, setText] = useState('');
	// text = 'new text'; // Wrong way to change the state
	// setText('new Text'); // Correct way to change the state
	return (
		<>
			<div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
				<div className='mb-3 my-2'>
					<h1>{props.title}</h1>
					<label htmlFor='myBox' className='form-label my-3'>
						{props.heading}
					</label>
					<textarea
						className='form-control'
						value={text}
						onChange={handleOnChange}
						id='myBox'
						rows='10'
						style={{
							backgroundColor: props.mode === 'light' ? 'white' : 'rgb(43 45 46)',
							color: props.mode === 'light' ? 'black' : 'white',
						}}
					></textarea>
				</div>
				<button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>
					Convet to Uppercase
				</button>
				<button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleLowClick}>
					Convet to Lowercase
				</button>
				<button
					disabled={text.length === 0}
					className='btn btn-primary mx-2 my-2'
					onClick={handleCapitalizedClick}
				>
					Capitalized Case
				</button>
				<button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleCopy}>
					Copy Text
				</button>
				<button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleExtraSpaces}>
					Remove Extra Spaces
				</button>
				<button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleClearClick}>
					Clear
				</button>
			</div>
			<div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
				<h2>Your Text Summary</h2>
				<p>
					{
						text.split(/\s+/).filter((element) => {
							return element.length !== 0;
						}).length
					}{' '}
					words, {text.length} characters
				</p>
				<p>
					{0.008 *
						text.split(/\s+/).filter((element) => {
							return element.length !== 0;
						}).length}{' '}
					Minutes to read
				</p>
				<h2>Preview</h2>
				<p>{text.length > 0 ? text : 'No Text to Preview'}</p>
			</div>
		</>
	);
}

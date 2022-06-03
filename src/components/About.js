import React from 'react';

export default function About(props) {
	let myStyle = {
		color: props.mode === 'dark' ? 'white' : 'black',
		backgroundColor: props.mode === 'dark' ? 'rgb(43 45 46)' : 'white',
	};
	// const [myStyle, setMyStyle] = useState({
	// 	color: 'black',
	// 	backgroundColor: 'white',
	// });

	// const [buttonText, setButtonText] = useState('Enable Dark Mode');

	// const toggleStyle = () => {
	// 	if (myStyle.color === 'black') {
	// 		setMyStyle({
	// 			color: 'white',
	// 			backgroundColor: 'black',
	// 		});
	// 		setButtonText('Enable Light Mode');
	// 	} else {
	// 		setMyStyle({
	// 			color: 'black',
	// 			backgroundColor: 'white',
	// 		});
	// 		setButtonText('Enable Dark Mode');
	// 	}
	// };

	return (
		<div
			className='container my-3'
			style={{
				color: props.mode === 'dark' ? 'white' : 'black',
				backgroundColor: props.mode === 'dark' ? 'rgb(29, 30, 30)' : 'white',
			}}
		>
			<h1>About</h1>
			<div className='accordion my-2' id='accordionExample'>
				<div className='accordion-item'>
					<h2 className='accordion-header' id='headingOne'>
						<button
							className='accordion-button'
							style={myStyle}
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseOne'
							aria-expanded='true'
							aria-controls='collapseOne'
						>
							<strong>Analyze Your Text</strong>
						</button>
					</h2>
					<div
						id='collapseOne'
						className='accordion-collapse collapse show'
						aria-labelledby='headingOne'
						data-bs-parent='#accordionExample'
					>
						<div className='accordion-body' style={myStyle}>
							TextUtils is an app by which you can analyze your text quickly and efficiently. You can also
							count your words and characters.
						</div>
					</div>
				</div>
				<div className='accordion-item'>
					<h2 className='accordion-header' id='headingTwo'>
						<button
							className='accordion-button collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseTwo'
							aria-expanded='false'
							aria-controls='collapseTwo'
							style={myStyle}
						>
							<strong>Free to Use</strong>
						</button>
					</h2>
					<div
						id='collapseTwo'
						className='accordion-collapse collapse'
						aria-labelledby='headingTwo'
						data-bs-parent='#accordionExample'
					>
						<div className='accordion-body' style={myStyle}>
							TextUtils is a free to use app that provides instant character count and word count
							statistics for a given text.
						</div>
					</div>
				</div>
				<div className='accordion-item'>
					<h2 className='accordion-header' id='headingThree'>
						<button
							className='accordion-button collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseThree'
							aria-expanded='false'
							aria-controls='collapseThree'
							style={myStyle}
						>
							<strong>Browser Compatible</strong>
						</button>
					</h2>
					<div
						id='collapseThree'
						className='accordion-collapse collapse'
						aria-labelledby='headingThree'
						data-bs-parent='#accordionExample'
					>
						<div className='accordion-body' style={myStyle}>
							This app works well in Google Chrome, Mozilla Firefox, Microsoft Edge, Internet Explorer,
							Safari, Opera. It suits to count characters in vlog, books, excel document, eord document,
							pdf document, essays etc.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

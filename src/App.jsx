import { useState } from 'react';

import './App.css';

function App() {
	let colors = [
		{ name: 'Red', color: 'red' },
		{ name: 'Blue', color: 'blue' },
		{ name: 'Green', color: 'green' },
		{ name: 'Purple', color: 'purple' },
		{ name: 'Yellow', color: 'yellow' },
		{ name: 'Gray', color: 'gray' },
		{ name: 'Orange', color: 'orange' },
		{ name: 'Default Color', color: 'olive' },
	];

	let [color, setColor] = useState('olive');
	return (
		<>
			<div
				className=' w-full h-screen pt-10'
				style={{ backgroundColor: color }}
			>
				<h3 className='text-center text-white text-3xl text-bold pt-10'>
					Click on the Button to select Color
				</h3>

				<div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
					{/* <h2>test</h2> */}
					<div className='flex flex-wrap justify-center text-white text-bold gap-3 bg-white px-3 py-2 rounded 3xl'>
						{colors?.map(item => {
							return (
								<button
									onClick={() => {
										setColor(item.color);
									}}
									className='outline-none px-3 py-2 rounded-xl'
									style={{ backgroundColor: item.color }}
								>
									{item.name}
								</button>
							);
						})}
						{/* <button
							onClick={() => {
								setColor('red');
							}}
							className='outline-none px-3 py-2 rounded-xl'
							style={{ backgroundColor: 'red' }}
						>
							Red
						</button>
						<button
							onClick={() => {
								setColor('blue');
							}}
							className='outline-none px-3 py-2 rounded-xl'
							style={{ backgroundColor: 'blue' }}
						>
							Blue
						</button>
						<button
							onClick={() => {
								setColor('green');
							}}
							className='outline-none px-3 py-2 rounded-xl'
							style={{ backgroundColor: 'green' }}
						>
							Green
						</button>
						<button
							onClick={() => {
								setColor('purple');
							}}
							className='outline-none px-3 py-2 rounded-xl'
							style={{ backgroundColor: 'purple' }}
						>
							Purple
						</button>
						<button
							onClick={() => {
								setColor('yellow');
							}}
							className='outline-none px-3 py-2 rounded-xl'
							style={{ backgroundColor: 'yellow' }}
						>
							Yellow
						</button>
						<button
							onClick={() => {
								setColor('gray');
							}}
							className='outline-none px-3 py-2 rounded-xl'
							style={{ backgroundColor: 'gray' }}
						>
							Gray
						</button>
						<button
							onClick={() => {
								setColor('orange');
							}}
							className='outline-none px-3 py-2 rounded-xl'
							style={{ backgroundColor: 'orange' }}
						>
							Orange
						</button>
						<button
							onClick={() => {
								setColor('pink');
							}}
							className='outline-none px-3 py-2 rounded-xl'
							style={{ backgroundColor: 'pink' }}
						>
							Pink
						</button> */}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;

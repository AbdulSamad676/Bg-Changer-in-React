import { useState } from 'react';

import './App.css';

function App() {
	let [color, setColor] = useState('olive');
	return (
		<>
			<div
				className=' w-full h-screen'
				style={{ backgroundColor: color }}
			>
				<h3 className='text-center text-white text-3xl text-bold pt-10'>
					Click on the Button to select Color
				</h3>
				<div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
					{/* <h2>test</h2> */}
					<div className='flex flex-wrap justify-center text-white text-bold gap-3 bg-white px-3 py-2 rounded 3xl'>
						<button
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
					</div>
				</div>
			</div>
		</>
	);
}

export default App;

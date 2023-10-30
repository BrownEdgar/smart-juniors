import './Add.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Add({ addTodo }) {
	const [inputValue, setInputValue] = useState('');

	return (
		<div className="Add">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setInputValue('');
					addTodo(e.target.inputTodo);
				}}
			>
				<input
					className="Add-input"
					type="text"
					placeholder="What are you planning to do?"
					id="inputTodo"
					value={inputValue}
					onChange={(e) => {
						setInputValue(e.target.value);
					}}
				/>
				<button className="Add-submit">
					<i className="fa-solid fa-plus"></i>
				</button>
			</form>
		</div>
	);
}

Add.propTypes = {
	addTodo: PropTypes.func.isRequired,
};

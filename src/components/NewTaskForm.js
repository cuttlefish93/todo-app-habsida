import { useState } from 'react';

function NewTaskForm(props) {
	const { addTodo } = props;
	const [todoValue, setTodoValue] = useState('');

	function addTodoEventHandler(e) {
		if (e.key !== 'Enter') return;
		addTodo(todoValue);
		setTodoValue('');
	}

	return (
		<>
			<input
				className='new-todo'
				placeholder='What needs to be done?'
				autoFocus
				value={todoValue}
				onInput={(e) => setTodoValue(e.target.value)}
				onKeyDown={addTodoEventHandler}
			/>
		</>
	);
}

export default NewTaskForm;

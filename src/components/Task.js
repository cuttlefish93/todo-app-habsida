import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

function Task(props) {
	const {
		todo,
		toggleCompletedTodo,
		deleteTodo,
		editedTodo,
		updateEditedTodo,
	} = props;

	const [newText, setNewText] = useState(todo.text);

	function updateEditedTodoEventHandler(e, todoId) {
		if (e.key !== 'Enter') return;
		updateEditedTodo(newText, todoId);
	}

	return (
		<li
			className={`${todo.isCompleted ? 'completed' : ''} ${
				todo.isEditing ? 'editing' : ''
			}`}
		>
			<div className='view'>
				<input
					className='toggle'
					type='checkbox'
					onClick={() => toggleCompletedTodo(todo.id)}
				/>
				<label>
					<span className='description'>{todo.text}</span>
					<span className='created'>
						{`created ${formatDistanceToNow(todo.createdAt, {
							includeSeconds: true,
						})} ago`}
					</span>
				</label>
				<button
					className='icon icon-edit'
					onClick={() => editedTodo(todo.id)}
				></button>
				<button
					className='icon icon-destroy'
					onClick={() => deleteTodo(todo.id)}
				></button>
			</div>
			<input
				type='text'
				className='edit'
				value={newText}
				onInput={(e) => setNewText(e.target.value)}
				onKeyDown={(e) => updateEditedTodoEventHandler(e, todo.id)}
			></input>
		</li>
	);
}

export default Task;

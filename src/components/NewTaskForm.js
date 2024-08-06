import { useState } from 'react'
import PropTypes from 'prop-types'

function NewTaskForm(props) {
	const { addTodo } = props
	const [todoValue, setTodoValue] = useState('')

	function addTodoEventHandler(e) {
		if (e.key !== 'Enter') return
		addTodo(todoValue)
		setTodoValue('')
	}

	return (
		<>
			<input
				className='new-todo'
				placeholder='What needs to be done?'
				autoFocus
				value={todoValue}
				onInput={e => setTodoValue(e.target.value)}
				onKeyDown={addTodoEventHandler}
			/>
		</>
	)
}

NewTaskForm.propTypes = {
	addTodo: PropTypes.func,
}

export default NewTaskForm

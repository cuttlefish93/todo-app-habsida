import PropTypes from 'prop-types'
import Task from './Task'

function TaskList(props) {
	const {
		todos,
		toggleCompletedTodo,
		deleteTodo,
		editedTodo,
		updateEditedTodo,
	} = props

	return (
		<ul className='todo-list'>
			{todos.map(todo => {
				if (!todo.isVisible) return ''
				return (
					<Task
						key={todo.id}
						todo={todo}
						toggleCompletedTodo={toggleCompletedTodo}
						deleteTodo={deleteTodo}
						editedTodo={editedTodo}
						updateEditedTodo={updateEditedTodo}
					/>
				)
			})}
		</ul>
	)
}

TaskList.propType = {
	todos: PropTypes.arrayOf(PropTypes.object),
	toggleCompletedTodo: PropTypes.func,
	deleteTodo: PropTypes.func,
	editedTodo: PropTypes.func,
	updateEditedTodo: PropTypes.func,
}

export default TaskList

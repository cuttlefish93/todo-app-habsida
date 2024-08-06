import PropTypes from 'prop-types'
import TasksFilter from './TasksFilter'

function Footer(props) {
	const { clearCompletedTodos, unfinishedTodosCount, getFilteredTodos } = props

	return (
		<footer className='footer'>
			<span className='todo-count'>{`${unfinishedTodosCount} ${
				unfinishedTodosCount > 1 || unfinishedTodosCount === 0
					? 'items'
					: 'item'
			} left`}</span>
			<TasksFilter getFilteredTodos={getFilteredTodos} />
			<button className='clear-completed' onClick={clearCompletedTodos}>
				Clear completed
			</button>
		</footer>
	)
}

Footer.propType = {
	clearCompletedTodos: PropTypes.func,
	unfinishedTodosCount: PropTypes.number,
	getFilteredTodos: PropTypes.func,
}

export default Footer

import PropTypes from 'prop-types'

function TasksFilter(props) {
	const { getFilteredTodos } = props

	function toggleSelectedBtnHandler(e) {
		document.querySelector('button.selected').classList.remove('selected')
		e.target.classList.add('selected')
	}

	function filterTodosHandler(e) {
		toggleSelectedBtnHandler(e)
		getFilteredTodos()
	}

	return (
		<ul className='filters'>
			<li>
				<button className='selected' onClick={e => filterTodosHandler(e)}>
					All
				</button>
			</li>
			<li>
				<button onClick={e => filterTodosHandler(e)}>Active</button>
			</li>
			<li>
				<button onClick={e => filterTodosHandler(e)}>Completed</button>
			</li>
		</ul>
	)
}

TasksFilter.propType = {
	getFilteredTodos: PropTypes.func,
}

export default TasksFilter

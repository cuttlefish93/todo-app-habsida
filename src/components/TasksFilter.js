function TasksFilter(props) {
	const { getFilteredTodos } = props;

	function toggleSelectedBtnHandler(e) {
		document.querySelector('button.selected').classList.remove('selected');
		e.target.classList.add('selected');
	}

	function filterTodosHandler(e, filter) {
		toggleSelectedBtnHandler(e);
		getFilteredTodos(filter);
	}

	return (
		<ul className='filters'>
			<li>
				<button
					className='selected'
					onClick={(e) => filterTodosHandler(e, 'all')}
				>
					All
				</button>
			</li>
			<li>
				<button onClick={(e) => filterTodosHandler(e, 'active')}>Active</button>
			</li>
			<li>
				<button onClick={(e) => filterTodosHandler(e, 'completed')}>
					Completed
				</button>
			</li>
		</ul>
	);
}

export default TasksFilter;

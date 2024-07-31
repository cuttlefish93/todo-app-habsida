import TasksFilter from './TasksFilter';

function Footer(props) {
	const { clearCompletedTodos, unfinishedTodosCount, getFilteredTodos } = props;

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
	);
}

export default Footer;

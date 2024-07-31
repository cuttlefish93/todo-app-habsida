import { useState } from 'react';
import './App.css';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

function App() {
	const [todos, setTodos] = useState([]);

	function addTodoHandler(todoText) {
		setTodos([
			...todos,
			{
				text: todoText,
				createdAt: new Date(),
				id: Math.random(),
				isCompleted: false,
				isEditing: false,
				isVisible: true,
			},
		]);
	}

	function toggleCompletedTodoHandler(id) {
		setTodos(
			todos.map((todo) =>
				todo.id === id
					? { ...todo, isCompleted: !todo.isCompleted }
					: { ...todo },
			),
		);
	}

	function editedTodoHandler(id) {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isEditing: !todo.isEditing } : { ...todo },
			),
		);
	}

	function updateEditedTodoHandler(newText, id) {
		setTodos(
			todos.map((todo) =>
				todo.id === id
					? { ...todo, text: newText, isEditing: !todo.isEditing }
					: { ...todo },
			),
		);
	}

	function deleteTodoHandler(id) {
		setTodos(todos.filter((todo) => todo.id !== id));
	}

	function clearCompletedTodosHandler() {
		setTodos(todos.filter((todo) => !todo.isCompleted));
	}

	function getFilteredTodos(filter) {
		if (filter === 'all') {
			setTodos(
				todos.map((todo) => {
					return { ...todo, isVisible: true };
				}),
			);
			return;
		}

		if (filter === 'active') {
			setTodos(
				todos.map((todo) =>
					todo.isCompleted === true
						? { ...todo, isVisible: false }
						: { ...todo, isVisible: true },
				),
			);
			return;
		}

		if (filter === 'completed') {
			setTodos(
				todos.map((todo) =>
					todo.isCompleted === false
						? { ...todo, isVisible: false }
						: { ...todo, isVisible: true },
				),
			);
		}
	}

	const unfinishedTodosCount = todos.filter((todo) => !todo.isCompleted).length;

	return (
		<section className='todoapp'>
			<header className='header'>
				<h1>todos</h1>
				<NewTaskForm addTodo={addTodoHandler} />
			</header>
			<section className='main'>
				<TaskList
					todos={todos}
					toggleCompletedTodo={toggleCompletedTodoHandler}
					deleteTodo={deleteTodoHandler}
					editedTodo={editedTodoHandler}
					updateEditedTodo={updateEditedTodoHandler}
				/>
				<Footer
					clearCompletedTodos={clearCompletedTodosHandler}
					unfinishedTodosCount={unfinishedTodosCount}
					getFilteredTodos={getFilteredTodos}
				/>
			</section>
		</section>
	);
}

export default App;

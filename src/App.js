import { useState, useEffect } from 'react'
import './App.css'
import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList'
import Footer from './components/Footer'

function App() {
	const [todos, setTodos] = useState([])

	const unfinishedTodosCount = todos.filter(todo => !todo.isCompleted).length

	useEffect(() => {
		getFilteredTodos()
	}, [unfinishedTodosCount])

	//Adds new todo
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
		])
	}

	//Changes todo isCompleted property by clicking on checkbox input
	function toggleCompletedTodoHandler(id) {
		setTodos(
			todos.map(todo =>
				todo.id === id
					? { ...todo, isCompleted: !todo.isCompleted }
					: { ...todo }
			)
		)
	}

	//Changes todo isEditing property by clicking on edit button
	function editedTodoHandler(id) {
		setTodos(
			todos.map(todo =>
				todo.id === id ? { ...todo, isEditing: !todo.isEditing } : { ...todo }
			)
		)
	}

	//Updates todo text after editing
	function updateEditedTodoHandler(newText, id) {
		setTodos(
			todos.map(todo =>
				todo.id === id
					? { ...todo, text: newText, isEditing: !todo.isEditing }
					: { ...todo }
			)
		)
	}

	//Deletes todo by clicking delete button
	function deleteTodoHandler(id) {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	//Deletes completed todos by clicking clear completed button
	function clearCompletedTodosHandler() {
		setTodos(todos.filter(todo => !todo.isCompleted))
	}

	//Updates todos array depending on the active filter on the page - all, active, completed
	function getFilteredTodos() {
		const filter = document
			.querySelector('button.selected')
			.textContent.toLowerCase()

		if (filter === 'all') {
			setTodos(
				todos.map(todo => {
					return { ...todo, isVisible: true }
				})
			)
			return
		}

		if (filter === 'active') {
			setTodos(
				todos.map(todo =>
					todo.isCompleted === true
						? { ...todo, isVisible: false }
						: { ...todo, isVisible: true }
				)
			)
			return
		}

		if (filter === 'completed') {
			setTodos(
				todos.map(todo =>
					todo.isCompleted === false
						? { ...todo, isVisible: false }
						: { ...todo, isVisible: true }
				)
			)
		}
	}

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
	)
}

export default App

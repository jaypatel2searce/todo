import React, { createContext, useState } from "react";

export const TodosContext = createContext();

const TodosContextProvider = ({ children }) => {
	const [currentTodo, setCurrentTodo] = useState();

	const [todos, setTodos] = useState([
		{
			id: "1",
			title: "Learn branching ",
			description: "description 1 ",
			status: false,
		},
		{
			id: "2",
			title: "Add and commit ",
			description: "description 2 ",
			status: false,
		},
		{
			id: "3",
			title: "Make Pull Request ",
			description: "description 3 ",
			status: false,
		},
	]);

	const addTodo = (newTodo) =>
		setTodos([
			...todos,
			{
				id: todos.length + 1,
				title: newTodo.title,
				status: false,
				description: newTodo.description,
			},
		]);

	const editTodo = (newTodo) => {
		setTodos(
			todos.map((todo) => (todo.id === currentTodo.id ? newTodo : todo))
		);
		setCurrentTodo(null);
	};

	const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

	const completeTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, status: !todo.status } : todo
			)
		);
	};

	return (
		<TodosContext.Provider
			value={{
				todos: todos,
				setTodos: setTodos,
				currentTodo: currentTodo,
				setCurrentTodo: setCurrentTodo,
				addTodo: addTodo,
				editTodo: editTodo,
				deleteTodo: deleteTodo,
				completeTodo: completeTodo,
			}}
		>
			{children}
		</TodosContext.Provider>
	);
};

export default TodosContextProvider;

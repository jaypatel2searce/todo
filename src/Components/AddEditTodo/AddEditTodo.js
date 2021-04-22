import React, { useContext, useEffect, useState } from "react";
import classes from "./AddEditTodo.module.css";
import { TodosContext } from "../../Contexts/TodosContextProvider";
import { useHistory } from "react-router-dom";

const AddEditTodo = ({ children }) => {

	const { addTodo, editTodo, currentTodo } = useContext(TodosContext);

	const [todo, setTodo] = useState(
		currentTodo ? currentTodo : { title: "", description: "" }
	);

	useEffect(() => {
		setTodo(currentTodo ? currentTodo : { title: "", description: "" });
	}, [currentTodo]);

    const history = useHistory();

	const updateTodo = (newTodo) => {
		if (currentTodo) editTodo(newTodo);
		else addTodo(newTodo);
	};

	return (
		<form
			className={classes.form}
			onSubmit={(event) => {
				event.preventDefault();
				updateTodo({
					...todo,
					title: todo.title,
					description: todo.description,
				});
				history.push("/");
			}}
		>
			<button type="submit">{children}</button>

			<input
				required
				type="text"
				onChange={(event) => setTodo({ ...todo, title: event.target.value })}
				value={todo.title}
				placeholder="title"
			/>

			<input
				required
				type="text"
				onChange={(event) =>
					setTodo({ ...todo, description: event.target.value })
				}
				value={todo.description}
				placeholder="description"
			/>
		</form>
	);
};

export default AddEditTodo;

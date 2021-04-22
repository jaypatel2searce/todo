import React, { useContext } from "react";
import classes from "./Todos.module.css";
import { TodosContext } from "../../Contexts/TodosContextProvider";
import { Link } from "react-router-dom";

const Todos = () => {
	const { todos, deleteTodo, setCurrentTodo, completeTodo } = useContext(
		TodosContext
	);

	return (
		<>
			<Link to={"/add"}>
				<button className={classes.adButton}>Add Todo</button>
			</Link>

			<div>
				{todos.map((todo) => {
					return (
						<div
							key={todo.id}
							className={todo.status ? classes.ClosedTodo : classes.OpenTodo}
						>
							<h3>{todo.title}</h3>
							<p>{todo.description}</p>
							<Link to={"/edit/" + todo.id}>
								<button
									onClick={() => setCurrentTodo(todo)}
									className={classes.EditBtn}
								>
									Edit
								</button>
							</Link>

							<button
								onClick={() => deleteTodo(todo.id)}
								className={classes.DeleteBtn}
							>
								Delete
							</button>
							<button
								onClick={() => completeTodo(todo.id)}
								className={classes.CompleteBtn}
							>
								{todo.status ? "re-open" : "Complete"}
							</button>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Todos;

import React, { useContext } from "react";
import Todos from "./Components/Todos/Todos";
import AddEditTodo from "./Components/AddEditTodo/AddEditTodo";
import "./App.css";

import TodosContextProvider from "./Contexts/TodosContextProvider";
import { Route, Switch, Link } from "react-router-dom";

const App = () => {
	return (
		<TodosContextProvider>
			<h1>CRUD App</h1>

			<Switch>
				<Route exact path="/edit/:id">
					<AddEditTodo>{"Update Todo"}</AddEditTodo>
				</Route>
				<Route exact path="/add">
					<AddEditTodo>{"Add Todo"}</AddEditTodo>
				</Route>
				<Route>
					<Todos />
				</Route>
			</Switch>
		</TodosContextProvider>
	);
};

export default App;

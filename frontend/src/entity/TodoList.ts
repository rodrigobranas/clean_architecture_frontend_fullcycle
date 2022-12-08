import TodosGatewayHttp from "../infra/gateway/TodosGatewayHttp";
import Observable from "../infra/observer/Observable";
import Todo from "./Todo";

export default class TodoList extends Observable {
	todos: Todo[];

	constructor () {
		super();
		this.todos = [];
	}

	getTotal () {
		return this.todos.length;
	}

	getCompleted () {
		const total = this.getTotal();
		if (total === 0) return 0;
		const completed = this.todos.filter((todo: any) => todo.done).length;
		return Math.round((completed/total)*100);
	}

	addTodo (description: string, done: boolean = false) {
		if (this.todos.some((todo: any) => todo.description === description)) return;
		const todo = new Todo(description, done);
		this.todos.push(todo);
		this.notify("add-todo", todo);
	}

	addTodos (todos: any) {
		for (const todo of todos) {
			this.addTodo(todo.description, todo.done);
		}
	}

	deleteTodo (todo: any) {
		this.todos.splice(this.todos.indexOf(todo), 1);
		this.notify("delete-todo", todo);
	}
}
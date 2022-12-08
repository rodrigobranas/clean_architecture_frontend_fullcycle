import TodoList from "../src/entity/TodoList";

test("Deve criar uma todo list vazia", function () {
	const todoList = new TodoList();
	expect(todoList.getTotal()).toBe(0);
	expect(todoList.getCompleted()).toBe(0);
});

test("Deve criar uma todo list com um todo", function () {
	const todoList = new TodoList();
	todoList.addTodo("A");
	expect(todoList.getTotal()).toBe(1);
	expect(todoList.getCompleted()).toBe(0);
});

test("Deve criar uma todo list com dois todos e um done", function () {
	const todoList = new TodoList();
	todoList.addTodo("A");
	todoList.addTodo("B");
	todoList.todos[1].toggleDone();
	expect(todoList.getTotal()).toBe(2);
	expect(todoList.getCompleted()).toBe(50);
});

test("Deve criar uma todo list que não permita inserir dois todos iguais", function () {
	const todoList = new TodoList();
	todoList.addTodo("A");
	todoList.addTodo("A");
	expect(todoList.getTotal()).toBe(1);
	expect(todoList.getCompleted()).toBe(0);
});

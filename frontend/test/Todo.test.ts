import Todo from "../src/entity/Todo";

test("Deve testar um todo com done default", function () {
	const todo = new Todo("A");
	expect(todo.description).toBe("A");
	expect(todo.done).toBeFalsy();
});

test("Deve testar um todo com toggle", function () {
	const todo = new Todo("A");
	todo.toggleDone();
	expect(todo.description).toBe("A");
	expect(todo.done).toBeTruthy();
});

test("Não deve criar todo com description vazia", function () {
	expect(() => new Todo("")).toThrow(new Error("Invalid description"));
});
import { mount } from "@vue/test-utils";
import AppVue from "../src/App.vue";
import TodosGateway from "../src/infra/gateway/TodosGateway";

function sleep (time: number) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, time);
	});
}

test("Deve testar a todo list vazia", async function () {
	const todosGateway: TodosGateway = {
		async getTodos (): Promise<any> {
			return [
				{ description: "My first todo", done: false }
			]
		}
	}
	const wrapper = mount(AppVue, {
		global: {
			provide: {
				todosGateway
			}
		}
	});
	await sleep(100);
	expect(wrapper.get(".total").text()).toBe("Total: 1");
	expect(wrapper.get(".completed").text()).toBe("Completed: 0%");

});

test("Deve testar a todo list", async function () {
	const todosGateway: TodosGateway = {
		async getTodos (): Promise<any> {
			return [
				{ description: "My first todo", done: false }
			]
		}
	}
	const wrapper = mount(AppVue, {
		global: {
			provide: {
				todosGateway
			}
		}
	});
	await sleep(100);
	await wrapper.get(".todo-description-input").setValue("A");
	await wrapper.get(".add-todo-button").trigger("click");
	expect(wrapper.get(".total").text()).toBe("Total: 2");
	expect(wrapper.get(".completed").text()).toBe("Completed: 0%");
	expect(wrapper.findAll(".todo-description").at(1)?.text()).toBe("A");
	expect(wrapper.findAll(".todo-done").at(0)?.text()).toBe("false");
	await wrapper.get(".todo-description-input").setValue("B");
	await wrapper.get(".add-todo-button").trigger("click");
	expect(wrapper.get(".total").text()).toBe("Total: 3");
	await wrapper.findAll(".todo-toggle-done-button").at(0)?.trigger("click");
	expect(wrapper.findAll(".todo-done").at(0)?.text()).toBe("true");
	expect(wrapper.get(".completed").text()).toBe("Completed: 33%");
	await wrapper.findAll(".todo-delete-button").at(0)?.trigger("click");
	expect(wrapper.get(".total").text()).toBe("Total: 2");
	expect(wrapper.get(".completed").text()).toBe("Completed: 0%");
});

test("Não deve deixar inserir todo duplicado", async function () {
	const todosGateway: TodosGateway = {
		async getTodos (): Promise<any> {
			return [
				{ description: "My first todo", done: false }
			]
		}
	}
	const wrapper = mount(AppVue, {
		global: {
			provide: {
				todosGateway
			}
		}
	});
	await sleep(100);
	await wrapper.get(".todo-description-input").setValue("A");
	await wrapper.get(".add-todo-button").trigger("click");
	await wrapper.get(".todo-description-input").setValue("A");
	await wrapper.get(".add-todo-button").trigger("click");
	expect(wrapper.get(".total").text()).toBe("Total: 2");
	expect(wrapper.get(".completed").text()).toBe("Completed: 0%");

});
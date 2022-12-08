export default class Todo {

	constructor (readonly description: string, public done: boolean = false) {
		if (description === "") throw new Error("Invalid description");
	}

	toggleDone () {
		this.done = !this.done;
	}
}

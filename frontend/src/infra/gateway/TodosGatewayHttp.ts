import TodosGateway from "./TodosGateway";
import axios from "axios";
import HttpClient from "../http/HttpClient";

export default class TodosGatewayHttp implements TodosGateway {

	constructor (
		readonly httpClient: HttpClient,
		readonly baseUrl: string
	) {
	}

	async getTodos(): Promise<any> {
		const todosData = await this.httpClient.get(`${this.baseUrl}/todos`);
		return todosData;
	}

}
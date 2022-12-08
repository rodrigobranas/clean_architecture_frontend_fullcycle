import HttpClient from "./HttpClient";

export default class FetchAdapter implements HttpClient {
	
	async get(url: string): Promise<any> {
		const response = await fetch(url);
		return response.json();
	}

}

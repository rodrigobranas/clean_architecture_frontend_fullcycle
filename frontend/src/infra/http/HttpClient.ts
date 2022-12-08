export default interface HttpClient {
	get (url: string): Promise<any>;
}

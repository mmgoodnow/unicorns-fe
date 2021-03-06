const API_URL = "http://localhost:9000";

export class HttpError extends Error {
	statusCode: number;
	constructor(statusCode: number) {
		super(`API returned status code ${statusCode}`);
		this.statusCode = statusCode;
	}
}

function parseResponse(response: Response) {
	if (response.ok) return response.json();
	throw new HttpError(response.status);
}

export function get(path: string, options: RequestInit = {}) {
	const mergedOptions: RequestInit = {
		credentials: "include",
		...options,
	};
	return fetch(API_URL + path, mergedOptions).then(parseResponse);
}

export function post(
	path: string,
	data: any = undefined,
	options: RequestInit = {}
) {
	const mergedOptions: RequestInit = {
		credentials: "include",
		method: "POST",
		...options,
		headers: {
			"Content-Type": "application/json",
			...options.headers,
		},
		body: JSON.stringify(data),
	};
	return fetch(API_URL + path, mergedOptions).then(parseResponse);
}

export function del(path: string, options: RequestInit = {}) {
	const mergedOptions: RequestInit = {
		credentials: "include",
		method: "DELETE",
		...options,
	};
	return fetch(API_URL + path, mergedOptions).then(parseResponse);
}

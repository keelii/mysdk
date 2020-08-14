import {request} from "./request.ts";

export async function get(url: string, options?: Partial<RequestInit>) {
    return await request(url, {
        ...options,
        method: "GET"
    })
}

export async function post(url: string, data?: object) {
    return await request(url, {
        body: JSON.stringify(data),
        method: "POST"
    })
}

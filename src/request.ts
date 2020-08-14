export async function request(url: string, options?: Partial<RequestInit>) {
    const response = await fetch(url, options)
    return await response.json()
}

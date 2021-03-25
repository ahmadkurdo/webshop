import { HttpResponse } from './AppTypes'

export async function HttpGet<T>(request: RequestInfo): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await fetch(request)
    response.parsedBody = await response.json()
    return response
}

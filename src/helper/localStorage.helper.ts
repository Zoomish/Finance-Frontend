export function getTokenFromLocalStorage(): string {
    const data = localStorage.getItem('token')
    return data ? JSON.parse(data) : ''
}

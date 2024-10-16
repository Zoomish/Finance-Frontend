export function getTokenFromLocalStorage(): string {
    const data = localStorage.getItem('token')
    return data ?? ''
}

export function setKeyToLocalStorage(key: string, token: string): void {
    localStorage.setItem(key, token)
}

export function removeKeyFromLocalStorage(key: string): void {
    localStorage.removeItem(key)
}

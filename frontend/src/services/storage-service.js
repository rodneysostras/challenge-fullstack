export class StorageService {
    get(key) {
        const data = localStorage.getItem(key)
        return data && JSON.parse( data ) || undefined
    }

    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    clear(regexp) {
        Object.keys(localStorage).map((keys) => {
            if (regexp) {
                keys = keys.filter( k => regexp.test(k))
            }

            keys.forEach((k) => localStorage.removeItem(k))
        })
    }
}

const storageService = new StorageService()
export default storageService

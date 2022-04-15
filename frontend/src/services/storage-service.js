export class StorageService {
    get(key) {
        const data = localStorage.getItem(key)
        return data && JSON.parse( data ) || undefined
    }

    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    clear(regexp) {
        Object.keys(localStorage).map((key) => {
            if (regexp && regexp.test(key)) {
                localStorage.removeItem(key)
            } else {
                localStorage.removeItem(key)
            }

        })
    }
}

const storageService = new StorageService()
export default storageService

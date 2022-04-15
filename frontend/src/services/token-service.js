import StorageService from './storage-service'

export class TokenService {
    constructor(storageService) {
        this.__storageService = storageService
    }

    getToken() {
        return this.__storageService.get('app/token')
    }

    setToken(value) {
        const fourMinutes = 1000 * 60 * 4
        const inFourMinutes = new Date(Date.now() + fourMinutes)

        const TREATED_VALUE = {
            ...value,
            lifetime: inFourMinutes.getTime()
        }

        return this.__storageService.set('app/token', TREATED_VALUE)
    }

    clearToken() {
        return this.__storageService.clear('app/token')
    }
}
const tokenService = new TokenService(StorageService)
export default tokenService

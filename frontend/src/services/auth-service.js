import APIService from './api-service'
import TokenService from './token-service'

export class AuthService{
    constructor(apiService, tokenService) {
        this.__apiService = apiService
        this.__tokenService = tokenService
    }

    login(username, password) {
        return new Promise((resolve, reject) => {
            this.__apiService.post('/auth/login', { username, password })
                .then((data) => resolve(this.__tokenService.setToken(data)))
                .catch((err) => reject(err))
        })
    }

    logout() {
        return this.__tokenService.clearToken()
    }

    isAuthenticated() {
        const TOKEN = this.__tokenService.getToken()

        if (TOKEN && TOKEN.refresh && !TOKEN.access) {
            const body = JSON.stringify({ refresh: TOKEN.refresh })

            this.__apiService
                .post('/auth/refresh-token', body)
                .then((data) => {
                    const TREATED_TOKEN = { ...TOKEN, ...data }
                    this.__tokenService.setToken(TREATED_TOKEN)
                    TOKEN = true
                })
                // .catch(() => this.__tokenService.clearToken())
        }

        return !!TOKEN
    }

}

const authService = new AuthService(APIService, TokenService)
export default authService

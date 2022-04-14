import APIService from './api-service'

export class AulaService{
    constructor(apiService) {
        this.__apiService = apiService
    }

    list() {
        return this.__apiService.get('/aula/')
    }

    search(id) {
        return this.__apiService.get(`/aula/${id}`)
    }

    create(value) {
        return this.__apiService.post('/aula/', value)
    }

    edit(id, value) {
        return this.__apiService.put(`/aula/${id}/`, value)
    }

    delete(id) {
        return this.__apiService.delete(`/aula/${id}/`)
    }
}

export default new AulaService(APIService)

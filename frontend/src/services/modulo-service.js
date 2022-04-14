import APIService from './api-service'

export class ModuloService{
    constructor(apiService) {
        this.__apiService = apiService
    }

    list() {
        return this.__apiService.get('/modulo/')
    }

    search(id) {
        return this.__apiService.get(`/modulo/${id}`)
    }

    create(value) {
        return this.__apiService.post('/modulo/', value)
    }

    edit(id, value) {
        return this.__apiService.put(`/modulo/${id}/`, value)
    }

    delete(id) {
        return this.__apiService.delete(`/modulo/${id}/`)
    }
}

export default new ModuloService(APIService)

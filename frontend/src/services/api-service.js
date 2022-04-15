import axios from 'axios'

import TokenService from './token-service'

import { API_ENDPOINT_VERZEL } from '../settings'

export class APIService {
    constructor(apiEndpoint, tokenService) {
        this.__tokenService = tokenService
        this.__instance = axios.create({
            baseURL: apiEndpoint,
            xsrfCookieName: 'csrftoken',
            xsrfHeaderName: 'X-CSRFTOKEN',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
            }
        })
    }

    get(url, params = {}) {
        return this.request('GET', url, params)
    }

    post(url, body) {
        return this.request('POST', url, body)
    }

    put(url, body) {
        return this.request('PUT', url, body)
    }

    delete(url, params = {}) {
        return this.request('DELETE', url, params)
    }

    request(method, url, data) {
        const TOKEN = this.__tokenService.getToken()
        const TREATED_PARAMS = {
            url,
            method,
            params: method === 'GET' ? data : null,
            data: method === 'POST' || method === 'PUT' ? data : null,
        }

        if (TOKEN && TOKEN.access) {
            TREATED_PARAMS['headers'] = { Authorization: 'Bearer ' + TOKEN.access }
        }

        return new Promise((resolver, reject) => {
            this.__instance.request(TREATED_PARAMS)
                .then(( { data } ) => resolver(data))
                .catch(( { response } ) => reject(response))
        })
   }
}

const apiService = new APIService(API_ENDPOINT_VERZEL, TokenService)
export default apiService

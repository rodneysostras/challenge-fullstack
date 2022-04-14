import axios from 'axios'

import { API_ENDPOINT_VERZEL } from '../settings'

export class APIService {
    constructor(apiEndpoint) {
        this.__instance = axios.create({
            baseURL: apiEndpoint,
            headers: {
                'Content-Type': 'application/json',
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
       const TREATED_PARAMS = {
           url,
           method,
           params: method === 'GET' ? data : null,
           data: method === 'POST' || method === 'PUT' ? data : null,
       }

       return new Promise((resolver, reject) => {
           this.__instance.request(TREATED_PARAMS)
                .then(( { data } ) => resolver(data))
                .catch(( { response } ) => reject(response))
       })
   }
}


export default new APIService(API_ENDPOINT_VERZEL)

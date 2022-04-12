import axios from 'axios'

import { API_ENDPOINT_VERZEL } from '../settings'

export class VerzelAPIServices {
    __URL_API_MODULO = "/api/modulo/"

    constructor(apiEndpoint) {
        this.__instance = axios.create({
            baseURL: apiEndpoint,
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    setAuthToken(token) {
        this._instance.defaults.headers.common['Authorization'] = 'Bearer ' + token
    }

   async request({ method, url, data, params }) {
       const TREATED_PARAMS = {
           url,
           method,
           params,
           data,
       }

       return new Promise((resolver, reject) => {
           this.__instance.request(TREATED_PARAMS)
                .then(( { data } ) => resolver(data))
                .catch(( { response } ) => reject(response))
       })
   }

   async getModulo(id = '') {
       return this.request({
           method: 'GET',
           url: this.__URL_API_MODULO + id,
       })
   }
}

export default new VerzelAPIServices(API_ENDPOINT_VERZEL)

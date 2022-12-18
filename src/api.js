import axios from 'axios'
import config from '@/config.js'

export const HTTP = axios.create({
    baseURL: config.MOCK
})

export default {
    async getPopularProducts() {
        try {
            const response = await HTTP.get('/products/popular')
            console.log(response.data)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
}
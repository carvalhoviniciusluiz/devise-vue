'use strict'

import axios from 'axios'
import { storage } from 'helpers/services'

const tokenStorage = storage(process.env.TOKEN_KEY)
const token = tokenStorage.get()

export const http = axios.create({
  baseURL: process.env.SERVER_URI
})

delete http.defaults.headers.common['Authorization']

if (token) {
  http.defaults.headers.common['Authorization'] = `bearer ${token}`
}

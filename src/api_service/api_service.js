// Import a libraries for use
import axios from 'axios';
import { store } from '../store/store'

/**
 * @description Set a general configuration
 */
const configuration = {
  baseURL: store.getters.getAPI,
}

/**
 * @description Get Token
 * @param { Object } body Data for web service
 * @returns { Boolean } Returns if call to WS is OK!
 */
export const getToken = async body => {
  try {
    configuration.url = `/auth/login`
    configuration.data = body
    configuration.method = 'post'
    await axios(configuration)
    return true
  } catch (error) {
    return false
  }
}
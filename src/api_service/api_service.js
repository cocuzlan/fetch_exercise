// Import a libraries for use
import axios from 'axios';
import { store } from '../store/store'

/**
 * @description Set a general configuration
 */
const configuration = {
  baseURL: store.getters.getAPI,
  withCredentials: true
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

/**
 * @description Logout
 * @returns { Boolean } Returns if call to WS is OK!
 */
export const getLogout = async () => {
  try {
    configuration.url = `/auth/logout`
    configuration.method = 'post'
    await axios(configuration)
    return true
  } catch (error) {
    return false
  }
}

/**
 * @description Get Dogs
 * @returns { Boolean } Returns if call to WS is OK!
 */
export const getDogs = async () => {
  try {
    configuration.url = `/dogs/breeds`
    configuration.method = 'get'
    const { data } = await axios(configuration)
    return data
  } catch (error) {
    return []
  }
}
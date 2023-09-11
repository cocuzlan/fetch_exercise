// Import a libraries for use
import axios from 'axios';
import { store } from '../store/store'
// Add a complement from axios
var qs = require('qs');

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

/**
 * @description Get Ids Dogs
 * @returns { Boolean } Returns if call to WS is OK!
 */
export const getIdsDogs = async (payload) => {
  try {
    configuration.url = `/dogs/search`
    configuration.method = 'get'
    configuration.params = payload
    configuration.paramsSerializer = params => {
      return qs.stringify(params)
    }
    const { data: { resultIds } } = await axios(configuration)
    return await getDogsSearch(resultIds)
  } catch (error) {
    return false
  }
}

/**
 * @description Get Dogs
 * @returns { Boolean } Returns if call to WS is OK!
 */
export const getDogsSearch = async (payload) => {
  try {
    configuration.url = `/dogs`
    configuration.method = 'post'
    configuration.data = payload
    const { data } = await axios(configuration)
    return data
  } catch (error) {
    return false
  }
}
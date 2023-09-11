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
 * @returns { Object } Returns All dogs breed
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
 * @returns { Boolean } Returns data for table or false!
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
 * @returns { Object | Boolean } Returns a data with dogs or false
 */
export const getDogsSearch = async (payload) => {
  try {
    configuration.url = `/dogs`
    configuration.method = 'post'
    configuration.data = payload
    const { data } = await axios(configuration)
    store.commit('setZipCodes', data)
    const locations = await getLocations()
    store.commit('setFullData', {
      data, locations
    })
    return store.getters.getFullData
  } catch (error) {
    return false
  }
}

/**
 * @description Get locations
 * @returns { Object | Boolean } Returns a data with dogs or false
 */
export const getLocations = async () => {
  try {
    configuration.url = `/locations`
    configuration.method = 'post'
    configuration.data = store.getters.getZipCodes
    const { data } = await axios(configuration)
    return data
  } catch (error) {
    getError(error.response)
    return false
  }
}

/**
 * @description Set in general HTTP error status
 * @param { Object } error WS error
 */
const getError = (error) => {
  if (error.status == 401) {
    store.commit('logout')
  }
}
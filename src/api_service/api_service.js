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
    const conf = {...configuration}
    conf.url = `/auth/login`
    conf.data = body
    conf.method = 'post'
    await axios(conf)
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
    const conf = {...configuration}
    conf.url = `/auth/logout`
    conf.method = 'post'
    await axios(conf)
    return true
  } catch (error) {
    getError(error?.response)
    return false
  }
}

/**
 * @description Get Dogs
 * @returns { Object } Returns All dogs breed
 */
export const getDogs = async () => {
  try {
    const conf = {...configuration}
    conf.url = `/dogs/breeds`
    conf.method = 'get'
    const { data } = await axios(conf)
    return data
  } catch (error) {
    getError(error?.response)
    return []
  }
}

/**
 * @description Get Ids Dogs
 * @param { Object } payload Object for set a params
 * @returns { Boolean } Returns data for table or false!
 */
export const getIdsDogs = async (payload) => {
  try {
    const conf = {...configuration}
    conf.url = `/dogs/search`
    conf.method = 'get'
    conf.params = payload
    conf.paramsSerializer = params => {
      return qs.stringify(params)
    }
    const { data: { resultIds, total } } = await axios(conf)
    const result = await getDogsSearch(resultIds)
    return {
      result,
      total
    }
  } catch (error) {
    getError(error?.response)
    return false
  }
}

/**
 * @description Get Dogs
 * @param { Object } payload Array of id of dogs
 * @returns { Object | Boolean } Returns a data with dogs or false
 */
export const getDogsSearch = async (payload) => {
  try {
    const conf = {...configuration}
    conf.url = `/dogs`
    conf.method = 'post'
    conf.data = payload
    const { data } = await axios(conf)
    store.commit('setZipCodes', data)
    const locations = await getLocations()
    store.commit('setFullData', {
      data, locations
    })
    return store.getters.getFullData
  } catch (error) {
    getError(error?.response)
    return false
  }
}

/**
 * @description Get locations
 * @returns { Object | Boolean } Returns a data with dogs or false
 */
export const getLocations = async () => {
  try {
    const conf = {...configuration}
    conf.url = `/locations`
    conf.method = 'post'
    conf.data = store.getters.getZipCodes
    const { data } = await axios(conf)
    return data
  } catch (error) {
    getError(error?.response)
    return false
  }
}

/**
 * @description Get locations
 * @param { Object } payload Array of id of dogs
 * @returns { Object | Boolean } Returns a data with dogs or false
 */
export const getAdoption = async (payload) => {
  try {
    const conf = {...configuration}
    conf.url = `/dogs/match`
    conf.method = 'post'
    conf.data = payload
    const { data: { match } } = await axios(conf)
    return match
  } catch (error) {
    getError(error?.response)
    return false
  }
}

/**
 * @description Set in general HTTP error status
 * @param { Object } error WS error
 */
const getError = (error) => {
  if (!error) {
    return
  }
  if (error.status == 401) {
    store.commit('setLogout')
  }
}
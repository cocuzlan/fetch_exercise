/**
 * @description Set a store
 */

// Add libraries
import Vue from "vue";
import Vuex from "vuex";
import { router } from './../router/router'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {},
  // Define a variables
  state: {
    api_url: 'https://frontend-take-home-service.fetch.com',
    error_field: {},
    dog_breeds: [],
    zipCodes: [],
    dogsData: []
  },
  getters: {
    /**
     * @description Get if exists a error in field in form
     * @param { Object } state Variables store
     * @returns { Boolean }
     */
    getErrorField(state) {
      const array_field = Object.values(state.error_field)
      return array_field.some(element => element)
    },
    /**
     * @description Get a doupla to id and value per field
     * @param { Object } state Variables store
     * @returns { Object } Doupla variables
     */
    getData: () => (inputs) => {
      let values = {}
      for (const element of inputs) {
        element.value && (values[element.name] = element.value)
      }
      return values
    },
    /**
     * @description Get a URL for API
     * @param { Object } state Variables store
     * @returns { String } URL by API
     */
    getAPI(state) {
      return state.api_url
    },
    /**
     * @description Get a dog breeds
     * @param { Object } state Variables store
     * @returns { Object } Array of dogs
     */
    getDogBreeds(state) {
      return state.dog_breeds
    },
    /**
     * @description Get a zip codes
     * @param { Object } state Variables store
     * @returns { Object } Array of zip codes
     */
    getZipCodes(state) {
      return state.zipCodes
    },
    /**
     * @description Get a data
     * @param { Object } state Variables store
     * @returns { Object } Array of data
     */
    getFullData(state) {
      return state.dogsData
    },
  },
  mutations: {
    /**
     * @description Set a error per field
     * @param { Object } state  Variables in state
     * @param { Object } payload Fields by form
     */
    setErrorField(state, payload) {
      state.error_field[payload.id_field] = payload.error
    },
    /**
     * @description Set a clean variable error
     * @param { Object } state  Variables in state
     */
    setCleanErrorField(state) {
      state.error_field = {}
    },
    /**
     * @description Set breeds dogs
     * @param { Object } state  Variables in state
     */
    setDogBreed(state, payload) {
      state.dog_breeds = [...payload]
    },
    /**
     * @description Set zip codes from search
     * @param { Object } state  Variables in state
     */
    setZipCodes(state, payload) {
      state.zipCodes = payload.map(({ zip_code }) => (
        zip_code
      ))
    },
    /**
     * @description Set a data full from every dog
     * @param { Object } state  Variables in state
     */
    setFullData(state, payload) {
      state.dogsData = payload.data.map(({
        img,
        name,
        age,
        breed,
        zip_code,
        id
      }) => ({
        id,
        adoption: false,
        img,
        name,
        age,
        breed,
        location: payload.locations.find(el => {
          if (el) {
            return el['zip_code'] == zip_code
          }
        })
      }))
    },
    /**
     * @description Set a for logout
     * @param { Object } state  Variables in state
     */
    setLogout() {
      router.push({ name: 'login' }).catch(() => {})
    },
  },
  actions: {},
})

export { store }
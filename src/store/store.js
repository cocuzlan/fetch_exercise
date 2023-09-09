/**
 * @description Set a store
 */

// Add libraries
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {},
  // Define a variables
  state: {
    api_url: 'https://frontend-take-home-service.fetch.com',
    error_field: {},
    dog_breeds: []
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
  },
  actions: {},
})

export { store }
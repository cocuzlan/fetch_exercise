/**
 * @description Set a library i18n
 */

// Add libraries and files necessary for set configuration
import Vue from 'vue'
import VueI18n from "vue-i18n"
import es from './es.json'
import en from './en.json'

Vue.use(VueI18n)

// Possible lenguajes
const messages = {
  es,
  en
}

// Init i18n with Vue
const i18n = new VueI18n({
  locale: 'es',
  messages
})

export { i18n }

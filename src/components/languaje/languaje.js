export default {
  components: {},
  mixins: [],
  directives: {},
  props: {},
  data: function() {
    return {
      languaje: this.$i18n.locale,
    };
  },
  computed: {
    /**
     * @description Get possible lenaguajes
     * @returns { Array } with possible values
     */
    getLanguajes() {
      return this.$i18n.availableLocales
    }
  },
  watch: {},
  filters: {},
  methods: {
    /**
     * @description Change a languaje
     * @param { String } value Lenguaje to select
     */
    setLanguaje(value) {
      this.$i18n.locale = value.target.value
    },
  },
  beforeCreate: function() {},
  created: function() {},
  beforeMount: function() {},
  mounted: function() {},
  beforeUpdate: function() {},
  updated: function() {},
  activated: function() {},
  deactivated: function() {},
  beforeDestroy: function() {},
  destroyed: function() {}
};
import { mapMutations } from 'vuex'

export default {
  components: {},
  mixins: [],
  directives: {},
  props: {
    type: {
      type: String,
      default: 'text'
    },
    id: {
      type: String,
      default: 'id'
    },
    label: {
      type: String,
      default: 'components.string.label'
    },
    placeholder: {
      type: String,
      default: 'components.string.placeholder'
    },
    required: {
      type: Boolean,
      default: false
    },
    minlength: {
      type: String,
      default: '20'
    },
    maxlength: {
      type: String,
      default: '50'
    },
    pattern: {
      type: String,
      default: '^[A-Za-z\\d]*$'
    },
    required_msg: {
      type: String,
      default: 'components.string.msg_required'
    },
    pattern_msg: {
      type: String,
      default: 'components.string.msg_pattern'
    },
    length_msg: {
      type: String,
      default: 'components.string.msg_lenght'
    }
  },
  data: function() {
    return {
      input_value: '',
      error_msg: ''
    };
  },
  computed: {},
  watch: {
    /**
     * @description Checks a value and evalute a conditionals
     * @param { String } value Field data
     * @returns Set a error in data
     */
    input_value(value) {
      this.error_msg = ''
      this.error_msg = this.setRequired(value)
      if (this.error_msg) {
        this.setErrorField({
          id_field: this.$props.id,
          error: true
        })
        return
      }
      this.error_msg = this.setRegex(value)
      if (this.error_msg) {
        this.setErrorField({
          id_field: this.$props.id,
          error: true
        })
        return
      }
      this.setErrorField({
        id_field: this.$props.id,
        error: false
      })
    }
  },
  filters: {},
  methods: {
    ...mapMutations(['setErrorField']),
    /**
     * @description Evaluates the data field if exists
     * @param { String } value Field value
     * @returns A message error required
     */
    setRequired(value) {
      if (!value) {
        return this.$props.required_msg
      }
    },
    /**
     * @description Evaluates the data field with one regex
     * @param { String } value Field value
     * @returns A message error regex
     */
    setRegex(value) {
      const regex = new RegExp(this.$props.pattern)
      if (!(regex.test(value))) {
        return this.$props.pattern_msg
      }
    }
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
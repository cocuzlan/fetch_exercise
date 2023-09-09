import ComponentString from "../../components/string/ComponentString"
import { getRegexEmail } from "../../regex/regex";
import { mapMutations, mapGetters } from 'vuex'
import { getToken } from "../../api_service/api_service"

export default {
  components: {
    ComponentString
  },
  mixins: [],
  directives: {},
  props: {},
  data: function() {
    return {
      // Data returns a regex to evalute
      getRegexEmail,
      error: ''
    };
  },
  computed: {
    ...mapGetters(['getErrorField', 'getData']),
  },
  watch: {},
  filters: {},
  methods: {
    ...mapMutations(['setCleanErrorField']),
    /**
     * @description Methods to do login
     */
    async getFormValues() {
      // Check  don´t exist any error in the fields
      if (this.getErrorField) {
        this.setCleanErrorField()
        return
      }
      // Obtain the input
      const inputs = document.getElementById("form_login").elements
      // Create a duppla, example: id_field = value
      const values = this.getData(inputs)
      // Call to web service
      const result = await getToken(values)
      // Exists a error show a toast
      if (!result) {
        this.error = this.$i18n.t('login.form.error')
        return
      }
      // If is OK move to welcome
      this.$router.push({ name: 'welcome' })
    }
  },
  beforeCreate: function() {},
  created: function() {},
  beforeMount: function() {},
  mounted: async function() {},
  beforeUpdate: function() {},
  updated: function() {},
  activated: function() {},
  deactivated: function() {},
  beforeDestroy: function() {},
  destroyed: function() {}
};
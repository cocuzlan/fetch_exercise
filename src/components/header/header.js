import Languaje from '../languaje/ComponentLanguaje';
import { getLogout } from "../../api_service/api_service"

export default {
  components: {
    Languaje
  },
  mixins: [],
  directives: {},
  props: {},
  data: function() {
    return {
      error: ''
    };
  },
  computed: {},
  watch: {},
  filters: {},
  methods: {
    async logout() {
      // Call to web service
      const result = await getLogout()
      // Exists a error show a toast
      if (!result) {
        this.error = this.$i18n.t('login.form.error')
        setTimeout(() => {
          this.error = ''
        }, 3000);
        return
      }
      this.$router.push({ name: 'login' })
    }
  },
  beforeCreate: function() {},
  beforeMount: function() {},
  mounted: function() {},
  beforeUpdate: function() {},
  updated: function() {},
  activated: function() {},
  deactivated: function() {},
  beforeDestroy: function() {},
  destroyed: function() {}
};
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  components: {
    vSelect
  },
  mixins: [],
  directives: {},
  props: {
    id: {
      type: String,
      default: 'id'
    },
    options: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: 'components.string.label'
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      select_value: [],
      error_msg: false
    };
  },
  computed: {},
  watch: {
    select_value(val) {
      if (!val.length) {
        this.error_msg = true
        setTimeout(() => {
          this.error_msg = false
        }, 3000);
      }
    }
  },
  filters: {},
  methods: {},
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
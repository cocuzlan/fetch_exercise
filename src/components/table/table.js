export default {
  components: {},
  mixins: [],
  directives: {},
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data: function() {
    return {};
  },
  computed: {},
  watch: {},
  filters: {},
  methods: {
    transformTH(val) {
      return val.replace('_', ' ')
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
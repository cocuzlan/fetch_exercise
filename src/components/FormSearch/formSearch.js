import ComponentSelect from '../select/ComponentSelect.vue'
import ComponentTable from '../table/ComponentTable.vue'
import { mapGetters } from 'vuex'
import { getIdsDogs } from './../../api_service/api_service'

export default {
  components: {
    ComponentSelect,
    ComponentTable
  },
  mixins: [],
  directives: {},
  props: {},
  data: function() {
    return {
      dogs_breed: [],
      error: '',
      data_dogs: []
    };
  },
  computed: {
    ...mapGetters(['getDogBreeds']),
  },
  watch: {},
  filters: {},
  methods: {
    async getFormValues() {
      this.data_dogs.length = 0
      if (!this.dogs_breed.length) {
        return
      }
      const params = {
        breeds: this.dogs_breed
      }
      const result = await getIdsDogs(params)
      if (!result) {
        this.error = this.$i18n.t('login.form.error')
      }
      this.data_dogs = [...result]
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
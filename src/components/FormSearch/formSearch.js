import ComponentSelect from '../select/ComponentSelect.vue'
import ComponentString from '../string/ComponentString.vue'
import ComponentTable from '../table/ComponentTable.vue'
import ComponentModal from '../modal/ComponentModal.vue'
import { getIdsDogs, getAdoption } from './../../api_service/api_service'
import { getAge } from "../../regex/regex";
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    ComponentSelect,
    ComponentString,
    ComponentTable,
    ComponentModal
  },
  mixins: [],
  directives: {},
  props: {},
  data: function() {
    return {
      getAge,
      table_headers: [
        'adoption',
        'img',
        'name',
        'age',
        'breed',
        'location'
      ],
      table_headers2: [
        'img',
        'name',
        'age',
        'breed',
        'location'
      ],
      dogs_breed: [],
      error: '',
      data_dogs: [],
      dogs_adoption: [],
      dog_adopt: []
    };
  },
  computed: {
    ...mapGetters(['getDogBreeds', 'getData']),
  },
  watch: {},
  filters: {},
  methods: {
    ...mapMutations(['setCleanErrorField']),
    async getFormValues() {
      // Clear table
      this.data_dogs.length = 0
      // Check if select minium one breed
      if (!this.dogs_breed.length || this.getErrorField) {
        this.setCleanErrorField()
        this.$refs['component_select'].error_msg = 'components.string.components'
        setTimeout(() => {
          this.$refs['component_select'].error_msg = ''
        }, 3000)
        return
      }
      // Obtain the input
      const inputs = document.getElementById("form_search").elements
      const params = this.getData(inputs)
      params.breeds = this.dogs_breed
      const result = await getIdsDogs(params)
      if (!result) {
        this.error = this.$i18n.t('login.form.error')
        return
      }
      this.data_dogs = [...result]
    },
    openModal(){
      this.$refs['modal'].openModal()
    },
    async adopteMe() {
      const res = await getAdoption(this.dogs_adoption)
      this.dog_adopt.push(this.data_dogs.find(el => el.id === res))
      this.$refs['modal'].closeModal()
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
let modal = {}
export default {
  components: {},
  mixins: [],
  directives: {},
  props: {
    width: {
      type: String,
      default: '80%'
    },
    title: {
      type: String,
      default: 'components.modal.title'
    },
    buttons: {
      type: Array,
      default: () => [
        { 'color': '#d9534f', 'label': 'components.modal.close', 'action': 'close' },
        { 'color': '#5cb85c', 'label': 'components.modal.accept', 'action': 'accept' },
      ],
    },
    persists: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {};
  },
  computed: {},
  watch: {},
  filters: {},
  methods: {
    /**
     * @description Show the modal
     */
    openModal() {
      modal.style.display = "block"
    },
    /**
     * @description Close the modal
     */
    closeModal() {
      modal.style.display = "none"
    },
    /**
     * @description Methos general for any action per button
     * @param { String } action Event per button
     */
    modalAction(action) {
      const type_action = {
        'close': () => this.closeModal(),
        'accept': () => false,
        'default': () => this.$emit('custom-event'),
      };
      (type_action[action] || type_action['default'])();
    },
    /**
     * @description Lister to check a size of modal
     * @param { String } width Size of modal
     */
    sizeModal(width) {
      let buttons = document.getElementById('modal_general_buttons')
      const integer = +(width.slice(0, -1))
      if (integer < 40 ) {
        buttons.style.display = 'grid';
        return
      }
      buttons.style.display = 'flex';
    },
    /**
     * @description Return a elements in form
     * @param { Object } e Form with elements
     */
    async getFormValues(e) {
      if (!e) {
        return
      }
      const values = {}
      for (const element of e.srcElement) {
        element.value && (values[element.name] = element.value)
      }
      this.$emit('accept', values)
    }
  },
  beforeCreate: function() {},
  created: function() {},
  beforeMount: function() {},
  mounted: function() {
    // Init a size modal and init method
    modal = document.getElementById("id_modal")
    const { width } = document.getElementById("modal_general").style
    this.sizeModal(width)
  },
  beforeUpdate: function() {},
  updated: function() {},
  activated: function() {},
  deactivated: function() {},
  beforeDestroy: function() {},
  destroyed: function() {}
};
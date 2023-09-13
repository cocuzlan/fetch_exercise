export default {
  components: {},
  mixins: [],
  directives: {},
  props: {
    total:{
      type: Number,
      default: 0
    },
    size:{
      type:Number,
      default: 25
    }
  },
  data: function() {
    return {
      pageNumber: 1,
      pags: [1,2]
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.total/this.size)
    },
    buttonPrev() {
      return this.pageNumber === 1
    },
    buttonNext() {
      return this.pageNumber === this.totalPage
    }
  },
  watch: {
    pageNumber(val) {
      if (this.buttonPrev) {
        this.pags = [1,2]
      } else if (this.buttonNext) {
        let b = this.totalPage-1
        this.pags = [b, this.totalPage]
      } else {
        let a = val-1
        let b = val+1
        this.pags = [a,val, b]
      }
    }
  },
  filters: {},
  methods: {
    nextPage(){
      if (this.pageNumber !== this.totalPage) {
        this.$emit('next-page', this.size*this.pageNumber)
        this.pageNumber++
      }
    },
    prevPage(){
      if (this.pageNumber !== 1) {
        this.pageNumber--
        this.$emit('prev-page', this.size*(this.pageNumber-1))
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
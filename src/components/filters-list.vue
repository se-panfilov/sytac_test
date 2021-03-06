<template>
  <section class="section filter-list">
    <div class="container filter-list__elem">
      <select-box :source="types"
                  name="types"
                  class="filter-list__select-box"
                  label="Types"
                  v-on:item-selected="onSelect($event, 'type')"
      ></select-box>
      <div class="filter-list__items-count">
        <span class="filter-list__items-count-text" v-text="'total:' + (types.length - 1)"></span>
      </div>
    </div>
    <div class="container filter-list__elem">
      <select-box :source="brands"
                  name="brands"
                  class="filter-list__select-box"
                  label="Brands"
                  v-on:item-selected="onSelect($event, 'brand')"
      ></select-box>
      <div class="filter-list__items-count">
        <span class="filter-list__items-count-text" v-text="'total:' + (brands.length - 1)"></span>
      </div>
    </div>
    <div class="container filter-list__elem">
      <select-box :source="colors"
                  name="colors"
                  class="filter-list__select-box"
                  label="Colors"
                  v-on:item-selected="onSelect($event, 'color')"
      ></select-box>
      <div class="filter-list__items-count">
        <span class="filter-list__items-count-text" v-text="'total:' + (colors.length - 1)"></span>
      </div>
    </div>
  </section>
</template>

<script>
  import SelectBox from './select-box'

  export default {
    name: 'FiltersList',
    data () {
      return {
        filter: {
          type: null,
          brand: null,
          color: null
        }
      }
    },
    props: {
      source: {
        type: Array,
        required: true
      }
    },
    methods: {
      getUniq (arr) {
        if (!arr) throw new Error(`getUniq: array is mandatory`)
        return [...new Set(arr)]
      },
      onSelect (event, type) {
        this.filter[type] = event.target.value
        this.$emit('changed', this.filter)
      },
      filterBy (arr, val, field) {
        if (!arr || !val || !field) throw new Error(`filterBy: params should exist`)
        return arr.filter(v => v[field] === val)
      },
      filterByColors (arr, val) {
        if (!arr || !val) throw new Error(`filterByColors: params should exist`)
        return arr.filter(v => v.colors.indexOf(val) > -1)
      },
      getFilteredArr (arr, field, method = 'filterBy') {
        if (!arr || !field) throw new Error(`getFilteredArr: params should exist`)
        return (this.filter[field]) ? this[method](arr, this.filter[field], field) : arr
      }
    },
    computed: {
      types () {
        const result = this.getUniq(this.filteredTypes.map(v => v.type))
        return [''].concat(result)
      },
      brands () {
        const result = this.getUniq(this.filteredBrands.map(v => v.brand))
        return [''].concat(result)
      },
      colors () {
        const arrOfArr = this.filteredColors.map(v => v.colors)
        const mergedArr = [].concat.apply([], arrOfArr)
        const result = this.getUniq(mergedArr)
        return [''].concat(result)
      },
      filteredTypes () {
        const filteredArr = this.getFilteredArr(this.source, 'color', 'filterByColors')
        return this.getFilteredArr(filteredArr, 'brand')
      },
      filteredBrands () {
        const filteredArr = this.getFilteredArr(this.source, 'color', 'filterByColors')
        return this.getFilteredArr(filteredArr, 'type')
      },
      filteredColors () {
        const filteredArr = this.getFilteredArr(this.source, 'type', 'filterBy')
        return this.getFilteredArr(filteredArr, 'brand', 'filterBy')
      }
    },
    components: {
      SelectBox
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .filter-list
    box-shadow 2px 2px 3px rgba(10, 10, 10, 0.1)
    border 1px solid #dfdfdf
    &__elem
      margin-bottom 15px
    &__select-box
      display inline-block
      margin-bottom 0
    &__items-count
      display block
      vertical-align middle
    &__items-count
      font-style italic
      color #999999
</style>

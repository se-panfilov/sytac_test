<template>
  <section class="content box details">
    <section class="hero has-text-centered details__elem">
      <div class="subtitle details__item -type"
           v-text="selected.type"></div>
      <div class="title details__item -brand"
           v-text="selected.brand"></div>
      <div class="subtitle details__item -color">
        <span class="color-preview"
              v-show="selected.color"
              :style="'background-color: ' + selected.color"></span>
        <span class="color-text-preview" v-text="selected.color"></span>
      </div>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'DetailsView',
    data () {
      return {}
    },
    props: {
      selected: {
        type: Object,
        default: {}
      }
    },
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .details
    box-shadow 2px 2px 3px rgba(10, 10, 10, 0.1)
    border 1px solid #dfdfdf
    height 100%
    .color-preview
      display inline-block
      height 35px
      width 35px
      border 1px solid #e0e0e0
      border-radius 3px
    .color-text-preview
      vertical-align super
      display inline-block
      font-style italic

    .title
      font-size 3rem
      font-weight 400
</style>

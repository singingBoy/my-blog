<template>
  <svg class="default" :style="iconStyle" :fill="iconColor" aria-hidden="true">
    <use :xlink:href="`#${iconName}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconName: {
      type: String,
      required: true
    },
    iconStyle: String,
    iconColor: {
      type: String,
      default: '#707070'
    }
  }
}
</script>
<style scoped>
  .default{
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }
</style>

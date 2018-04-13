<template>
    <item-small class="small-box"></item-small>
</template>
<script>
import ItemSmall from './LiveItemSmall.vue'
export default {
  name: 'SmallBox',
  components: {
      ItemSmall
  }
}
</script>
<style lang="scss" scoped>
    .small-box{
        height: 4.4rem;
    }
</style>

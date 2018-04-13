<template>
    <item-small :type="type" class="small-box"></item-small>
</template>
<script>
import ItemSmall from './LiveItemSmall.vue'
export default {
  name: 'SmallBox',
  props: ['type'],
  components: {
      ItemSmall
  }
}
</script>
<style lang="scss" scoped>
    
</style>

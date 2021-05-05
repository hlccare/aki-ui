<template>
    <div class="aki-dropdown-menu-label" v-if="label">{{label}}</div>
    <slot />
</template>

<script lang="ts">
export default {
  props:{
    label:{
      type: String
    }
  }
}
</script>
<style lang="scss">

</style>
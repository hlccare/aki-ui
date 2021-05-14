<template>
  <Popover>
    <template v-slot:content>
      <div>popover内容1</div>
    </template>
    <template v-slot:default>
      <button>点击</button>
    </template>
  </Popover>
  <Popover>
    <template v-slot:content>
      <div>popover内容2</div>
    </template>
    <template v-slot:default>
      <button>点击</button>
    </template>
  </Popover>
</template>

<script>
import Popover from "../lib/Popover.vue";
export default {
  components: { Popover },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
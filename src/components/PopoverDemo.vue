<template>
  <Popover>
    <template v-slot:content>
      <div>popover内容1</div>
    </template>
    <template v-slot:default>
      <Button>点击</Button>
    </template>
  </Popover>
  <Popover>
    <template v-slot:content>
      <div>popover内容2</div>
    </template>
    <template v-slot:default>
      <Button>点击</Button>
    </template>
  </Popover>
</template>

<script>
import Popover from "../lib/Popover.vue";
import Button from "../lib/Button.vue";

export default {
  components: { Popover,Button },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
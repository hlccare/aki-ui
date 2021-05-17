<template>
  <div>
    <Popover trigger="hover">
      <template v-slot:content>
        <div>popover内容1</div>
      </template>
      <template v-slot:default>
        <Button>点击</Button>
      </template>
    </Popover>
    <Popover position="bottom" trigger="hover">
      <template v-slot:content>
        <div>popover内容2</div>
      </template>
      <template v-slot:default>
        <Button>点击</Button>
      </template>
    </Popover>
    <Popover position="left" trigger="hover">
      <template v-slot:content>
        <div>popover内容2</div>
      </template>
      <template v-slot:default>
        <Button>点击</Button>
      </template>
    </Popover>
    <Popover position="right" trigger="hover">
      <template v-slot:content>
        <div>popover内容2</div>
      </template>
      <template v-slot:default>
        <Button>点击</Button>
      </template>
    </Popover>
  </div>
</template>

<script>
import Popover from "../lib/Popover.vue";
import Button from "../lib/Button.vue";
export default {
  components: {
    Popover,
    Button,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
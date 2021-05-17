<template>
  <div>
    <Popover>
      <template v-slot:content="slotProp">
        <div>
          popover内容1
          <Button @click="slotProp.close">点击关闭</Button>
        </div>
      </template>
      <template v-slot:default>
        <Button>点击</Button>
      </template>
    </Popover>
    <Popover position="bottom">
      <template v-slot:content>
        <div>popover内容2</div>
      </template>
      <template v-slot:default>
        <Button>点击</Button>
      </template>
    </Popover>
    <Popover position="left">
      <template v-slot:content>
        <div>popover内容2</div>
      </template>
      <template v-slot:default>
        <Button>点击</Button>
      </template>
    </Popover>
    <Popover position="right">
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
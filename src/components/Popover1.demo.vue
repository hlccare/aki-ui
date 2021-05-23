<demo>
基础使用 支持多方位
</demo>
<template>
  <div>
    <Popover>
      <template v-slot:content>
        <div>
          内容
        </div>
      </template>
      <template v-slot:default>
        <Button>点击</Button>
      </template>
    </Popover>
    <Popover position="left">
      <template v-slot:content>
        <div>内容</div>
      </template>
      <template v-slot:default>
        <Button>点击</Button>
      </template>
    </Popover>
    <Popover position="right">
      <template v-slot:content>
        <div>内容</div>
      </template>
      <template v-slot:default>
        <Button>点击</Button>
      </template>
    </Popover>
    <Popover position="bottom">
      <template v-slot:content>
        <div>内容</div>
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
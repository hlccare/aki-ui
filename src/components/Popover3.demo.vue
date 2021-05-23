<demo>
支持主动关闭（作用域插槽）
</demo>
<template>
  <div>
    <Popover>
      <template v-slot:content="slotProp">
        <div>
          内容
          <Button @click="slotProp.close">点击关闭</Button>
        </div>
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
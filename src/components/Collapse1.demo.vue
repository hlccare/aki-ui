<demo>
基础使用
</demo>
<template>
  <div>
    <Collapse v-model:selected="selected">
      <collapse-item title="标题1" name="1">内容1</collapse-item>
      <collapse-item title="标题2" name="2">内容2</collapse-item>
      <collapse-item title="标题3" name="3">内容3</collapse-item>
      <collapse-item title="标题4" name="4">内容4</collapse-item>
    </Collapse>
  </div>
</template>

<script>
import { reactive } from "vue";
import Collapse from "../lib/Collapse.vue";
import CollapseItem from "../lib/CollapseItem.vue";
export default {
  components: {
    Collapse,
    CollapseItem,
  },
  setup() {
    const selected = reactive(["1", "3"]);
    return { selected };
  },
};
</script>

<style lang="scss" scoped>
</style>
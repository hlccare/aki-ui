<demo>
常规使用
</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="标签一">内容一</Tab>
    <Tab title="标签二">内容二</Tab>
    <Tab title="标签三">内容三</Tab>
  </Tabs>
</template>
<script lang="ts">
import { Tabs, Tab } from "../lib/index";
import { ref } from "vue";

export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const x = ref("标签一");
    return { x };
  },
};
</script>
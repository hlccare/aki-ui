<template>
    <div>
        <h1>Collapse 示例</h1>
        <Demo :component="CollapseDemo1" />
        <Demo :component="CollapseDemo2" />
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Demo from "./Demo.vue";
import CollapseDemo1 from "./Collapse1.demo.vue";
import CollapseDemo2 from "./Collapse2.demo.vue";

export default defineComponent({
  components: { Demo },
  setup() {
    return { CollapseDemo1, CollapseDemo2 };
  },
});
</script>
<style lang="scss">
</style>
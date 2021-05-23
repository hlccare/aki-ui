<template>
<div>
  <h1>Popover 示例</h1>
  <Demo :component="Popover1" />
  <Demo :component="Popover2" />
  <Demo :component="Popover3" />
</div>
</template>

<script>
import Demo from "./Demo.vue";

import Popover1 from "./Popover1.demo.vue";
import Popover2 from "./Popover2.demo.vue";
import Popover3 from "./Popover3.demo.vue";

export default {
  components: { Demo },
  setup() {
    return { Popover1, Popover2,Popover3 };
  },
};
</script>

<style lang="scss" scoped>
</style>
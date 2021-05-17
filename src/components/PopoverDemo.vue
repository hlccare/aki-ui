<template>
  <Demo :component="Popover1" />
  <Demo :component="Popover2" />
</template>

<script>
import Demo from "./Demo.vue";

import Popover1 from "./Popover1.demo.vue";
import Popover2 from "./Popover2.demo.vue";

export default {
  components: { Demo },
  setup() {
    return { Popover1, Popover2 };
  },
};
</script>

<style lang="scss" scoped>
</style>
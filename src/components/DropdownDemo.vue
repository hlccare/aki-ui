<template>
<div>
  <h1>Dropdown 示例</h1>
  <Demo :component="Dropdown1Demo" />
  <Demo :component="Dropdown2Demo" />
  <Demo :component="Dropdown3Demo" />
</div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Dropdown1Demo from "./Dropdown1.demo.vue";
import Dropdown2Demo from "./Dropdown2.demo.vue";
import Dropdown3Demo from "./Dropdown3.demo.vue";


export default {
  components: { Demo },
  setup() {
    return { Dropdown1Demo, Dropdown2Demo, Dropdown3Demo };
  },
};
</script>

<style lang="scss">
.aki-dropdown-link {
  cursor: pointer;
  position: relative;
  color: #409eff;

  > i {
    border-color: #409eff;
  }
}
i {
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
  text-align: center;
  position: absolute;
  right: -12px;
  top: 4px;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>
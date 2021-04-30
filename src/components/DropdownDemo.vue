<template>
  <Dropdown>
    <div>
      <span class="aki-dropdown-link">
        下拉菜单<i class="lin-icon-arrow-down down"></i>
      </span>
      <!-- <DropdownMenu slot="dropdown"> -->
      <DropdownMenu>
        <DropdownMenuItem>黄金糕</DropdownMenuItem>
        <DropdownMenuItem>狮子头</DropdownMenuItem>
        <DropdownMenuItem>螺蛳粉</DropdownMenuItem>
        <DropdownMenuItem disabled>双皮奶</DropdownMenuItem>
        <DropdownMenuItem divided>蚵仔煎</DropdownMenuItem>
      </DropdownMenu>
    </div>
  </Dropdown>
</template>

<script lang="ts">
import Dropdown from "../lib/Dropdown.vue";
import DropdownMenu from "../lib/DropdownMenu.vue";
export default {
  components: { Dropdown, DropdownMenu },
  setup() {
    return { Dropdown, DropdownMenu };
  },
};
</script>

<style>
.aki-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.aki-icon-arrow-down {
  font-size: 12px;
}
i {
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>
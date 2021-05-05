<template>
  <Dropdown>
      <span class="aki-dropdown-link">
        下拉菜单<i class="lin-icon-arrow-down down"></i>
      </span>
      <template  v-slot:dropdownMenu>
      <DropdownMenu>
        <DropdownMenuItem>黄金糕</DropdownMenuItem>
        <DropdownMenuItem>狮子头</DropdownMenuItem>
        <DropdownMenuItem>螺蛳粉</DropdownMenuItem>
        <DropdownMenuItem disabled>双皮奶</DropdownMenuItem>
        <DropdownMenuItem divided>蚵仔煎</DropdownMenuItem>
      </DropdownMenu>
      </template>
  </Dropdown>
  <Dropdown trigger='click'>
      <span class="aki-dropdown-link">
        下拉菜单<i class="lin-icon-arrow-down down"></i>
      </span>
      <template  v-slot:dropdownMenu>
      <DropdownMenu>
        <DropdownMenuItem>黄金糕</DropdownMenuItem>
        <DropdownMenuItem>狮子头</DropdownMenuItem>
        <DropdownMenuItem>螺蛳粉</DropdownMenuItem>
        <DropdownMenuItem disabled>双皮奶</DropdownMenuItem>
        <DropdownMenuItem divided>蚵仔煎</DropdownMenuItem>
      </DropdownMenu>
      </template>
  </Dropdown>
</template>

<script lang="ts">
import Dropdown from "../lib/Dropdown.vue";
import DropdownMenu from "../lib/DropdownMenu.vue";
import DropdownMenuItem from '../lib/DropdownMenuItem.vue'
export default {
  components: { Dropdown, DropdownMenu,DropdownMenuItem },
  setup() {
    return { Dropdown, DropdownMenu };
  },
};
</script>

<style lang="scss">
.aki-dropdown-link {
  cursor: pointer;
  position: relative;
    color: #409eff;

  > i{
    border-color: #409eff;
  }
}
.aki-icon-arrow-down {
  font-size: 12px;
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
<demo>
支持 click 触发
</demo>
<template>
  <Dropdown trigger="click">
    <span class="aki-dropdown-link"> 下拉菜单<i class="down"></i> </span>
    <template v-slot:dropdownMenu>
      <DropdownMenu>
        <DropdownMenuItem>黄金糕</DropdownMenuItem>
        <DropdownMenuItem>狮子头</DropdownMenuItem>
        <DropdownMenuItem>螺蛳粉</DropdownMenuItem>
      </DropdownMenu>
    </template>
  </Dropdown>
</template>

<script>
import Dropdown from "../lib/Dropdown.vue";
import DropdownMenu from "../lib/DropdownMenu.vue";
import DropdownMenuItem from "../lib/DropdownMenuItem.vue";
export default {
  components: { Dropdown, DropdownMenu, DropdownMenuItem },
  setup() {
    return { Dropdown, DropdownMenu, DropdownMenuItem };
  },
};
</script>

<style lang="scss" scoped>
</style>
<demo>
动态创建 Dialog
</demo>
<template>
  <div>
    <Button @click="showDialog">show</Button>
  </div>
</template>
<script lang="ts">
import { h } from "vue";
import { Button, openDialog } from "../lib/index";
export default {
  components: { Button },
  setup() {
    const showDialog = () => {
      openDialog({
        title: () => h("strong", {}, "标题"),
        content: () => "你好",
        ok: () => {
          console.log("ok");
        },
        cancel: () => {
          console.log("cancel");
        },
        closeOnClickOverlay: false,
      });
    };
    return { showDialog };
  },
};
</script>
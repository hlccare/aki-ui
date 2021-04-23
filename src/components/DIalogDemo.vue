<template>
  <div>DialogDemo</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:title>
      <strong>加粗标题</strong>
    </template>
    <template v-slot:content>
      <div>1</div>
      <div>2</div>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="show">show</Button>
</template>
<script lang='ts'>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    const show = () => {
      openDialog({
        title: () => "标题",
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
    return { x, toggle, f1, f2, show };
  },
};
</script>
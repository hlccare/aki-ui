<demo>
常规使用
</demo>
<template>
<div>
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
</div>
</template>
<script lang="ts">
import {Button, Dialog} from '../lib/index'
import { ref } from "vue";
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
    return { x, toggle, f1, f2 };
  },
};
</script>
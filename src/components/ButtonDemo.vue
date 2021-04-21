<template>
  <div>ButtonDemo</div>
  <div>
    <Button>123</Button>
    <Button theme="button">123</Button>
    <Button theme="link">123</Button>
    <Button theme="text">123</Button>
  </div>
</template>
<script lang='ts'>
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script>
<template>
  <div class="aki-popover" @click.stop="xxx" ref="popover">
    <Teleport to="body">
      <div class="aki-content-wrapper" v-if="visible" ref="contentWrapper">
        <slot name="content" />
      </div>
    </Teleport>
    <span ref="triggerWrapper">
      <slot />
    </span>
    {{ visible }}
  </div>
</template>

<script lang='ts'>
import { nextTick, onMounted, onUnmounted, ref, toRefs } from "vue";

export default {
  setup() {
    const visible = ref(false);
    const popover = ref(null);
    const triggerWrapper = ref(null);
    const contentWrapper = ref(null);
    const xxx = () => {
      visible.value = !visible.value;
      nextTick(() => {
        let { top, left } = triggerWrapper.value.getBoundingClientRect();
        contentWrapper.value.style.top = top + "px";
        contentWrapper.value.style.left = left + "px";
      });
    };
    const onDocumentClick = (event) => {
      console.log(popover);
      if (!popover.value.contains(event.target)) {
        visible.value = false;
      }
    };
    onMounted(() => {
      document.addEventListener("click", onDocumentClick);
    });
    onUnmounted(() => {
      document.removeEventListener("click", onDocumentClick);
    });
    return { visible, xxx, popover, triggerWrapper, contentWrapper };
  },
};
</script>

<style lang="scss" scoped>
.aki-popover {
  display: inline-block;
  position: relative;
}
.aki-content-wrapper {
  z-index: 10;
  position: absolute;
  border: 1px solid grey;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>
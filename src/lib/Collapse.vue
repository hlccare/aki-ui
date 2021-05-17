<template>
  <div class="aki-collapse">
    <slot />
  </div>
</template>

<script lang='ts'>
import { Emitter } from "mitt";
import { defineComponent, getCurrentInstance, onMounted, provide } from "vue";
export default defineComponent({
  props: {
    selected: {
      type: Array,
    },
    single: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const internalInstance = getCurrentInstance();
    const bus: Emitter = internalInstance.appContext.config.globalProperties.$bus();
    provide("bus", bus);
    onMounted(() => {
      bus.emit("update:selected", props.selected);
      bus.on("update:addSelected", (name) => {
        if (props.single) {
          props.selected.splice(0);
        }
        props.selected.push(name);
        context.emit("update:selected", props.selected);
        bus.emit("update:selected", props.selected);
      });
      bus.on("update:removeSelected", (name) => {
        let index = props.selected.indexOf(name);
        props.selected.splice(index, 1);
        context.emit("update:selected", props.selected);
        bus.emit("update:selected", props.selected);
      });
    });
  },
});
</script>

<style lang='scss'>
$grey: #ddd;
$border-radius: 4px;
.aki-collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>
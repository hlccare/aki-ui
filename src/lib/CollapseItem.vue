<template>
  <div class="aki-collapse-item">
    <div class="aki-collapse-title" @click="toggle">
      {{ title }}
    </div>
    <div class="aki-collapse-content" v-if="open">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject, onMounted, ref } from "vue";
import { Emitter } from "mitt";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const open = ref(false);
    const bus = inject<Emitter>("bus");
    onMounted(() => {
      bus.on("update:selected", (nameArray: string[]) => {
        if (nameArray.indexOf(props.name) >= 0) {
          open.value = true;
        } else {
          open.value = false;
        }
      });
    });
    const toggle = () => {
      if (open.value) {
        open.value = false;
        bus.emit("update:removeSelected", props.name);
      } else {
        bus.emit("update:addSelected", props.name);
      }
    };
    return { open, toggle };
  },
});
</script>
<style lang="scss">
$grey: #ddd;
$border-radius: 4px;
.aki-collapse-item {
  > .aki-collapse-title {
    border: 1px solid $grey;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  &:first-child {
    > .aki-collapse-title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  .aki-collapse-content {
    padding: 8px;
  }
}
</style>
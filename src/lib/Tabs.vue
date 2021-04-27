<template>
  <div class="aki-tabs">
    <div class="aki-tabs-nav" ref="container">
      <div
        class="aki-tabs-nav-item"
        v-for="(t, index) in titles"
        :ref="
          (el) => {
            if (t === selected) selectedItem = el;
          }
        "
        @click="select(t)"
        :class="{ selected: t === selected }"
        :key="index"
      >
        {{ t }}
      </div>
      <div class="aki-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="aki-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, onUpdated, ref, watchEffect } from "vue";
import Tab from "../lib/Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const x = () => {
      const {
        width,
        left: resultLeft,
      } = selectedItem.value.getBoundingClientRect();
      indicator.value.style.width = width + "px";
      const { left: containerLeft } = container.value.getBoundingClientRect();
      const indicatorLeft = resultLeft - containerLeft;
      indicator.value.style.left = indicatorLeft + "px";
    };
    onMounted(() => watchEffect(x, { flush: "post" }));
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      //@ts-ignore
      if (tag.type.name !== Tab.name) {
        throw new Error("Tabs 子标签必须是Tab");
      }
    });
    const current = computed(() => {
      return defaults.find((tag) => tag.props.title === props.selected);
    });
    const titles = defaults.map((tag) => tag.props.title);
    const select = (title: String) => {
      context.emit("update:selected", title);
    };
    return {
      selectedItem,
      indicator,
      container,
      defaults,
      titles,
      select,
      current,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.aki-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>
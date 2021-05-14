<template>
  <div
    @mouseenter="showMenu"
    @mouseleave="hideMenu"
    @click="toggleMenu"
    class="aki-dropdown"
    ref="dropdownContainer"
  >
    <div class="aki-label" ref="dropdownLabel">
      <slot />
    </div>
    <transition name="dropdown-menu-fade">
      <div v-show="menuVisible" class="aki-menu-container" ref="menuContainer">
        <slot name="dropdownMenu" />
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
import { InjectionKey, onMounted, onUnmounted, provide, ref } from "vue";

export default {
  props: {
    trigger: {
      type: String,
      default: "hover",
    },
  },
  setup(props) {
    const { trigger } = props;
    const menuVisible = ref(false);
    const menuContainer = ref(null);

    const dropdownContainer = ref(null);
    const dropdownLabel = ref(null);
    // eslint:disable-next-line
    provide(menuVisible, "menuVisible");
    const showMenu = () => {
      if (trigger === "hover" && !menuVisible.value) {
        menuVisible.value = true;
      }
    };
    const hideMenu = () => {
      if (trigger === "hover" && menuVisible.value) {
        menuVisible.value = false;
      }
    };
    const toggleMenu = () => {
      if (trigger === "click") {
        menuVisible.value = !menuVisible.value;
      }
    };
    const onDocumentClick = (event) => {
      if (!dropdownContainer.value.contains(event.target)) {
        menuVisible.value = false;
      }
    };
    onMounted(() => {
      if (trigger === "click") {
        document.addEventListener("click", onDocumentClick);
      }
    });
    onUnmounted(() => {
      if (trigger === "click") {
        document.removeEventListener("click", onDocumentClick);
      }
    });
    return {
      menuVisible,
      showMenu,
      hideMenu,
      toggleMenu,
      menuContainer,
      dropdownContainer,
    };
  },
};
</script>

<style lang="scss">
/* .dropdown-menu-fade-enter-active {
  transition: all 3000ms;
}
.dropdown-menu-fade-leave-active {
  transition: all 3000ms;
}
.dropdown-menu-fade-enter-from, .dropdown-menu-fade-leave-to
{
  opacity: 0;
} */
.aki-dropdown {
  display: inline-block;
  position: relative;
}
.aki-menu-container {
  z-index: 10;
  border: 1px solid #cccccc;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  padding: 4px 0;
  border-radius: 5px;
  box-shadow: 0 0 3px rgb(190, 190, 190);
  background: white;
  &:before {
    content: "";
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-bottom-color: #cccccc;
    position: absolute;
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%);
  }
  &:after {
    content: "";
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-bottom-color: #ffffff;
    position: absolute;
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%);
  }
}
</style>
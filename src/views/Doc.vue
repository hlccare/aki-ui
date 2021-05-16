<template>
  <div class="layout">
    <Topnav :toggleMenuButtonVisible="true" class="nav" />
    <div class="content">
      <transition name="slide-fade">
        <aside v-if="asideVisible">
          <h2>文档</h2>
          <ol>
            <li>
              <router-link to="/doc/intro">文档</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/get-started">开始使用</router-link>
            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/switch">Switch 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/dropdown">Dropdown 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/popover">Popover 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/collapse">Collapse 组件</router-link>
            </li>
          </ol>
        </aside>
      </transition>

      <main><router-view /></main>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref, h, onMounted, onUnmounted } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); //get
    const setAsideVisble = (e) => {
      const width = document.documentElement.clientWidth;
      if (asideVisible.value && width < 500) {
        console.log(asideVisible.value);
        const aside = document.getElementsByTagName("aside")[0];
        if (!aside.contains(e.target as HTMLElement)) {
          console.log("set false");
          asideVisible.value = false;
        }
      }
    };
    onMounted(() => {
      document.addEventListener("click", setAsideVisble);
    });
    onUnmounted(() => {
      document.removeEventListener("click", setAsideVisble);
    });
    return { asideVisible };
  },
};
</script>
<style lang="scss" scoped>
$aside-zindex: 10;
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-150px);
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  box-shadow: 0 0 15px rgb(223, 222, 222);
  background: lightblue;
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: $aside-zindex;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 16px;
        &:hover {
          border-bottom: none;
        }
      }
      .router-link-active {
        background: white;
      }
    }
  }
}
main {
  overflow: hidden;
}
</style>
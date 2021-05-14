<template>
  <div class="aki-popover" @click="onClick" ref="popover">
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
import { nextTick, ref } from "vue";

export default {
  setup() {
    const visible = ref(false);
    const popover = ref(null);
    const triggerWrapper = ref(null);
    const contentWrapper = ref(null);
    const locateContent = ()=>{
      let { top, left } = triggerWrapper.value.getBoundingClientRect();
        contentWrapper.value.style.top = top + window.scrollY + "px";
        contentWrapper.value.style.left = left + window.scrollX + "px";
    }
    const onClickDocument = (event)=>{
      if(triggerWrapper.value.contains(event.target)|| (contentWrapper.value && contentWrapper.value.contains(event.target))){
        return 
      }else{
        close()
      }
    }
    const open = ()=>{
      visible.value = true
      nextTick(() => {
        locateContent()
        document.addEventListener('click',onClickDocument)
        });
    }
    const close = ()=>{
      visible.value = false;
      document.removeEventListener('click',onClickDocument)
    };
    const onClick = (event) => {
      if(triggerWrapper.value.contains(event.target)){
        if(visible.value === false){
          open()
        }else{
          close()
        }
      }
    };
    return { visible, onClick, popover, triggerWrapper, contentWrapper };
  },
};
</script>

<style lang="scss">
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
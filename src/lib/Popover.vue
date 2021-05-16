<template>
  <div class="aki-popover" ref="popover">
    <Teleport to="body">
      <div class="aki-content-wrapper" :class="[`position-${position}`]" v-if="visible" ref="contentWrapper">
        <slot name="content" :close='close'/>
      </div>
    </Teleport>
    <span ref="triggerWrapper" style="display:inline-block">
      <slot />
    </span>
  </div>
</template>

<script lang='ts'>
import { nextTick, onMounted, onUnmounted, ref } from "vue";

export default {
  props:{
    position:{
      type:String,
      default: 'top'
    },
    trigger:{
      type: String,
      default: 'click'
    }
  },
  setup(props) {
    const {position, trigger} = props;
    const visible = ref(false);
    const popover = ref(null);
    const triggerWrapper = ref(null);
    const contentWrapper = ref(null);
    onMounted(()=>{
      if(trigger === 'click'){
        popover.value.addEventListener('click',onClick)
      }else{
        popover.value.addEventListener('mouseenter',open)
        popover.value.addEventListener('mouseleave',close)
      }
    })
    onUnmounted(()=>{
      if(trigger === 'click'){
        popover.value.removeEventListener('click',onClick)
      }else{
        popover.value.removeEventListener('mouseenter',open)
        popover.value.removeEventListener('mouseleave',close)
      }
    })
    const locateContent = ()=>{
      let {height,width, top, left } = triggerWrapper.value.getBoundingClientRect();
        let {height:height2} = contentWrapper.value.getBoundingClientRect()
      let x = {
        top:{
          top: top + window.scrollY,
          left: left + window.scrollX,
        },
        bottom:{
          top: top + window.scrollY + height,
          left: left + window.scrollX
        },
        left:{
          top: top + window.scrollY + (height-height2)/2,
          left: left + window.scrollX,
        },
        right:{
          top: top + window.scrollY + (height-height2)/2,
          left: left + window.scrollX + width
        }
      }
      contentWrapper.value.style.top = x[position].top + 'px';
      contentWrapper.value.style.left = x[position].left + "px";
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
    return { visible, onClick, popover, triggerWrapper, contentWrapper,close };
  },
};
</script>

<style lang="scss">
$border-color: #333;
$border-radius: 4px;
.aki-popover {
  display: inline-block;
  position: relative;
}
.aki-content-wrapper {
  z-index: 10;
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  /* box-shadow: 0 0 3px rgba(0, 0, 0, 0.5); */
  background: white;
  filter: drop-shadow(0 1px 1px rgba(0,0,0,0.5));
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  &::before,&::after{
    content:'';
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }
  &.position-top{
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,&::after{
      border-bottom:none;
      left: 10px;    
    }
    &::before{
      border-top-color: $border-color;
      top: 100%;
    }
    &::after{
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom{
    margin-top: 10px;
    &::before,&::after{
      left: 10px; 
      border-top: none;   
    }
    &::before{
      border-bottom-color: $border-color;
      bottom: 100%;
    }
    &::after{
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left{
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,&::after{
      transform: translateY(-50%);
      top: 50%; 
      border-right: none;   
    }
    &::before{
      border-left-color: $border-color;
      left: 100%;
    }
    &::after{
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }
  &.position-right{
    margin-left: 10px;
    &::before,&::after{
      transform: translateY(-50%);
      top: 50%;  
      border-left:none;  
    }
    &::before{
      border-right-color: $border-color;
      right: 100%;
    }
    &::after{
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
  
}
</style>
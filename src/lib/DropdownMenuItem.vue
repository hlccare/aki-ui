<template>
  <div @click="clickItem" 
  class="aki-dropdown-item" 
  :class="[{'aki-dropdown-item-disabled':disabled},{'aki-dropdown-item-divided':divided}]">
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  props:{
    disabled:{
      type:Boolean,
      default:false
    },
    divided:{
      type:Boolean,
      default: false
    }
  },
  setup(){
    const clickItem = ()=>{
      
    }
    return{
      clickItem
    }
  }
}
</script>
<style lang="scss">
.aki-dropdown-item{
  text-align: center;
  min-width: 80px;
  white-space: nowrap;
  display: inline;
  padding: 4px 8px;
  &:hover{
    background: #409eff;
    color: white;
    cursor: pointer;
  }
  &-disabled{
    color: grey;
    &:hover{
      background: none;
      color: grey;
      cursor:inherit;
    }
  }
  &-divided{
    border-top: 1px solid rgb(187, 187, 187)
  }
}
</style>
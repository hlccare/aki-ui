<template>
<div class="aki-collapse-item">
    <div class="aki-collapse-title" @click="toggle">
        {{title}}
    </div>
    <div class="aki-collapse-content" v-if="open">
    <slot/>
    </div>
</div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, inject, onMounted, ref, Ref } from 'vue'
import {Emitter} from 'mitt';

export default defineComponent({
    props:{
        title:{
            type: String,
            required: true
        }
    },
    setup(props,context) {
        const open = ref(false)
        const internalInstance = getCurrentInstance()
        const bus:Emitter = internalInstance.appContext.config.globalProperties.$bus
        const close = ()=>{
            open.value = false
        }
        onMounted(()=>{
            bus.on('update:selected',(vm)=>{
                if(vm!==context){
                    close()
                    }
                });
        })
        const toggle = ()=>{
            if(open.value){
                open.value = false
            }else{
                open.value = true;
                bus.emit('update:selected',context)
            }
        }
        return{open,toggle}
    },
})
</script>
<style lang="scss">
$grey:#ddd;
$border-radius: 4px;
.aki-collapse-item{
    > .aki-collapse-title{
        border: 1px solid grey;
        margin-top: -1px;
        margin-left: -1px;
        margin-right: -1px;
        min-height: 32px;
        display: flex;
        align-items: center;
        padding: 0 8px;
    }
    &:first-child{
        > .aki-collapse-title{
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
        }
    }
    .aki-collapse-content{
        padding: 8px;
    }
}
</style>
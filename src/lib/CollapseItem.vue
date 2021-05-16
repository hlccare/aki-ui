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
        },
        single:{
            type: Boolean,
            default: true
        },
        name:{
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
        const show = ()=>{
            open.value = true
        }
        onMounted(()=>{
            console.log('children mounted')
                bus.on('update:selected',(name)=>{
                    console.log(props.name+'on')
                    if(name!==props.name){
                    console.log(props.name+'close')

                        close()
                    }else{
                    console.log(props.name+'show')
                        
                        show()
                    }
                });
        })
        const toggle = ()=>{
            if(open.value){
                open.value = false
            }else{
                console.log(props.name+'emit')
                bus.emit('update:selected',props.name )
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
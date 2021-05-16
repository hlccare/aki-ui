<template>
<div class="aki-collapse">

<slot/>
</div>
</template>

<script lang='ts'>
import { Emitter } from 'mitt'
import { provide, defineComponent, getCurrentInstance, onMounted } from 'vue'
export default defineComponent({
    props:{
        selected:{
            type: String,
        }
    },
    setup(props, context){
        const internalInstance = getCurrentInstance()
        const bus:Emitter = internalInstance.appContext.config.globalProperties.$bus
        onMounted(()=>{
            console.log('collapse mounted')
            bus.emit('update:selected',props.selected)
            bus.on('update:selected',(name)=>{
                console.log('collapse on')
                console.log(name)
                context.emit('update:selected',name)
                console.log('collapse emit')

            })
        })
        

        
    }

})
</script>

<style lang='scss'>
$grey:#ddd;
$border-radius: 4px;
.aki-collapse{
    border: 1px solid $grey;
    border-radius: $border-radius;
}
</style>
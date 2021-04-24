<template>
    <div>
        <div v-for="(t,index) in titles" :key="index">{{t}}</div>
        <Component v-for='(c,index) in defaults' :key="index" :is='c'/>
    </div>
</template>

<script lang="ts">
import Tab from '../lib/Tab.vue'
export default {
    setup(props, context){
        const defaults = context.slots.default()
        defaults.forEach((tag)=>{
            if(tag.type !== Tab){
                throw new Error('Tabs 子标签必须是Tab')
            } 
        })
        const titles = defaults.forEach((tag)=> tag.props.title)
        return {defaults, titles}
    }
}
</script>
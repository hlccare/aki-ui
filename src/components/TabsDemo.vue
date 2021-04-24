<template>
    <div>
        TabsDemo
    </div>
    <h1>实例1</h1>
    <Tabs v-model:selected='x'>
        <Tab title="标题1">内容1</Tab>
        <Tab title="标题2">内容2</Tab>
    </Tabs>
</template>
<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import { ref } from 'vue'

export default {
    components:{
        Tabs, Tab
    },
    setup(){
        const x = ref('标题1')
        return {x}
    }
}
</script>
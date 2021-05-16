<template>
    <Collapse>
        <collapse-item title="标题1">内容1</collapse-item>
        <collapse-item title="标题2">内容2</collapse-item>
        <collapse-item title="标题3">内容3</collapse-item>
        <collapse-item title="标题4">内容4</collapse-item>

    </Collapse>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Collapse from '../lib/Collapse.vue'
import CollapseItem from '../lib/CollapseItem.vue'

export default defineComponent({
  components: { Collapse, CollapseItem },
    setup() {
        
    },
})
</script>
<style lang="scss">

</style>
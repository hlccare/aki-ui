<template>
<div class="aki-collapse">

<slot/>
</div>
</template>

<script lang='ts'>
import { provide, defineComponent } from 'vue'
export default defineComponent({
    setup(){
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
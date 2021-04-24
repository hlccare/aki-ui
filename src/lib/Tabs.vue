<template>
    <div class="aki-tabs">
        <div class="aki-tabs-nav">
            <div class="aki-tabs-nav-item" v-for="(t,index) in titles" @click="select(t)" :class="{selected:t===selected}" :key="index">{{t}}</div>
        </div>
        <div class="aki-tabs-content">
            <Component class="aki-tabs-content-item" :class="{selected: c.props.title===selected}" v-for='(c,index) in defaults' :key="index" :is='c'/>
        </div>
    </div>
</template>

<script lang="ts">
import Tab from '../lib/Tab.vue'
export default {
    props:{
        selected:{
            type:String,
        }
    },
    setup(props, context){
        const defaults = context.slots.default()
        defaults.forEach((tag)=>{
            if(tag.type !== Tab){
                throw new Error('Tabs 子标签必须是Tab')
            } 
        })
        const titles = defaults.map((tag)=> tag.props.title)
        const select = (title:string) =>{
            context.emit('update:selected',title)
        }
        return {defaults, titles,select}
    }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.aki-tabs{
    &-nav{
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
    
        &-item{
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;

            &:first-child{
                margin-left: 0;
            }

            &.selected{
                color: $blue;
            }
        }
    }
    &-content{
        padding: 8px 0;
        &-item{
            display: none;

            &.selected{
                display: block;
            }
        }
    }
}

</style>
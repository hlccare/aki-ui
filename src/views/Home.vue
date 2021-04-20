<template>
  <div>
    <Topnav/>
    <div class="topnav">
      <div class="logo"></div>
      <div class="menu"></div>
    </div>
    <div class="banner">
      <h1>Aki UI</h1>
      <h2>一个框架</h2>
      <p class="actions">
        <a>Github</a>
        <a>开始</a>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Topnav from '../components/Topnav.vue'
export default{
  components:{Topnav}
}
</script>
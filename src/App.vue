<template>
  <div>
    导航栏 | <router-link to="/">Temp</router-link> |
    <router-link to="/doc">Temp2</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<script setup>
import {Check} from "@element-plus/icons-vue";
</script>

<template>
  <div id="app">
    <router-view/>
  </div>

</template>

<style>

.rb {
  position: absolute;
  right: 40px;
  bottom: 40px;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.ava {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  outline: none;
  user-select: none;
}

body, html {
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: #eff2f7;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  height: 100%;
}
</style>

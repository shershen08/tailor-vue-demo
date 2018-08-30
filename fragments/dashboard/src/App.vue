<template>
  <div id="vue-dashboard-app">
    <Widgets></Widgets>
    <router-view></router-view>
  </div>
</template>

<script>
// import Router from 'vue-router'
import Widgets from './components/Widgets'

export default {
  name: 'App',
  components: {
    Widgets
  }
}
</script>

<style>
#vue-dashboard-app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #eee;
}
</style>

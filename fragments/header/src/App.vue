<template>
  <div id="vue-header-app">
    <img src="./assets/logo.png" class="app-logo">
    <Header/>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#vue-header-app {
  text-align: center;
  height: 100px;
  color: #2c3e50;
  background:  #fff;
}
.app-logo {
  width: 100px;
  float: left;
}
</style>

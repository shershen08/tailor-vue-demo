<template>
  <div class="links-list">
    <h2>Essential Links</h2>
    <ul>
      <li>
        <router-link :to="`{ name: 'start'}`">Start page</router-link>
        <router-link to="/">Start page1</router-link>
        <a href="/">Item</a>
      </li>
      <li>
        <router-link to="/item">Item1</router-link>
        <router-link :to="{ name: 'item'}">Item</router-link>
        <a href="item">Item</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Widgets',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

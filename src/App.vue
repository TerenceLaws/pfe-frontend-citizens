<template>
  <div id="app">
    <notifications group="foo" />
    <div id="nav">

    </div>
    <router-view/>
  </div>
</template>


<script>
import router from "./router/index.js";

export default {
  name: 'App',

  mounted() {
    console.log("mounted")
    if (!localStorage.id) {
      router.push('getstarted')
    }
  }

}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

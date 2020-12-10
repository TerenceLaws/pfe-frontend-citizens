<template>
  <div id="app">
    <notifications group="foo" />

    <router-view/>
  </div>
</template>


<script>

import router from "./router/index.js";

import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      
    }
  },


  mounted() {
    console.log("mounted")
   if (!localStorage.id) {
     axios.get("https://pfe-backend-dev.herokuapp.com/notification/publickey")
     //axios.get("http://localhost:5000/notification/publickey")
         .then( r =>{
           console.log(r)
           localStorage.applicationServerPublicKey= r.data.publicKey.valueOf()

         })
        .catch(r => console.error(r))

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
